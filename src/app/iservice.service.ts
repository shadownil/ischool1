import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from './details/Ischooldta';


@Injectable({
  providedIn: 'root'
})
export class IserviceService {

  constructor(private _Http : HttpClient) { }

  getData():Observable<University[]>
  {
    return this._Http.get<University[]>("./assets/db.json")
  }
}
