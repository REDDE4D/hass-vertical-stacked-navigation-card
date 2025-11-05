import {
  Config,
  NavItemProperty,
  SubNavItemProperty,
  ColorType,
  SubColorType,
  FontSizeType,
  SubFontSizeType,
  FontWeightType,
  FontFamilyType,
  BorderRadiusType,
  PaddingType,
  PaddingSubType,
  SpacingType,
  BorderType,
  BoxShadowType,
  HeaderPropertyType,
  NavItem,
  SubNavItem,
} from "./types";
import { LitElement } from "lit";

class ConfigChangedEvent extends Event {
  detail: { config: Config };

  constructor(config: Config) {
    super("config-changed", {
      bubbles: true,
      composed: true,
    });
    this.detail = { config: config };
  }
}

export function helpersMixin<TBase extends Constructor<LitElement>>(
  Base: TBase
) {
  return class extends Base {
    _config?: Config;

    private cloneConfig(): Config {
      return JSON.parse(JSON.stringify(this._config));
    }

    private dispatchConfigChanged(config: Config): void {
      this._config = config;
      const event = new ConfigChangedEvent(config);
      this.dispatchEvent(event);
    }

    navNameChanged(ev: InputEvent) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();
      config.nav_name = target.value;
      this.dispatchConfigChanged(config);
    }

    addNavItem(ev: InputEvent) {
      if (!this._config || !ev.target) {
        return;
      }

      const config = this.cloneConfig();

      if (!config.nav_items) {
        config.nav_items = [];
      }

      config.nav_items.push({
        name: "New Item",
        icon: "mdi:home",
        destination: "",
      });

      this.dispatchConfigChanged(config);
    }

    removeNavItem(ev: InputEvent, index: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const config = this.cloneConfig();
      config.nav_items.splice(index, 1);
      this.dispatchConfigChanged(config);
    }

    navItemChanged(ev: CustomEvent, index: number, property: NavItemProperty) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      let newValue: string | boolean;
      if (ev.type === "value-changed") {
        newValue = ev.detail.value;
      } else {
        newValue = target.value;
      }

      if (property === "active" || property === "unfolded") {
        config.nav_items[index][property] = target.checked;
      } else {
        (config.nav_items[index][property] as string) = newValue as string;
      }

      this.dispatchConfigChanged(config);
    }

    addSubNavItem(ev: InputEvent, parentIndex: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const config = this.cloneConfig();
      const navItem = config.nav_items[parentIndex];

      if (navItem) {
        if (!navItem.sub_nav_items) {
          navItem.sub_nav_items = [];
        }

        navItem.sub_nav_items.push({
          name: "New Sub Item",
          icon: "mdi:home",
          destination: "/lovelace/0",
        });

        this.dispatchConfigChanged(config);
      }
    }

    removeSubNavItem(ev: InputEvent, parentIndex: number, subIndex: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const config = this.cloneConfig();
      const subNavItems = config.nav_items[parentIndex]?.sub_nav_items;

      if (subNavItems) {
        subNavItems.splice(subIndex, 1);

        if (subNavItems.length === 0) {
          delete config.nav_items[parentIndex].sub_nav_items;
        }

        this.dispatchConfigChanged(config);
      }
    }

    subNavItemChanged(
      ev: CustomEvent,
      parentIndex: number,
      subIndex: number,
      property: SubNavItemProperty
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();
      const subNavItem = config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

      if (subNavItem) {
        let newValue: string | boolean;
        if (ev.type === "value-changed") {
          newValue = ev.detail.value;
        } else {
          newValue = target.value;
        }

        if (property === "active") {
          subNavItem[property] = target.checked;
        } else {
          (subNavItem[property] as string) = newValue as string;
        }

        this.dispatchConfigChanged(config);
      }
    }

    customStyleColorsChanged(
      ev: InputEvent,
      colorType: ColorType,
      subColorType: SubColorType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.colors) {
        config.custom_styles.colors = {};
      }

      if (!config.custom_styles.colors[colorType]) {
        config.custom_styles.colors[colorType] = {};
      }

      if (target.value) {
        config.custom_styles.colors[colorType]![subColorType] = target.value;
      } else {
        delete config.custom_styles.colors[colorType]![subColorType];
      }

      this.dispatchConfigChanged(config);
      this.requestUpdate();
    }

    customStyleFontSizeChanged(
      ev: InputEvent,
      fontSizeType: FontSizeType,
      subFontSizeType: SubFontSizeType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.font_size) {
        config.custom_styles.font_size = {};
      }

      if (!config.custom_styles.font_size[fontSizeType]) {
        config.custom_styles.font_size[fontSizeType] = {};
      }

      if (target.value) {
        config.custom_styles.font_size[fontSizeType]![subFontSizeType] = target.value;
      } else {
        delete config.custom_styles.font_size[fontSizeType]![subFontSizeType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleFontWeightChanged(
      ev: InputEvent,
      fontWeightType: FontWeightType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.font_weight) {
        config.custom_styles.font_weight = {};
      }

      if (target.value) {
        config.custom_styles.font_weight[fontWeightType] = target.value;
      } else {
        delete config.custom_styles.font_weight[fontWeightType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleFontFamilyChanged(
      ev: InputEvent,
      fontFamilyType: FontFamilyType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.font_family) {
        config.custom_styles.font_family = {};
      }

      if (target.value) {
        config.custom_styles.font_family[fontFamilyType] = target.value;
      } else {
        delete config.custom_styles.font_family[fontFamilyType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleBorderRadiusChanged(
      ev: InputEvent,
      borderRadiusType: BorderRadiusType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.border_radius) {
        config.custom_styles.border_radius = {};
      }

      if (target.value) {
        config.custom_styles.border_radius[borderRadiusType] = target.value;
      } else {
        delete config.custom_styles.border_radius[borderRadiusType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleBorderChanged(
      ev: InputEvent,
      borderType: BorderType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.border) {
        config.custom_styles.border = {};
      }

      if (target.value) {
        config.custom_styles.border[borderType] = target.value;
      } else {
        delete config.custom_styles.border[borderType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleBoxShadowChanged(
      ev: InputEvent,
      boxShadowType: BoxShadowType
    ) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.box_shadow) {
        config.custom_styles.box_shadow = {};
      }

      if (target.value) {
        config.custom_styles.box_shadow[boxShadowType] = target.value;
      } else {
        delete config.custom_styles.box_shadow[boxShadowType];
      }

      this.dispatchConfigChanged(config);
    }

    customStyleTransitionDurationChanged(ev: InputEvent) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const config = this.cloneConfig();

      if (!config.custom_styles) {
        config.custom_styles = {};
      }

      if (!config.custom_styles.transitions) {
        config.custom_styles.transitions = {};
      }

      if (target.value) {
        config.custom_styles.transitions.duration = target.value;
      } else {
        delete config.custom_styles.transitions.duration;
      }

      this.dispatchConfigChanged(config);
    }
  };
}

type Constructor<T = {}> = new (...args: any[]) => T;
