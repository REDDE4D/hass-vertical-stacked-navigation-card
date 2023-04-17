import { LitElement, html, CSSResultGroup, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { Config } from "./types";
import { HomeAssistant } from "custom-card-helpers";
import { editorStyles } from "./styles";
import { VerticalStackedNavCard } from "./vertical-stacked-navigation-card";
import { helpersMixin } from "./helpers";

export class VerticalStackedNavCardEditor extends helpersMixin(LitElement) {
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

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <header>
        <paper-input
          label="Nav Name"
          .value="${this._config.nav_name || ""}"
          placeholder="My Custom Navigation"
          @change="${this.navNameChanged}"
        ></paper-input>
      </header>
      <div class="nav-items">
        ${this._config.nav_items.map((navItem, index) => {
          return html`
            <div class="nav-item" index="${index}">
              <div class="nav-item-main-config">
                <icon-autocomplete
                  label="Icon"
                  placeholder="mdi:home"
                  .value="${navItem.icon || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemChanged(ev, index, "icon")}"
                ></icon-autocomplete>
                <paper-input
                  class="name-input"
                  label="Name"
                  placeholder="Home"
                  .value="${navItem.name || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemChanged(ev, index, "name")}"
                ></paper-input>
                <paper-input
                  class="destination-input"
                  placeholder="/lovelace/home"
                  label="Destination"
                  .value="${navItem.destination || ""}"
                  @change="${(ev: InputEvent) =>
                    this.navItemChanged(ev, index, "destination")}"
                ></paper-input>
              </div>
              <div class="nav-item-options">
                <input
                  type="checkbox"
                  ?checked=${navItem.active}
                  @change="${(ev: InputEvent) =>
                    this.navItemChanged(ev, index, "active")}"
                />
                Active
                <input
                  type="checkbox"
                  ?checked=${navItem.unfolded}
                  @change="${(ev: InputEvent) =>
                    this.navItemChanged(ev, index, "unfolded")}"
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
                          placeholder="mdi:home"
                          .value="${subNavItem.icon || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemChanged(
                              ev,
                              index,
                              subNavItemIndex,
                              "icon"
                            )}"
                        ></paper-input>
                        <paper-input
                          class="name-input"
                          label="Name"
                          placeholder="Home"
                          .value="${subNavItem.name || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemChanged(
                              ev,
                              index,
                              subNavItemIndex,
                              "name"
                            )}"
                        ></paper-input>
                        <paper-input
                          class="destination-input"
                          label="Destination"
                          placeholder="/lovelace/home"
                          .value="${subNavItem.destination || ""}"
                          @change="${(ev: InputEvent) =>
                            this.subNavItemChanged(
                              ev,
                              index,
                              subNavItemIndex,
                              "destination"
                            )}"
                        ></paper-input>
                      </div>
                      <div class="sub-nav-item-options">
                        <input
                          type="checkbox"
                          ?checked=${subNavItem.active}
                          @change="${(ev: InputEvent) =>
                            this.subNavItemChanged(
                              ev,
                              index,
                              subNavItemIndex,
                              "active"
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
                  <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Sub Item
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
            <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Nav Item
          </button>
        </div>
      </div>
      <details class="custom-styles">
        <summary>Custom Styles</summary>
        <details class="custom-colors">
          <summary>Colors</summary>
          <details class="custom-textcolor">
            <summary>Text Color</summary>
            <div
              class="color-preview text-main"
              style="background-color: ${this._config.custom_styles?.colors
                ?.text?.main || ""};"
            ></div>
            <paper-input
              label="Main"
              placeholder="rgba(255, 255, 255, 1)"
              .value="${this._config.custom_styles?.colors?.text?.main || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "text", "main")}"
            ></paper-input>
            <div
              class="color-preview text-sub"
              style="background-color: ${this._config.custom_styles?.colors
                ?.text?.sub || ""};"
            ></div>
            <paper-input
              label="Sub"
              placeholder="rgba(255, 255, 255, 0.5)"
              .value="${this._config.custom_styles?.colors?.text?.sub || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "text", "sub")}"
            ></paper-input>
          </details>
          <details class="custom-hover">
            <summary>Hover Color</summary>
            <div
              class="color-preview hover-main"
              style="background-color: ${this._config.custom_styles?.colors
                ?.hover?.main || ""};"
            ></div>
            <paper-input
              label="Main"
              placeholder="rgba(255, 255, 255, 0.1)"
              .value="${this._config.custom_styles?.colors?.hover?.main || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "hover", "main")}"
            ></paper-input>
            <div
              class="color-preview hover-sub"
              style="background-color: ${this._config.custom_styles?.colors
                ?.hover?.sub || ""};"
            ></div>
            <paper-input
              label="Sub"
              placeholder="rgba(255, 255, 255, 0.05)"
              .value="${this._config.custom_styles?.colors?.hover?.sub || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "hover", "sub")}"
            ></paper-input>
          </details>
          <details class="custom-active">
            <summary>Active Color</summary>
            <div
              class="color-preview active-main"
              style="background-color: ${this._config.custom_styles?.colors
                ?.active?.main || ""};"
            ></div>
            <paper-input
              label="Main"
              placeholder="rgba(255, 255, 255, 0.2)"
              .value="${this._config.custom_styles?.colors?.active?.main || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "active", "main")}"
            ></paper-input>
            <div
              class="color-preview active-sub"
              style="background-color: ${this._config.custom_styles?.colors
                ?.active?.sub || ""};"
            ></div>
            <paper-input
              label="Sub"
              placeholder="rgba(255, 255, 255, 0.1)"
              .value="${this._config.custom_styles?.colors?.active?.sub || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "active", "sub")}"
            ></paper-input>
          </details>
          <details class="custom-background">
            <summary>Background Color</summary>
            <div
              class="color-preview background-main"
              style="background-color: ${this._config.custom_styles?.colors
                ?.background?.main || ""};"
            ></div>
            <paper-input
              label="Main"
              placeholder="rgba(0, 0, 0, 0.5)"
              .value="${this._config.custom_styles?.colors?.background?.main ||
              ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "background", "main")}"
            ></paper-input>
            <div
              class="color-preview background-sub"
              style="background-color: ${this._config.custom_styles?.colors
                ?.background?.sub || ""};"
            ></div>
            <paper-input
              label="Sub"
              placeholder="rgba(0, 0, 0, 0.3)"
              .value="${this._config.custom_styles?.colors?.background?.sub ||
              ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleColorsChanged(ev, "background", "sub")}"
            ></paper-input>
          </details>
        </details>
        <details class="custom-fontsize">
          <summary>Fontsize</summary>
          <details class="custom-textsize">
            <summary>Text Size</summary>
            <paper-input
              label="Main"
              placeholder="1.2rem"
              .value="${this._config.custom_styles?.font_size?.text?.main ||
              ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleFontSizeChanged(ev, "text", "main")}"
            ></paper-input>
            <paper-input
              label="Sub"
              placeholder="0.8rem"
              .value="${this._config.custom_styles?.font_size?.text?.sub || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleFontSizeChanged(ev, "text", "sub")}"
            ></paper-input>
          </details>
        </details>
      </details>
    `;
  }
}
customElements.define(
  "vertical-stacked-navigation-card-editor",
  VerticalStackedNavCardEditor
);
