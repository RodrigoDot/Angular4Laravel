import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component ({
  templateUrl : './accounts-edit.component.html',
  styles : ['tbody tr {cursor: pointer}'],
})

export class AccountsEditComponent {

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
        this.edit(params.id);
    })
  }

  edit(id: number) {
    this.httpService.builder('accounts')
    .view(id)
    .then((res) => {
      this.account = res;
    })
  }
}
