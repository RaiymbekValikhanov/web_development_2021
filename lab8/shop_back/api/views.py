from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Category, Product


# Create your views here.
def show_products(request):
    response = {}
    for item in Product.objects.all():
        response[item.pk] = item.to_json()
    return JsonResponse(response, status=200)

def show_product(request, idx):
    if idx > Product.objects.count():
        return HttpResponse('Error', status=404)
    return JsonResponse(Product.objects.get(pk=idx).to_json())

def show_categories(request):
    response = {}
    for item in Category.objects.all():
        response[item.pk] = item.to_json()
    return JsonResponse(response, status=200)

def show_category(request, idx):
    if idx > Category.objects.count():
        return HttpResponse('Error', status=404)
    return JsonResponse(Category.objects.get(pk=idx).to_json())



