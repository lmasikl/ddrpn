from django.conf.urls import url, include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^obtain-auth-token/$', obtain_auth_token, name='obtain-auth-token'),
    url(r'^api/v0/users/', include('users.urls', namespace='users')),
]
