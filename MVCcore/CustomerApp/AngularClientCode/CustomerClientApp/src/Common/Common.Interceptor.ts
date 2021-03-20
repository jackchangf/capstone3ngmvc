
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Common.Global';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(public global: Global) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available, intercepts all http request before sent to server
        request = request.clone({
            setHeaders: {
                //Authorization: `Bearer ${this.global.token}`
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return next.handle(request);
    }
}
