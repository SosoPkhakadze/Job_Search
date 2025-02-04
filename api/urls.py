from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('search-jobs/', views.search_jobs, name='search_jobs'),
    path('jobs', views.getJobs, name='getjobs'),
    path('jobs/<str:pk>', views.getJob, name='getjob'),
]