from django import forms
from .models import Post
#from .models import Input

class PostForm(forms.Form):

	name = forms.CharField(max_length=100)

	# fields = ['city']		
			
			
