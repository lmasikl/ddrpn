# -*- coding: utf-8 -*-

from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined', 'is_superuser', 'is_staff'
        )
