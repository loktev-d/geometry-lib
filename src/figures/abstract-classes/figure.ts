export abstract class figure {
  /**
   * @returns an area of the shape.
   */
  public abstract getArea(): number;

  /**
   * @returns a perimeter of the shape.
   */
  public abstract getPerimeter(): number;

  /**
   * Compares current shape with another.
   *
   * @returns true - Shapes are equal.
   * @returns false - Shapes are not equal.
   *
   */
  public abstract equals(figure: figure): boolean;
}
