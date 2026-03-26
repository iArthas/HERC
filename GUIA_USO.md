# 📖 Guía de Uso - HERC Mejorado

## 🎨 Características Nuevas

### 1. Modo Oscuro/Claro 🌓

**Cómo usar:**
- Haz clic en el ícono de **Luna** (🌙) en la esquina superior derecha de la navegación
- El tema se cambia instantáneamente
- Tu preferencia se guarda automáticamente

**Características:**
- Cambia automáticamente según la preferencia del sistema
- Colores optimizados para cada modo
- Transiciones suaves entre temas

### 2. Animaciones Futuristas ✨

**Dónde verlas:**
- **Al cargar la página**: Fade in del contenido
- **Al hacer scroll**: Las secciones aparecen con efecto deslizante
- **En las tarjetas de servicios**: Hover effects con levantamiento
- **En los botones**: Efecto shimmer que pasa sobre ellos
- **En el navbar**: Efecto blur glassmorphism

**Ejemplos de animaciones:**
```
- Scan horizontal: Línea de luz que se mueve
- Shimmer: Efecto de brillo diagonal
- Slide: Deslizamiento suave de elementos
- Float: Movimiento flotante continuo
```

### 3. Imágenes Dinámicas 📸

**Sistema de imágenes aleatorias:**
- Las imágenes se cargan automáticamente de Unsplash
- Cambian cada vez que recargas la página
- Mantienen contexto: imágenes de perforación, agua, construcción, etc.

**Para actualizar imágenes manualmente:**
```javascript
// En la consola del navegador:
randomImages.refresh();
```

### 4. Diseño Responsivo 📱

**Funciona perfectamente en:**
- Desktops (1920px+)
- Tablets (768px - 1024px)
- Móviles (< 768px)

**Características móviles:**
- Menú hamburguesa mejorado
- Tipografía adaptativa
- Espaciado flexible
- Botones flotantes optimizados

## 🎯 Funcionalidades por Página

### Página Principal (index.html)
- Hero section con gradiente dinámico
- Secciones alternadas con efecto de escaneo
- Carrusel de aliados con efecto hover
- Tarjetas de servicios con animaciones
- Banner de certificación mejorado

### Página Nosotros (nosotros.html)
- Timeline interactivo con puntos brillantes
- Grid de equipo con tarjetas premium
- Sección de valores con gradientes
- Misión y visión con efectos hover

### Página Servicios (servicios.html)
- Grid de servicios expandible
- Descripción de cada servicio
- Animaciones al scroll

### Página Galería (galeria.html)
- Galería de proyectos
- Efecto lightbox mejorado
- Categorías de proyectos

### Página Contacto (contacto.html)
- Formulario de contacto
- Información de ubicación
- Botones de contacto directo

## 🔧 Personalización

### Cambiar Colores

**Archivo:** `css/styles.css`

```css
:root {
    /* Modo Claro */
    --accent-primary: #0099ff;      /* Color principal */
    --accent-secondary: #00d4ff;    /* Color secundario */
    /* Otros colores... */
}
```

### Cambiar Velocidades de Animación

**Archivo:** `css/styles.css`

```css
@keyframes scan {
    0% { left: -100%; }
    100% { left: 100%; }
}
/* Cambia la duración: animation: scan 8s (cambiar el número) */
```

### Cambiar Fuentes

**Archivo:** `css/styles.css`

```css
* {
    font-family: 'Tu Fuente', sans-serif;
}
```

## 🚀 Mejoras Técnicas

### Performance
- Uso de transform y opacity para animaciones GPU-optimizadas
- Backdrop-filter con blur para efectos de vidrio
- Intersection Observer para animaciones al scroll
- Carga progresiva de imágenes

### Accesibilidad
- Colores con contraste WCAG compliant
- Navegación por teclado funcional
- Transiciones respetan `prefers-reduced-motion`
- Labels y atributos ARIA

### SEO
- Estructura HTML semántica
- Meta tags actualizadas
- Títulos y descripciones optimizadas
- Imágenes con alt text

## 📱 Botones Flotantes

### WhatsApp (🟢)
- Aparece al hacer scroll más de 300px
- Lleva directamente a WhatsApp con mensaje predefinido
- Animación suave al aparecer/desaparecer

### Volver Arriba (⬆️)
- Aparece al hacer scroll más de 300px
- Vuelve al inicio de la página con scroll suave
- Diseño moderno con gradiente

## 💡 Tips de Uso

1. **Para mejor experiencia en móvil:**
   - Usa la vista de portrait
   - El menú hamburguesa se adapta automáticamente
   - Los botones flotantes se reacomodan

2. **Para ver las animaciones:**
   - Desplázate lentamente para apreciar los efectos
   - Pasa el mouse sobre elementos interactivos
   - Nota los efectos de luz y movimiento

3. **Para cambiar el tema:**
   - Haz clic en la luna cada vez que quieras cambiar
   - O tu navegador puede cambiar automáticamente según la hora del día

4. **Para imágenes diferentes:**
   - Recarga la página (F5)
   - Las imágenes se actualizarán automáticamente
   - Usa diferentes categorías según la sección

## 🔗 Enlaces Importantes

- **WhatsApp:** `https://wa.me/51999479036`
- **Facebook:** `https://www.facebook.com/PerforacionesHerc`
- **Instagram:** `https://www.instagram.com/perforacionesherc`
- **YouTube:** `https://www.youtube.com/@perforacionesherc530`

## 📞 Contacto

- **WhatsApp:** +51 999 479 036
- **Teléfono:** Disponible en la página
- **Email:** Disponible en la página de contacto

## 🆘 Solución de Problemas

### Las imágenes no se cargan
**Solución:** Verifica tu conexión a internet. El sistema usa Unsplash API.

### El modo oscuro no se guarda
**Solución:** Verifica que tu navegador permita localStorage.

### Las animaciones van lentas
**Solución:** Desactiva extensiones del navegador, o usa un navegador más moderno.

### Los botones flotantes no aparecen
**Solución:** Recarga la página (Ctrl+Shift+R para limpiar caché).

## 📝 Notas

- El proyecto usa tecnologías modernas: CSS3, ES6+, APIs modernas
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)
- Optimizado para velocidad y accesibilidad
- Totalmente responsivo y adaptable

---

**Última actualización:** 2026-03-25
**Versión:** 2.0
**Estado:** ✅ Completo y listo para producción
