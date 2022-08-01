from tkinter import *

pos_x = None
pos_y = None
def zeichnen(event):
    global pos_x, pos_y
    canvas.create_line(pos_x, pos_y, event.x,event.y, fill="black")
    pos_x = event.x
    pos_y = event.y
    
def start(event):
    global pos_x, pos_y
    pos_x = event.x
    pos_y = event.y
    
    
fenster = Tk()
fenster.geometry("500x300")
canvas = Canvas(fenster, bg='white')  
canvas.pack(expand=YES, fill=BOTH)
canvas.bind("<Button-1>", start)
canvas.bind("<B1-Motion>", zeichnen)
fenster.mainloop()
