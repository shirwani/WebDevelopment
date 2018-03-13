#!/usr/bin/python

import sys
sys.path.append('./helpers')

# Import functions from module Ex11_modules_helper
import Ex11_modules_helper as M

# Print methods in the module Ex11_modules_helper
print dir(M)

# Calling the function
M.print_hello_world()


# Import all
from Ex11_modules_helper import *
print_hello_world()
