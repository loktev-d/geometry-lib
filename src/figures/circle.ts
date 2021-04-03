import { figure } from "./abstract-classes/figure";

export class circle extends figure {
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  public equals(figure: figure): boolean {
    let figureToCompare = <circle>figure;

    try {
      if (this.radius === figureToCompare.radius) {
        return true;
      }
    } catch (error) {
      return false;
    }

    return false;
  }
}
