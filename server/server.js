import express from 'express';
import dotenv from 'dotenv';
import { doSomeHeavyTask } from './utils.js';

const app = express();
app.use(express.json());
dotenv.config();


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

app.get('/slow',async (req, res) => {
    try{
        const timeTaken = await doSomeHeavyTask();
        return res.json({
            status: 'success',
            message: `Task completed in ${timeTaken} ms`
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});