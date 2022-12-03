import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCandidates() {

    return this.http.get(`${environment.apiUrl}/collaborators`)

  }

}
