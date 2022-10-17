import time # für Funktion sleep()

def lies_zahl():
    '''
    Funktion lies_zahl.
    Liest Eingabe von der Konsole. Wenn die Eingabe eine Zahl ist, wird diese zurückgegeben.
    Sonst wird eine neue Eingabe vom Benutzer verlangt.
    '''
    while True:
        eingabe = input("Gib eine Zahl ein: ")
        # isNumeric() ist eine Funktion, welche bei einem str-Objekt aufgerufen werden kann und welche True zurückgibt,
        # wenn das Objekt ausschliesslich Ziffern enthält.
        if eingabe.isnumeric():
            zahl = int(eingabe)
            return zahl
        else:
            print("Das ist keine Zahl!")

def count_down(zahl):
    '''
    Funktion count_down mit Parameter.
    Der count down läuft so lange, wie lange im Parameter Zahl angegeben wird.
    '''
    for i in range(zahl, 0, -1):
        print(i)
        time.sleep(1)
    print("BOOOMMMMM")

# Hauptprogramm liest Zahl von Benutzer ein und ruft Funktion count_down auf.
zahl = lies_zahl()
count_down(zahl)
