import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'fechar', {
      duration: 2000,
    });
  }
}
