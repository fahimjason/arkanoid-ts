import { CanvasView } from './view/CanvasView';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';
import { Ball } from './sprites/Ball';
// Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
// Level & colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTY,
    BALL_STARTX
} from './setup';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
    view.drawInfo('Game Over!');
    gameOver = false;
}

function setGameWin(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball
) {}

function startGame(view: CanvasView) {}

// Create a new view for the game
const view = new CanvasView('#playField');
view.initStartButton(startGame);

