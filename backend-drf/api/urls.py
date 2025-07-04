from django.urls import path
from accounts import views as UserViews
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


urlpatterns = [
    path('register/', (UserViews.RegisterView.as_view())),
    
]

