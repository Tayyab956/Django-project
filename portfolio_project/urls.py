from django.contrib import admin
from django.urls import path
from portfolio_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index_view, name='index'),          # Home page
    path('contact/', views.contact_view, name='contact'),
    path('education/', views.education_view, name='education'),
    path('skills/', views.skills_view, name='skills'),
    path('projects/', views.projects_view, name='projects'),
    path('experience/', views.experience_view, name='experience'),
]
