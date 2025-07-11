import fetch from "node-fetch";

const API_URL = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = process.env.QUOTES_API_KEY;

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

export async function fetchRandomQuote(): Promise<Quote | null> {
  const res = await fetch(API_URL, {
    headers: {
      "X-Api-Key": API_KEY || "",
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch quote:", res.statusText);
    return null;
  }

  const data = (await res.json()) as Quote[];
  if (data.length === 0) return null;

  return data[0];
}
