import { LitElement, html, property } from "lit-element";
import { Config, NavItem } from "./vertical-stacked-navigation-card";

export class VerticalStackedNavCardEditor extends LitElement {
    _config: Config;

    constructor() {
        super();
        this._config = {
          nav_items: [],
        };
      }

  setConfig(config: Config) {
    this._config = config;
  }

  nameChanged(ev: CustomEvent, index: number) {
    const navItems = [...this._config.nav_items];
    navItems[index].name = ev.detail.value;
    this._config = { ...this._config, nav_items: navItems };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
    );
  }

  iconChanged(ev: CustomEvent, index: number) {
    const navItems = [...this._config.nav_items];
    navItems[index].icon = ev.detail.value;
    this._config = { ...this._config, nav_items: navItems };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
    );
  }

  destinationChanged(ev: CustomEvent, index: number) {
    const navItems = [...this._config.nav_items];
    navItems[index].destination = ev.detail.value;
    this._config = { ...this._config, nav_items: navItems };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
    );
  }

  render() {
    return html`
      ${this._config.nav_items.map((item: NavItem, index: number) => html`
        <h3>Nav Item ${index + 1}</h3>
        <paper-input
          .label=${"Name"}
          .value=${item.name}
          @value-changed=${(ev: CustomEvent) => this.nameChanged(ev, index)}
        ></paper-input>
        <paper-input
          .label=${"Icon"}
          .value=${item.icon}
          @value-changed=${(ev: CustomEvent) => this.iconChanged(ev, index)}
        ></paper-input>
        <paper-input
          .label=${"Destination"}
          .value=${item.destination}
          @value-changed=${(ev: CustomEvent) => this.destinationChanged(ev, index)}
        ></paper-input>
      `)}
    `;
  }
}

customElements.define("vertical-stacked-nav-card-editor", VerticalStackedNavCardEditor);
