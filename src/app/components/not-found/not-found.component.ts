import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<h1>Error 404: Page Not Found</h1>',
  styles: [
    `
      h1 {
        text-align: center;
        margin: 20px;
      }
    `,
  ],
})
export class NotFoundComponent {}
