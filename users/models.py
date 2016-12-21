# coding=utf-8

import logging
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


logger = logging.getLogger('momento')


class User(AbstractUser):
    slug = models.SlugField(default=uuid.uuid4)

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')
