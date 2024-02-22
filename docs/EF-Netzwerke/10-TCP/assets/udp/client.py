import socket
import traceback
host = ''
port = 5555
# streaming from datastreamer android app...

s = socket.socket (socket.AF_INET, socket.SOCK_DGRAM)
s.setsockopt (socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.setsockopt (socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
s.bind (('192.168.0.1', 5555))

while True:
    try:
        msg, addr = s.recvfrom (8192)
        print(msg)
    except (KeyboardInterrupt, SystemExit):
        raise
    except:
        traceback.print_exc()