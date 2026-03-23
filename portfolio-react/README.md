# Kevin Stifel Portfolio - React

Portfolio personal desarrollado con Next.js, React y Tailwind CSS.

## 🚀 Quick Start

### Desarrollo Local (sin Docker)

```bash
# Instalar dependencias
npm install

# Correr servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Desarrollo Local (con Docker)

```bash
# Construir y correr container
npm run docker:dev

# O directamente con docker-compose
docker-compose up --build
```

### Build para Producción

```bash
# Build estático para GitHub Pages
npm run export

# Los archivos estáticos se generan en ./out
```

## 📁 Estructura del Proyecto

```
portfolio-react/
├── app/                    # Next.js App Router
├── components/             # Componentes React
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Portfolio/
│   ├── Resume/
│   └── ThemeProvider/
├── public/                 # Assets públicos
│   ├── cv/
│   ├── img/
│   └── videos/
├── .github/workflows/      # GitHub Actions
├── Dockerfile              # Docker config
└── docker-compose.yml      # Docker Compose
```

## 🐳 Docker Commands

```bash
# Build image
docker build -t portfolio-react .

# Run container
docker run -p 3000:3000 portfolio-react

# Docker Compose
docker-compose up --build
docker-compose down
```

## 📦 Deploy a GitHub Pages

El deploy es **automático** cuando haces push a `main`:

1. GitHub Actions detecta el push
2. Ejecuta `npm run build`
3. Genera el static export en `./out`
4. Despliega a GitHub Pages

**URL:** `https://kevinstifel.github.io/portfolio-react`

## 🛠️ Tecnologías

- **Next.js 16** - React Framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animaciones
- **React Icons** - Iconos

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run export` | Build estático para GitHub Pages |
| `npm run docker:dev` | Docker desarrollo |
| `npm run docker:build` | Build Docker image |
| `npm run lint` | ESLint |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
