def ack(m, n):
    if m == 0:
        ans = n + 1
    elif n == 0:
        ans = ack(m - 1, 1)
    else:
        ans = ack(m - 1, ack(m, n - 1))
    return ans

print(ack(3, 3))  # 61


