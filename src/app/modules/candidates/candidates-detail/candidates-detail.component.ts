import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.scss']
})
export class CandidatesDetailComponent implements OnInit {

  id: string = ''
  inscricao: Subscription | any

  constructor(
    private route: ActivatedRoute,
    private candidatesService: CandidatesService
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.getCandidateMedia(this.id)
    })

  }

  ngOnDestroy() {

    this.inscricao.unsubscribe()

  }

  getCandidateMedia(id: string) {

    this.candidatesService.getMediasByCandidateId(id).subscribe({
      next: (response) => {

        console.log(response)

      }
    })

  }

}
