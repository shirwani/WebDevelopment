#!/usr/bin/python


import urllib
from BeautifulSoup import *

count = 0
baseurl = 'http://www.cnn.com/'
urllist = []

def findlinks(url):
    global count
    global baseurl
    global urllist

    print url
    count += 1
    html = urllib.urlopen(baseurl).read()
    soup = BeautifulSoup(html)
    tags = soup('a')
    for tag in tags:
        xurl = tag.get('href', None)
        if re.search('^http://', xurl) or re.search('^https://', xurl):
            xurl = xurl
        elif re.search('^//.+\.com', xurl):
            xurl = 'http:' + xurl
            #print xurl
        else:
            if re.search('/+', xurl):
                #print xurl
                xurl = baseurl + re.findall("^/(.*)", xurl)[0]
                #print xurl
            else:
                xurl = baseurl + xurl
                #print xurl
        print "%s" % xurl
        #findlinks(xurl)
        urllist.append(xurl)


findlinks(baseurl)
urllist = list(set(urllist))
#print urllist






