import { polygon } from "./abstract-classes/polygon";

export class rectangle extends polygon {
  public get width(): number {
    return this.edges[0];
  }

  public set width(value) {
    this.edges[0] = value;
    this.edges[2] = value;
  }

  public get height(): number {
    return this.edges[1];
  }

  public set height(value) {
    this.edges[1] = value;
    this.edges[3] = value;
  }

  constructor(height: number, width: number) {
    super([width, height, width, height], [90, 90, 90, 90]);
  }

  public getArea(): number {
    return this.height * this.width;
  }
}
