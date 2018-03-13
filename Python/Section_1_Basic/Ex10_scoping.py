#!/usr/bin/python

Money = 2000
def AddMoney():
    global Money
    Money += 1
    print "[AddMoney()] %d " % Money

print "[Global Scope()] %d " % Money
AddMoney()
print "[Global Scope()] %d " % Money

##############################
##############################
Counter = 10
def IncrementCounter():
    Counter  = 1
    Counter += 1
    print "[IncrementCounter()] %d" % Counter

print "[Global Scope()] %d" % Counter
IncrementCounter()
print "[Global Scope()] %d" % Counter


