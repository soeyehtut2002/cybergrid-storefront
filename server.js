const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// PWA App Icon Fallbacks
app.get(['/assets/icon-192.png', '/assets/icon-512.png', '/apple-touch-icon.png', '/apple-touch-icon-precomposed.png'], (req, res) => {
  const iconPath = path.join(__dirname, 'assets', 'icon.svg');
  if (require('fs').existsSync(iconPath)) {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.sendFile(iconPath);
  } else {
    res.sendStatus(404);
  }
});

// Neon PostgreSQL Connection Pool
const databaseUrl = process.env.DATABASE_URL;
let pool = null;

if (databaseUrl) {
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false } // Required for Neon serverless PostgreSQL
  });
  console.log('⚡ Connected to Neon PostgreSQL Database pool.');
} else {
  console.log('⚠️ DATABASE_URL not set. Running in static mode with in-memory storage fallback.');
}

// Database Initialization
async function initDatabase() {
  if (!pool) return;
  try {
    const client = await pool.connect();
    
    // Create Orders Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        order_ref VARCHAR(50) UNIQUE NOT NULL,
        game_id VARCHAR(50) NOT NULL,
        game_title VARCHAR(100) NOT NULL,
        package_name VARCHAR(100) NOT NULL,
        user_id_input VARCHAR(100) NOT NULL,
        zone_id_input VARCHAR(50),
        payment_method VARCHAR(50) NOT NULL,
        total_amount VARCHAR(50) NOT NULL,
        status VARCHAR(50) DEFAULT 'COMPLETED',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create Games Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS games (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        publisher VARCHAR(100),
        category VARCHAR(50),
        price_starting VARCHAR(50)
      );
    `);

    console.log('✅ Neon PostgreSQL Database schema verified successfully.');
    client.release();
  } catch (err) {
    console.error('❌ Neon DB Initialization Error:', err.message);
  }
}

initDatabase();

// REST API ROUTES

// 1. Health Check
app.get('/api/health', async (req, res) => {
  let dbStatus = 'disconnected';
  if (pool) {
    try {
      await pool.query('SELECT 1');
      dbStatus = 'connected (Neon PostgreSQL)';
    } catch (e) {
      dbStatus = 'error: ' + e.message;
    }
  }

  res.json({
    status: 'ok',
    service: 'Kasaryar Storefront API',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// 2. Create New Top-Up Order
app.post('/api/orders', async (req, res) => {
  const { orderRef, gameId, gameTitle, packageName, userIdInput, zoneIdInput, paymentMethod, totalAmount } = req.body;

  if (!orderRef || !gameTitle || !packageName || !userIdInput) {
    return res.status(400).json({ error: 'Missing required order fields.' });
  }

  if (pool) {
    try {
      const queryText = `
        INSERT INTO orders(order_ref, game_id, game_title, package_name, user_id_input, zone_id_input, payment_method, total_amount, status)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, 'COMPLETED')
        RETURNING *;
      `;
      const values = [orderRef, gameId || 'game', gameTitle, packageName, userIdInput, zoneIdInput || '', paymentMethod || 'KBZPay', totalAmount];
      const result = await pool.query(queryText, values);

      console.log(`📦 Order ${orderRef} saved to Neon DB.`);
      return res.status(201).json({ success: true, order: result.rows[0], source: 'neon_db' });
    } catch (err) {
      console.error('❌ Failed to save order to Neon DB:', err.message);
      return res.status(500).json({ error: 'Failed to record order to database.' });
    }
  }

  // Fallback for local development without DB
  return res.status(201).json({
    success: true,
    order: { orderRef, gameTitle, packageName, userIdInput, zoneIdInput, paymentMethod, totalAmount, status: 'COMPLETED' },
    source: 'local_memory'
  });
});

// 3. Search / Track Order Status
app.get('/api/orders/:orderRef', async (req, res) => {
  const { orderRef } = req.params;
  if (!pool) {
    return res.status(404).json({ error: 'Neon DB not configured' });
  }

  try {
    const result = await pool.query('SELECT * FROM orders WHERE UPPER(order_ref) = UPPER($1)', [orderRef]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order reference not found' });
    }
    res.json({ success: true, order: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Kasaryar Storefront Server listening on port ${PORT}`);
});
