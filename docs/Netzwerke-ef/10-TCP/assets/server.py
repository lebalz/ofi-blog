import socket
import sys

class Server:
    def __init__(self, dest, port):
        self.server_port = port
        self.server_addr = dest
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.sock.bind((self.server_addr, self.server_port))

    def forward_message(self, msg, addr_port_tuple):
        forward_msg = "forward_message" + " " + msg
        self.sock.sendto(forward_msg.encode("utf-8"), addr_port_tuple)

    def start(self):

        users = {}

        while True:

            keys = list(users.keys())
            values = tuple(users.values())

            
            client_message, client_addr_port = self.sock.recvfrom(4096)
            client_message = client_message.decode("utf-8")
            datalist = client_message.split()

            if datalist[0] == "join":
                users.update({datalist[1] : client_addr_port})
                print(datalist[1], "joined the chatroom")
            
            elif datalist[0] == "send_message":

                sender_client = keys[values.index(client_addr_port)]
                client = datalist[1]
                print("msg from:", sender_client, "msg to:", client)
                actual_message = " ".join(datalist[2:])
                actual_message = sender_client + ": " + actual_message
                self.forward_message(actual_message, values[keys.index(client)])

if __name__ == "__main__":
    PORT = 11000
    DEST = "localhost"

    print("Server started. Address:", DEST, "Port:", PORT)
    SERVER = Server(DEST, PORT)
    try:
        SERVER.start()
    except (KeyboardInterrupt, SystemExit):
        exit()
