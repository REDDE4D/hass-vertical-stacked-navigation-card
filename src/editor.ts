import { LitElement, html, CSSResultGroup, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { Config } from "./types";
import { HomeAssistant } from "custom-card-helpers";
import { editorStyles } from "./styles";
import { VerticalStackedNavCard } from "./vertical-stacked-navigation-card";
import { helpersMixin } from "./helpers";
import "./nav-path";

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
        <ha-textfield
          label="Nav Name"
          class="main-nav-name"
          .value="${this._config.nav_name || ""}"
          placeholder="My Custom Navigation"
          @change="${this.navNameChanged}"
        ></ha-textfield>
      </header>
      <div class="nav-items">
        <div class="nav-items-header">
          <h3>Navigation Items</h3>
          <mwc-button
            class="add-nav-item"
            @click="${(ev: InputEvent) => this.addNavItem(ev)}"
          >
            <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Nav Item
          </mwc-button>
        </div>
        ${this._config.nav_items.map((navItem, index) => {
          return html`
            <div class="nav-item" index="${index}">
              <div class="nav-item-main-config">
                <div class="main-config-row">
                  <ha-icon-picker
                    label="Icon"
                    class="input-icon-picker"
                    placeholder="mdi:home"
                    .value="${navItem.icon || ""}"
                    @value-changed="${(ev: CustomEvent) =>
                      this.navItemChanged(ev, index, "icon")}"
                  ></ha-icon-picker>
                  <ha-textfield
                    label="Name"
                    class="input-name"
                    placeholder="Home"
                    .value="${navItem.name || ""}"
                    @change="${(ev: CustomEvent) =>
                      this.navItemChanged(ev, index, "name")}"
                  ></ha-textfield>
                </div>
                <div class="main-config-row">
                  <destination-input
                    placeholder="/lovelace/home"
                    class="destination-input"
                    label="Destination"
                    .value="${navItem.destination || ""}"
                    .hass="${this.hass}"
                    @change="${(ev: CustomEvent) =>
                      this.navItemChanged(ev, index, "destination")}"
                  ></destination-input>
                </div>
              </div>
              <div class="nav-item-options">
                <ha-formfield>
                  <ha-switch
                    type="checkbox"
                    ?checked=${navItem.active}
                    @change="${(ev: CustomEvent) =>
                      this.navItemChanged(ev, index, "active")}"
                  ></ha-switch>
                  <label class="mdc-label">Active</label>
                </ha-formfield>
                ${navItem?.sub_nav_items && navItem.sub_nav_items.length > 0
                  ? html`
                      <ha-formfield>
                        <ha-switch
                          type="checkbox"
                          ?checked=${navItem.unfolded}
                          @change="${(ev: CustomEvent) =>
                            this.navItemChanged(ev, index, "unfolded")}"
                        ></ha-switch>
                        <label class="mdc-label">Unfolded</label>
                      </ha-formfield>
                    `
                  : ""}
                <mwc-button
                  class="add-sub-nav-item"
                  @click="${(ev: InputEvent) => this.addSubNavItem(ev, index)}"
                >
                  <ha-icon .icon=${"mdi:plus"}></ha-icon>
                </mwc-button>
                <mwc-button
                  class="remove-nav-item"
                  @click="${(ev: InputEvent) => this.removeNavItem(ev, index)}"
                >
                  <ha-icon .icon=${"mdi:delete"}></ha-icon>
                </mwc-button>
              </div>
              ${navItem?.sub_nav_items && navItem.sub_nav_items.length > 0
                ? html`
                    <div class="sub-nav-items">
                      <details>
                        <summary>Sub Navigation Items</summary>
                        ${navItem?.sub_nav_items?.map(
                          (subNavItem, subNavItemIndex) => {
                            return html`
                              <div
                                class="sub-nav-item"
                                index="${subNavItemIndex}"
                              >
                                <div class="sub-nav-item-main-config">
                                  <div class="main-config-row">
                                    <ha-icon-picker
                                      label="Icon"
                                      placeholder="mdi:home"
                                      class="input-icon-picker"
                                      .value="${subNavItem.icon || ""}"
                                      @value-changed="${(ev: CustomEvent) =>
                                        this.subNavItemChanged(
                                          ev,
                                          index,
                                          subNavItemIndex,
                                          "icon"
                                        )}"
                                    ></ha-icon-picker>
                                    <ha-textfield
                                      label="Name"
                                      placeholder="Home"
                                      class="input-name"
                                      .value="${subNavItem.name || ""}"
                                      @change="${(ev: CustomEvent) =>
                                        this.subNavItemChanged(
                                          ev,
                                          index,
                                          subNavItemIndex,
                                          "name"
                                        )}"
                                    ></ha-textfield>
                                  </div>
                                  <div class="main-config-row">
                                    <destination-input
                                      label="Destination"
                                      class="destination-input"
                                      placeholder="/lovelace/home"
                                      .value="${subNavItem.destination || ""}"
                                      .hass="${this.hass}"
                                      @change="${(ev: CustomEvent) =>
                                        this.subNavItemChanged(
                                          ev,
                                          index,
                                          subNavItemIndex,
                                          "destination"
                                        )}"
                                    ></destination-input>
                                  </div>
                                </div>
                                <div class="sub-nav-item-options">
                                  <ha-formfield>
                                    <ha-switch
                                      type="checkbox"
                                      ?checked=${subNavItem.active}
                                      @change="${(ev: CustomEvent) =>
                                        this.subNavItemChanged(
                                          ev,
                                          index,
                                          subNavItemIndex,
                                          "active"
                                        )}"
                                    ></ha-switch>
                                    <label class="mdc-label">Active</label>
                                  </ha-formfield>
                                  <mwc-button
                                    class="remove-sub-nav-item"
                                    @click="${(ev: InputEvent) =>
                                      this.removeSubNavItem(
                                        ev,
                                        index,
                                        subNavItemIndex
                                      )}"
                                  >
                                    <ha-icon .icon=${"mdi:delete"}></ha-icon>
                                  </mwc-button>
                                </div>
                              </div>
                            `;
                          }
                        )}
                      <details>
                    </div>
                    `
                : ""}
            </div>
          `;
        })}
      </div>
      <h3>Custom Styles</h3>
      <details class="custom-styles">
        <summary>Custom Styles</summary>
        <details class="custom-colors">
          <summary>Colors</summary>
          <details class="custom-textcolor">
            <summary>Text Color</summary>
            <div class="details-row">
              <div
                class="color-preview text-main"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.text?.main || ""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 1)"
                .value="${this._config.custom_styles?.colors?.text?.main || ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "text", "main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview text-sub"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.text?.sub || ""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.5)"
                .value="${this._config.custom_styles?.colors?.text?.sub || ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "text", "sub")}"
              ></ha-textfield>
            </div>
          </details>

          <details class="custom-hover">
            <summary>Hover Color</summary>
            <div class="details-row">
              <div
                class="color-preview hover-main"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.hover?.main || ""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${this._config.custom_styles?.colors?.hover?.main ||
                ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "hover", "main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview hover-sub"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.hover?.sub || ""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.05)"
                .value="${this._config.custom_styles?.colors?.hover?.sub || ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "hover", "sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-active">
            <summary>Active Color</summary>
            <div class="details-row">
              <div
                class="color-preview active-main"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.active?.main || ""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.2)"
                .value="${this._config.custom_styles?.colors?.active?.main ||
                ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "active", "main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview active-sub"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.active?.sub || ""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${this._config.custom_styles?.colors?.active?.sub ||
                ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "active", "sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-background">
            <summary>Background Color</summary>
            <div class="details-row">
              <div
                class="color-preview background-main"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.background?.main || ""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.5)"
                .value="${this._config.custom_styles?.colors?.background
                  ?.main || ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "background", "main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview background-sub"
                style="background-color: ${this._config.custom_styles?.colors
                  ?.background?.sub || ""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.3)"
                .value="${this._config.custom_styles?.colors?.background?.sub ||
                ""}"
                @change="${(ev: InputEvent) =>
                  this.customStyleColorsChanged(ev, "background", "sub")}"
              ></ha-textfield>
            </div>
          </details>
        </details>
        <details class="custom-fontsize">
          <summary>Fontsize</summary>
          <details class="custom-textsize">
            <summary>Text Size</summary>
            <ha-textfield
              label="Main"
              placeholder="1.2rem"
              .value="${this._config.custom_styles?.font_size?.text?.main ||
              ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleFontSizeChanged(ev, "text", "main")}"
            ></ha-textfield>
            <ha-textfield
              label="Sub"
              placeholder="0.8rem"
              .value="${this._config.custom_styles?.font_size?.text?.sub || ""}"
              @change="${(ev: InputEvent) =>
                this.customStyleFontSizeChanged(ev, "text", "sub")}"
            ></ha-textfield>
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
