#!/bin/bash

# Fortune Card Generator - A wrapper for goose run
# Generates random winter holiday fortune telling cards

# Color codes for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to display script banner
show_banner() {
    echo -e "${CYAN}"
    echo "╔═══════════════════════════════════════════════════════╗"
    echo "║        🎴  GOOSE FORTUNE CARD GENERATOR  🎴          ║"
    echo "║           Winter Holiday Edition ❄️                  ║"
    echo "╚═══════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Function to display help
show_help() {
    echo "Usage: $(basename $0) [OPTIONS]"
    echo ""
    echo "Generate a random winter holiday fortune telling card using goose."
    echo ""
    echo "Options:"
    echo "  -h, --help              Show this help message"
    echo "  -t, --theme THEME       Choose specific theme: celestial, santa, witch, or random (default: random)"
    echo "  -s, --save FILE         Save the fortune to a file"
    echo "  -q, --quiet             Suppress banner and extra output"
    echo ""
    echo "Examples:"
    echo "  $(basename $0)                    # Generate random fortune"
    echo "  $(basename $0) -t santa           # Generate Santa-themed fortune"
    echo "  $(basename $0) -s my_fortune.txt # Save fortune to file"
    echo ""
}

# Default values
THEME="random"
SAVE_FILE=""
QUIET=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -t|--theme)
            THEME="$2"
            shift 2
            ;;
        -s|--save)
            SAVE_FILE="$2"
            shift 2
            ;;
        -q|--quiet)
            QUIET=true
            shift
            ;;
        *)
            echo -e "${RED}Error: Unknown option $1${NC}"
            echo "Use -h or --help for usage information."
            exit 1
            ;;
    esac
done

# Validate theme
if [[ ! "$THEME" =~ ^(random|celestial|santa|witch)$ ]]; then
    echo -e "${RED}Error: Invalid theme '$THEME'${NC}"
    echo "Valid themes: random, celestial, santa, witch"
    exit 1
fi

# Show banner unless quiet mode
if [ "$QUIET" = false ]; then
    show_banner
fi

# Create the fortune prompt based on theme
if [ "$THEME" = "random" ]; then
    # Random theme - let goose pick
    PROMPT="Generate 1 random winter holiday fortune telling card. Pick randomly from these themes: celestial/starlit, whimsical Santa, or gothic winter witch. Make it visually appealing with emojis and ASCII art. Include the fortune text, lucky symbols, and mystical elements."
else
    # Specific theme requested
    case $THEME in
        celestial)
            THEME_DESC="celestial/starlit theme with stars, elegant and hopeful"
            ;;
        santa)
            THEME_DESC="whimsical Santa theme with Christmas trees, playful and joyful"
            ;;
        witch)
            THEME_DESC="gothic winter witch theme with crystal ball, mysterious and mystical"
            ;;
    esac
    PROMPT="Generate 1 winter holiday fortune telling card with a ${THEME_DESC} style. Make it visually appealing with emojis and ASCII art. Include the fortune text, lucky symbols, and mystical elements."
fi

# Display what we're doing
if [ "$QUIET" = false ]; then
    echo -e "${YELLOW}🔮 Consulting the mystical forces...${NC}"
    echo -e "${YELLOW}📜 Theme: $THEME${NC}"
    echo ""
fi

# Run goose with the prompt
if [ "$QUIET" = false ]; then
    goose run "$PROMPT"
    EXIT_CODE=$?
else
    goose run "$PROMPT" 2>/dev/null
    EXIT_CODE=$?
fi

# Check if goose command succeeded
if [ $EXIT_CODE -ne 0 ]; then
    echo -e "${RED}Error: Failed to generate fortune card${NC}"
    echo "Make sure 'goose' is installed and available in your PATH"
    exit 1
fi

# Save to file if requested
if [ -n "$SAVE_FILE" ]; then
    # Re-run and save output
    goose run "$PROMPT" > "$SAVE_FILE" 2>/dev/null
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✨ Fortune saved to: $SAVE_FILE${NC}"
    else
        echo -e "${RED}Error: Failed to save fortune to file${NC}"
        exit 1
    fi
fi

# Footer message
if [ "$QUIET" = false ]; then
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════${NC}"
    echo -e "${MAGENTA}May your holidays be filled with magic! ✨🎄❄️${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════${NC}"
fi

exit 0
