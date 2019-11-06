import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private url = '../assets/send-mail.php';
  private url_doc = '../assets/doc/';
  private url_doc_pdf = '../assets/doc/cv.pdf';
  public headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  performGetEx(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getDocPath(doc = '') {
    return this.http.get<any>(this.url_doc + doc);
  }

  getPdfPathWithHeaders() {
    return this.http.get<any>(this.url_doc_pdf, { responseType: 'json', headers: this.headers });
  }

  getIpAddress() {
    return this.http
      .get('http://api.ipstack.com/check?access_key=28be7cccfcea83eb3274534367d002b4&output=json')    
      .map(response => response || {})
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse):
    Observable<any> {
    //Log error in the browser console
    console.error('observable error: ', error);

    return Observable.throw(error);
  }

}
