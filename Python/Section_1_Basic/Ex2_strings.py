#!/usr/bin/python

print "Hello World"
print "Hello " + "World"

world = "World"
print "Hello " + world
print "Hello %s" % world

name = "Bob"
print "Hello " + world + ". My name is " + name + ". Hello " + name + "!"
print "Hello %s. My name is %s. Hello %s!" % (world, name, name)

str = 'Hello World!'

print "############################"
print str          # Prints complete string
print str[0]       # Prints first character of the string
print str[2:5]     # Prints characters starting from 3rd to 5th
print str[2:]      # Prints string starting from 3rd character
print str * 2      # Prints string two times
print str + "TEST" # Prints concatenated string
print "############################"
