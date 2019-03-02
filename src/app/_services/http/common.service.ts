import { Injectable } from '@angular/core';
import {AbstractHttpService} from './abstract-http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends AbstractHttpService {

  send(data: object) {
    return this.http.post(`${this.baseuri}/contact`, data).pipe();
  }
}
