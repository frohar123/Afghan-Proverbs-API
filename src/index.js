import express from 'express';
import proverbRoutes from './routes/proverbRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/proverbs', proverbRoutes);

app.get('/', (req, res) => {
    res.send('Afghan Proverbs API');
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});