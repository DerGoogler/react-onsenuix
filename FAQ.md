# FAQ

## I'm getting `this is undefined`?

```diff
class App extends ActivityX<Props, States> {
  public static displayName = "app";

  public constructor(props: Props | Readonly<Props>) {
    super(props);
+   this.onCreate = this.onCreate.bind(this);
  }
  // ...
}
```
