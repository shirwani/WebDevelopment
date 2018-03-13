#!/usr/bin/perl

use strict;
use warnings FATAL => 'all';

my %h = ();
$h{'name'} = "NAME";
$h{'id'} = 234;
$h{'age'} = 29;

print sort keys(%h);


