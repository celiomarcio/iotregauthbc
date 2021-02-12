import os
import time
import sys
import subprocess

interval = int(sys.argv[2])
base_url = str(sys.argv[3])

while 1:
	time.sleep(interval)
	a = open("/proc/loadavg")
	b = a.readline().split(" ")
	loadavg = float(b[0])*100
	a.close()
	value = '{"value": %f}' % loadavg
	url = base_url 
	subprocess.call(['curl', '-XPOST', '-H', 'Content-type: application/json', '-d', value, url])