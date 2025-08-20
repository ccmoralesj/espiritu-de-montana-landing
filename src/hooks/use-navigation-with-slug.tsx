// src/hooks/useNavigateWithSlug.ts
import { useNavigate } from 'react-router-dom';
import type { Adventure } from '@/interfaces/Adventure';
import { createSlug } from '@/consts/utils';

export function useNavigateWithSlug() {
  const navigate = useNavigate();

  /**
   * Navega hacia la ruta de la aventura usando el slug.
   * @param adventure Objeto Adventure completo
   * @param paramName Nombre del param en URL, opcional
   */
  const goToAdventure = (adventure: Adventure, paramName = '/rutas') => {
    const slug = createSlug(adventure.title);
    navigate(`${paramName}/${slug}`, { state: { adventure } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { goToAdventure };
}
