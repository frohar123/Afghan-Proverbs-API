import * as proverbService from '../services/proverbService.js';

export const getProverbs = async (req, res) => {
    const { category, keyword } = req.query;
    const proverbs = await proverbService.getAllProverbs(category, keyword);
    res.json(proverbs);
};

export const getProverb = async (req, res) => {
    const proverb = await proverbService.getProverbById(req.params.id);
    if (!proverb) return res.status(404).json({ error: 'Proverb not found' });
    res.json(proverb);
};

export const getRandomProverb = async (req, res) => {
    const proverb = await proverbService.getRandomProverb();
    if (!proverb) return res.status(404).json({ error: 'No proverbs available' });
    res.json(proverb);
};

export const createProverb = async (req, res) => {
    const { textDari, textPashto, translationEn, meaning, categories } = req.body;
    if (!textDari || !textPashto || !translationEn || !meaning || !categories) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newProverb = await proverbService.createProverb({
        textDari,
        textPashto,
        translationEn,
        meaning,
        categories: Array.isArray(categories) ? categories : [categories],
    });
    res.status(201).json(newProverb);
};

export const updateProverb = async (req, res) => {
    const updatedProverb = await proverbService.updateProverb(req.params.id, req.body);
    if (!updatedProverb) return res.status(404).json({ error: 'Proverb not found' });
    res.json(updatedProverb);
};

export const deleteProverb = async (req, res) => {
    const deleted = await proverbService.deleteProverb(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Proverb not found' });
    res.status(204).send();
};