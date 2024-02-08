import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private urlApi = 'https://api-inmobiliaria.azurewebsites.net/api';
  private urlApi = 'https://localhost:7001/api';

  constructor(private http: HttpClient) { }

  public createHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

  public getAllTenants(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Inquilinos/GetInquilinos`, {headers: this.createHeaders()});
  }
  public getAllOwner(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Propietarios/GetPropietarios`, {headers: this.createHeaders()});
  }
  public getAllProperty(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Propiedades/GetPropiedades`, {headers: this.createHeaders()});
  }
  public getAllGuarantor(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Garante/GetGarantes`, {headers: this.createHeaders()});
  }
  public getAllContract(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Contrato/GetContratos`, {headers: this.createHeaders()});
  }
  public searchPropietario(searchTerm: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/Propietarios/GetPropietarios/Propietario?searchTerm=${searchTerm}`, {headers: this.createHeaders()});
  }
  public createPropietario(formValue:any): Observable<any> {
    console.log(formValue);
    return this.http.post<any>(`${this.urlApi}/Propietarios/CrearPropietario`, formValue, {headers: this.createHeaders()});
  }
  public createPropiedad(formValue:any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/Propiedades/CrearPropiedades`, formValue, {headers: this.createHeaders()});
  }
  public createInquilino(formValue:any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/Inquilinos/CrearInquilino`, formValue, {headers: this.createHeaders()});
  }
  public editPropietario(id: number, propietarioData: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/Propietarios/EditarPropietario/${id}`, propietarioData, {headers: this.createHeaders()});
  }
  public editInquilino(id: number, inquilinoData: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/Inquilinos/EditarInquilino/${id}`, inquilinoData, {headers: this.createHeaders()});
  }
  public login(formValue:any){
    return firstValueFrom(
      this.http.post<any>(`${this.urlApi}/Usuario/Login`, formValue)
    );
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
