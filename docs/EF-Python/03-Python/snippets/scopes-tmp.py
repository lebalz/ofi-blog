
def configure():
    global print
    _print = print
    def print(n):
        _print('$$', n)

configure()
print('hello')