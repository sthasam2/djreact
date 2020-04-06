"""
API Views
"""

from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.models import Article
from .serializers import ArticleSerializer


class ArticleListAPIView(ListAPIView):
    """Article LIST VIEW"""
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailAPIView(RetrieveAPIView):
    """Article RETRIEVE VIEW"""
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
