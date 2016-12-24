# coding=utf-8

import logging
import uuid
from datetime import date
from random import randint

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from elizabeth import Personal

logger = logging.getLogger('__name__')


class User(AbstractUser):
    slug = models.SlugField(default=uuid.uuid4)

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    @staticmethod
    def _bootstrap(count=2000):
        person = Personal('ru')
        users = {}
        for i in range(count):
            sex = 'female' if randint(0, 1) else 'male'
            users[i] = User(
                username=person.username(),
                email=person.email(),
                date_joined=date(randint(2014, 2016), randint(1, 12), randint(1, 28)),
                first_name=person.name(sex),
                last_name=person.surname(sex),

            )

        User.objects.bulk_create(users.values())
