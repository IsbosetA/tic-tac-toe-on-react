# Tic Tac Toe

Este es un juego de **Tic Tac Toe** desarrollado con **React** y **SWC**.
El juego permite a dos jugadores turnarse para colocar "X" y "O" en un tablero de 3x3.

## Características

- **Uso de Local Storage**: Guarda el estado del juego para continuar más tarde.
- **Completamente Componentezado**: Cada parte del juego está separada en componentes reutilizables.
- **Detección de Ganador**: Evalúa automáticamente cuando un jugador gana.
- **Empates Detectados**: Identifica si el tablero está lleno sin ganador.
- **Efectos de Celebración**: Se usa `canvas-confetti` al detectar un ganador.
- **Botón de Reinicio**: Permite reiniciar el juego fácilmente.

## Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tic-tac-toe.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd tic-tac-toe
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Ejecuta el proyecto en modo desarrollo:

   ```bash
   pnpm run dev
   ```

5. Abre en el navegador:

   ```
   http://localhost:3000
   ```

## Estructura del Proyecto

```
/src
│── /components
│   ├── Board.jsx
│   ├── ResetGameButton.jsx
│   ├── TurnsSection.jsx
│   ├── WinnerModal.jsx
│── /logic
│   ├── board.js
│   ├── storage.js
│── /constants
│   ├── index.js
│── App.jsx
│── main.jsx
│── App.css
```

## Tecnologías Utilizadas

- **React**
- **SWC**
- **Local Storage**
- **Canvas Confetti**

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes ideas para mejorar el juego, no dudes en abrir un _issue_ o enviar un _pull request_.

## Licencia

Este proyecto está bajo la licencia **MIT**.
