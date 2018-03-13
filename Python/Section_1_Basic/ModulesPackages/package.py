#!/usr/bin/python

import sys
sys.path.append('./helpers')

# Import Apple and Android modules from Phones
from Phones import *
print Apple.hello()
print Android.hello()

# Import modules individually
import Phones.Apple as P
import Phones.Android as D
print P.hello()
print D.hello()

# Ambiguous import
from Phones.Apple import *
print hello()
from Phones.Android import *
print hello()

# Import module directly
sys.path.append('./helpers/Phones')
from Apple import *
print hello()
