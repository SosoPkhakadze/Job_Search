from django.shortcuts import render
import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/search-jobs/',
            'method': 'GET',
            'body': None,
            'description': 'Search for jobs'
        },
        {
            'Endpoint': '/jobs/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of jobs'
        },
        {
            'Endpoint': '/jobs/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single job object'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def search_jobs(request):
    query = request.GET.get('q', '')  
    page = request.GET.get('page', 1)
    url = "https://jsearch.p.rapidapi.com/search"
    headers = {
        "X-RapidAPI-Key": "YOUR_API_HERE",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }
    querystring = {
        "query": query,
        "page": page,
        "num_pages": 1
    }
    response = requests.get(url, headers=headers, params=querystring)
    if response.status_code == 200:
        return Response(response.json())
    else:
        return Response({"error": "Failed to fetch job listings"}, status=500)
    

    
@api_view(['GET'])
def getJobs(request):
    return ...

@api_view(['GET'])
def getJob(request):
    return ...