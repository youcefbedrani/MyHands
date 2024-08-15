// src/components/SnakeGame.tsx
"use client";

import { useRef, useState, useEffect } from "react";

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [direction, setDirection] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([
    { x: 200, y: 200 },
  ]);
  const [food, setFood] = useState<{ x: number; y: number }>({
    x: 100,
    y: 100,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const canvasWidth = 350;
  const canvasHeight = 350;
  const gridSize = 20;

  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw snake
    context.fillStyle = "green";
    snake.forEach((segment) => {
      context.fillRect(segment.x, segment.y, gridSize, gridSize);
    });

    // Draw food
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, gridSize, gridSize);

    // Draw score
    context.fillStyle = "black";
    context.font = "16px Arial";
    context.fillText(`Score: ${score}`, 10, 20);
  };

  const updateGame = () => {
    if (gameOver) return;

    // Move snake
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x * gridSize;
    head.y += direction.y * gridSize;

    // Check for collisions with walls or self
    if (
      head.x < 0 ||
      head.x >= canvasWidth ||
      head.y < 0 ||
      head.y >= canvasHeight ||
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    newSnake.unshift(head);

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
      setScore(score + 10);
      setFood({
        x: Math.floor(Math.random() * (canvasWidth / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvasHeight / gridSize)) * gridSize,
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Initial drawing
    drawGame();

    // Game loop
    const gameLoop = () => {
      if (!gameOver) {
        updateGame();
        drawGame();
        requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();

    // Event listener for keypress
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [direction, snake, food, score, gameOver, isPlaying]);

  const startGame = () => {
    setGameOver(false);
    setIsPlaying(true);
    setSnake([{ x: 200, y: 200 }]);
    setDirection({ x: 0, y: 0 });
    setFood({
      x: Math.floor(Math.random() * (canvasWidth / gridSize)) * gridSize,
      y: Math.floor(Math.random() * (canvasHeight / gridSize)) * gridSize,
    });
    setScore(0);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center my-24">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="border border-gray-300 bg-white mb-12"
        style={{ background: "lightgray" }}
      />
      {!isPlaying && !gameOver && (
        <button
          onClick={startGame}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 "
        >
          Start Game
        </button>
      )}
      {gameOver && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-lg text-center mb-12">
          <h2 className="text-xl text-red-500 font-semibold mb-2">Game Over</h2>
          <p className="text-lg text-black">Score: {score}</p>
          <button
            onClick={startGame}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
