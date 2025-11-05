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
      <div class="card-config">
        ${this.renderBasicSettings()}
        ${this.renderNavigationItems()}
        ${this.renderCustomStyles()}
      </div>
    `;
  }

  private renderBasicSettings() {
    return html`
      <div class="section">
        <h3>Basic Settings</h3>
        <ha-textfield
          label="Navigation Name"
          class="main-nav-name"
          .value="${this._config.nav_name || ""}"
          placeholder="My Custom Navigation"
          @change="${this.navNameChanged}"
        ></ha-textfield>
        <div class="help-text">Set to "none" to hide the header</div>
      </div>
    `;
  }

  private renderNavigationItems() {
    return html`
      <div class="section">
        <div class="nav-items-header">
          <h3>Navigation Items</h3>
          <mwc-button
            class="add-nav-item"
            @click="${(ev: InputEvent) => this.addNavItem(ev)}"
          >
            <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Nav Item
          </mwc-button>
        </div>
        <div class="nav-items">
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
                ${this.renderSubNavItems(navItem, index)}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderSubNavItems(navItem: any, index: number) {
    if (!navItem?.sub_nav_items || navItem.sub_nav_items.length === 0) {
      return "";
    }

    return html`
      <div class="sub-nav-items">
        <details>
          <summary>Sub Navigation Items (${navItem.sub_nav_items.length})</summary>
          ${navItem.sub_nav_items.map((subNavItem: any, subNavItemIndex: number) => {
            return html`
              <div class="sub-nav-item" index="${subNavItemIndex}">
                <div class="sub-nav-item-main-config">
                  <div class="main-config-row">
                    <ha-icon-picker
                      label="Icon"
                      placeholder="mdi:home"
                      class="input-icon-picker"
                      .value="${subNavItem.icon || ""}"
                      @value-changed="${(ev: CustomEvent) =>
                        this.subNavItemChanged(ev, index, subNavItemIndex, "icon")}"
                    ></ha-icon-picker>
                    <ha-textfield
                      label="Name"
                      placeholder="Home"
                      class="input-name"
                      .value="${subNavItem.name || ""}"
                      @change="${(ev: CustomEvent) =>
                        this.subNavItemChanged(ev, index, subNavItemIndex, "name")}"
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
                        this.subNavItemChanged(ev, index, subNavItemIndex, "active")}"
                    ></ha-switch>
                    <label class="mdc-label">Active</label>
                  </ha-formfield>
                  <mwc-button
                    class="remove-sub-nav-item"
                    @click="${(ev: InputEvent) =>
                      this.removeSubNavItem(ev, index, subNavItemIndex)}"
                  >
                    <ha-icon .icon=${"mdi:delete"}></ha-icon>
                  </mwc-button>
                </div>
              </div>
            `;
          })}
        </details>
      </div>
    `;
  }

  private renderCustomStyles() {
    return html`
      <div class="section">
        <h3>Custom Styles</h3>
        <details class="custom-styles">
          <summary>Customize Appearance</summary>

          ${this.renderColorsSection()}
          ${this.renderTypographySection()}
          ${this.renderLayoutSection()}
          ${this.renderEffectsSection()}
        </details>
      </div>
    `;
  }

  private renderColorsSection() {
    return html`
      <details>
        <summary>Colors</summary>

        <details>
          <summary>Text Color</summary>
          ${this.renderColorInput("text", "main", "Main Text", "rgba(0, 0, 0, 0.87)")}
          ${this.renderColorInput("text", "sub", "Sub Text", "rgba(0, 0, 0, 0.6)")}
        </details>

        <details>
          <summary>Background Color</summary>
          ${this.renderColorInput("background", "main", "Main Background", "rgba(0, 0, 0, 0.05)")}
          ${this.renderColorInput("background", "sub", "Sub Background", "rgba(0, 0, 0, 0.02)")}
        </details>

        <details>
          <summary>Hover Color</summary>
          ${this.renderColorInput("hover", "main", "Main Hover", "rgba(0, 0, 0, 0.08)")}
          ${this.renderColorInput("hover", "sub", "Sub Hover", "rgba(0, 0, 0, 0.05)")}
        </details>

        <details>
          <summary>Active State Color</summary>
          ${this.renderColorInput("active", "main", "Main Active Background", "rgba(3, 169, 244, 0.15)")}
          ${this.renderColorInput("active", "sub", "Sub Active Background", "rgba(3, 169, 244, 0.1)")}
          ${this.renderColorInput("active_text", "main", "Main Active Text", "rgb(3, 169, 244)")}
          ${this.renderColorInput("active_text", "sub", "Sub Active Text", "rgb(3, 169, 244)")}
        </details>

        <details>
          <summary>Icon Color</summary>
          ${this.renderColorInput("icon", "main", "Main Icon", "currentColor")}
          ${this.renderColorInput("icon", "sub", "Sub Icon", "currentColor")}
        </details>
      </details>
    `;
  }

  private renderTypographySection() {
    return html`
      <details>
        <summary>Typography</summary>

        <details>
          <summary>Text Size</summary>
          <ha-textfield
            label="Main Text Size"
            placeholder="16px"
            .value="${this._config.custom_styles?.font_size?.text?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontSizeChanged(ev, "text", "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Text Size"
            placeholder="14px"
            .value="${this._config.custom_styles?.font_size?.text?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontSizeChanged(ev, "text", "sub")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Icon Size</summary>
          <ha-textfield
            label="Main Icon Size"
            placeholder="24px"
            .value="${this._config.custom_styles?.font_size?.icon?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontSizeChanged(ev, "icon", "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Icon Size"
            placeholder="20px"
            .value="${this._config.custom_styles?.font_size?.icon?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontSizeChanged(ev, "icon", "sub")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Font Weight</summary>
          <ha-textfield
            label="Main Font Weight"
            placeholder="400"
            .value="${this._config.custom_styles?.font_weight?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontWeightChanged(ev, "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Font Weight"
            placeholder="400"
            .value="${this._config.custom_styles?.font_weight?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontWeightChanged(ev, "sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Main Active Font Weight"
            placeholder="500"
            .value="${this._config.custom_styles?.font_weight?.main_active || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontWeightChanged(ev, "main_active")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Active Font Weight"
            placeholder="500"
            .value="${this._config.custom_styles?.font_weight?.sub_active || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontWeightChanged(ev, "sub_active")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Font Family</summary>
          <ha-textfield
            label="Main Font Family"
            placeholder="inherit"
            .value="${this._config.custom_styles?.font_family?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontFamilyChanged(ev, "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Font Family"
            placeholder="inherit"
            .value="${this._config.custom_styles?.font_family?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleFontFamilyChanged(ev, "sub")}"
          ></ha-textfield>
        </details>
      </details>
    `;
  }

  private renderLayoutSection() {
    return html`
      <details>
        <summary>Layout & Spacing</summary>

        <details>
          <summary>Border Radius</summary>
          <ha-textfield
            label="Main Border Radius"
            placeholder="8px"
            .value="${this._config.custom_styles?.border_radius?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBorderRadiusChanged(ev, "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Border Radius"
            placeholder="0"
            .value="${this._config.custom_styles?.border_radius?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBorderRadiusChanged(ev, "sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Card Border Radius"
            placeholder="12px"
            .value="${this._config.custom_styles?.border_radius?.card || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBorderRadiusChanged(ev, "card")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Borders</summary>
          <ha-textfield
            label="Main Border"
            placeholder="none"
            .value="${this._config.custom_styles?.border?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBorderChanged(ev, "main")}"
          ></ha-textfield>
          <div class="help-text">Example: 1px solid rgba(0,0,0,0.1)</div>
          <ha-textfield
            label="Sub Border"
            placeholder="none"
            .value="${this._config.custom_styles?.border?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBorderChanged(ev, "sub")}"
          ></ha-textfield>
        </details>
      </details>
    `;
  }

  private renderEffectsSection() {
    return html`
      <details>
        <summary>Effects & Animations</summary>

        <details>
          <summary>Box Shadows</summary>
          <ha-textfield
            label="Main Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.main || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBoxShadowChanged(ev, "main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.sub || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBoxShadowChanged(ev, "sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Main Hover Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.main_hover || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBoxShadowChanged(ev, "main_hover")}"
          ></ha-textfield>
          <ha-textfield
            label="Card Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.card || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleBoxShadowChanged(ev, "card")}"
          ></ha-textfield>
          <div class="help-text">Example: 0 2px 4px rgba(0,0,0,0.1)</div>
        </details>

        <details>
          <summary>Transition Duration</summary>
          <ha-textfield
            label="Transition Duration"
            placeholder="0.2s"
            .value="${this._config.custom_styles?.transitions?.duration || ""}"
            @change="${(ev: InputEvent) =>
              this.customStyleTransitionDurationChanged(ev)}"
          ></ha-textfield>
          <div class="help-text">Controls animation speed (e.g., 0.3s, 200ms)</div>
        </details>
      </details>
    `;
  }

  private renderColorInput(colorType: string, subType: string, label: string, placeholder: string) {
    const value = this._config.custom_styles?.colors?.[colorType as keyof typeof this._config.custom_styles.colors]?.[subType as "main" | "sub"] || "";

    return html`
      <div class="details-row">
        <div
          class="color-preview"
          style="background-color: ${value || placeholder};"
          title="${label}"
        ></div>
        <ha-textfield
          label="${label}"
          class="custom-style-input"
          placeholder="${placeholder}"
          .value="${value}"
          @change="${(ev: InputEvent) =>
            this.customStyleColorsChanged(ev, colorType as any, subType as any)}"
        ></ha-textfield>
      </div>
    `;
  }
}

customElements.define(
  "vertical-stacked-navigation-card-editor",
  VerticalStackedNavCardEditor
);
