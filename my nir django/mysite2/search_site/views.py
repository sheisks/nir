#coding: utf-8

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
    cntx = {'diagram_data': str(get_students_per_course_and_region()),
			'map_data': str(get_students_per_region()),
			'diagram_data2': str(get_rating_per_region()),
            'diagram_data3': str(get_age_per_region()),
            'histogram1': str(get_age_per_region2())}
    return render(request, "search_site/post_list2.html", Context(cntx,autoescape=False))

def html_page(request):
    return render(request, "search_site/chart1.html", {});


def myform(request):
	if request.method == "GET":
		form = PostForm()
	else:
		form = PostForm(request.POST)
	
	return HttpResponse("---");

# def useappl(request, useappl_id):
#     if request.method == 'POST':
#         form = ApplicationForm(request.POST)
#         if form.is_valid():
#             # Обработка
#             form.save() # сохранение  модели
#             return HttpResponseRedirect('/thanks/')
#     else:
#         form = ApplicationForm()
#
#     return render(request, 'post_list2.html', {'form': form});
