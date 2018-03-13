#!/usr/bin/python

import time
import os

filename = "Ex14_file_io.txt"
newfilename = "Ex14_renamed_file.txt"

#######################
# Check if files exists
#######################
print "##########################################"
print ("File %s exists? -> %s " % (filename, os.path.exists(filename)))
print ("File %s exists? -> %s " % (newfilename, os.path.exists(newfilename)))
print "##########################################"

#########################################
# Write to a file, then read back from it
#########################################
f = open(filename, "w")
f.write("Local current time : %s \n" % time.asctime(time.localtime(time.time())))
f.close()

####################################
# Overwrite previous outputs to file
####################################
f = open(filename, "w")
f.write("New local current time : %s \n" % time.asctime(time.localtime(time.time())))
f.close()

####################################
# Append to previous outputs to file
####################################
f = open(filename, "a")
f.write("Even newer local current time : %s \n" % time.asctime(time.localtime(time.time())))
f.close()

#####################
# Read from text file
#####################
print "##########################################"
print "\n*** Reading from file '%s' ***\n" % filename
print ("File %s exists? -> %s \n" % (filename, os.path.exists(filename)))
f = open(filename, "r")
print f.read()
f.close()
print "##########################################"

##################
# Rename text file
##################
print "##########################################"
os.rename(filename, newfilename)
print("\n*** Renaming file '%s' to '%s' ***\n" % (filename,newfilename))
print ("File %s exists? -> %s " % (filename, os.path.exists(filename)))
print ("File %s exists? -> %s " % (newfilename, os.path.exists(newfilename)))

print "\n*** Reading from file '%s' ***\n" % newfilename
f = open(newfilename, "r")
print f.read()
f.close()
print "##########################################"

####################
# Delete/remove file
####################
print "##########################################"
os.remove(newfilename)
print("\n*** Removing file '%s' ***\n" % newfilename)
print ("File %s exists? -> %s " % (filename, os.path.exists(filename)))
print ("File %s exists? -> %s " % (newfilename, os.path.exists(newfilename)))
print "##########################################"

