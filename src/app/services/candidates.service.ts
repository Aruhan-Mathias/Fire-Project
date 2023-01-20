import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  headers = { headers: {'Access-Control-Allow-Origin': 'ngrok-skip-browser-warning: true'} }

  constructor(
    private http: HttpClient
  ) { }


  getAllCandidates() {

    return this.http.get(`${environment.apiUrl}/api/collaborators`, this.headers)

  }

  getCandidateById(id: string) {

    return this.http.get(`${environment.apiUrl}/api/collaborator/${id}`, this.headers)

  }

  createCandidate(formValue: any) {

    return this.http.post(`${environment.apiUrl}/api/collaborator/create`, formValue, this.headers)

  }

  deleteCandidate(id: string) {

    return this.http.delete(`${environment.apiUrl}/api/collaborator/delete/${id}`, this.headers)

  }

  deleteCandidateFiles(id: string) {

    return this.http.delete(`${environment.apiUrl}/api/file/delete/${id}`, this.headers)

  }

  getMediasByCandidateId(id: string) {

    return this.http.get(`${environment.apiUrl}/api/file/${id}`, this.headers)

  }

  updateColaborator(id: string, formValue: any) {

    return this.http.patch(`${environment.apiUrl}/api/collaborator/${id}`, formValue, this.headers)

  }

  uploadFiles(id: string, formData: any) {

    return this.http.post(`${environment.apiUrl}/api/file/upload/${id}`, formData, this.headers)

  }

}
