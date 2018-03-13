#!/usr/bin/python

class Employee:
    count   = 0
    name    = ""
    salary  = 0

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.count += 1

    @staticmethod
    def display_count():
        """
        Display the private property "count"
        """
        print "There are %d employees" % Employee.count

    def display_employee(self):
        """
        Display employee name and salary
        """
        print "[Name: %s] [Salary: %d]" % (self.name, self.salary)


Employee.display_count()

print "Creating employees..."
e1 = Employee("Joel", 2000)
e2 = Employee("Zara", 3000)

e1.display_employee()
e2.display_employee()

Employee.display_count()

