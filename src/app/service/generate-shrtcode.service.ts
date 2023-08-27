import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateShrtcodeService {

  constructor(
    public http: HttpClient
  ) { }

  GenerateShrtcode(shrtcode: string): Observable<any>  {
    const headers = new HttpHeaders()
    headers.append('Content-Type','application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.get(environment.SHRTCODE+shrtcode + shrtcode,{headers:headers})
  }
}
