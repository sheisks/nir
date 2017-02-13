from django.shortcuts import render
from django import forms
from search_site.forms import PostForm

# Create your views here.
from django.http import HttpResponse
import search_site.tests

def index(request):
    s = json.dumps(tests.get_data())
    return HttpResponse(s)

def html(request):
    return render(request, "search_site/post_list2.html", {});


def myform(request):
	if request.method == "GET":
		form = PostForm()
	else:
		form = PostForm(request.POST)
	
	return HttpResponse("---");