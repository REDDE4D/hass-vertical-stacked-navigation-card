import {
  LitElement,
  html,
  TemplateResult,
  PropertyValues,
  CSSResultGroup,
} from "lit";
import { styles } from "./styles";
import { Config } from "./types";
import "./editor";

export class VerticalStackedNavCard extends LitElement {
  private content: HTMLElement | null = null;
  private isContentSet: boolean = false;
  private config!: Config;

  static get styles(): CSSResultGroup {
    return styles;
  }

  static getConfigElement() {
    return document.createElement("vertical-stacked-navigation-card-editor");
  }

  static getStubConfig() {
    return {
      nav_name: "Navigation",
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

  protected render(): TemplateResult {
    const navItems = this.config.nav_items.map((item, index) => {
      const isActive = item.active ? "active" : "";
      const subNavItems = item.sub_nav_items
        ? item.sub_nav_items.map(
            (subItem) => html`
              <a
                href="${subItem.destination}"
                class="sub-item ${subItem.active
                  ? "active"
                  : ""} nav-item-${index}"
              >
                <ha-icon icon="${subItem.icon}"></ha-icon>
                <span>${subItem.name}</span>
              </a>
            `
          )
        : "";
      return html`
        <div class="nav-item-container">
          <a
            href="${item.sub_nav_items ? "#" : item.destination}"
            class="nav-item ${isActive} nav-item-${index}"
            @click=${item.sub_nav_items ? this._toggleSubnav : null}
          >
            <ha-icon icon="${item.icon}"></ha-icon>
            <span>${item.name}</span>
            ${item.sub_nav_items
              ? html`<ha-icon
                  icon="mdi:chevron-down"
                  class="subnav-indicator"
                ></ha-icon>`
              : ""}
          </a>
          <div
            class="sub-nav-items"
            style="display: ${item.unfolded ? "block" : "none"}"
          >
            ${subNavItems}
          </div>
        </div>
      `;
    });

    return html`
      <ha-card>
        ${this.config.nav_name !== "none"
          ? html`
              <header>
                <style>
                  header {
                    padding-top: 10px;
                    padding-left: 16px;
                    padding-bottom: 20px;
                    font-weight: bold;
                    font-size: 20px;
                  }
                </style>
                ${this.config.nav_name || "My Custom Navigation"}
              </header>
            `
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
      if (this.config.custom_styles) {
        const { colors, font_size } = this.config.custom_styles;

        if (colors) {
          this.style.setProperty(
            "--main-background-color",
            colors.background?.main ?? null
          );
          this.style.setProperty(
            "--sub-background-color",
            colors.background?.sub ?? null
          );
          this.style.setProperty(
            "--main-text-color",
            colors.text?.main ?? null
          );
          this.style.setProperty("--sub-text-color", colors.text?.sub ?? null);
          this.style.setProperty(
            "--main-hover-color",
            colors.hover?.main ?? null
          );
          this.style.setProperty(
            "--sub-hover-color",
            colors.hover?.sub ?? null
          );
          this.style.setProperty(
            "--main-active-color",
            colors.active?.main ?? null
          );
          this.style.setProperty(
            "--sub-active-color",
            colors.active?.sub ?? null
          );
        }

        if (font_size) {
          this.style.setProperty("--main-font-size", font_size.main ?? null);
          this.style.setProperty("--sub-font-size", font_size.sub ?? null);
        }
      }
    }
  }

  public setConfig(config: Config): void {
    if (!config.nav_items) {
      throw new Error("You need to define nav_items");
    }
    this.config = config;
  }

  public getCardSize(): number {
    return this.config.nav_items.length * 1;
  }

  private _toggleSubnav(event: MouseEvent): void {
    event.preventDefault();
    const navItemContainer = (event.target as HTMLElement).closest(
      ".nav-item-container"
    );
    if (
      !navItemContainer ||
      !navItemContainer.querySelector(".sub-nav-items")
    ) {
      return;
    }

    const subNav = navItemContainer.querySelector(
      ".sub-nav-items"
    )! as HTMLElement;
    const parentItem = navItemContainer.querySelector(
      ".nav-item"
    )! as HTMLElement;
    if (subNav.style.display === "block") {
      subNav.style.display = "none";
      parentItem.classList.remove("unfolded");
    } else {
      subNav.style.display = "block";
      parentItem.classList.add("unfolded");
    }
  }
}

customElements.define(
  "vertical-stacked-navigation-card",
  VerticalStackedNavCard
);
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "vertical-stacked-navigation-card",
  name: "Vertical Stacked Navigation Card",
  description: "A vertical stacked navigation card",
});
