# Demoprogramm für GUI-Programmierung: Turtle-Spiel (halb so grosser Raster)

from tkinter import *
from turtle import *

# ... wird ausgeführt, wenn Ende gedrückt

def ende():
    root.destroy()

# Tastenauswertung (y,c für turtle 1, Left, Right für turtle 2)

def key(event):
    if event.char == event.keysym:
        if event.char == "y":
            turtle.left(10)
        if event.char == "c":
            turtle.right(10)
    else:
        if event.keysym == "Left":
            turtle2.left(10)
        if event.keysym == "Right":
            turtle2.right(10)

# Turtle bewegen, Kollistion feststellen und Position eintragen
     
def move_turtle(t, col, step):                  # 1 ist Erfolg, 0 ist Kollision
        t.forward(step)
        pos = t.position()
        turtle_pos_x = (int(pos[0])+100)//2         # im grünen Kasten
        turtle_pos_y = ((int(pos[1])-100)*(-1))//2
        richtung=1+int(t.heading()/90)          # 1 0-90° 2 90-180...
        try:
            if (matrix[turtle_pos_x][turtle_pos_y]==0):
                if (richtung==1):
                    matrix[turtle_pos_x][turtle_pos_y]=1
                    matrix[turtle_pos_x][turtle_pos_y+1]=1
                    matrix[turtle_pos_x-1][turtle_pos_y]=1
                    matrix[turtle_pos_x-1][turtle_pos_y+1]=1
                if (richtung==2):
                    matrix[turtle_pos_x][turtle_pos_y]=1
                    matrix[turtle_pos_x][turtle_pos_y-1]=1
                    matrix[turtle_pos_x-1][turtle_pos_y]=1
                    matrix[turtle_pos_x-1][turtle_pos_y-1]=1
                if (richtung==3):
                    matrix[turtle_pos_x][turtle_pos_y]=1
                    matrix[turtle_pos_x][turtle_pos_y-1]=1
                    matrix[turtle_pos_x+1][turtle_pos_y]=1
                    matrix[turtle_pos_x+1][turtle_pos_y-1]=1
                if (richtung==4):
                    matrix[turtle_pos_x][turtle_pos_y]=1
                    matrix[turtle_pos_x][turtle_pos_y+1]=1
                    matrix[turtle_pos_x+1][turtle_pos_y]=1
                    matrix[turtle_pos_x+1][turtle_pos_y+1]=1

            else: 
                print("Kollision! Sie haben verloren", col)
                return 0
        except IndexError:
            print("Kollision! Sie haben verloren", col)
            return 0
        return 1



# ... wird ausgeführt, wenn "Start!" gedrückt

def antwort():
    root.bind_all('<Key>', key)
    x = 5
    while x:
        if (move_turtle(turtle, "Schwarz",x)==0):
            break
        if(move_turtle(turtle2, "Rot",x)==0):
            break
      



# Definition des GUI

root=Tk()

# Konsolenfenster schliessen

try:
    root.tk.call('console','hide')
except TclError:
    pass


root.geometry("800x600")
root.title("Liniengrafik")

# und die zwei Knöpfe

button_Klickmich=Button(root,text="Start!", command=antwort)
button_Klickmich.pack(side="left")

button_Ende=Button(root,text="Ende", command=ende)
button_Ende.pack(side="right")

# Liniengrafikfenster machen, noch unsichtbar
canvas = Canvas(root, width=425, height=410, bg='white')  

# der Cursor soll auf button_Klickmich

button_Klickmich.focus_set()

# Matrix vorbereiten

matrix=[0]*(202)                # Matrix 200x200 
for i in range(202):
    matrix[i] = [0] * (202)     # mit Nullen gefüllt

# Ränder
for i in range(202):
    matrix[0][i] = [9]          # linker Rand (9 bedeutet Rand)
    matrix[201][i] = [9]        # rechter Rand
    matrix[i][0] = [9]          # oberer Rand    
    matrix[i][201] = [9]        # unterer Rand 

# turtles erzeugen

turtle=RawPen(canvas)
turtle._delay(0)
turtle.up()
turtle.width(5)
turtle.forward(100)
turtle.down()
turtle._delay(20)

turtle2=RawPen(canvas)
turtle2._delay(0)
turtle2.up()
turtle2.right(90)
turtle2.width(5)
turtle2.color("red")
turtle2.forward(100)
turtle2.down()
turtle2._delay(20)

# turtle3 macht Rand

# turtle3=RawPen(canvas)
# turtle3.up()
# turtle3.goto(-100,100)
# turtle3.down()
# turtle3.width(5)
# turtle3.color("green")
# turtle3._tracer(0)

# turtle3.forward(400)
# turtle3.right(90)
# turtle3.forward(400)
# turtle3.right(90)
# turtle3.forward(400)
# turtle3.right(90)
# turtle3.forward(400)

# fertigen Canvas anzeigen

canvas.pack(expand=YES, fill=BOTH)

# Endlosschleife, die das Programm ausführt

root.mainloop()
