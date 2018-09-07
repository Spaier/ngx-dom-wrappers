import { NgModule, Optional, SkipSelf } from '@angular/core'

import { SESSION_STORAGE } from './tokens/session-storage.token'
import { LOCAL_STORAGE } from './tokens/local-storage.token'
import { WINDOW } from './tokens/window.token'

export function getLocalStorage(): Storage { return typeof localStorage !== 'undefined' ? localStorage : null }
export function getSessionStorage(): Storage { return typeof sessionStorage !== 'undefined' ? sessionStorage : null }
export function getWindow(): Window { return typeof window !== 'undefined' ? window : null }

@NgModule({
  providers: [
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage },
    { provide: SESSION_STORAGE, useFactory: getSessionStorage },
    { provide: WINDOW, useFactory: getWindow },
  ]
})
export class DomWrappersModule {
  /**
   * Prevents module from being imported twice.
   * @param parentModule Another instance of this module.
   */
  constructor(@Optional() @SkipSelf() parentModule: DomWrappersModule) {
    if (parentModule) {
      throw new Error(
        'DomWrappersModule is already loaded. Import it only in the AppModule or CoreModule.')
    }
  }
}
