#!/usr/bin/python

######################
# Arithmetic Operators
#
# + Addition
# - Subtraction
# * Multiplication
# / Division
# % Modulus
# ** Exponent
# // Floor division
######################
a = 2 + 3
b = a - 2
c = a * b
print "############################"
print "2 + 3 = %d"    % a
print "%d - 2 = %d"   % (a, b)
print "%d * %d = %d"  % (a, b, c)
print "%d / %d = %d"  % (c, a, c / a)
print "10 %% 3  = %d" % (10 % 3)
print "13 // 3 = %d"  % (13 // 3)
print "############################"


###################################
# Comparison (Relational) Operators
#
# == is equal
# != is not equal
# > is greater than
# < is less than
# >= is greater than or equal to
# <= is less than or equal to
###################################
print "############################"
print "1 == 1 -> %r" % (1 == 1)
print "1 == 2 -> %r" % (1 == 2)
print "--------"
print "1 != 1 -> %r" % (1 != 1)
print "1 != 2 -> %r" % (1 != 2)
print "--------"
print "1 > 1 -> %r" % (1 > 1)
print "2 > 1 -> %r" % (2 > 1)
print "1 > 2 -> %r" % (1 > 2)
print "--------"
print "1 < 1 -> %r" % (1 < 1)
print "1 < 2 -> %r" % (1 < 2)
print "2 < 1 -> %r" % (2 < 1)
print "--------"
print "1 >= 1 -> %r" % (1 >= 1)
print "2 >= 1 -> %r" % (2 >= 1)
print "1 >= 2 -> %r" % (1 >= 2)
print "--------"
print "1 <= 1 -> %r" % (1 <= 1)
print "1 <= 2 -> %r" % (1 <= 2)
print "2 <= 1 -> %r" % (2 <= 1)
print "############################"


#########################################
# Assignment Operators
# =   : b = a
# +=  : b += a is the same as b = b + a
# -=  : b -= a is the same as b = b - a
# *=  : b *= a is the same as b = b * a
# /=  : b /= a is the same as b = b / a
# %=  : b %= a is the same as b = b % a
# **= : b **= a is the same as b = b ** a
# //= : b //= a is the same as b = b // a
#########################################
a = 2
b = 5
print "############################"
print "[a:%d, b:%d] " % (a, b)
print "b = 2 -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b += a
print "b += a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b -= a
print "b -= a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b *= a
print "b *= a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b /= a
print "b /= a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b %= a
print "b %%= a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b **= a
print "b **= a -> %d\n" % b

print "[a:%d, b:%d]" % (a, b)
b //= a
print "b //= a -> %d\n" % b
print "############################"


###############################
# Membership Operators
#
# in : 2 in [1, 2, 3, 4]
# not in: 2 not in [1, 3, 5, 7]
###############################
print "############################"
print "2 in [1, 2, 3, 4] -> %r" % (2 in [1, 2, 3, 4])
print "2 not in [1, 2, 3, 4] -> %r" % (2 not in [1, 2, 3, 4])
print "############################"

