const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.LOCALDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected!");
    } catch (err) {
        console.error(`We got an error: ${err}`);
    }
}

connectToDatabase();