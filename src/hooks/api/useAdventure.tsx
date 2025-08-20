// src/hooks/api/useAdventureBySlug.ts
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Adventure } from '@/interfaces/Adventure';
import { resolveAdventureIdBySlug } from '@/api/adventures';
import axios from 'axios';

export function useAdventureBySlug(slug?: string) {
  const location = useLocation();
  const [adventure, setAdventure] = useState<Adventure | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      try {
        const adventureFromState = (location.state)?.adventure as Adventure;
        const adventure = adventureFromState ?? (await resolveAdventureIdBySlug(slug, controller.signal));

        setAdventure(adventure);
      } catch (err: any) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled:", err.message);
        } else {
          setError(err.message);
        } if (err.name !== 'CanceledError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [slug]);

  return { adventure, loading, error };
}
