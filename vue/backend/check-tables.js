const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
    if (err) {
        console.error('❌ Ошибка:', err);
        return;
    }
    
    console.log('📊 Таблицы в базе данных:');
    tables.forEach(table => {
        console.log('   -', table.name);
    });
    
    if (tables.length === 0) {
        console.log('💡 Таблиц нет! Нужно создать структуру базы.');
    }
});

db.close();