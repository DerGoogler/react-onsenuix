# React OnsenUiX

This is a fork of the onsenui react package, I'm not happy about the syntax. I made this fork because the original package doesn't have typings, and this here.. is hardcore typed :). See thier documentation before using this!

Please keep in mind that this project an alpha is

## Current Components

- Page
  - renderToolbar
  - renderFixed
- Button
- Toolbar
  - Toolbar.Left
  - Toolbar.Center
  - Toolbar.Right
  - Toolbar.Button
- Card
  - Card.Title
  - Card.Content
- BackButton
- List
  - List.Title
  - List.Item
- Fab
- SpeedDial
  - SpeedDial.Fab
  - SpeedDial.Item
- ~Icon~ (Don't use, it crashes the style of the page)
- BottomToolbar
- Tabbar
- ~RouterNavigator~

## Not Planned Components

- Switch
- Select
- ActionSheet
- GestureDetector

# Create an App

```tsx
import { createRoot } from "react-dom/client";
import { Card, Toolbar, SpeedDial, ActivityX, ActivityXRenderData } from "react-onsenuix";
import { Icon } from "react-onsenui";
import { Kard } from "./Card";

interface State {
  text: string;
}

class App extends ActivityX<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { text: "This is an simple application" };
  }

  public onCreateToolbar() {
    return (
      <Toolbar>
        <Toolbar.Center>Title</Toolbar.Center>
        <Toolbar.Right>
          <Toolbar.Button>
            <Icon icon="md-menu" />
          </Toolbar.Button>
        </Toolbar.Right>
      </Toolbar>
    );
  }

  public renderFixed() {
    return (
      <SpeedDial position="bottom right">
        <SpeedDial.Fab>
          <Icon icon="md-share" />
        </SpeedDial.Fab>
        <SpeedDial.Item onClick={() => console.log("Twitter")}>
          <Icon icon="md-twitter" />
        </SpeedDial.Item>
        <SpeedDial.Item onClick={() => console.log("Facebook")}>
          <Icon icon="md-facebook" />
        </SpeedDial.Item>
        <SpeedDial.Item onClick={() => console.log("Google+")}>
          <Icon icon="md-google-plus" />
        </SpeedDial.Item>
      </SpeedDial>
    );
  }

  public onCreate(d: ActivityXRenderData<{}, State>): JSX.Element {
    return (
      <section style={{ textAlign: "center" }}>
        <Kard />
      </section>
    );
  }
}

const app = document.createElement("app");
document.body.prepend(app);
const container = document.querySelector<Element>("app");
const root = createRoot(container!);
root.render(<App />);
```

# Create an View

```tsx
import { Card, ViewX } from "react-onsenuix";

class Kard extends ViewX<{}, {}, HTMLDivElement> {
  public createView() {
    return (
      <div>
        <Card>
          <Card.Title>Hello, world!</Card.Title>
          <Card.Content>Hello WORLD AGAIN!!</Card.Content>
        </Card>
      </div>
    );
  }
}

export { Kard };
```
