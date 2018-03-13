#!/usr/bin/python


import urllib
from BeautifulSoup import *

url = raw_input('Enter URL: ')
count = int(raw_input('Enter count: '))
position = int(raw_input('Enter position: '))

#url = 'http://python-data.dr-chuck.net/known_by_Fikret.html'
#count = 4
#position = 3
position -= 1

print url
for i in range(count):
    html = urllib.urlopen(url).read()
    soup = BeautifulSoup(html)
    tags = soup('a')
    url = tags[position].get('href', None)
    name = url.split('known_by_')[-1].split('.html')[0]
    print url

