#!/usr/bin/python

##########
# For loop
##########
print "############################"
for x in range(20):
    print "x = %d" % x
    if x > 10:
        print "*** x > 10 [breaking out] ***"
        break
print "############################"


############
# While loop
############
x = 0
print "############################"
while True:
    print "x = %d" % x
    if x > 10:
        print "*** x > 10 [breaking out] ***"
        break
    x += 1
print "############################"


#################
# Nested For loop
#################
print "############################"
for x in range(20):
    print "x = %d" % x
    for y in range(2):
        print "   y = %d" % y
    if x > 10:
        print "*** x > 10 [breaking out] ***"
        break
print "############################"


#################################
# While loop with nested for loop
#################################
x = 0
print "############################"
while True:
    print "x = %d" % x
    for y in range(2):
        print "   y = %d" % y
    if x > 10:
        print "*** x > 10 [breaking out] ***"
        break
    x += 1
print "############################"
