import { LitElement, html, CSSResultGroup, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { Config } from "./types";
import { HomeAssistant } from "custom-card-helpers";
import { editorStyles } from "./styles";
import { VerticalStackedNavCard } from "./vertical-stacked-navigation-card";

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

export class VerticalStackedNavCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property() _config: Config = { nav_name: "", nav_items: [] };

  private card: VerticalStackedNavCard | null = null;

  public setConfig(config: Config): void {
    if (!config.nav_items) {
      throw new Error("You need to define nav_items");
    }
    this._config = config;

    // Set the reference to the card component
    this.card = document.querySelector("vertical-stacked-navigation-card");
  }

  static get styles(): CSSResultGroup {
    return editorStyles;
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (this.card) {
      this.card.setConfig(this._config);
    }
  }

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

  navItemNameChanged(ev: InputEvent, index: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    _config.nav_items[index].name = target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);

    this.dispatchEvent(event);
  }

  navItemIconChanged(ev: InputEvent, index: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    _config.nav_items[index].icon = target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);

    this.dispatchEvent(event);
  }

  navItemDestinationChanged(ev: InputEvent, index: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    _config.nav_items[index].destination = target.value;

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

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  }

  subNavItemNameChanged(ev: InputEvent, parentIndex: number, subIndex: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    const subNavItem =
      _config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

    if (subNavItem) {
      subNavItem.name = target.value;

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  }

  subNavItemIconChanged(ev: InputEvent, parentIndex: number, subIndex: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    const subNavItem =
      _config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

    if (subNavItem) {
      subNavItem.icon = target.value;

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  }

  subNavItemDestinationChanged(
    ev: InputEvent,
    parentIndex: number,
    subIndex: number
  ) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    const subNavItem =
      _config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

    if (subNavItem) {
      subNavItem.destination = target.value;

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  }

  navItemActiveChanged(ev: InputEvent, index: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    _config.nav_items[index].active = target.checked;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);

    this.dispatchEvent(event);
  }

  subNavItemActiveChanged(
    ev: InputEvent,
    parentIndex: number,
    subIndex: number
  ) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    const subNavItem =
      _config.nav_items[parentIndex]?.sub_nav_items?.[subIndex];

    if (subNavItem) {
      subNavItem.active = target.checked;

      this._config = _config;

      const event = new ConfigChangedEvent(_config);

      this.dispatchEvent(event);
    }
  }

  navItemUnfoldedChanged(ev: InputEvent, index: number) {
    if (!this._config || !ev.target) {
      return;
    }

    const target = ev.target as HTMLInputElement;
    const _config = Object.assign({}, this._config);

    _config.nav_items[index].unfolded = target.checked;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);

    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <header>
        <paper-input
          label="Nav Name"
          .value="${this._config.nav_name || ""}"
          @change="${this.navNameChanged}"
        ></paper-input>
      </header>
      <div class="nav-items">
        ${this._config.nav_items.map((navItem, index) => {
          return html`
            <div class="nav-item" index="${index}">
              <div class="nav-item-main-config">
                <paper-input
                  class="icon-input"
                  label="Icon"
                  .value="${navItem.icon || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemIconChanged(ev, index)}"
                ></paper-input>
                <paper-input
                  class="name-input"
                  label="Name"
                  .value="${navItem.name || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemNameChanged(ev, index)}"
                ></paper-input>
                <paper-input
                  class="destination-input"
                  label="Destination"
                  .value="${navItem.destination || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemDestinationChanged(ev, index)}"
                ></paper-input>
              </div>
              <div class="nav-item-options">
                <input
                  type="checkbox"
                  ?checked=${navItem.active}
                  @change="${(ev: InputEvent) =>
                    this.navItemActiveChanged(ev, index)}"
                />
                Active
                <input
                  type="checkbox"
                  ?checked=${navItem.unfolded}
                  @change="${(ev: InputEvent) =>
                    this.navItemUnfoldedChanged(ev, index)}"
                />
                Unfolded
                <button
                  class="remove-nav-item"
                  @click="${(ev: InputEvent) => this.removeNavItem(ev, index)}"
                >
                  Remove
                </button>
              </div>
              <div class="sub-nav-items">
                ${navItem?.sub_nav_items?.map((subNavItem, subNavItemIndex) => {
                  return html`
                    <div class="sub-nav-item" index="${subNavItemIndex}">
                      <div class="sub-nav-item-main-config">
                        <paper-input
                          class="icon-input"
                          label="Icon"
                          .value="${subNavItem.icon || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemIconChanged(
                              ev,
                              index,
                              subNavItemIndex
                            )}"
                        ></paper-input>
                        <paper-input
                          class="name-input"
                          label="Name"
                          .value="${subNavItem.name || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemNameChanged(
                              ev,
                              index,
                              subNavItemIndex
                            )}"
                        ></paper-input>
                        <paper-input
                          class="destination-input"
                          label="Destination"
                          .value="${subNavItem.destination || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemDestinationChanged(
                              ev,
                              index,
                              subNavItemIndex
                            )}"
                        ></paper-input>
                      </div>
                      <div class="sub-nav-item-options">
                        <input
                          type="checkbox"
                          ?checked=${subNavItem.active}
                          @change="${(ev: InputEvent) =>
                            this.subNavItemActiveChanged(
                              ev,
                              index,
                              subNavItemIndex
                            )}"
                        />
                        Active
                        <button
                          class="remove-sub-nav-item"
                          @click="${(ev: InputEvent) =>
                            this.removeSubNavItem(ev, index, subNavItemIndex)}"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  `;
                })}
                <button
                  class="add-sub-nav-item"
                  @click="${(ev: InputEvent) => this.addSubNavItem(ev, index)}"
                >
                  <ha-icon .icon=${"mdi:plus"}></ha-icon>
                </button>
              </div>
            </div>
          `;
        })}
        <div class="add-button-container">
          <button
            class="add-nav-item"
            @click="${(ev: InputEvent) => this.addNavItem(ev)}"
          >
            <ha-icon .icon=${"mdi:plus"}></ha-icon>
          </button>
        </div>
      </div>
    `;
  }
}
customElements.define(
  "vertical-stacked-navigation-card-editor",
  VerticalStackedNavCardEditor
);
