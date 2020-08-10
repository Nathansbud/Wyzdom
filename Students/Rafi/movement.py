from p5 import *
from p5.sketch.events import Key

left, right, up, down = False, False, False, False
rectX, rectY = 250, 250

def setup():
    size(500, 500)
    pass

def draw():
    global rectX, rectY
    rect((rectX, rectY), 20, 20)

    if left: rectX -= 1
    if right: rectX += 1
    if up: rectY -= 1
    if down: rectY += 1

def key_released(event):
    global left, right, up, down
    if event.key.name == 'A': left = False
    if event.key.name == 'D': right = False
    if event.key.name == 'W': up = False
    if event.key.name == 'S': down = False

def key_pressed(event):
    global left, right, up, down
    if event.key == 'a' or event.key == 'A': left = True
    if event.key == 'd' or event.key == 'D': right = True
    if event.key == 's' or event.key == 'S': down = True
    if event.key == 'w' or event.key == 'W': up = True

if __name__ == '__main__':
    run()