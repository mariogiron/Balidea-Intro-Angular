import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('PASA POR EL INTERCEPTOR');
  return next(req);
};
