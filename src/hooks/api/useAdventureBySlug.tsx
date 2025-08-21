import { useEffect, useState } from 'react';
import type { Adventure } from '@/interfaces/Adventure';
import { resolveAdventureIdBySlug } from '@/api/adventures';
import axios from 'axios';

export interface UseAdventureSlug {
  adventure: Adventure | null;
  loading: boolean;
  error: string | null;
}

/**
 * useAdventureBySlug:
 * - slug: slug a buscar
 * - fallback: si ya tenés la aventura (por ejemplo location.state.adventure), pásala aquí
 */
export function useAdventureBySlug(slug?: string, fallback?: Adventure | null): UseAdventureSlug {
  const [adventure, setAdventure] = useState<Adventure | null>(fallback ?? null);
  const [loading, setLoading] = useState<boolean>(() => (fallback ? false : !!slug));
  const [error, setError] = useState<string | null>(null);

  // Si el fallback cambia (llega más tarde), sincronizamos el estado y apagamos loading.
  useEffect(() => {
    if (fallback) {
      setAdventure(fallback);
      setLoading(false);
      setError(null);
    }
  }, [fallback?.id]); // solo reaccionamos si cambia el id del fallback (evita rerenders por referencia)

  useEffect(() => {
    // Si ya tenemos fallback válido, no hacemos fetch.
    if (fallback) return;

    if (!slug) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    let isMounted = true;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const a = await resolveAdventureIdBySlug(slug, controller.signal);
        if (!isMounted) return;
        setAdventure(a ?? null);
      } catch (err: any) {
        if (axios.isCancel(err)) {
          // cancelled
        } else {
          setError(err?.message ?? String(err));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [slug, fallback]);

  return { adventure, loading, error };
}
