#!/usr/bin/python

import re

line = 'From: blah blah blah'
print line.find('blah')
print re.search('blah', line)

line = 'My 2 favorite numbers are 19 and 42'
print re.findall('[0-9]+', line)

line = 'From: Using the : character'
# Greedy matching - longest match (default)
print re.findall('^F.+:', line)
# Non-Greedy matching - shortest match (use '?' character)
print re.findall('^F.+?:', line)

line = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
# Search line that starts with 'From', but only return what's inside the ()
print re.findall('^From (\S+?@\S+)', line)

# Get domian name
print re.findall('^From .*@(\S+)', line)
