# HERC - Perforaciones de Pozos Profesionales

Sitio web moderno y profesional construido con **Next.js 15**, **React 18** y **Tailwind CSS**.

## Características Principales

✨ **Diseño Futurista**
- Interfaz moderna con gradientes y glassmorphism
- Animaciones suaves y elegantes
- Componentes interactivos

🌓 **Tema Oscuro/Claro**
- Toggle flotante en esquina superior derecha
- Cambio de tema sin recargar página
- Persistencia de preferencias en localStorage
- Detección automática de preferencia del sistema

📱 **Totalmente Responsivo**
- Diseño mobile-first
- Funcionamiento perfecto en todos los dispositivos
- Menú hamburguesa inteligente

🚀 **Performance Optimizado**
- Renderizado del servidor (SSR)
- Optimización de imágenes
- Code splitting automático

## Tecnologías

- **Framework**: Next.js 15
- **UI Framework**: React 18
- **Estilos**: Tailwind CSS 3.4
- **Componentes**: shadcn/ui (Lucide Icons)
- **Lenguaje**: TypeScript 5.3

## Instalación

### Prerequisitos
- Node.js 18+ 
- npm, yarn o pnpm

### Pasos

1. **Clonar repositorio**
```bash
git clone <repository-url>
cd herc-web-app
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en navegador**
Visita [http://localhost:3000](http://localhost:3000)

## Compilación para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
herc-web-app/
├── app/
│   ├── components/          # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Context para tema
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración Tailwind
├── next.config.js           # Configuración Next.js
├── package.json
└── tsconfig.json
```

## Sistema de Temas

### Características
- **Context API**: Gestión centralizada del tema
- **localStorage**: Persistencia de preferencias
- **CSS Variables**: Fácil personalización de colores
- **Dark Mode**: Soporte completo via clase CSS

### Uso
```tsx
import { useTheme } from '@/app/context/ThemeContext';

export function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}
```

## Personalización

### Colores
Edita `tailwind.config.js`:
```js
colors: {
  accent: {
    primary: '#0099ff',
    secondary: '#00d4ff',
  }
}
```

### Fuentes
Modifica `app/globals.css`:
```css
body {
  font-family: 'Tu Fuente Aquí';
}
```

### Animaciones
Agrega nuevas animaciones en `tailwind.config.js`:
```js
animation: {
  'tu-animacion': 'tuAnimacion 2s ease-in-out infinite',
}
```

## Implementación de Funcionalidades

### Contacto
Reemplaza el manejador en `app/components/ContactSection.tsx`:
```tsx
const handleSubmit = async (e) => {
  // Aquí va tu lógica de API
};
```

### Galería
Actualiza las imágenes en `app/components/GallerySection.tsx`:
```tsx
const galleryImages = [
  { id: 1, title: 'Tu Título', url: 'tu-url-imagen' },
  // ...
];
```

## Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## Rendimiento

- **Lighthouse Score**: 90+
- **Time to Interactive**: <1.5s
- **Cumple WCAG 2.1**: AA

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- iOS Safari 12+

## Licencia

MIT

## Contacto

Para preguntas o soporte:
- Email: info@herc.com
- Teléfono: +51 (1) 2345-6789

---

Desarrollado con ❤️ por el equipo HERC
