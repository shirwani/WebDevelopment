#!/usr/bin/python

import sys
sys.path.append('./helpers')

# Import functions from module modules_helper
# Print methods in the module modules_helper
# Call the function
import modules_helper
print dir(modules_helper)
modules_helper.print_hello_world()

# Import functions from module modules_helper
# Print methods in the module modules_helper
# Call the function
import modules_helper as M
print dir(M)
M.print_hello_world()

# Import all functions from modules_helper
from modules_helper import *
print_hello_world()
