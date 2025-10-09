const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

console.log('🔧 Создаем простую таблицу...');

db.serialize(() => {
    // Простая таблица без внешних ключей
    db.run(`CREATE TABLE IF NOT EXISTS staff (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        experience INTEGER
    )`);
    
    // Добавляем тестовые данные
    db.run(`INSERT INTO staff (name, experience) VALUES 
        ('Иванов Иван', 5),
        ('Петров Петр', 2)`);
    
    // Проверяем
    db.all('SELECT * FROM staff', (err, rows) => {
        if (err) {
            console.error('❌ Ошибка:', err);
        } else {
            console.log('✅ Данные из таблицы staff:');
            console.log(rows);
        }
    });
});

db.close(() => {
    console.log('🎯 Проверка завершена');
});