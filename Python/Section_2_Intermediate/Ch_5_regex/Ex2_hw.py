#!/usr/bin/python

import re

f = open("Ex2_2.txt", "r")
txt = f.read()
f.close()

nums = re.findall('[0-9]+', txt)
sum = 0
print len(nums)
for n in nums:
    sum += int(n)

print sum