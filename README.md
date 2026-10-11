# CS2031 DBP — Lab Semana 10 (React Introduction I) · 2026-2

Aplicación visual desarrollada con **React + TypeScript + Vite** para el laboratorio de la semana 10 del curso **Desarrollo Basado en Plataformas (CS2031 - UTEC)**. No tiene backend: el formulario de registro se muestra en pantalla y el listado de cursos usa datos estáticos.

## Objetivos de la sesión

- Crear un proyecto React + TypeScript con Vite y entender su estructura.
- Escribir componentes funcionales en TSX (`export default`, nombres en mayúscula, `return` con un elemento o un Fragment `<>…</>`).
- Usar `className` en lugar de `class` y `htmlFor` en lugar de `for`.
- Pasar datos entre componentes con **props** tipadas con una interfaz.
- Renderizar contenido de forma **condicional** (`if`, `&&`, `? :`).
- Renderizar **listas** con `map()` y el atributo `key` (usando el `id`, no la posición).
- Manejar **eventos** de React (`onChange`, `onSubmit`).
- Navegar entre páginas con **React Router** (`BrowserRouter`, `Routes`, `Route`, `Link`).

## Funcionalidades

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Register` | Formulario de registro |
| `/register` | `Register` | Formulario de registro |
| `/courses` | `CourseList` | Lista de cursos con `map()`, `key` y props |
| `*` | — | `Not Found` para cualquier otra ruta |

El `Navbar` aparece en todas las páginas, dentro de `BrowserRouter`, y enlaza a `/register` y `/courses`.

## Estructura del proyecto

```
src/
├── App.tsx                     # BrowserRouter, Navbar y rutas
├── main.tsx                    # Punto de entrada (monta App en index.html)
├── index.css                   # Importa Tailwind CSS
├── vite-env.d.ts
└── components/
    ├── Navbar.tsx              # Barra de navegación con Link
    ├── Register.tsx            # Formulario de registro (inputs controlados)
    ├── CourseList.tsx          # Lista de cursos (map + key)
    └── Course.tsx              # Item de curso (props: name, isCompleted)
```

## Primeros pasos

### Prerequisitos

- Node.js `20.19+` o `22.12+` (requerido por Vite 8)

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación corre en `http://localhost:5173`.

### Otros scripts

```bash
npm run build     # Compilación TypeScript + build de producción con Vite
npm run preview   # Sirve el build de producción localmente
npm run lint      # ESLint
```

## Actividad 1: componente de registro

1. Crear `src/components/Register.tsx`.
2. Copiar el HTML del formulario de la semana anterior dentro del `return`.
3. Corregir los atributos: `class` → `className`, `for` → `htmlFor`.
4. Agregar el componente en `App.tsx` como una ruta.

## Stack y versiones

| Paquete | Versión |
|---------|---------|
| `react` / `react-dom` | 19.x |
| `react-router-dom` | 7.x |
| `vite` | 8.x |
| `@vitejs/plugin-react` | 6.x |
| `tailwindcss` / `@tailwindcss/vite` | 4.x |
| `typescript` | 6.0.x |
| `eslint` / `typescript-eslint` | 10.x / 8.x |

> `typescript` se mantiene en la línea 6.0.x porque `typescript-eslint` todavía no declara compatibilidad con TypeScript 7.

## Notas

- Tailwind CSS v4 se configura con el plugin `@tailwindcss/vite` en `vite.config.ts`; no requiere `tailwind.config.js` ni PostCSS.
- Las rutas no tienen alias de importación: se usan rutas relativas, como en el material de clase.
