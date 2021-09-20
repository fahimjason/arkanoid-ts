import { CanvasView } from "./view/CanvasView";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Ball } from "./sprites/Ball";
// Images
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";
// Level & colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTY,
  BALL_STARTX,
} from "./setup";
import { createBricks } from "./helpers";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!");
  gameOver = false;
}

function setGameWin(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
) {}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  // Move ball
  ball.moveBall();

  // Move paddle and check so it won't exit the play field
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball));
}

function startGame(view: CanvasView) {
  // Reset displays
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  // Create all bricks
  const bricks = createBricks();

  // Create a ball
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_IMAGE
  );

  // Create Paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE
  );

  gameLoop(view, bricks, paddle, ball);
}

// Create a new view for the game
const view = new CanvasView("#playField");
view.initStartButton(startGame);
