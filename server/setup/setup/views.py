from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm

def hello_world(request):
    return JsonResponse({'message': 'Hello, world!'})
@csrf_exempt 
def create_user(request):
    if(request.method == 'POST'):
        data = json.loads(request.body.decode('utf-8'))
        username=data['email']
        password=data['password']
        user = User.objects.create_user(username,  password)
        user.save()
        return HttpResponse('User created')
    else:
        return HttpResponse('Invalid request')
def signin(request):
    data= json.loads(request.body.decode('utf-8'))
    username=data['email']
    password=data['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        return HttpResponse('User logged in')
    else:
        return HttpResponse('User not logged in')
def signout(request):
    logout(request)
    return HttpResponse('User logged out')