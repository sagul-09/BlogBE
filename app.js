import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './route/user-routes.js';
import blogRouter from './route/blog-routes.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
app.use(express.json());



app.use('/api/v1/user', router);
app.use('/api/v1/blog', blogRouter);

const db = mongoose.connect(process.env.DB_URL).then(() =>{
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});