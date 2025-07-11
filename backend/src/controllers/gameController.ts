import { Request, Response } from 'express';
import { fetchRandomQuote } from '../services/quoteService'

export const getQuote = async (req: Request, res: Response) => {
  try {
    const quote = await fetchRandomQuote();
    if (!quote) return res.status(404).json({ message: 'No quote found' });

    res.json(quote);
  } catch {
    res.status(500).json({ message: 'Error fetching quote' });
  }
};
