from django.db import models

# Create your models here.

class Product(models.Model):

    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def to_json(self):
        json = {
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }
        return json


class Category(models.Model):

    name = models.CharField(max_length=255)

    def to_json(self):
        return {'name': self.name}