from enum import Enum
from p5 import *

# am perfectly capable of writing pong myself, but am lazy -- use this to finish tom https://github.com/mazunki/pyPong/blob/master/main.py

class Direction(Enum):
    UP = 0
    DOWN = 1


class Paddle:
    width = 20
    height = 60

    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.score = 0

    def draw(self): rect((self.x, self.y), Paddle.width, Paddle.height)
    def move(self, direction):
        if direction == Direction.UP:
            self.y -= 10
            if self.y < 0: self.y = 0
        elif direction == Direction.DOWN:
            self.y += 10
            if self.y > height - Paddle.height: self.y = height - Paddle.height

class Ball:
    def __init__(self, x, y, radius):
        self.x = x
        self.y = y
        self.velX = 5
        self.velY = 10

        self.radius = radius

    def draw(self): circle((self.x, self.y), self.radius)
    def move(self):
        self.x += self.velX
        self.y += self.velY

        if self.y + self.height > leftPaddle.y and self.y < leftPaddle.y + leftPaddle.height:
            self.velX *= -1
        elif self.y + self.height > rightPaddle.y and self.y < rightPaddle.y + rightPaddle.height:
            self.velX *= -1



        if self.x == leftPaddle.x + leftPaddle.width and self.y: pass


        if self.x < 0:
            rightPaddle.score += 1
            self.x, self.y = width / 2, height / 2
        elif self.x > width:
            leftPaddle.score += 1
            self.x, self.y = width / 2, height / 2
        #

        if self.y < 0 or self.y > height: self.velY *= -1
        # if self.x < 0 or self.x > width: self.velX *= -1





leftPaddle = None
rightPaddle = None
gameBall = None

gameFont = None

def setup():
    global leftPaddle, rightPaddle, gameFont, gameBall

    size(500, 500)
    title("My First Project")
    gameFont = create_font("/Library/Fonts/Arial.ttf", 18)
    text_font(gameFont, 18)

    leftPaddle = Paddle(0, height / 2 - Paddle.height / 2)
    rightPaddle = Paddle(width - Paddle.width, height / 2 - Paddle.height / 2)
    gameBall = Ball(width / 2, height / 2, 25)

def draw():
    background(Color('#00ffff'))
    text(f"Score: {leftPaddle.score}-{rightPaddle.score}", (width/2 - text_width(f"Score: {leftPaddle.score}-{rightPaddle.score}") / 2, 20))

    leftPaddle.draw()
    rightPaddle.draw()
    gameBall.draw()
    gameBall.move()

def key_pressed():
    if str(key).lower() == 'w': leftPaddle.move(Direction.UP)
    elif str(key).lower() == 's': leftPaddle.move(Direction.DOWN)

    elif key == 'UP': rightPaddle.move(Direction.UP)
    elif key == 'DOWN': rightPaddle.move(Direction.DOWN)




if __name__ == '__main__':
    run(frame_rate=30)