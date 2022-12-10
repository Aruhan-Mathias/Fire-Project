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
  isLoading: boolean = false
  candidateForm: any = ''
  inscription: Subscription | any
  medias: any = []

  constructor(
    private route: ActivatedRoute,
    private candidatesService: CandidatesService
  ) { }

  ngOnInit(): void {

    this.inscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.isLoading = true
      this.getCandidateMedia(this.id)
    })

  }

  ngOnDestroy() {

    this.inscription.unsubscribe()

  }

  getCandidateMedia(id: string) {

    this.candidatesService.getMediasByCandidateId(id).subscribe({
      next: (response: any) => {

        this.medias = response.files.map((media: any) => {
          return {
            url: `https://${media.fileUrl}`,
            key: media.key
          }
        })

        this.isLoading = false

      },
      error(err) {

        console.log(err, 'error ocurrent here')

      },

    })

  }


  getProfileImageURL(event: any) {

    this.candidateForm = event
    this.isLoading = false

  }

}
