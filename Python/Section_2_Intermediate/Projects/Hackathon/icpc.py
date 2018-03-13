#!/usr/bin/python


#(A,B,C,D) = (5,1,10,10)

(A,B,C,D) = input()
Y = float(D + B * C/A)
T = float(C/A)
while 1:
    T += Y/A
    Y = B * Y/A
    if Y == 0: break
print int(T)






