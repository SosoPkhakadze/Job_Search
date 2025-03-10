# Generated by Django 5.0.2 on 2024-05-12 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JobListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('requirements', models.TextField()),
                ('salary', models.CharField(blank=True, max_length=100, null=True)),
                ('company_name', models.CharField(max_length=255)),
                ('website_link', models.URLField()),
            ],
        ),
    ]
