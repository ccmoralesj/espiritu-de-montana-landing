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

/**
 * Convierte un título en slug URL-friendly.
 */
export function createSlug(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")       // Elimina diacríticos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')         // espacios a guiones
    .replace(/[^\w-]+/g, '')      // elimina caracteres no alfanuméricos excepto guion
    .replace(/--+/g, '-')         // múltiples guiones → uno
    .replace(/^-+|-+$/g, '');     // sin guiones al inicio o final
}

interface WhatsappContactInfo {
  adventureTitle: string;         // Nombre de la aventura
  type?: "tour" | "expedition";   // Tipo de experiencia (opcional)
  date?: string;                  // Fecha en legible (MMM, DD YYYY)
  price?: number;                 // Precio o plan de interés
  currency?: string;                 // Tipo de moneda
  peopleCount?: number;           // Cantidad de personas
  customerName?: string;          // Nombre de la persona que escribe (opcional)
}

/**
 * Genera un mensaje estructurado para WhatsApp y abre la ventana de chat.
 *
 * Ejemplo de mensaje generado:
 * 👋 Hola! Mi nombre es Carlos.
 * Estoy interesado en el tour "Costa Rica - Volcanes" 🌋
 * 📅 Fecha: Dic 19, 2025
 * 👥 Personas: 2
 * 💲 Paquete: $1200
 * 
 * ¿Podrían darme más información? Gracias 🙏
 *
 * @param info - Datos de la aventura y del interesado
 */
export function contactThruWhatsapp(info: WhatsappContactInfo) {
  const {
    adventureTitle,
    type,
    date,
    price,
    currency,
    peopleCount,
    customerName,
  } = info;

  const formattedDate = date ? formatDateLong(date) : null;

  // Construcción del mensaje dinámico
  let message = `👋 Hola!`;
  if (customerName) message += ` Mi nombre es ${customerName}.`;
  message += `\nEstoy interesado en ${type === "tour" ? "el tour" : "la experiencia"} "${adventureTitle}"`;

  if (formattedDate) message += `\n📅 Fecha: ${formattedDate}`;
  if (peopleCount) message += `\n👥 Personas: ${peopleCount}`;
  if (price) message += `\n💲 Paquete: ${formatPrice(price, currency)}`;

  message += `\n\n¿Podrían darme más información? Gracias 🙏`;
  // Abrimos el chat en WhatsApp
  window.open(
    // `https://wa.me/573054499987?text=${encodeURIComponent(message)}`,
    `https://api.whatsapp.com/send?phone=573054499987&text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
