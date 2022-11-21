from turtle import *

def dreieck():
    for i in range(3):
        forward(100)
        left(120)
        

def viereck():
    for i in range(4):
        forward(100)
        left(90)
        

def fünfeck():
    for i in range(5):
        forward(100)
        left(360 / 5)

def neck(n):
    for i in range(n):
        forward(100)
        left(360 / n)

dreieck()
viereck()
fünfeck()