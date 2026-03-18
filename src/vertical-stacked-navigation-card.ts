import {
  LitElement,
  html,
  TemplateResult,
  PropertyValues,
  CSSResultGroup,
  nothing,
} from "lit";
import { property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import { styles } from "./styles";
import { Config, NavItem, SubNavItem, TapAction, VisibilityCondition } from "./types";
import "./editor";

export class VerticalStackedNavCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  private content: HTMLElement | null = null;
  private isContentSet: boolean = false;
  private config!: Config;
  @state() private _expandedItems: Set<number> = new Set();

  static get styles(): CSSResultGroup {
    return styles;
  }

  static getConfigElement() {
    return document.createElement("vertical-stacked-navigation-card-editor");
  }

  static getStubConfig() {
    return {
      nav_name: "Navigation",
      auto_active: true,
      nav_items: [
        {
          name: "Home",
          icon: "mdi:home",
          destination: "/lovelace/0",
        },
        {
          name: "Lights",
          icon: "mdi:lightbulb",
          sub_nav_items: [
            {
              name: "Living Room",
              icon: "mdi:lightbulb",
              destination: "/lovelace/1",
            },
          ],
        },
      ],
    };
  }

  private _isItemActive(item: NavItem | SubNavItem): boolean {
    if (item.active) return true;
    if (this.config.auto_active && item.destination) {
      const currentPath = window.location.pathname;
      return currentPath === item.destination;
    }
    return false;
  }

  private _isItemVisible(item: NavItem | SubNavItem): boolean {
    if (!item.visibility || !this.hass) return true;
    const { entity, state: requiredState, state_not } = item.visibility;
    if (!entity) return true;
    const entityState = this.hass.states[entity];
    if (!entityState) return true;
    if (requiredState !== undefined) return entityState.state === requiredState;
    if (state_not !== undefined) return entityState.state !== state_not;
    return true;
  }

  private _getEntityBadge(item: NavItem | SubNavItem): string | null {
    if (!item.entity || !this.hass) return null;
    const entityState = this.hass.states[item.entity];
    if (!entityState) return null;
    return entityState.state;
  }

  private _handleTapAction(item: NavItem | SubNavItem, event: MouseEvent): void {
    if (!item.tap_action || item.tap_action.action === "navigate") return;
    event.preventDefault();

    const action = item.tap_action;
    switch (action.action) {
      case "url":
        if (action.url_path) window.open(action.url_path, "_blank");
        break;
      case "call-service":
        if (action.service && this.hass) {
          const [domain, service] = action.service.split(".");
          this.hass.callService(domain, service, action.service_data || {});
        }
        break;
      case "more-info":
        if (action.entity || item.entity) {
          const moreInfoEvent = new CustomEvent("hass-more-info", {
            bubbles: true,
            composed: true,
            detail: { entityId: action.entity || item.entity },
          });
          this.dispatchEvent(moreInfoEvent);
        }
        break;
      case "none":
        break;
    }
  }

  private _getItemHref(item: NavItem | SubNavItem): string {
    if (item.tap_action) {
      switch (item.tap_action.action) {
        case "navigate":
          return item.tap_action.navigation_path || item.destination || "#";
        case "url":
        case "call-service":
        case "more-info":
        case "none":
          return "#";
      }
    }
    return item.destination || "#";
  }

  protected render(): TemplateResult {
    const navItems = this.config.nav_items.map((item, index) => {
      if (!this._isItemVisible(item)) return nothing;

      const isActive = this._isItemActive(item);
      const hasSubNav = item.sub_nav_items && item.sub_nav_items.length > 0;
      const isExpanded = this._expandedItems.has(index);
      const badge = this._getEntityBadge(item);

      const visibleSubItems = hasSubNav
        ? item.sub_nav_items!.filter((sub) => this._isItemVisible(sub))
        : [];

      const subNavItems = visibleSubItems.map(
        (subItem) => html`
          <a
            href="${this._getItemHref(subItem)}"
            class="sub-item ${this._isItemActive(subItem) ? "active" : ""}"
            @click=${(e: MouseEvent) => this._handleTapAction(subItem, e)}
            style="${subItem.icon_color ? `--item-icon-color: ${subItem.icon_color}` : ""}"
          >
            <ha-icon icon="${subItem.icon}"></ha-icon>
            <span>${subItem.name}</span>
            ${subItem.entity && this._getEntityBadge(subItem)
              ? html`<span class="badge">${this._getEntityBadge(subItem)}</span>`
              : ""}
          </a>
        `
      );

      return html`
        <div class="nav-item-container">
          <a
            href="${hasSubNav ? "#" : this._getItemHref(item)}"
            class="nav-item ${isActive ? "active" : ""} ${isExpanded ? "unfolded" : ""}"
            @click=${hasSubNav
              ? (e: MouseEvent) => this._toggleSubnav(e, index)
              : (e: MouseEvent) => this._handleTapAction(item, e)}
            style="${item.icon_color ? `--item-icon-color: ${item.icon_color}` : ""}"
          >
            <ha-icon icon="${item.icon}"></ha-icon>
            <span>${item.name}</span>
            ${badge
              ? html`<span class="badge">${badge}</span>`
              : ""}
            ${hasSubNav
              ? html`<ha-icon
                  icon="mdi:chevron-down"
                  class="subnav-indicator"
                ></ha-icon>`
              : ""}
          </a>
          ${hasSubNav
            ? html`<div class="sub-nav-items ${isExpanded ? "expanded" : ""}">
                ${subNavItems}
              </div>`
            : ""}
        </div>
      `;
    });

    return html`
      <ha-card>
        ${this.config.nav_name !== "none"
          ? html`<header>${this.config.nav_name || "My Custom Navigation"}</header>`
          : ""}
        <div class="card-content">${navItems}</div>
      </ha-card>
    `;
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (!this.content) {
      this.content = this.shadowRoot!.querySelector(".card-content");
    }

    if (!this.isContentSet && this.content) {
      this.applyCustomStyles();
      this.isContentSet = true;
    }
  }

  private applyCustomStyles(): void {
    if (!this.config.custom_styles) {
      return;
    }

    const {
      colors,
      font_size,
      font_weight,
      font_family,
      border_radius,
      padding,
      spacing,
      border,
      box_shadow,
      header,
      transitions,
      subnav_indicator
    } = this.config.custom_styles;

    // Colors
    if (colors) {
      this.setStyleProperty("--main-background-color", colors.background?.main);
      this.setStyleProperty("--sub-background-color", colors.background?.sub);
      this.setStyleProperty("--main-text-color", colors.text?.main);
      this.setStyleProperty("--sub-text-color", colors.text?.sub);
      this.setStyleProperty("--main-hover-color", colors.hover?.main);
      this.setStyleProperty("--sub-hover-color", colors.hover?.sub);
      this.setStyleProperty("--main-active-color", colors.active?.main);
      this.setStyleProperty("--sub-active-color", colors.active?.sub);
      this.setStyleProperty("--main-active-text-color", colors.active_text?.main);
      this.setStyleProperty("--sub-active-text-color", colors.active_text?.sub);
      this.setStyleProperty("--main-icon-color", colors.icon?.main);
      this.setStyleProperty("--sub-icon-color", colors.icon?.sub);
    }

    // Font sizes
    if (font_size) {
      this.setStyleProperty("--main-font-size", font_size.text?.main);
      this.setStyleProperty("--sub-font-size", font_size.text?.sub);
      this.setStyleProperty("--main-icon-size", font_size.icon?.main);
      this.setStyleProperty("--sub-icon-size", font_size.icon?.sub);
    }

    // Font weights
    if (font_weight) {
      this.setStyleProperty("--main-font-weight", font_weight.main);
      this.setStyleProperty("--sub-font-weight", font_weight.sub);
      this.setStyleProperty("--main-active-font-weight", font_weight.main_active);
      this.setStyleProperty("--sub-active-font-weight", font_weight.sub_active);
    }

    // Font families
    if (font_family) {
      this.setStyleProperty("--main-font-family", font_family.main);
      this.setStyleProperty("--sub-font-family", font_family.sub);
    }

    // Border radius
    if (border_radius) {
      this.setStyleProperty("--main-border-radius", border_radius.main);
      this.setStyleProperty("--sub-border-radius", border_radius.sub);
      this.setStyleProperty("--ha-card-border-radius", border_radius.card);
    }

    // Padding
    if (padding) {
      if (padding.main) {
        this.setStyleProperty("--main-padding-top", padding.main.top);
        this.setStyleProperty("--main-padding-right", padding.main.right);
        this.setStyleProperty("--main-padding-bottom", padding.main.bottom);
        this.setStyleProperty("--main-padding-left", padding.main.left);
      }
      if (padding.sub) {
        this.setStyleProperty("--sub-padding-top", padding.sub.top);
        this.setStyleProperty("--sub-padding-right", padding.sub.right);
        this.setStyleProperty("--sub-padding-bottom", padding.sub.bottom);
        this.setStyleProperty("--sub-padding-left", padding.sub.left);
      }
      this.setStyleProperty("--content-padding", padding.content);
      this.setStyleProperty("--card-padding", padding.card);
    }

    // Spacing
    if (spacing) {
      this.setStyleProperty("--nav-item-spacing", spacing.nav_items);
      this.setStyleProperty("--main-icon-spacing", spacing.icon?.main);
      this.setStyleProperty("--sub-icon-spacing", spacing.icon?.sub);
    }

    // Borders
    if (border) {
      this.setStyleProperty("--main-border", border.main);
      this.setStyleProperty("--sub-border", border.sub);
    }

    // Box shadows
    if (box_shadow) {
      this.setStyleProperty("--main-box-shadow", box_shadow.main);
      this.setStyleProperty("--sub-box-shadow", box_shadow.sub);
      this.setStyleProperty("--main-hover-box-shadow", box_shadow.main_hover);
      this.setStyleProperty("--sub-hover-box-shadow", box_shadow.sub_hover);
      this.setStyleProperty("--main-active-box-shadow", box_shadow.main_active);
      this.setStyleProperty("--sub-active-box-shadow", box_shadow.sub_active);
      this.setStyleProperty("--ha-card-box-shadow", box_shadow.card);
    }

    // Header
    if (header) {
      this.setStyleProperty("--header-font-size", header.font_size);
      this.setStyleProperty("--header-font-weight", header.font_weight);
      this.setStyleProperty("--header-font-family", header.font_family);
      this.setStyleProperty("--header-text-color", header.color);
      if (header.padding) {
        this.setStyleProperty("--header-padding-top", header.padding.top);
        this.setStyleProperty("--header-padding-right", header.padding.right);
        this.setStyleProperty("--header-padding-bottom", header.padding.bottom);
        this.setStyleProperty("--header-padding-left", header.padding.left);
      }
    }

    // Transitions
    if (transitions) {
      this.setStyleProperty("--transition-duration", transitions.duration);
    }

    // Subnav indicator
    if (subnav_indicator) {
      this.setStyleProperty("--subnav-indicator-size", subnav_indicator.size);
      this.setStyleProperty("--subnav-indicator-color", subnav_indicator.color);
    }
  }

  private setStyleProperty(property: string, value: string | undefined): void {
    if (value !== undefined && value !== null && value !== "") {
      this.style.setProperty(property, value);
    }
  }

  public setConfig(config: Config): void {
    if (!config.nav_items) {
      throw new Error("You need to define nav_items");
    }
    this.config = config;
    this.isContentSet = false;

    // Initialize expanded items from unfolded config
    this._expandedItems = new Set();
    config.nav_items.forEach((item, index) => {
      if (item.unfolded) {
        this._expandedItems.add(index);
      }
    });

    this.requestUpdate();
  }

  public getCardSize(): number {
    return this.config.nav_items.length * 1;
  }

  private _toggleSubnav(event: MouseEvent, index: number): void {
    event.preventDefault();
    const newSet = new Set(this._expandedItems);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    this._expandedItems = newSet;
  }
}

customElements.define(
  "vertical-stacked-navigation-card",
  VerticalStackedNavCard
);

// Register card with Home Assistant
declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "vertical-stacked-navigation-card",
  name: "Vertical Stacked Navigation Card",
  description: "A custom card for displaying a vertical stacked navigation with optional sub-navigation and extensive customization options",
  preview: true,
  documentationURL: "https://github.com/REDDE4D/hass-vertical-stacked-navigation-card",
});
