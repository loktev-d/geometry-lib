import { figure } from "./figure";

export abstract class polygon extends figure {
  public edges: number[];
  public vertices: number[];

  constructor(edges: number[], vertices: number[]) {
    super();
    this.edges = edges;
    this.vertices = vertices;
  }

  public getPerimeter(): number {
    let perimeter = 0;

    this.edges.forEach((edge) => {
      perimeter += edge;
    });

    return perimeter;
  }

  public equals(figure: figure): boolean {
    let polygonToCompare = <polygon>figure;

    try {
      for (let index = 0; index < this.edges.length; index++) {
        if (
          this.edges[index] != polygonToCompare.edges[index] ||
          this.vertices[index] != polygonToCompare.vertices[index]
        ) {
          return false;
        }
      }
    } catch (error) {
      return false;
    }

    return true;
  }
}
