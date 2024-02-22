import socket
import sys
import random
from threading import Thread
import getopt



class Client:
    '''
    This is the main Client Class. 
    '''
    def __init__(self, username, dest, port):
        self.server_addr = dest
        self.server_port = port
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.sock.bind(("", random.randint(10000, 40000)))
        self.name = username

    def join(self):
        join_message = "join" + " " + self.name
        self.sock.sendto(join_message.encode("utf-8"),(self.server_addr,self.server_port))
    
    def send_message(self, msg):
        actual_message = "send_message" + " " + msg
        self.sock.sendto(actual_message.encode("utf-8"),(self.server_addr,self.server_port))
    
    def start(self):
        '''
        Main Loop is here
        Start by sending the server a JOIN message.
        Waits for userinput and then process it
        '''
        self.join()

        while True:
            userinput = input()

            input_recv = userinput.split()

            if input_recv[0] == "msg":
                self.send_message(" ".join(input_recv[1:]))
            
            else:
                print("incorrect userinput format")
                continue            

    def receive_handler(self):
        '''
        Waits for a message from server and process it accordingly
        '''

        while True:
            server_message, server_addr_port = self.sock.recvfrom(4096)
            server_message = server_message.decode("utf-8")
            datalist = server_message.split()

            if datalist[0] == "forward_message":
                msg_recv_list = datalist[1:]
                msg_recv = " ".join(msg_recv_list)
                print(msg_recv) 
            
if __name__ == "__main__":
    DEST = 'localhost'
    PORT = 11000

    try:
        OPTS, ARGS = getopt.getopt(sys.argv[1:],
                                   "u:", ["user="])
    except:
        print("Wrong command entered.")
        exit(1)

    USER_NAME = None
    for o, a in OPTS:
        if o in ("-u", "--user="):
            USER_NAME = a

    if USER_NAME is None:
        print("Missing Username.")
        exit(1)

    S = Client(USER_NAME, DEST, PORT)
    try:
        # Start receiving Messages
        T = Thread(target=S.receive_handler)
        T.daemon = True
        T.start()
        # Start Client
        S.start()
    except (KeyboardInterrupt, SystemExit):
        sys.exit()
