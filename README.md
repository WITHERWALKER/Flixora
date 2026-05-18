# Flixora

Aplicación full stack orientada a la exploración y gestión de un catálogo audiovisual, inspirada en la experiencia de plataformas de streaming modernas.

Flixora está planteado como un proyecto de práctica enfocado en arquitectura escalable, reutilización de componentes, diseño de interfaces modernas y construcción de una base sólida tanto para frontend como para backend. Actualmente ya cuenta con una base funcional en la capa cliente, con una página principal con contenido destacado, un catálogo de películas con filtros y formularios, y secciones preparadas para series y contenido infantil.

## Vista general

- Descubrimiento de contenido desde una página principal con secciones destacadas.
- Catálogo de películas con filtros por género, estado y orden.
- Formularios modales para registrar nuevo contenido.
- Navegación por áreas separadas: `Home`, `Movies`, `Series` y `Kids`.
- Componentes, layouts y utilidades organizados para favorecer reutilización.
- Base pensada para evolucionar hacia una arquitectura full stack con API, persistencia de datos y autenticación.

## Características principales

| Área          | Descripción                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| Home          | Muestra una colecciones de `contenido general` para facilitar el descubrimiento.         |
| Movies        | Centraliza el catálogo principal con filtros, resultados y acciones de gestión.          |
| Series        | Sección preparada para extender el mismo patrón reutilizable del catálogo.               |
| Kids          | Espacio orientado a contenido familiar con una experiencia más simple y guiada.          |
| UI compartida | Incluye componentes reutilizables para botones, inputs, modales, estados vacíos y carga. |

## Stack tecnológico

| Tecnología            | Uso en el proyecto                                     |
| --------------------- | ------------------------------------------------------ |
| React 19              | Construcción de la interfaz de usuario                 |
| TypeScript            | Tipado estático y mejor mantenibilidad                 |
| Vite                  | Entorno de desarrollo y build                          |
| React Router          | Navegación entre páginas                               |
| Tailwind CSS          | Estilos utilitarios y diseño responsive                |
| React Hook Form       | Manejo de formularios                                  |
| Zod                   | Validación de datos                                    |
| Lucide React          | Iconografía                                            |
| Bun                   | Gestión alternativa de dependencias y scripts          |
| ASP.NET Core          | Backend planeado para exponer la API del proyecto      |
| Entity Framework Core | Acceso y persistencia de datos en el backend           |
| SQL Server            | Base de datos prevista para la aplicación              |
| JWT Authentication    | Estrategia planeada para autenticación y autorización  |
| AutoMapper            | Mapeo entre entidades y DTOs en el backend             |
| Docker                | Contenerización prevista para el entorno de despliegue |

## Estructura del proyecto

La base actual del proyecto está organizada por responsabilidades para mantener una arquitectura clara y fácil de escalar desde el frontend, dejando espacio para integrar la capa backend conforme avance el desarrollo:

```txt
src/
├── app/        # layouts y configuración principal
├── assets/     # recursos estáticos
├── features/   # módulos por dominio, como home o movies
├── shared/     # componentes, tipos y utilidades reutilizables
├── styles/     # estilos globales
└── main.tsx    # punto de entrada
```

## Primeros pasos

### Instalación

```bash
bun/npm install
```

### Desarrollo

```bash
bun/npm run dev
```

### Scripts disponibles

```bash
bun/npm run build
bun/npm run preview
bun/npm run lint
```

## Objetivo del proyecto

Flixora sirve como práctica para reforzar conceptos de desarrollo full stack moderno, entre ellos:

- Arquitectura basada en features
- Composición de interfaces reutilizables
- Formularios con validación tipada
- Manejo de rutas y layouts
- Filtros dinámicos para catálogos
- Organización de código orientada a escalabilidad
- Diseño y consumo de APIs
- Persistencia de datos
- Autenticación y autorización
- Integración entre cliente y servidor

## Estado actual

#### EN CONSTRUCCIÓN 🚧

Actualmente el proyecto continúa en desarrollo, incorporando progresivamente nuevas funcionalidades que vaya conociendo y aprendiendo. La parte backend está contemplada como la siguiente fase para incorporar persistencia, autenticación y conexión real con la aplicación cliente.

## Autor

#### @WITHER WALKER

Desarrollado como proyecto de práctica personal para seguir consolidando conocimientos de React, TypeScript y desarrollo full stack con una arquitectura mantenible y escalable.
