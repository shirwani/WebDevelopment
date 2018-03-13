#!/usr/bin/python

import json

f = open("dictionary.txt", "r")
d = f.read()
f.close()

dict = d.split()

f = open("dictionary.json", "w")
f.write(json.dumps(dict))
f.close()


