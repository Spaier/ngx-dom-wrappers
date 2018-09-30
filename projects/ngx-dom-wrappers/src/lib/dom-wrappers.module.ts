import { NgModule, Optional, SkipSelf } from '@angular/core'

import { SESSION_STORAGE } from './tokens/session-storage.token'
import { LOCAL_STORAGE } from './tokens/local-storage.token'
import { WINDOW } from './tokens/window.token'

export function getLocalStorage(): Storage | undefined { return typeof localStorage !== 'undefined' ? localStorage : undefined }
export function getSessionStorage(): Storage | undefined { return typeof sessionStorage !== 'undefined' ? sessionStorage : undefined }
export function getWindow(): Window | undefined { return typeof window !== 'undefined' ? window : undefined }

/**
 * Provides dom wrappers via defined factory functions.
 */
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
  constructor(@Optional() @SkipSelf() parentModule: DomWrappersModule | null) {
    if (parentModule) {
      throw new Error(
        'DomWrappersModule is already loaded. Import it only in the AppModule or CoreModule.')
    }
  }
}
