import { Injectable } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const token = this.storageService.getToken();
    const token = null;

    if(token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}