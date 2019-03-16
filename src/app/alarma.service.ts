import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmaService {

  constructor() { }

  public ponAlarma(tiempo: number): Observable<void> {
    return new Observable((sus) => {
      const exit = setTimeout(() => {
        sus.complete();
      }, tiempo);
      return {
        unsubscribe() { clearInterval(exit); }
      };
    });
}
}
