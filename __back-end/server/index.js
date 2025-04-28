const express = require("express");
const app = express();
const db = require('./models');

// Routers
const vocabularyRouter = require("./routes/vocabulary");
app.use("/vocabulary", vocabularyRouter);

// Kiểm tra kết nối tới cơ sở dữ liệu
db.sequelize.authenticate()
    .then(() => {
        console.log('[LOG] Connection established successfully.');
    })
    .catch((error) => {
        console.error('[LOG] Unable to connect to the database:', error);
    });

db.sequelize.sync()
    .then(() => {
        console.log('[LOG] Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('[LOG] Error syncing database:', error);
    });


app.listen(3001, () => {
    console.log('[LOG] Server is running on port 3001');
});


