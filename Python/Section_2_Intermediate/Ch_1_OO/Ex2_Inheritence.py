#!/usr/bin/python

class Thing:
    __count = 0

    def __init__(self):
        Thing.__count += 1

    @staticmethod
    def disp_count():
        print "Number of Things: %d" % Thing.__count


class LivingThing(Thing):
    __count = 0

    def __init__(self):
        Thing.__init__(self)
        LivingThing.__count += 1

    @staticmethod
    def disp_count():
        print "Number of LivingThings: %d" % LivingThing.__count


class NonLivingThing(Thing):
    __count = 0

    def __init__(self):
        Thing.__init__(self)
        NonLivingThing.__count += 1

    @staticmethod
    def disp_count():
        print "Number of NonLivingThings: %d" % NonLivingThing.__count


class Furniture(NonLivingThing):
    __count = 0

    def __init__(self):
        NonLivingThing.__init__(self)
        Furniture.__count += 1

    @staticmethod
    def disp_count():
        print "Number of Furniture: %d" % Furniture.__count


class Animal(LivingThing):
    __count = 0

    def __init__(self):
        LivingThing.__init__(self)
        Animal.__count += 1

    @staticmethod
    def disp_count():
        print "Number of Animals: %d" % Animal.__count


class Plant(LivingThing):
    __count = 0

    def __init__(self):
        LivingThing.__init__(self)
        Plant.__count += 1

    @staticmethod
    def disp_count():
        print "Number of Plants: %d" % Plant.__count


Animal()
Animal()
Plant()
Furniture()

Thing.disp_count()
NonLivingThing.disp_count()
Furniture.disp_count()
LivingThing.disp_count()
Animal.disp_count()
Plant.disp_count()




