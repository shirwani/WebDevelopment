#!/usr/bin/python

# Note - this code must run in Python 2.x and you must download
# http://www.pythonlearn.com/code/BeautifulSoup.py
# Into the same folder as this program

import urllib
from BeautifulSoup import *

url = raw_input('Enter - ')
#url = ' http://python-data.dr-chuck.net/comments_365700.html'
html = urllib.urlopen(url).read()

soup = BeautifulSoup(html)

# Retrieve all of the anchor tags
sum = 0
tags = soup('span')
for tag in tags:
    # Look at the parts of a tag
    print 'Contents:',tag.contents[0]
    sum +=int(tag.contents[0])

print sum



