import dark_theme from "./dark_theme";
import light_theme from "./light_theme";
import jss, { JssStyle, MinimalObservable } from "jss";
import preset from "jss-preset-default";

type Func<P, T, R> = T extends undefined ? (data: P) => R : (data: P & { theme: T }) => R;

type UiXThemeType<Name extends string = string> = {
  [P in keyof Styles<Name, any, undefined>]?: Styles<Name, any, undefined>[P] | undefined;
};

type Styles<Name extends string | number | symbol = string, Props = unknown, Theme = undefined> = Record<
  Name,
  | JssStyle<Props, Theme>
  | Array<JssStyle<Props, Theme>>
  | string
  | Func<Props, Theme, JssStyle<undefined, undefined> | string | null | undefined>
  | MinimalObservable<JssStyle | string | null | undefined>
>;

/**
 * Uses the defaut OnUiX theme
 * @param themeMode light or dark
 * @returns {ThemeType} ThemeType
 * @default light
 */
class UiXTheme {
  private themeMode: string | undefined;
  public constructor(themeMode?: "light" | "dark") {
    this.themeMode = themeMode;
    jss.setup(preset());
  }

  /**
   * Applies the theme to the current UiX
   */
  public apply(): void {
    switch (this.themeMode) {
      case "light":
        jss.createStyleSheet(light_theme).attach();
        break;
      case "dark":
        jss.createStyleSheet(dark_theme).attach();
        break;
      default:
        jss.createStyleSheet(light_theme).attach();
        break;
    }
  }

  /**
   * Applies the dark theme to the current UiX
   */
  public dark(): void {
    jss.createStyleSheet(dark_theme).attach();
  }

  /**
   * Applies the light theme to the current UiX
   */
  public light(): void {
    jss.createStyleSheet(light_theme).attach();
  }

  /**
   * Create an custom theme
   * @param theme {UiXThemeType}
   */
  public create(theme: UiXThemeType): void {
    jss.createStyleSheet(light_theme).attach();
  }
}

export { UiXTheme, UiXThemeType };
