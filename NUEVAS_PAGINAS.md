# 🎯 Nuevas Páginas Creadas

## Estructura de Rutas

Tu sitio ahora tiene la siguiente estructura de navegación:

```
/                    → Página de inicio (con Hero + Services + About + Gallery + Contact)
/servicios          → Página dedicada a Servicios
/nosotros           → Página dedicada a Nosotros (About)
/galeria            → Página dedicada a Galería
/contacto           → Página dedicada a Contacto
```

## Componentes Flotantes

### Esquina Superior Derecha:
- **ThemeToggle** - Botón para cambiar entre modo claro y oscuro
  - Icono Luna en modo claro
  - Icono Sol en modo oscuro
  - Se guarda en localStorage

### Esquina Lateral Derecha (Baja):
- **WhatsApp Button** - Aparece cuando scrolleas más de 300px
  - Verde degradado
  - Badge rojo con número
  - Se oculta automáticamente al inicio
  
- **Scroll to Top Button** - Aparece cuando scrolleas más de 300px
  - Azul degradado
  - Vuelve al inicio con animación suave
  - Se oculta automáticamente en el inicio

## Características de Cada Página

### 1. Inicio (/)
- Hero section con gradiente animado
- Vista previa de servicios
- Sección "Sobre nosotros"
- Galería de proyectos
- Formulario de contacto
- Footer con redes sociales

### 2. Servicios (/servicios)
- Header con título "Nuestros Servicios"
- Grid de 6 servicios principales
- Sección de ventajas (Rapidez, Confiabilidad, Seguridad)
- Información detallada

### 3. Nosotros (/nosotros)
- Header con "Sobre HERC"
- Sección About completa
- Grid de Valores (Integridad, Excelencia, Innovación, Sostenibilidad)
- Estadísticas: 15+ años, 500+ proyectos, 100% satisfacción, 50+ profesionales

### 4. Galería (/galeria)
- Header con "Galería de Proyectos"
- Grid de imágenes con lightbox
- Sección de tipos de proyectos:
  - 💧 Pozos de Agua
  - 🏗️ Perforación Geotécnica
  - ⚙️ Perforación Industrial

### 5. Contacto (/contacto)
- Header con "Contacto"
- Formulario de contacto interactivo
- Información de contacto:
  - 📍 Ubicación: Lima, Perú
  - 📞 Teléfono: +51 XXX XXX XXX
  - ✉️ Email: info@herc.com
- Redes sociales (Facebook, Instagram, YouTube, LinkedIn)

## Estilo Consistente

Todas las páginas heredan:
- ✅ Navbar con navegación
- ✅ Tema oscuro/claro
- ✅ Botones flotantes
- ✅ Footer profesional
- ✅ Responsive en móvil
- ✅ Transiciones suaves
- ✅ Tipografía consistente

## Colores por Tema

### Modo Claro
- Fondo: Blanco (#ffffff)
- Texto: Gris oscuro (#111827)
- Acentos: Azul (#2563eb) → Cyan (#0891b2)

### Modo Oscuro
- Fondo: Slate muy oscuro (#0f172a)
- Texto: Blanco puro (#ffffff)
- Acentos: Cyan (#22d3ee) → Azul (#3b82f6)

## Cómo Navegar

El navegador principal en la parte superior permite ir entre:
- Inicio
- Servicios
- Nosotros
- Galería
- Contacto

Puedes usar tanto el navegador como los botones flotantes para mejorar la experiencia.

## Próximos Pasos

1. Actualiza los números de teléfono en las páginas
2. Actualiza los emails de contacto
3. Agrega URLs reales de redes sociales
4. Carga las imágenes de los proyectos en la galería
5. Personaliza el contenido según tu empresa
