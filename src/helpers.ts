import {
  Config,
  NavItemProperty,
  SubNavItemProperty,
  ColorType,
  SubColorType,
  FontSizeType,
  SubFontSizeType,
} from "./types";
import { LitElement } from "lit"; // Add this import

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

    navNameChanged(ev: InputEvent) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const _config = Object.assign({}, this._config);

      _config.nav_name = target.value;
      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }

    addNavItem(ev: InputEvent) {
      if (!this._config || !ev.target) {
        return;
      }

      const _config = Object.assign({}, this._config);

      if (!_config.nav_items) {
        _config.nav_items = [];
      }

      _config.nav_items.push({
        name: "New Item",
        icon: "mdi:home",
        destination: "",
      });

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }

    removeNavItem(ev: InputEvent, index: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLElement;
      const _config = Object.assign({}, this._config);

      _config.nav_items.splice(index, 1);

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }

    navItemChanged(ev: CustomEvent, index: number, property: NavItemProperty) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const _config = Object.assign({}, this._config);

      let newValue;
      if (ev.type === "value-changed") {
        newValue = ev.detail.value;
      } else {
        newValue = target.value;
      }

      if (property === "active" || property === "unfolded") {
        (_config.nav_items[index] as any)[property] = target.checked;
      } else {
        (_config.nav_items[index] as any)[property] = newValue;
      }

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }

    addSubNavItem(ev: InputEvent, parentIndex: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const target = ev.target as HTMLInputElement;
      const _config = Object.assign({}, this._config);

      const navItem = _config.nav_items[parentIndex];
      if (navItem) {
        if (!navItem.sub_nav_items) {
          navItem.sub_nav_items = [];
        }

        navItem.sub_nav_items.push({
          name: "New Sub Item",
          icon: "mdi:home",
          destination: "lovelace",
        });

        this._config = _config;

        const event = new ConfigChangedEvent(_config);

        this.dispatchEvent(event);
      }
    }

    removeSubNavItem(ev: InputEvent, parentIndex: number, subIndex: number) {
      if (!this._config || !ev.target) {
        return;
      }

      const _config = Object.assign({}, this._config);

      const subNavItems = _config.nav_items[parentIndex]?.sub_nav_items;

      if (subNavItems) {
        subNavItems.splice(subIndex, 1);

        if (subNavItems.length === 0) {
          delete _config.nav_items[parentIndex].sub_nav_items;
        }

        this._config = _config;

        const event = new ConfigChangedEvent(_config);

        this.dispatchEvent(event);
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
      const _config = Object.assign({}, this._config);

      const subNavItem =
        _config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

      if (subNavItem) {
        let newValue;
        if (ev.type === "value-changed") {
          newValue = ev.detail.value;
        } else {
          newValue = target.value;
        }

        if (property === "active") {
          (subNavItem as any)[property] = target.checked;
        } else {
          (subNavItem as any)[property] = newValue;
        }
        this._config = _config;

        const event = new ConfigChangedEvent(_config);

        this.dispatchEvent(event);
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
      const _config = Object.assign({}, this._config);

      if (!_config.custom_styles) {
        _config.custom_styles = {};
      }

      if (!_config.custom_styles.colors) {
        _config.custom_styles.colors = {};
      }

      if (!_config.custom_styles.colors[colorType]) {
        _config.custom_styles.colors[colorType] = {};
      }

      if (target.value) {
        (_config.custom_styles.colors[colorType] as any)[subColorType] =
          target.value;
      } else {
        delete (_config.custom_styles.colors[colorType] as any)[subColorType];
      }

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
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
      const _config = Object.assign({}, this._config);

      if (!_config.custom_styles) {
        _config.custom_styles = {};
      }

      if (!_config.custom_styles.font_size) {
        _config.custom_styles.font_size = {};
      }

      if (!_config.custom_styles.font_size[fontSizeType]) {
        _config.custom_styles.font_size[fontSizeType] = {};
      }

      if (target.value) {
        (_config.custom_styles.font_size[fontSizeType] as any)[
          subFontSizeType
        ] = target.value;
      } else {
        delete (_config.custom_styles.font_size[fontSizeType] as any)[
          subFontSizeType
        ];
      }

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  };
}

type Constructor<T = {}> = new (...args: any[]) => T;
