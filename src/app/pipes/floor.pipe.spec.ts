import { FloorPipe } from './floor.pipe';

describe('FloorPipe', () => {
  it('create an instance', () => {
    const pipe = new FloorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be floor 1.03', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(1.03)).toEqual(1);
  });

  it('should be floor 10.5', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(10.5)).toEqual(10);
  });

  it('should be floor 9.99', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(9.99)).toEqual(9);
  });

  it('should be floor -2.74', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(-2.74)).toEqual(-3);
  });

  it('should be floor -9.01', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(-9.01)).toEqual(-10);
  });

  it('should be floor 20', () => {
    const pipe = new FloorPipe();
    expect(pipe.transform(20)).toEqual(20);
  });
});
