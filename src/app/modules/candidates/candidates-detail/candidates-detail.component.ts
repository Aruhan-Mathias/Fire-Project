import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.scss']
})
export class CandidatesDetailComponent implements OnInit {

  id: string = ''
  inscricao: Subscription | any

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
    })

  }

  ngOnDestroy() {

    this.inscricao.unsubscribe()

  }

}
