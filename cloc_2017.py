#!/usr/bin/python

import subprocess
import sys

wcFile = subprocess.Popen(('find', '.', '-type', 'f',
              '-name', '*.html', '-exec', 'wc', '-l', '{}', ';'))

f = open('out.txt', 'w')
f.write(wcFile + '...n')
f.close()

