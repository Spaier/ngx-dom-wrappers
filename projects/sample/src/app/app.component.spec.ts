import { TestBed, async } from '@angular/core/testing'
import { DomWrappersModule } from 'ngx-dom-wrappers'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DomWrappersModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
