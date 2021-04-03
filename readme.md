## Getting started

To use geometry-lib you need to import main.ts file inot your project.

```typescript
import { circle, triangle, rectangle } from "./main";
```

Here's a small example using it:

```typescript
let c1 = new circle(5);
let t1 = new triangle([3, 4, 5]);
let t2 = new triangle([3, 4, 5]);
let r1 = new rectangle(10, 30);
console.log(r1.equals(c1));
console.log(r1.edges);
console.log(r1.getArea());
console.log(r1.getPerimeter());
```
