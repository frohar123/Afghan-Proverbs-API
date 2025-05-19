import express from 'express';
import proverbRoutes from './routes/proverbRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const allowedOrigins = ['http://localhost:4200']
app.use(cors({
    origin: allowedOrigins
}));
app.use('/api/proverbs', proverbRoutes);

app.get('/', (req, res) => {
    res.send('Afghan Proverbs API');
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});