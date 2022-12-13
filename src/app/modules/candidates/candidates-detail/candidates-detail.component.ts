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
  profileImage: any
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
    })

  }

  ngOnDestroy() {

    this.inscription.unsubscribe()

  }

  getCandidateMedia(event: any) {

    this.candidateForm = event

    this.candidatesService.getMediasByCandidateId(event.id).subscribe({

      next: (response: any) => {

        this.medias = response.files.filter((media: any) => `https://${media.fileUrl}` !== this.candidateForm.profileImage)

        this.isLoading = false

      },
      error(err) {

        console.log(err, 'error ocurrent here')

      },

    })

  }

}
