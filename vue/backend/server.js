// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Укажите путь к вашей БД из DBeaver
const dbPath = 'C:\\Users\\Тарам\\Desktop\\Data_Baza\\test.db';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
    } else {
        console.log('✅ Подключение к SQLite успешно');
    }
});

// API эндпоинты для ваших таблиц
app.get('/api/staff', (req, res) => {
    db.all('SELECT * FROM staff', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/orders', (req, res) => {
    const query = `
        SELECT o.*, c.name as customer_name, p.name as product_name 
        FROM orders o
        JOIN customers c ON o.customers_id = c.id
        JOIN products p ON o.product_id = p.id
    `;
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/all_products', (req, res) => {
    const query = `
        SELECT * FROM all_products
    `;
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/customers', (req, res) => {
    const query = `
        SELECT * FROM customers
    `;
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/supplier', (req, res) => {
    const query = `
        SELECT * FROM supplier
    `;
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/shops', (req, res) => {
    db.all('SELECT * FROM shops', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});