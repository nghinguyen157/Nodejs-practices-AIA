require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const logger = require('morgan');

const database = mongoose.connection;
mongoose.connect(mongoString, { useNewUrlParser: true }).then(() => console.log('DB Connected!'));

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors())
app.use(express.json());
app.use(logger('dev'));

/**
 * Project 1
 * user routes
 */
const userRouter = require("./server/routes/user-routes");
app.use("/api/user", userRouter);

/**
 * Project 2
 * Read file
 */
 const filesRouter = require("./server/routes/files-routes");
 app.use("/api/files", filesRouter);

let server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${server.address().port}`);
})

