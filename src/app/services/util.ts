import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environments";

export interface Sakrameta { idSakrameta: string; nom: string; }
export interface Fikambanana { idFikambanana: string; nom: string; }
export interface Vaomiera { idVaomiera: string; nom: string; }
export interface MaritalStatus { idMarital: string; nom: string; }
export interface Genre { idGenre: string; nom: string; }

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private apiUrl = `${environment.apiUrl}/api/util`;

  constructor(private http: HttpClient) {}

  getSakrameta(): Observable<Sakrameta[]> {
    return this.http.get<Sakrameta[]>(`${this.apiUrl}/sakrameta`);
  }

  getFikambanana(): Observable<Fikambanana[]> {
    return this.http.get<Fikambanana[]>(`${this.apiUrl}/fikambanana`);
  }

  getVaomiera(): Observable<Vaomiera[]> {
    return this.http.get<Vaomiera[]>(`${this.apiUrl}/vaomiera`);
  }  

  getMaritalStatuses(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>(`${this.apiUrl}/marital`);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiUrl}/genre`);
  }  
}
