import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('data', 'proverbs.json');

export const readDB = async () => {
    try {
        const data = await fs.readFile(dbPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading DB:', error);
        return { proverbs: [] };
    }
};

export const writeDB = async (data) => {
    try {
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing to DB:', error);
    }
    import fs from 'fs/promises';
    import path from 'path';

    const dbPath = path.resolve('data', 'proverbs.json');

    export const readDB = async () => {
        try {
            const data = await fs.readFile(dbPath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading DB:', error);
            return { proverbs: [] };
        }
    };

    export const writeDB = async (data) => {
        try {
            await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error writing to DB:', error);
        }
    };