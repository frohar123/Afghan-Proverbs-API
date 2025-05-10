import { readDB, writeDB } from '../utils/db.js';

export const getAllProverbs = async (category, keyword) => {
    const db = await readDB();
    let proverbs = db.proverbs;

    // Filter by category (supports multiple categories per proverb)
    if (category) {
        proverbs = proverbs.filter((proverb) =>
            proverb.categories.includes(category)
        );
    }

    // Search by keyword in any language or meaning
    if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        proverbs = proverbs.filter(
            (proverb) =>
                proverb.textDari.toLowerCase().includes(lowerKeyword) ||
                proverb.textPashto.toLowerCase().includes(lowerKeyword) ||
                proverb.translationEn.toLowerCase().includes(lowerKeyword) ||
                proverb.meaning.toLowerCase().includes(lowerKeyword)
        );
    }

    return proverbs;
};

export const getProverbById = async (id) => {
    const db = await readDB();
    return db.proverbs.find((proverb) => proverb.id === parseInt(id));
};

export const getRandomProverb = async () => {
    const db = await readDB();
    const proverbs = db.proverbs;
    if (proverbs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    return proverbs[randomIndex];
};

export const createProverb = async (proverbData) => {
    const db = await readDB();
    const newId = db.proverbs.length > 0 ? Math.max(...db.proverbs.map((p) => p.id)) + 1 : 1;
    const newProverb = { id: newId, ...proverbData };
    db.proverbs.push(newProverb);
    await writeDB(db);
    return newProverb;
};

export const updateProverb = async (id, updatedData) => {
    const db = await readDB();
    const index = db.proverbs.findIndex((proverb) => proverb.id === parseInt(id));
    if (index === -1) return null;
    db.proverbs[index] = { ...db.proverbs[index], ...updatedData };
    await writeDB(db);
    return db.proverbs[index];
};

export const deleteProverb = async (id) => {
    const db = await readDB();
    const index = db.proverbs.findIndex((proverb) => proverb.id === parseInt(id));
    if (index === -1) return false;
    const deletedProverb = db.proverbs.splice(index, 1)[0];
    await writeDB(db);
    return deletedProverb;
};