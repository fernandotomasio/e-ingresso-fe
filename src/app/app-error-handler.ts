import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './core/notification.service';
@Injectable()
export class ApplicationErrorHandler implements ErrorHandler {


  constructor(private injector: Injector, private zone: NgZone) {  }

  handleError(errorResponse: HttpErrorResponse| any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            // redirecionar para tela de login
            break
          case 403:
            this.injector.get(NotificationService).openSnackBar(message)
            break
          case 404:
            this.injector.get(NotificationService).openSnackBar(message)
            break
          case 500:
            this.injector.get(NotificationService).openSnackBar(message)
            break
          case 400:
            this.injector.get(NotificationService).openSnackBar(message)
            break;
        }
      });
    }
  }

}
