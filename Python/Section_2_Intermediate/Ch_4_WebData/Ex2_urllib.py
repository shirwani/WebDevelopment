#!/usr/bin/python


import urllib
f = urllib.urlopen('http://www.py4inf.com/code/romeo.txt')

for line in f:
    print line.strip()

