#!/usr/bin/python
import random

f = open("makemodels.csv", "r")
d = f.read()
f.close()

vehicles = {}
l = d.split("\n")
for i in range(len(l)):
    [make, models] = l[i].split("|")
    make = make.lstrip().rstrip()
    models = models.split(",")
    vehicles[make] = []
    for j in range(len(models)):
        vehicles[make].append(models[j].lstrip().rstrip())

exterior_color      = ["Black", "Blue", "White", "Red", "Gold", "Grey", "Silver", "Grey Metallic", "Midnight Blue", "Slate Green", "Maple Brown Metallic"]
interior_color      = ["Beige", "Black", "White", "Grey", "Charcoal"]
transmission        = ["Manual", "Automatic"]
drivetrain          = ["FWD", "RWD", "AWD"]
condition           = ["New", "Used", "Certified"]
dealer              = [1,2,3]
convenience         = ["HomeLink", "Navigation System", "Remote Start", "Adaptive Cruise Control"]
entertainment       = ["Bluetooth", "Premium Sound System"]
safety              = ["Backup Camera", "Brake Assist", "Stability Control"]
seating             = ["Heated Seats", "Leather Seats", "Memory Seat"]
exterior_features   = ["Alloy Wheels", "Sunroof/Moonroof"]


def gen_filter_data():
    jstr = 'var _makes = [' + "\n"
    for k in sorted(vehicles.keys()):
        jstr += '\t{Make: "' + k + '", Models: ["' + '", "'.join(vehicles[k]) + '"]},\n'
    jstr = jstr[:-2]  # remove the last comma
    jstr += '\n]\n'

    f = open("./filter.js", "w")
    f.write(jstr)
    f.close()


def generate_vin():
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    vin = ''
    for i in range(20):
        vin += chars[random.randrange(len(chars))]
    return vin

def randomly_pick_some(args):
    x = random.randrange(1,len(args))
    y = []
    for i in range(x):
        item = args[random.randrange(len(args))]
        if item in y:
            item = args[random.randrange(len(args))]
        if item not in y:
            y.append(item)
    return y

def create_car():
    v = dict()
    v["Vin"]                = generate_vin()
    v["Make"]               = vehicles.keys()[random.randrange(len(vehicles.keys()))]
    v["Model"]              = vehicles[v["Make"]][random.randrange(len(vehicles[v["Make"]]))]
    v["Mileage"]            = str(random.randrange(150000))
    v["Price"]              = str(random.randrange(15000,50000))
    v["Year"]               = str(random.randrange(1995,2018))
    v["ExteriorColor"]      = exterior_color[random.randrange(len(exterior_color))]
    v["InteriorColor"]      = interior_color[random.randrange(len(interior_color))]
    v["Transmission"]       = transmission[random.randrange(len(transmission))]
    v["Drivetrain"]         = drivetrain[random.randrange(len(drivetrain))]
    v["Condition"]          = condition[random.randrange(len(condition))]
    v["Image"]              = './pics/' + v["Make"] + ' ' + v["Model"] + '.jpeg'
    v["Dealer"]             = str(dealer[random.randrange(len(dealer))])
    v["Convenience"]        = randomly_pick_some(convenience)
    v["Entertainment"]      = randomly_pick_some(entertainment)
    v["Safety"]             = randomly_pick_some(safety)
    v["Seating"]            = randomly_pick_some(seating)
    v["ExteriorFeatures"]   = randomly_pick_some(exterior_features)
    return v


jstr = 'var _vehicles = [' + "\n"
for i in range(10):
    car = create_car()
    jstr += '\t{'
    for f in car.keys():
        item = car[f]
        if isinstance(item, basestring):
            jstr += f + ':"' + item + '",'
        else:
            istr = '["' + '", "'.join(item) + '"]'
            jstr += f + ':' + istr + ','
    jstr = jstr[:-1] # remove the last comma
    jstr += '},\n'
jstr = jstr[:-2] # remove the last comma
jstr += '\n]\n'

f = open("./vehicles.js", "w")
f.write(jstr)
f.close()

gen_filter_data()