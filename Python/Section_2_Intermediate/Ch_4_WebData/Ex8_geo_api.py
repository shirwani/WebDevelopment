#!/usr/bin/python


import urllib
import json


def HW():
    # serviceurl = 'http://maps.googleapis.com/maps/api/geocode/json?'
    serviceurl = 'http://python-data.dr-chuck.net/geojson?'

    address = raw_input('Enter location: ')

    url = serviceurl + urllib.urlencode({'sensor':'false', 'address': address})
    print 'Retrieving', url
    uh = urllib.urlopen(url)
    data = uh.read()
    print 'Retrieved',len(data),'characters'

    try: js = json.loads(str(data))
    except: js = None

    if 'status' not in js or js['status'] != 'OK':
        print '==== Failure To Retrieve ===='
        print data
    else:
        #print json.dumps(js, indent=4)

        #lat = js["results"][0]["geometry"]["location"]["lat"]
        #lng = js["results"][0]["geometry"]["location"]["lng"]
        #print 'lat',lat,'lng',lng
        #location = js['results'][0]['formatted_address']
        #print location

        place_id = js["results"][0]["place_id"]
        print 'Place id', place_id


def GoogleGeoAPI():
    serviceurl = 'http://maps.googleapis.com/maps/api/geocode/json?'
    address = raw_input('Enter location: ')
    url = serviceurl + urllib.urlencode({'sensor': 'false', 'address': address})

    print 'Retrieving', url
    uh = urllib.urlopen(url)
    data = uh.read()
    print 'Retrieved', len(data), 'characters'

    try:
        js = json.loads(str(data))
    except:
        js = None

    if 'status' not in js or js['status'] != 'OK':
        print '==== Failure To Retrieve ===='
        print data
    else:
        # print json.dumps(js, indent=4)

        lat = js["results"][0]["geometry"]["location"]["lat"]
        lng = js["results"][0]["geometry"]["location"]["lng"]
        print 'lat',lat,'lng',lng
        location = js['results'][0]['formatted_address']
        print location

        place_id = js["results"][0]["place_id"]
        print 'Place id', place_id


# GoogleGeoAPI()


