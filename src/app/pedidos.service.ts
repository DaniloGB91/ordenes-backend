import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fetchAuthSession } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'https://iwg3s9oaz8.execute-api.us-east-1.amazonaws.com/test/api/pedidos';

  constructor(private http: HttpClient) {}

  obtenerPedidos(): Observable<any> {
    return from(fetchAuthSession()).pipe(
      switchMap(session => {
        const token = session.tokens?.accessToken?.toString() ?? '';
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        return this.http.get<any>(this.apiUrl, { headers });
      })
    );
  }
}