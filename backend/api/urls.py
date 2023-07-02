from django.urls import path,include
from . import views

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'upload', views.UploadViewSet, basename="upload")


urlpatterns = [
    path('', views.getData),
    path('img-upload/', views.FileUploadView.as_view()),
    path('', include(router.urls)),

]