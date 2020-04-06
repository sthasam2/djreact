"""
Article API

Consists of Rest serializers
1. Article Serializer: Model Serializer (Article)
"""

from rest_framework import serializers
from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = [
            'title',
            'content'
        ]
