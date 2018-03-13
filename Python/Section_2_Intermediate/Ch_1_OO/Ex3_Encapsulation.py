#!/usr/bin/python

class Parent:
    __password    = "JK*(89_Gdjs!"  # private
    _homeAlarmPin = "bugzy357"      # protected
    phoneNumber   = "384-555-8772"  # public

class Child(Parent):
    def __init__(self):
        print "phoneNumber: %s" % self.phoneNumber
        print "_homeAlarmPin: %s" % self._homeAlarmPin

        # This would error out if uncommented
        #print "__password: %s" % self.__password

c = Child()
p = Parent()

print "phoneNumber: %s" % p.phoneNumber

# This will work, but is bad practice as _homeAlarmPin is protected
# and should only be accessed from within child class code
print "_homeAlarmPin: %s" % p._homeAlarmPin

# This would error out if uncommented
#print "__password: %s" % p.__password

