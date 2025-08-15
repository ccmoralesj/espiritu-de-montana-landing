export function formatPrice(
  amount: number | string,
  currency: string,
): string {
  // 1) Normaliza a number (quita símbolos, espacios, etc.)
  const n =
    typeof amount === 'string'
      ? Number(amount.replace(/[^\d.-]/g, ''))
      : amount;

  if (!Number.isFinite(n)) return '$— COP';

  const abs = Math.trunc(Math.abs(n)); // sin decimales
  const sign = n < 0 ? '-' : '';

  // 2) Preferimos Intl si está disponible
  try {
    if (currency === 'USD') {
      // de-CH usa apóstrofe como separador de miles
      const intl = new Intl.NumberFormat('de-US', {
        useGrouping: true,
        maximumFractionDigits: 2,
      }).format(abs);
      return `${sign}$${intl} ${currency}`;
    } else {
      // Alternativa: estilo Colombia con puntos (sin decimales)
      const intl = new Intl.NumberFormat('es-CO', {
        useGrouping: true,
        maximumFractionDigits: 0,
      }).format(abs);
      return `${sign}$${intl} ${currency}`;
    }
  } catch {
    // 3) Fallback manual: inserta apóstrofes a mano
    const withGroups = String(abs).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${sign}$${withGroups} ${currency}`;
  }
}

// src/utils/formatDate.ts

/**
 * Convierte "YYYY-MM-DD" en "Mon DD, YYYY" según idioma.
 * @param dateStr - Fecha en formato ISO (YYYY-MM-DD)
 * @param locale - Idioma en formato BCP 47 ("es" o "en-US")
 * @returns Fecha formateada, ej: "Dic 19, 2025" o "Dec 19, 2025"
 */
export function formatDateLong(dateStr: string, locale: string = 'es'): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    // Descomponemos en partes para forzar el orden que queremos
    const parts = formatter.formatToParts(date);
    const month = capitalize(parts.find(p => p.type === 'month')?.value || '');
    const day = parts.find(p => p.type === 'day')?.value || '';
    const year = parts.find(p => p.type === 'year')?.value || '';

    return `${month} ${day}, ${year}`;
  } catch {
    return dateStr;
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


