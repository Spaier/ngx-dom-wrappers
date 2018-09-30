import { Component, Inject } from '@angular/core'

import { LOCAL_STORAGE, SESSION_STORAGE, WINDOW } from 'ngx-dom-wrappers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: any,
    @Inject(SESSION_STORAGE) private readonly sessionStorage: any,
    @Inject(WINDOW) private readonly window: any,
  ) { }
}
