module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'nvwebblog-db',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebblog-db.sqlite' //ชื่อไฟล์ฐานข้อมูลที่จะถูกสร้างขึ้น
        }
    }
}

