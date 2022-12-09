import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CandidatesService } from 'src/app/services/candidates.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-candidates',
  templateUrl: './dialog-candidates.component.html',
  styleUrls: ['./dialog-candidates.component.scss']
})
export class DialogCandidatesComponent implements OnInit {

  candidateForm: any
  currentDate: any = Date.now()
  selectedIndex: number = 0
  myControl = new FormControl(null)
  filteredOptions: Observable<string[]> | undefined
  candidateId: string = ''
  states: string[] = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private candidatesServices: CandidatesService
  ) { }

  ngOnInit() {

    this.createCandidateForm()

  }

  createCandidateForm() {

    this.candidateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      weight: ['', [Validators.required, Validators.max(150)]],
      height: ['', [Validators.required, Validators.min(140), Validators.max(200)]],
      state: ['', Validators.required],
      modality: this.fb.array([]),
      passport: this.fb.group({
        expirationDate: '',
        isValid: false
      }),
      showToCustomer: false,
      social: this.fb.group({
        facebook: '',
        instagram: ''
      }),
      traveled: '',
      favorite: false,
      profileImage: '',
      contactNumber: ['', [Validators.required, Validators.minLength(11)]]
    })

  }

  filterStates() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  _filter(value: string): string[] {

    const filterValue = value.toLowerCase()

    return this.states.filter(state => state.toLowerCase().includes(filterValue))

  }

  uploadFile(event: any) {

    let file = event.target.files[0]
    let formData = new FormData
    formData.append('selected_files', file)

    this.candidatesServices.uploadFiles(this.candidateId, formData).subscribe()

  }

  saveAndContinue(): void {

    // if(!this.candidateForm.valid) {
    //   return this.candidateForm.markAllTouched()
    // }

    let body = {
      "name": "marcelo.pucca@itlean.com.br",
      "age": 33,
      "weight": 33,
      "height": "190",
      "state": "AL - Alagoas",
      "modality": null,
      "passport": {
        "expirationDate": "2022-12-21",
        "isValid": false
      },
      "showToCustomer": false,
      "social": {
        "facebook": "facebook instagram",
        "instagram": "sdfsdfsd"
      },
      "traveled": "",
      "favorite": false,
      "profileImage": "",
      "contactNumber": "12312312312"
    }

    this.candidatesServices.createCandidate(body).subscribe((result: any) => {

      this.candidateId = result.id
      this.selectedIndex = 1

    }, error => {

      console.log(error, 'error ocurrent here')

    })


  }

}
