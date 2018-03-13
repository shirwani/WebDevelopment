#!/usr/bin/python

# Use XML to exchange documents

import xml.etree.ElementTree as ET

data = '''
<stuff>
    <persons>
        <person x="2">
            <id>001</id>
            <name>Chuck</name>
        </person>
        <person x="7">
            <id>001</id>
            <name>Jones</name>
        </person>
    </persons>
</stuff>
'''

stuff = ET.fromstring(data)
lst = stuff.findall('persons/person')
print 'Person count:', len(lst)
for item in lst:
    print 'Name:', item.find('name').text
    print 'Id:', item.find('id').text
    print 'x:', item.get('x')
