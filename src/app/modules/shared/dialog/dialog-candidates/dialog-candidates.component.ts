import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

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
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.createCandidateForm()
    console.log(this.currentDate)

  }

  createCandidateForm() {

    this.candidateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      weight: ['', [Validators.required, Validators.max(150)]],
      height: ['', [Validators.required, Validators.min(140), Validators.max(200)]],
      state: ['', Validators.required],
      datePassport: ['', Validators.required],
      instagramLink: ['', Validators.required],
      facebookLink: ['', Validators.required],
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

  saveAndContinue(): void {

    this.selectedIndex = 1

  }

}
