#!/usr/bin/python


import urllib
from BeautifulSoup import *
import re

#url = 'http://www.cnn.com/2017/03/20/politics/three-bucket-health-care/index.html'
url = raw_input('Enter URL: ')

from HTMLParser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

def keywordsExist(text):
    count = 0
    keywords = ['islam', 'muslim', 'pakistan', 'saudi', 'killing', 'genocide']
    for key in keywords:
        if re.search(key,text,re.IGNORECASE):
            count += 1
            print "[%s]" % key
    return count

def getTitle(soup):
    return (soup('title')[0]).contents[0]

def getUpdated(text):
    idx = text.find('Updated')
    updatedstr = (text[idx:idx + 100]).split()
    return ' '.join(updatedstr[0:8])


html = urllib.urlopen(url).read()
soup = BeautifulSoup(html)

divs = soup()
text = ''
for d in divs:
    if d.get('class') == 'zn-body__paragraph':
        text += strip_tags(str(d)) + "\n\n"

#print text

if keywordsExist(text) > 0:
    print getTitle(soup)
    print getUpdated(html)

