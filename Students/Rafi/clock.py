import datetime
from p5 import *
from math import pi

second_radius = 230
minute_radius = 210
hour_radius = 180
clock_font = create_font("/Library/Fonts/Arial.ttf")
count = 1
def setup():
    global clock_font
    size(500, 500)
    title('Clock')

def draw():
    global count
    no_stroke()
    background('white')
    text_font(clock_font, 10)
    timestamp = datetime.datetime.now()
    hour, minute, second = (timestamp.hour % 12) / 6, timestamp.minute / 60, timestamp.second / 30
    fill('white')
    fill('#333333')
    circle((width / 2, height / 2), 500)
    fill('white')
    for i in range(1, 13):
        text(str(i), (width / 2 + 240 * cos(pi * i / 6 - pi/2) - text_width(str(i)) / 2, height / 2 + 240 * sin(pi * i / 6 - pi/2) - text_ascent() / 2))

    for i in range(0, 60):
        circle((width / 2 + second_radius * cos(pi * i / 30 - pi/2), height / 2 + second_radius * sin(pi * i / 30 - pi / 2)), 5)
    stroke_weight(3)
    stroke('red')
    line((width / 2, height / 2), (width / 2 + second_radius * cos(pi * second - pi/2), height / 2 + second_radius * sin(pi * second - pi/2)))
    stroke('green')
    line((width / 2, height / 2), (width / 2 + minute_radius * cos(pi * minute - pi/2), height / 2 + minute_radius * sin(pi * minute - pi/2)))
    stroke('blue')
    line((width / 2, height / 2), (width / 2 + hour_radius * cos(pi * hour - pi / 2), height / 2 + hour_radius * sin(pi * hour - pi / 2)))

    fill('white')
    circle((width / 2, height / 2), 10)

if __name__ == '__main__':
    run()