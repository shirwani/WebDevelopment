#!/usr/bin/python


import urllib
from BeautifulSoup import *

url = 'http://www.cnn.com'

html = urllib.urlopen(url).read()
soup = BeautifulSoup(html)

tags = soup('a')

for tag in tags:
    print tag.get('href', None) # Default value of None
