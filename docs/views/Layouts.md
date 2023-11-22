# layout.ts

The `layout.ts` is a pain to explain(that rhymed), but for the most part, all it does is render pages inside a wrapper, each layout.ts is wrapped around by the previous layout.ts. 

A layout is also a simple component, here's an example:
```ts
import { Component, Widget } from "rayous";
export default class extends Component {
  build({ page }: { page: Widget }){
    return new Widget({ children: [ page ] });
  }
}
```

Here, we wrap each page in a layer of `Widget`, but you can put any set of Widgets you want, the `initState` and `afterBuild` also work in it so you can also use state management and async functions.