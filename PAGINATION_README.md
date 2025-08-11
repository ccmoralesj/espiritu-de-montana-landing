# Sistema de Paginación para la Página de Rutas

## Resumen
Este documento describe el sistema de paginación implementado para la página de Rutas en el landing page de Espíritu de Montaña.

## Características

### Paginación Responsiva
- **Pantallas grandes (≥1024px)**: 8 rutas por página
- **Pantallas medianas (≥768px)**: 6 rutas por página  
- **Pantallas pequeñas (<768px)**: 5 rutas por página

### Características del Componente de Paginación
- Botones de navegación Anterior/Siguiente
- Visualización de números de página con puntos suspensivos para grandes cantidades de páginas
- Resaltado de página actual
- Información de página (mostrando X-Y de Z rutas)
- Campo de entrada "Ir a página" para navegación directa (cuando hay más de 5 páginas)
- Diseño responsivo para móvil y escritorio
- Características de accesibilidad (etiquetas ARIA, navegación por teclado)

### Experiencia del Usuario
- Reinicio automático de página cuando cambian los filtros
- Desplazamiento suave hacia la barra de búsqueda al cambiar de página (solo en pantallas medianas y pequeñas)
- Sin desplazamiento automático en pantallas grandes
- Scroll preciso que se detiene en la barra de búsqueda con offset de 100px desde arriba
- Retroalimentación visual con efectos hover y transiciones
- Estados deshabilitados para botones de navegación cuando sea apropiado

## Detalles de Implementación

### Archivos Modificados
1. **`src/components/RoutesPage/Pagination.tsx`** - Nuevo componente de paginación
2. **`src/components/RoutesPage/RouteCards.tsx`** - Actualizado para manejar paginación
3. **`src/pages/Routes.tsx`** - Página principal de rutas con lógica de paginación

### Componentes Principales

#### Componente de Paginación
- Maneja la lógica de navegación de páginas
- Diseño responsivo con enfoque mobile-first
- Incluye visualización de información de página y funcionalidad de ir a página

#### Componente RouteCards
- Actualizado para dividir rutas basándose en la página actual y rutas por página
- Mantiene el diseño de cuadrícula responsiva
- Manejo adecuado de claves para el renderizado de React

#### Página de Rutas
- Gestión de estado para página actual y rutas por página
- Detección de puntos de quiebre responsivos con useEffect
- Integración de filtros con reinicio de paginación

### Gestión de Estado
- `currentPage`: Página activa actual (comienza en 1)
- `routesPerPage`: Valor dinámico basado en el tamaño de pantalla
- Reinicio automático a la página 1 cuando cambian los filtros

### Puntos de Quiebre Responsivos
- **sm**: ≥640px (cuadrícula: 2 columnas)
- **md**: ≥768px (cuadrícula: 2 columnas, 6 rutas por página)
- **lg**: ≥1024px (cuadrícula: 3 columnas, 8 rutas por página)
- **xl**: ≥1280px (cuadrícula: 4 columnas)

## Uso

### Paginación Básica
```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

### Con Información de Página
```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  showPageInfo={true}
  totalItems={filteredRoutes.length}
  itemsPerPage={routesPerPage}
/>
```

## Estilos
El componente de paginación mantiene el sistema de diseño existente:
- Utiliza el esquema de colores existente (primary, secondary, muted)
- Consistente con los componentes de botón e input
- Espaciado y dimensiones responsivas
- Transiciones suaves y efectos hover

## Accesibilidad
- Etiquetas ARIA para botones de navegación
- Soporte para navegación por teclado
- Información de página amigable para lectores de pantalla
- Gestión adecuada del foco
