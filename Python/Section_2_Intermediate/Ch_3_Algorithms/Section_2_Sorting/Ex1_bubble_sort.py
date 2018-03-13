#!/usr/bin/python


array = [2, 3, 1, 5, 9, 18, 6, -1]
print array

while 1:
    flag = 0
    for i in range(0,len(array)-1):
        if array[i] > array[i+1]:
            tmp = array[i]
            array[i] = array[i+1]
            array[i+1] = tmp
            flag += 1

    print array
    if flag == 0:
        break

print array
