from django.urls import path
from .views import *

urlpatterns = [
    path('products/', show_products),
    path('products/<int:idx>/', show_product),
    path('categories/', show_categories),
    path('categories/<int:idx>/', show_category)
]