#!/usr/bin/python


class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)
    
    def disp(self):
        print self.items
        print "#################################"


s = Queue()

s.enqueue('A')
s.enqueue('B')
s.enqueue('C')
s.enqueue('D')
s.enqueue('E')
s.disp()

s.dequeue()
s.dequeue()
s.disp()

s.enqueue('F')
s.enqueue('G')
s.disp()

