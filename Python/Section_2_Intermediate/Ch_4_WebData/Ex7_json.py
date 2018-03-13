#!/usr/bin/python

# Use JSON to exchange data

import json

data = '''
{
    "name"  : "Chuck",
    "phone" : {
        "type"  : "intl",
        "number": "+1 734 303 4456"
    },
    "email" : {
        "hide"  : "yes"
    }
}
'''

info = json.loads(data)
print 'Name:',info["name"]
print 'Hide:',info["email"]["hide"]


# List
input = '''
[
    {
        "id"    : "001",
        "x"     : "2",
        "name"  : "Chuck"
    },
    {
        "id"    : "009",
        "x"     : "7",
        "name"  : "Norris"
    }
]
'''

# List is returned
info = json.loads(input)
print 'User count:', len(info)
for item in info:
    print 'Name',   item['name']
    print 'Id',     item['id']
    print 'x',      item['x']

