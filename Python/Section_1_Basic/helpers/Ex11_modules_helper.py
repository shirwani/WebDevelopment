#!/usr/bin/python


########################
# Function without input
########################
def print_hello_world():
    print "[print_hello_world()]: Hello World!"


#########################
# Function with one input
#########################
def print_str(inputstr):
    print "[print_str()]: " + inputstr


###########################
# Function with three input
###########################
def print_str_3_inputs(greeting, name, punctuation):
    print("[print_str_3_inputs()]: %s %s%s" % (greeting, name, punctuation))


################################
# Function with default argument
################################
def print_default_str(inputstr="Hello World!"):
    print "[print_default_str()]: " + inputstr

