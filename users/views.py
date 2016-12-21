# coding=utf-8

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from users.models import User
from users.serializers import UserDetailSerializer, UserListSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)

    def get_serializer_class(self):
        if self.action == 'list':
            serializer = UserListSerializer
        else:
            serializer = UserDetailSerializer

        return serializer
