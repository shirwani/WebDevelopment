#!/usr/bin/python


class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items) - 1]

    def size(self):
        return len(self.items)

    def disp(self):
        print self.items
        print "#################################"

s = Stack()

s.push('A')
s.push('B')
s.push('C')
s.push('D')
s.push('E')
s.disp()

s.pop()
s.pop()
s.disp()

s.push('F')
s.push('G')
s.disp()
