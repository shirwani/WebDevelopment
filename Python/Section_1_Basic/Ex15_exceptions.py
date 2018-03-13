#!/usr/bin/python

import os

filename = "Ex15_exceptions.txt"
##################################
# Read from non-existent text file
##################################
print "\nReading from file '%s'" % filename
try:
    print "Inside try: File %s exists? -> %s" % (filename, os.path.exists(filename))
    f = open(filename, "r")
    print f.read()
    f.close()
    print "End of try: Only reach this part if no error"
except IOError:
    print "Inside except: Cannot find file %s" % filename
finally:
    print "Inside finally: Executing finally clause\n"

