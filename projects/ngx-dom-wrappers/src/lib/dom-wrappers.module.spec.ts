import { DomWrappersModule } from './dom-wrappers.module'

describe('DomWrappersModule', () => {
  let domWrappersModule: DomWrappersModule

  beforeEach(() => {
    domWrappersModule = new DomWrappersModule()
  })

  it('should create an instance', () => {
    expect(domWrappersModule).toBeTruthy()
  })
})
