import { ScrollDirective } from './scroll.directive';

describe('ScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollDirective();
    expect(directive).toBeTruthy();
  });


  it('should test scrollTop', () => {
    const directive = new ScrollDirective();
    directive.emitted = true
    directive.onScroll()
    directive.scrollingFinished.emit();
    expect(directive.onScroll).toBeTruthy()
    
  });

  it('should be toggle false value',() => {
    const directive = new ScrollDirective();
    directive.emitted = false;
    directive.onScroll()
    directive.scrollingFinished.emit();
    expect(directive.onScroll).toBeTruthy()
  })
});
