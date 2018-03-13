#!/usr/bin/python

found = False
count = 0
def find_in_list(A, x):
    global found
    global count

    count += 1
    #print count

    #print A
    if len(A) < 1:
        return

    i = int(len(A)/2)
    pivot = A[i]
    #print "*** %d ***" % pivot

    if pivot < x:
        a = A[i:]
    elif pivot > x:
        a = A[:i]
    else:
        found = True
        return

    if len(A) == 1 and not found:
        return

    find_in_list(a, x)


#r = int(raw_input('Enter a number: '))
A = range(0,5)
maxCount = 0
print A
for x in A:
    count = 0
    find_in_list(A, x)
    if found:
        print x, 'found'
    else:
        print x, 'not Found'
    if count > maxCount:
        maxCount = count

print maxCount
