import { BancoCentralModule } from './banco-central.module';

describe('BancoCentralModule', () => {
  let bancoCentralModule: BancoCentralModule;

  beforeEach(() => {
    bancoCentralModule = new BancoCentralModule();
  });

  it('should create an instance', () => {
    expect(bancoCentralModule).toBeTruthy();
  });
});
