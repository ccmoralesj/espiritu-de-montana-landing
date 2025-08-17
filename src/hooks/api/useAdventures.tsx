// src/hooks/useAdventures.ts
import { fetchAdventures } from '@/api/adventures';
import { api } from '@/api/client';
import { Adventure } from '@/interfaces/Adventure';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAdventures() {
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    (async () => {
      try {
        const adventures = await fetchAdventures()
        setAdventures(adventures)

      } catch (err: any) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled:", err.message);
        } else {
          setError(err.message);
        } if (err.name !== 'CanceledError') {
          setError(err.message);
        }
      } finally {
        setLoading(false)
      }
    })();
    return () => controller.abort();
  }, []);

  return { adventures, loading, error };
}
