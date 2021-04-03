import { polygon } from "./abstract-classes/polygon";

export class triangle extends polygon {
  constructor(edges: number[]) {
    let vertices = [];

    vertices[0] =
      Math.acos(
        (edges[0] ** 2 + edges[1] ** 2 - edges[2] ** 2) /
          (2 * edges[0] * edges[1])
      ) *
      (180 / Math.PI);
    vertices[1] =
      Math.acos(
        (edges[1] ** 2 + edges[2] ** 2 - edges[0] ** 2) /
          (2 * edges[1] * edges[2])
      ) *
      (180 / Math.PI);
    vertices[2] = 180 - vertices[0] - vertices[1];

    super(edges, vertices);
  }

  public getArea(): number {
    return (
      (1 / 2) *
      (this.edges[0] *
        this.edges[1] *
        Math.sin((this.vertices[0] * Math.PI) / 180))
    );
  }
}
