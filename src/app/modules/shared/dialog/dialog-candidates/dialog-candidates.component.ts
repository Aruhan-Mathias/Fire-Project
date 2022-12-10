import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-dialog-candidates',
  templateUrl: './dialog-candidates.component.html',
  styleUrls: ['./dialog-candidates.component.scss']
})
export class DialogCandidatesComponent implements OnInit {

  candidateForm: any
  currentDate: any = Date.now()
  dropzoneHovered: boolean = false
  isLoading: boolean = false
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
    private candidatesService: CandidatesService
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




  patchToSetProfileImage(id: string, candidateFormValue: any) {

    this.candidatesService.updateColaborator(id, candidateFormValue).subscribe({
      next: (response) => {

        this.isLoading = false
        // TODO: add snackbar success message

      }, error: (err) => {

        console.log(err, 'error ocurrent here')

      }
    })

  }



  uploadFile(event: any) {

    this.isLoading = true
    let file = event.target.files[0]
    let formData = new FormData
    formData.append('selected_files', file)

    this.candidatesService.uploadFiles(this.candidateId, formData).subscribe({
      next: (response: any) => {

        let newData = { profileImage: `https://${response.data.fileUrl}` }
        this.patchToSetProfileImage(this.candidateId, newData)

      },
      error: (err) => {

        this.isLoading = false
        // TODO: add snackbar success message

      },
    })

  }

  saveAndContinue(): void {

    if(!this.candidateForm.valid) {
      console.log('oi')
      return this.candidateForm.markAllAsTouched()
    }

    this.isLoading = true
    this.candidatesService.createCandidate(this.candidateForm.value).subscribe({

      next: (response: any) => {

        this.isLoading = false
        this.candidateId = response.data.id
        this.selectedIndex = 1

      },
      error: (err) => {

        console.log(err)

      },

    })

  }

}
