import { Component } from '@angular/core';

@Component({
  selector: 'paginate',
  template: `
  <div class="center-align">
    <ul class="pagination">
      <li class="active">1</li>
      <li class="waves-effect">2</li>
      <li class="waves-effect">3</li>
      <li class="waves-effect">4</li>
      <li class="waves-effect">5</li>
    </ul>
    <p>Encontrados 100 registros, exibindo pagina 1 de 10</p>
  </div>
  `
})

export class AppPaginateComponent {}
