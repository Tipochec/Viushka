const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

console.log('🏗️ Создаем полную структуру базы...');

// Отключаем внешние ключи для упрощения
db.run('PRAGMA foreign_keys = OFF');

db.serialize(() => {
    // 1. Создаем shops первыми
    db.run(`CREATE TABLE shops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        adress TEXT,
        working_hours TEXT,
        area INTEGER,
        name TEXT
    )`, (err) => {
        if (err) console.error('❌ Ошибка shops:', err);
        else console.log('✅ Таблица shops создана');
    });

    // 2. Создаем staff
    db.run(`CREATE TABLE staff (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        place_of_work TEXT,
        experience INTEGER,
        birthday TEXT,
        passport_data INTEGER,
        work_schedule TEXT,
        shop_id INTEGER
    )`, (err) => {
        if (err) console.error('❌ Ошибка staff:', err);
        else console.log('✅ Таблица staff создана');
    });

    // 3. Создаем supplier
    db.run(`CREATE TABLE supplier (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT,
        deadlines TEXT,
        prise INTEGER,
        address_country TEXT,
        shop_id INTEGER
    )`, (err) => {
        if (err) console.error('❌ Ошибка supplier:', err);
        else console.log('✅ Таблица supplier создана');
    });

    // 4. Создаем products
    db.run(`CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        product_type TEXT,
        shop_id INTEGER,
        supplier_id INTEGER
    )`, (err) => {
        if (err) console.error('❌ Ошибка products:', err);
        else console.log('✅ Таблица products создана');
    });

    // 5. Создаем customers
    db.run(`CREATE TABLE customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number_phone INTEGER,
        mail TEXT,
        name TEXT,
        ava TEXT
    )`, (err) => {
        if (err) console.error('❌ Ошибка customers:', err);
        else console.log('✅ Таблица customers создана');
    });

    // 6. Создаем orders
    db.run(`CREATE TABLE orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dilevery TEXT,
        order_date TEXT,
        product_id INTEGER,
        customers_id INTEGER,
        shop_id INTEGER,
        all_products_id INTEGER
    )`, (err) => {
        if (err) console.error('❌ Ошибка orders:', err);
        else console.log('✅ Таблица orders создана');
    });

    // 7. Создаем all_products
    db.run(`CREATE TABLE all_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        order_id INTEGER
    )`, (err) => {
        if (err) console.error('❌ Ошибка all_products:', err);
        else console.log('✅ Таблица all_products создана');
    });

    // Ждем завершения создания таблиц
    setTimeout(() => {
        console.log('\n📥 Заполняем данными...');
        
        // Заполняем данными
        const queries = [
            `INSERT INTO shops (adress, working_hours, area, name) VALUES 
            ('Партизанск, ул Аллея 50 лет октября, 2', '8:00 - 19:00', 130, 'Эльторадо'),
            ('Находка, ул Петрушкина, 15', '8:00 - 19:00', 140, 'Батискаф')`,

            `INSERT INTO staff (name, place_of_work, experience, birthday, passport_data, work_schedule, shop_id) VALUES
            ('Иванов Иван Иванович', 'Партизанск, ул Аллея 50 лет октября, 2', 5, '2005-12-12', 404509094, 'Понедельник-среда', 1),
            ('Кириллов Кирилл Кириллович', 'Находка, ул Петрушкина, 15', 2, '1999-11-05', 743228748, 'Вторник-суббота', 2)`,

            `INSERT INTO products (name, product_type, shop_id, supplier_id) VALUES
            ('16" Ноутбук GIGABYTE AERO X16', 'Ноутбук и ПК', 1, 1),
            ('Мышь беспроводная Logitech', 'Мыши и клавиатура', 2, 2)`
        ];

        queries.forEach((query, index) => {
            db.run(query, (err) => {
                if (err) {
                    console.error(`❌ Ошибка вставки данных ${index + 1}:`, err);
                } else {
                    console.log(`✅ Данные ${index + 1} добавлены`);
                }
            });
        });

        // Проверяем что все создалось
        setTimeout(() => {
            console.log('\n🔍 Проверяем таблицы...');
            db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
                if (err) {
                    console.error('❌ Ошибка проверки таблиц:', err);
                } else {
                    console.log('📊 Найденные таблицы:');
                    tables.forEach(table => console.log('   -', table.name));
                    
                    // Проверяем staff
                    db.all('SELECT * FROM staff', (err, rows) => {
                        if (err) {
                            console.error('❌ Ошибка чтения staff:', err);
                        } else {
                            console.log('👥 Данные staff:', rows);
                        }
                        db.close(() => console.log('🎉 Готово!'));
                    });
                }
            });
        }, 1000);
    }, 500);
});