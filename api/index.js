import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from '../api/routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.mongoDB).then(() => {
    console.log('Mongo DB connected.............');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "hai welcome sai "
    });
});

app.use("/api/user", userRoute);

app.listen(2512, () => {
    console.log('server running on port 2512!');
});
