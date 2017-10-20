import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class AppHttpService {

  private url: string;
  private header: Headers;

  constructor(private http: Http) {
    this.setAccessToken();
  }

  setAccessToken() {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxYzMwNDRmZjZhOTM3NDYwZTAzOWRhZGZlMWFmMDk1NWUyMzQzNDkyODAyMGJlZGEzNjc4OTZhOWJhOGQwYzY2MWM1ZjZkOGIxOTA0ZGFmIn0.eyJhdWQiOiIyIiwianRpIjoiNjFjMzA0NGZmNmE5Mzc0NjBlMDM5ZGFkZmUxYWYwOTU1ZTIzNDM0OTI4MDIwYmVkYTM2Nzg5NmE5YmE4ZDBjNjYxYzVmNmQ4YjE5MDRkYWYiLCJpYXQiOjE1MDg1MjU2NjMsIm5iZiI6MTUwODUyNTY2MywiZXhwIjoxNTQwMDY1MjYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.R12ALzGWQwigQgdZbojDgX2TQvtBPr9TuKkHDihFuxkZ13bgr2Do2qd7qXo47v2SaNb8PN9NmrfGWplFpZGPBI0AXjpgbOhbuJf2f-prOKifoZxLeS0kW7GFWB9Athku6EVJOUJ6PO-W-KLob0lKejCTM9RPM-bhTjPGKJQAkMcMnzlFRGHQE3X2qzfAyF_uNbJxWbvFMmDZxKWw8JaIQLPtv0TTgDk1K8DwJuxpuBwUMCHSLD3a_0e8jW_8CzvA4A9GDqrZuYTyIb1kISnQiJ9aXmMj2wQjcbqOMPDOdNNbZ0rRgDprfr5iP_wQK5pNzUwYjzrhV31tvTvfy3lr75OT0N-xEUEFtUM_WZlsBjafZvfxTkNBR6zEAjbFdohDpxI_TLfTMZb7W82-a1ZN5iEp92z75FSvVFecoo-QRK2BVWZVN1lYSWIUBqiYBXXm5cXHRAu6hRBkrQRYhY19to5ZR4uY_BN9OmYvQjm_TkRk3_9BanwR9AGVpgIHgM_nQIamArqpqXVw6EEe5O53zlylpBCiaSCj5QcxppvRTkCtq_RzmQOxTwG6JGEtoTBmWY4HfHGAIa3LlGM2otN1WwkeOueqUcKQ4FRJdaKJJnJowAxMiybOplJ9q8UU3BIst_QsIlXRatiL_jg3SQJDig0VEizCF2OuD7q8_eZqe9U';
    this.header = new Headers(
      {
        'Authorization': 'Bearer ' + token
      }
    );
  }

  builder(resource: string) {
    this.url = 'http://localhost:8000/api/' + resource;
    return this;
  }

  list() {
    return this.http.get(this.url, {headers: this.header})
    .toPromise()
    .then((res) => {
      return res.json() || {};
    })
  }


}
