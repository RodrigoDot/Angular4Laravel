import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component ({
  templateUrl : './accounts-view.component.html',
  styles : ['tbody tr {cursor: pointer}'],
})

export class AccountsViewComponent {

  public account: Object = {
    bank: {}
  }

  constructor(
    private httpService: AppHttpService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.view(params.id);
    })
  }

  view(id: number) {
    this.httpService.builder('accounts')
    .view(id)
    .then((res) => {
      this.account = res;
    })
  }

}
