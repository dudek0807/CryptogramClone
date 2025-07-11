import { Router, Request, Response } from 'express';
import prisma from '../prisma/client';
import { getQuote } from '../controllers/gameController';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from cryptogram game API!' });
});

router.get('/', async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.get('/quote', getQuote);

export default router;