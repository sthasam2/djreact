"""
API Views
"""

from rest_framework import viewsets

from articles.models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing article instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


# from rest_framework.generics import ListAPIView, RetrieveAPIView

# class ArticleListAPIView(ListAPIView):
#     """Article LIST VIEW"""
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDetailAPIView(RetrieveAPIView):
#     """Article RETRIEVE VIEW"""
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
