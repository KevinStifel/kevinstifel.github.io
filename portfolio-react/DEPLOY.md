# 🚀 Guía de Despliegue - Kevin Stifel Portfolio

## 📋 Opciones de Despliegue

Este proyecto soporta **dos modos** de despliegue:

1. **Docker** - Para desarrollo local
2. **GitHub Pages** - Para producción (sitio estático)

---

## 🐳 1. Docker (Desarrollo Local)

### Requisitos
- Docker Desktop instalado
- Docker Compose instalado

### Comandos

```bash
# Opción A: Usando npm script
npm run docker:dev

# Opción B: Usando docker-compose directamente
docker-compose up --build

# Opción C: Build manual y run
docker build -t portfolio-react .
docker run -p 3000:3000 portfolio-react
```

### Acceder
Abre [http://localhost:3000](http://localhost:3000)

### Detener
```bash
docker-compose down
# O Ctrl+C en la terminal
```

**Ventajas:**
- ✅ Entorno consistente
- ✅ No necesitas Node.js instalado localmente
- ✅ Aislado de tu sistema

---

## 📦 2. GitHub Pages (Producción)

### Configuración Inicial (Solo la primera vez)

1. **Ve a tu repositorio en GitHub**
   - `https://github.com/kevinstifel/kevinstifel.github.io`

2. **Activa GitHub Pages:**
   - Settings → Pages
   - Source: **GitHub Actions**
   - Guarda

3. **Haz commit y push de todo el proyecto React:**

```bash
# Desde la carpeta portfolio-react
cd portfolio-react

# Agrega todos los archivos
git add .

# Commit
git commit -m "Add React portfolio with Docker and GitHub Pages support"

# Push a main
git push origin main
```

### Deploy Automático

Cada vez que hagas **push a `main`**:

1. GitHub Actions detecta el cambio
2. Ejecuta el build (`npm run build`)
3. Genera el static export en `./out`
4. Despliega a GitHub Pages

**URL de tu sitio:** 
```
https://kevinstifel.github.io/
```

### Ver el Estado del Deploy

- Ve a la pestaña **Actions** en GitHub
- Click en el workflow **"Deploy to GitHub Pages"**
- Verás el progreso del build y deploy

---

## 🔄 Flujo de Trabajo Recomendado

### Desarrollo Diario

```bash
# 1. Inicia Docker para desarrollo
npm run docker:dev

# 2. Haz tus cambios en el código
# Los cambios se recargan automáticamente (Hot Reload)

# 3. Prueba localmente en http://localhost:3000
```

### Cuando Termines un Feature

```bash
# 1. Detén Docker (Ctrl+C)

# 2. Testea el build estático
npm run build

# 3. Si todo está bien, haz commit y push
git add .
git commit -m "Add new feature: [nombre del feature]"
git push origin main

# 4. GitHub Actions hará deploy automáticamente
# Espera ~2-3 minutos y tu sitio estará actualizado
```

---

## ⚠️ Importante

### Estructura del Repositorio

Tu repositorio `kevinstifel.github.io` ahora tiene esta estructura:

```
kevinstifel.github.io/
├── portfolio-react/        ← Todo tu código React
│   ├── app/
│   ├── components/
│   ├── Dockerfile
│   ├── .github/workflows/
│   └── package.json
└── README.md
```

**GitHub Pages** servirá el contenido desde la raíz del dominio, así que cuando hagas deploy, el sitio estará en:
- `https://kevinstifel.github.io/`

### Si Quieres Subir Solo el Build Estático

Alternativamente, puedes subir solo los archivos estáticos generados:

```bash
# 1. Build
npm run build

# 2. Los archivos estáticos están en ./out

# 3. Copia el contenido de ./out a la raíz del repo
# (Reemplaza los archivos HTML antiguos)
```

---

## 🛠️ Comandos Útiles

### Docker
```bash
# Ver containers corriendo
docker ps

# Ver logs
docker-compose logs -f

# Detener todo
docker-compose down

# Limpiar imágenes
docker system prune -a
```

### GitHub Pages
```bash
# Ver estado del deploy
# Ve a: https://github.com/kevinstifel/kevinstifel.github.io/actions

# Forzar re-deploy
# Haz un commit vacío:
git commit --allow-empty -m "Trigger re-deploy"
git push origin main
```

---

## 📞 Soporte

Si tienes problemas:

1. **Docker no inicia:**
   - Verifica que Docker Desktop esté corriendo
   - `docker --version` y `docker-compose --version`

2. **GitHub Pages no despliega:**
   - Revisa la pestaña **Actions** en GitHub
   - Verifica que Pages esté activado en **Settings → Pages**
   - Revisa los logs del workflow

3. **Build falla:**
   - `npm run build` localmente para ver errores
   - Revisa los logs de GitHub Actions

---

## ✅ Checklist Final

- [ ] Docker Desktop instalado
- [ ] `docker-compose up --build` funciona
- [ ] `http://localhost:3000` abre correctamente
- [ ] GitHub Pages activado en Settings
- [ ] Push a `main` hecho
- [ ] GitHub Actions workflow completado exitosamente
- [ ] Sitio visible en `https://kevinstifel.github.io/`

---

**¡Listo! Tu portfolio está desplegado con Docker para dev y GitHub Pages para prod! 🎉**
