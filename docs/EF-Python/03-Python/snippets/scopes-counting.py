def counter(init = 1):
    cnt = init
    def next():
        nonlocal cnt
        cnt += 1
        return cnt
    return next


counter1 = counter(10)
counter2 = counter(13)

for i in range(20):
    print(counter1(), counter2())