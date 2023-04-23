const { MongoClient } = require('mongodb');

require('dotenv').config();

const connectDb = async () => {
    // Connect to the database
    try {
        const client = new MongoClient(process.env.DB_CONNECTION);

        await client.connect();
        console.log('Connected to the database');

        const dbs = await client.db().admin().listDatabases();
        console.log(dbs);

        return client;
    }
    catch (err) {
        console.log('Error connecting to the database');
        console.log(err);
    };
};

module.exports = connectDb;