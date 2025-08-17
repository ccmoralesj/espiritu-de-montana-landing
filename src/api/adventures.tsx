import { Adventure } from "@/interfaces/Adventure";
import { api } from "./client";

export async function fetchAdventures(signal?: AbortSignal): Promise<Adventure[]> {
  const { data } = await api.get<Adventure[]>(`/adventures`, { signal });
  return data;
}

export async function fetchAdventureById(id: string, signal?: AbortSignal): Promise<Adventure> {
  const { data } = await api.get<Adventure>(`/adventures/${id}`, { signal });
  return data;
}

// Devuelve { id: string } o el Adventure completo si prefieres
export async function resolveAdventureIdBySlug(slug: string, signal?: AbortSignal): Promise<Adventure> {
  const { data } = await api.get<Adventure>(`/adventures/resolve`, {
    params: { slug },
    signal,
  });
  return data;
}