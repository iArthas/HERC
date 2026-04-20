#!/bin/bash

echo "╔════════════════════════════════════════════════════════╗"
echo "║         HERC 2.0 - Setup Inicial                       ║"
echo "║    Transformación React/Next.js Profesional           ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir con color
print_info() {
    echo -e "${BLUE}ℹ ${1}${NC}"
}

print_success() {
    echo -e "${GREEN}✓ ${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ ${1}${NC}"
}

print_error() {
    echo -e "${RED}✗ ${1}${NC}"
}

echo ""
print_info "Iniciando setup..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado"
    echo "Por favor, descarga Node.js desde: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
print_success "Node.js detectado: $NODE_VERSION"
echo ""

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    print_error "npm no está instalado"
    exit 1
fi

NPM_VERSION=$(npm --version)
print_success "npm detectado: $NPM_VERSION"
echo ""

# Preguntar si instalar dependencias
read -p "¿Instalar dependencias? (S/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]] || [[ -z $REPLY ]]; then
    print_info "Instalando dependencias..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dependencias instaladas correctamente"
    else
        print_error "Error al instalar dependencias"
        exit 1
    fi
else
    print_warning "Omitido: instalación de dependencias"
fi

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║                    ¡Listo para comenzar!               ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

print_info "Para iniciar el servidor de desarrollo, ejecuta:"
echo ""
echo -e "  ${GREEN}npm run dev${NC}"
echo ""

print_info "Luego abre en tu navegador:"
echo ""
echo -e "  ${GREEN}http://localhost:3000${NC}"
echo ""

print_info "Características principales:"
echo "  • Toggle de tema en esquina SUPERIOR DERECHA"
echo "  • Modo oscuro/claro profesional"
echo "  • Diseño moderno y futurista"
echo "  • Completamente responsivo"
echo "  • Performance optimizado"
echo ""

print_info "Documentación disponible:"
echo "  • README.md - Documentación completa"
echo "  • GUIA_INICIO_RAPIDO.md - Guía para empezar"
echo "  • TRANSFORMACION.md - Detalles técnicos"
echo ""

print_success "¡Setup completado! 🚀"
echo ""
