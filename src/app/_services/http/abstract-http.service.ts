import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractHttpService {
  baseuri: string;
  protected constructor(
      protected http: HttpClient
  ) {
    this.baseuri = `${environment.api_base}`;
  }
}
