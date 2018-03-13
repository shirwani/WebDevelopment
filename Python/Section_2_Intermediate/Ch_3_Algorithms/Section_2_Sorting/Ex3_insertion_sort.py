#!/usr/bin/python


array = [2, 3, 1, 5, 9, 18, 6, -1]
print array

for i in range(1, len(array)):
    target = array[i]

    # pick array[i] and slide it left to the right place
    for j in range(i-1, -1, -1):
        if target > array[j]:
            break
        elif target < array[j]:
            tmp = array[j]
            array[j] = target
            array[j + 1] = tmp
    print array
