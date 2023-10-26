import asyncio
import time

#  Normale Funktionen eins und zwei mit time.sleep()
def eins():
    for i in range(1, 10):
        print(time.localtime().tm_sec, "eins ", i)
        time.sleep(1)

def zwei():
    for i in range(1, 10):
        print(time.localtime().tm_sec, "zwei ", i)
        time.sleep(2)

#  Coroutine cor_eins und cor_zwei mit await asyncio.sleep()
async def cor_eins():
    for i in range(1, 10):
        print(time.localtime().tm_sec, "eins ", i)
        await asyncio.sleep(1)

async def cor_zwei():
    for i in range(1, 10):
        print(time.localtime().tm_sec, "zwei ", i)
        await asyncio.sleep(2)

# Sequentieller Aufruf der normalen Funktionen 1 und 2
print("Sequentielle Ausführung, Start")
eins()
zwei()
print("Sequentielle Ausführung, Ende")
print("-----------------------------")

print("Coroutinen, Start")
# Der loop ist der Scheduler für Coroutinen
loop = asyncio.get_event_loop()
# Die beiden Coroutinen werden beim loop als Tasks eingetragen
loop.create_task(cor_eins())
loop.create_task(cor_zwei())
# Der loop wird gestartet und der erste eingetragenen Tasks wird gestartet (erhält
# die Kontrolle). Beim jedem await hält der aktive Task an und gibt die Kontrolle an den
# loop zurück, welcher dann entscheidet, welcher Task als nächstes aktiv wird. Der loop
# läuft so lange, bis stop() aufgerufen wird (was hier nie der Fall  ist).
loop.run_forever()

# Anweisungen ab diesem Punkt werden nie ausgeführt
print("Mich siehst Du nie!")
