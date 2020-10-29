import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient ) { }

  getSuperHeroImage(value): Observable<any>{
    // let idValue = document.getElementById("superid").value;

    return this.http.get("https://superheroapi.com/api/10214389564851377/"+value.superhero);
  }
}
