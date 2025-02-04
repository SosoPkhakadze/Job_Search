# api/models.py
from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    requirements = models.TextField()
    salary = models.CharField(max_length=100, null=True, blank=True)
    company_name = models.CharField(max_length=255)
    website_link = models.URLField()

    def __str__(self):
        return self.title
