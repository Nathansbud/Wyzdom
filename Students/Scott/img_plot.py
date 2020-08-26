import os
import csv
import matplotlib.pyplot as plt
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
import cv2
import numpy as np


with open(os.path.join(os.path.dirname(__file__), "data", "images.csv")) as cf:
    data = csv.reader(cf)
    points = [row for row in data]

def get_image(path): return OffsetImage(plt.imread(path))

fig, ax = plt.subplots()
xs, ys = [float(point[1]) for point in points[1:]], [float(point[2]) for point in points[1:]]

def compute_plot_coordinates(image, x, y, image_centers_area_size, offset):
    image_height, image_width, _ = image.shape
    center_x = int(image_centers_area_size * x) + offset
    center_y = int(image_centers_area_size * (1 - y)) + offset
    tl_x = center_x - int(image_width / 2)
    tl_y = center_y - int(image_height / 2)

    br_x = tl_x + image_width
    br_y = tl_y + image_height

    return tl_x, tl_y, br_x, br_y

tsne_plot = 255 * np.ones((500, 500, 3), np.uint8)
for img, x, y in zip(points[1:], xs, ys):
    print(img)
    image = cv2.imread(f"data/{img[0]}")
    image = image.resize((50, 50), Image.ANTIALIAS)
    tl_x, tl_y, br_x, br_y = compute_plot_coordinates(image, x, y, 50*50, 50)
    tsne_plot[tl_y:br_y, tl_x:br_x, :] = image



cv2.imshow('t-SNE', tsne_plot)
cv2.waitKey()
