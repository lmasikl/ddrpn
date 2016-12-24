from django.conf.urls import include, url
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from rest_framework_swagger.views import get_swagger_view
from users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

schema_view = get_swagger_view(title='Dashboard API')

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^login/$', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^obtain-auth-token/$', obtain_auth_token, name='obtain-auth-token'),
    url(r'^swagger/$', schema_view),
    url(r'^api/v0/', include(router.urls)),
]
