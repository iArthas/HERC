# Setup HERC 2.0 en Windows

Guía paso a paso para instalar y ejecutar HERC 2.0 en Windows.

## Prerequisitos

### Paso 1: Instalar Node.js

1. Descarga Node.js desde: https://nodejs.org/
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador `.msi`
4. Sigue el asistente de instalación (siguiente → siguiente → siguiente)
5. **Importante**: Marca la opción "Add to PATH"
6. Finaliza la instalación

### Paso 2: Verificar Instalación

1. Abre **PowerShell** o **Símbolo del sistema**
2. Ejecuta estos comandos:

```powershell
node --version
npm --version
```

Deberías ver números de versión (ej: `v18.17.1` y `9.6.7`)

## Instalación de HERC 2.0

### Paso 1: Abrir Terminal

1. Abre **PowerShell** o **Símbolo del Sistema**
2. Navega a la carpeta del proyecto:

```powershell
cd C:\ruta\al\proyecto\herc
```

### Paso 2: Instalar Dependencias

Ejecuta:

```powershell
npm install
```

Esto descargará todos los paquetes necesarios (puede tomar 2-3 minutos).

### Paso 3: Iniciar Servidor

Ejecuta:

```powershell
npm run dev
```

Deberías ver algo como:

```
> herc-web-app@2.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
```

### Paso 4: Abrir en Navegador

1. Abre tu navegador favorito
2. Navega a: `http://localhost:3000`
3. ¡Listo! El sitio debe cargar

## Primeros Pasos

### Probar Modo Oscuro

1. En la esquina superior derecha verás un botón circular
2. Haz clic para cambiar entre modo claro y oscuro
3. El sitio se actualiza al instante
4. Se guarda automáticamente

### Realizar Cambios

1. Abre la carpeta `herc` en tu editor de código (VS Code recomendado)
2. Modifica archivos en `app/components/`
3. El navegador se actualiza automáticamente
4. ¡Sin necesidad de reiniciar!

## Problemas Comunes

### "npm: El término 'npm' no se reconoce"

**Solución:**
1. Reinstala Node.js
2. Asegúrate de marcar "Add to PATH"
3. Reinicia PowerShell/Símbolo del Sistema

### "Puerto 3000 ya está en uso"

**Solución 1:** Cierra otras ventanas del proyecto
**Solución 2:** Usa otro puerto:

```powershell
npm run dev -- -p 3001
```

### "Los cambios no se ven en el navegador"

**Solución:**
1. Presiona `Ctrl+Shift+R` en el navegador (limpiar caché)
2. Cierra DevTools y vuelve a abrir (F12)
3. Reinicia el servidor (Ctrl+C en la terminal y `npm run dev`)

### "Error: Cannot find module"

**Solución:**
```powershell
npm install
```

### El tema no se guarda

**Solución:**
1. Abre DevTools (F12)
2. Vaya a Almacenamiento → LocalStorage
3. Verifique que `theme` esté en la lista
4. Limpia cookies: Settings → Privacy → Clear Data

## Editar con VS Code

### Instalación

1. Descarga VS Code: https://code.visualstudio.com/
2. Instala las extensiones recomendadas:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Vue Plugin

### Abrir Proyecto

1. Abre VS Code
2. File → Open Folder
3. Selecciona la carpeta del proyecto
4. Verás la estructura en el panel izquierdo

### Editar Componentes

**Ejemplo: Cambiar color principal**

1. Abre `tailwind.config.js` (en la raíz)
2. Busca la línea: `primary: '#0099ff',`
3. Cambia el color a tu preferencia: `primary: '#ff6b00',`
4. Guarda (Ctrl+S)
5. El navegador se actualiza automáticamente

## Compilar para Producción

Cuando esté listo para publicar:

```powershell
npm run build
```

Esto crea una versión optimizada en la carpeta `.next`

## Desplegar a Vercel

Vercel es la forma más fácil de publicar:

1. Crea cuenta en: https://vercel.com
2. Importa tu repositorio de GitHub
3. Haz clic en Deploy
4. ¡Listo! Tu sitio estará en línea en 30 segundos

## Archivos Importantes

```
herc/
├── app/
│   ├── components/      ← Aquí están los componentes
│   ├── context/
│   ├── page.tsx        ← Página principal
│   └── layout.tsx      ← Layout base
├── tailwind.config.js  ← Colores y configuración
├── package.json        ← Dependencias
└── README.md          ← Documentación
```

## Comandos Útiles

```powershell
# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm start

# Linting (verificar código)
npm run lint

# Abrir en navegador automáticamente
start http://localhost:3000
```

## Atajos de Teclado en Terminal

```
Ctrl+C = Detener servidor
Ctrl+L = Limpiar pantalla
Ctrl+Z = Cancelar comando
```

## Tips Profesionales

### 1. Usar IntelliSense de VS Code
- Escribe y presiona Ctrl+Space para autocompletado
- Es MUY útil para React y Tailwind

### 2. DevTools del Navegador
- F12 = Abrir DevTools
- Ctrl+Shift+I = Inspect Element
- Ctrl+Shift+M = Responsive Design Mode

### 3. Emular Dark Mode
- F12 → Más herramientas → Renderizar
- Emulate CSS media feature prefers-color-scheme
- Selecciona "dark"

### 4. Limpiar Node Modules
Si algo falla:
```powershell
Remove-Item node_modules -Recurse
Remove-Item package-lock.json
npm install
```

## Próximos Pasos

1. Lee `GUIA_INICIO_RAPIDO.md` para tareas comunes
2. Explora `app/components/` para entender la estructura
3. Modifica `tailwind.config.js` para personalizar colores
4. Agrega tus imágenes y contenido
5. Publica en Vercel cuando esté listo

## Soporte

Si tienes problemas:

1. Revisa la consola de errores (F12)
2. Lee los archivos .md incluidos
3. Google los mensajes de error (generalmente la solución está en StackOverflow)

## ¡Éxito! 🚀

Tu nuevo sitio HERC está listo. ¡A disfrutar!
