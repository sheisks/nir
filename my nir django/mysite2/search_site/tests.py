import json
from django.test import TestCase

def get_data():
	# load
	with open('result', 'r') as fp:
		data = json.load(fp)
	
