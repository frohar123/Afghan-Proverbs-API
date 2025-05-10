<<<<<<< HEAD
import express from 'express';
import * as proverbController from '../controllers/proverbControllers.js';

const router = express.Router();

router.get('/', proverbController.getProverbs);
router.get('/random', proverbController.getRandomProverb);
router.get('/:id', proverbController.getProverb);
router.post('/', proverbController.createProverb);
router.put('/:id', proverbController.updateProverb);
router.delete('/:id', proverbController.deleteProverb);

=======
import express from 'express';
import * as proverbController from '../controllers/proverbControllers.js';

const router = express.Router();

router.get('/', proverbController.getProverbs);
router.get('/random', proverbController.getRandomProverb);
router.get('/:id', proverbController.getProverb);
router.post('/', proverbController.createProverb);
router.put('/:id', proverbController.updateProverb);
router.delete('/:id', proverbController.deleteProverb);

>>>>>>> 0b69576349ea3b138cb251b3955d2b5561d694c0
export default router;