from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

def health(request):
    return HttpResponse("Service is running.")

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()

    def get_serializer_class(self):
        return RoomSerializer