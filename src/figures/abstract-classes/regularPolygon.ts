import { figure } from "./figure";
import { polygon } from "./polygon";

export abstract class regularPolygon extends figure {
  public edges: number;
  public edgeSize: number;

  constructor(edges: number, edgeSize: number) {
    super();
    this.edges = edges;
    this.edgeSize = edgeSize;
  }

  public getArea(): number {
    return (
      (this.edges * this.edgeSize ** 2) / (4 * Math.tan(Math.PI / this.edges))
    );
  }

  public getPerimeter(): number {
    return this.edges * this.edgeSize;
  }

  public equals(figure: figure): boolean {
    if (figure instanceof polygon) {
      (<polygon>figure).edges.forEach((edge) => {
        if (edge != this.edgeSize) return false;
      });
      return true;
    }

    let figureToCompare = <regularPolygon>figure;
    try {
      if (
        this.edgeSize === figureToCompare.edgeSize &&
        this.edges === figureToCompare.edges
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }

    return false;
  }
}
