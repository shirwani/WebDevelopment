#!/usr/bin/python

from glob import glob
import os

def fcn(d):
    os.chdir(d)
    print os.getcwd()
    for sd in glob(d + '/*/'):
        fcn(sd)

fcn('/Users/zshirwan/PycharmProjects/Module_4_python')

