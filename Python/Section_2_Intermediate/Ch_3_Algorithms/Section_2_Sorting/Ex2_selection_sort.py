#!/usr/bin/python


array = [2, 3, 1, 5, 9, 18, 6, -1]
print array

for i in range(0, len(array)):
    minVal = array[i]
    minIdx = i

    # find location of min value
    for j in range(i, len(array)):
        if array[j] < array[i]:
            minVal = array[j]
            minIdx = j
    # swap
    tmp = array[i]
    array[i] = minVal
    array[minIdx] = tmp

    print array
