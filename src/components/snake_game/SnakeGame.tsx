import { useRef, useEffect } from "react";

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions
    const canvasWidth = 350;
    const canvasHeight = 351;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Game state
    let snake: { x: number; y: number }[] = [{ x: 50, y: 50 }];
    let direction: { x: number; y: number } = { x: 1, y: 0 };

    const drawSnake = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = "green";
      snake.forEach((segment) => {
        context.fillRect(segment.x, segment.y, 20, 20);
      });
    };

    const updateGame = () => {
      // Move snake
      const head = { ...snake[0] };
      head.x += direction.x * 20;
      head.y += direction.y * 20;
      snake = [head, ...snake.slice(0, -1)];

      drawSnake();
    };

    const gameLoop = () => {
      updateGame();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Event listener for keypress
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          direction = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          direction = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          direction = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          direction = { x: 1, y: 0 };
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-gray-200"
      style={{ background: "lightgray" }}
    />
  );
};

export default SnakeGame;
