from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, status=200, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(
                name=data['name'],
                description=data['description'],
                city=data['city'],
                address=data['address'],
            )
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json(), status=204)
    return JsonResponse({'lol':'kek'})

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Exception as e:
        return JsonResponse({'message': str(e)})

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.description = data['description']
        company.city = data['city']
        company.address = data['address']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def company_vacancies(request, company_id):
    if request.method == 'GET':
        vacancies = Company.objects.get(id=company_id).vacancies.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, status=200, safe=False)

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, status=200, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.filter(name__contains=data['company']).first()
            vacancy = Vacancy.objects.create(
                name=data['name'],
                description=data['description'],
                salary=data['salary'],
                company=company
            )
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(vacancy.to_json(), status=204)

@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Exception as e:
        return JsonResponse({'message': str(e)})

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.description = data['description']
        vacancy.salary = data['salary']
        try:
            company = Company.objects.filter(name__contains=data['company']).first()
            vacancy.company = company
        except Exception as e:
            return JsonResponse({'message': str(e)})
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

def vacancy_top_ten(request):
    if request.method == 'GET':
        vacancies_ten = Vacancy.objects.order_by('-salary')[:10]
        vacancies_ten_json = [vacancy.to_json() for vacancy in vacancies_ten]
        return JsonResponse(vacancies_ten_json, safe=False)
