# coding=utf-8

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from users.models import User
from users.serializers import UserSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated, IsAuthenticatedOrReadOnly)

    def get_serializer_class(self):
        if self.action == 'list':
            serializer = UserSerializer
        else:
            serializer = UserSerializer

        return serializer
