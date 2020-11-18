"""
articles app API URLS
"""

from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='api')
urlpatterns = router.urls


# from django.urls import path

# from .views import ArticleListAPIView, ArticleDetailAPIView

# urlpatterns = [
#     path('', ArticleListAPIView.as_view(), name='home'),
#     path('<int:pk>', ArticleDetailAPIView.as_view(), name='article-detail'),
# ]
