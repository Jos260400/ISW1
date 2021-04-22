from django.db import models
from neomodel import StructuredNode, StringProperty, IntegerProperty, UniqueIdProperty, RelationshipTo
from django_neomodel import DjangoNode


# Create your models here.
class SocialMediaPlatform(StructuredNode):
    name = StringProperty()
    url = StringProperty()

