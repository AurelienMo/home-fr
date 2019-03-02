import { Injectable } from '@angular/core';
import {ToastService} from 'ng-uikit-pro-standard';

@Injectable({
  providedIn: 'root'
})
export class ToastHelperService {

  constructor(
      private toast: ToastService
  ) { }

  show(type: string, message: string, title: String = null) {
    switch (type) {
      case 'success':
        this.toast.success(message, title, this.getConfig());
        break;
      case 'info':
        this.toast.info(message, title, this.getConfig());
        break;
      case 'error':
        this.toast.error(message, title, this.getConfig());
        break;
    }
  }

  private getConfig() {
    return {
      closeButton: true,
      positionClass: 'md-toast-top-full-width',
      timeOut: 5000,
      toastClass: 'toast-class'
    };
  }
}
