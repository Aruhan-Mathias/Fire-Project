import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  isLoading: boolean = false
  allCandidates: any
   = [
    { id: 1, name: 'Larissa Emanuela', age: 32, weight: 55.5, profileBase64: '1', passportStatus: 'notValid', status: true },
    { id: 2, name: 'Jorge Cardoso', age: 44, weight: 55.5, profileBase64: '', passportStatus: 'valid', status: false },
    { id: 3, name: 'Adriano Candeas', age: 22, weight: 55.5, profileBase64: '1', passportStatus: 'valid', status: true },
    { id: 4, name: 'Mariana Fernandes', age: 19, weight: 55.5, profileBase64: '', passportStatus: 'notValid', status: false },
    { id: 5, name: 'Geogia Maria da Silva Lourder', age: 20, weight: 55.5, profileBase64: '1', passportStatus: 'valid', status: true },
    { id: 6, name: 'Larissa Emanuela', age: 32, weight: 55.5, profileBase64: '1', passportStatus: 'notValid', status: true },
    { id: 7, name: 'Jorge Cardoso', age: 44, weight: 55.5, profileBase64: '', passportStatus: 'valid', status: false },
    { id: 8, name: 'Adriano Candeas', age: 22, weight: 55.5, profileBase64: '1', passportStatus: 'valid', status: true },
    { id: 9, name: 'Mariana Fernandes', age: 19, weight: 55.5, profileBase64: '', passportStatus: 'notValid', status: true },
    { id: 10, name: 'Geogia Maria da Silva Lourder', age: 20, weight: 55.5, profileBase64: '1', passportStatus: 'valid', status: true },
  ]

  constructor(
    private candidatesService: CandidatesService
  ) { }

  ngOnInit(): void {

    // this.getCandidates()

  }

  getCandidates() {

    this.allCandidates = this.candidatesService.getAllCandidates().subscribe((result) => {

      console.log(result)

    }, err => {

      console.log(err)

    })

  }

  openDialogNewCandidate() {

    this.isLoading = true

  }

}
