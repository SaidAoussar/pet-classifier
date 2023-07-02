from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from .serializers import UploadSerializer
from django.http import HttpResponse









class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        content_type = file_uploaded.content_type
        response = "POST API and you have uploaded a {} file".format(content_type) 
        return Response(response)




class FileUploadView(APIView):
    parser_classes = [MultiPartParser]
    def get(self, request):
        return Response({'message': 'File uploaded successfully'})
   
    def post(self, request,format=None):
        file_obj = request.FILES['file']
        # Process or save the uploaded file here
        # You can access the file using the 'file_obj' variable
        print("file_obj" + file_obj)

        return Response({'message': 'File uploaded successfully'})

@api_view(['GET'])
def getData(request):
    person = {
        'name': 'Said Aoussar',
        'age': 25,
    }
    return Response(person)