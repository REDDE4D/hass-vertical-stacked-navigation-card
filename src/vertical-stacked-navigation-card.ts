import { LitElement, html, TemplateResult, CSSResult, PropertyValues } from "lit-element";
import styles from "./styles";

interface NavItem {
  name: string;
  icon: string;
  destination: string;
  active?: boolean;
  sub_nav_items?: SubNavItem[];
}

interface SubNavItem {
  name: string;
  icon: string;
  destination: string;
  active?: boolean;
}

interface CustomStyles {
  colors?: {
    background?: {
      main?: string;
      sub?: string;
    };
    text?: {
      main?: string;
      sub?: string;
    };
    hover?: {
      main?: string;
      sub?: string;
    };
    active?: {
      main?: string;
      sub?: string;
    };
  };
  font_size?: {
    main?: string;
    sub?: string;
  };
}

interface Config {
  nav_name?: string;
  nav_items: NavItem[];
  custom_styles?: CustomStyles;
}

export class VerticalStackedNavCard extends LitElement {
  private content: HTMLElement | null = null;
  private isContentSet: boolean = false;
  private config!: Config;

  static get styles(): CSSResult {
    return styles;
  }

  protected render(): TemplateResult {
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
        <div class="card-content"></div>
      </ha-card>
    `;
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (!this.content) {
        this.content = this.shadowRoot!.querySelector(".card-content");
    }

    if (!this.isContentSet && this.content) {
      this.isContentSet = true;

      if (this.config.custom_styles) {
        const {
          colors,
          font_size,
        } = this.config.custom_styles;
  
        if (colors) {
          this.style.setProperty("--main-background-color", colors.background?.main ?? null);
          this.style.setProperty("--sub-background-color", colors.background?.sub ?? null);
          this.style.setProperty("--main-text-color", colors.text?.main ?? null);
          this.style.setProperty("--sub-text-color", colors.text?.sub ?? null);
          this.style.setProperty("--main-hover-color", colors.hover?.main ?? null);
          this.style.setProperty("--sub-hover-color", colors.hover?.sub ?? null);
          this.style.setProperty("--main-active-color", colors.active?.main ?? null);
          this.style.setProperty("--sub-active-color", colors.active?.sub ?? null);
        }
      
        if (font_size) {
          this.style.setProperty("--main-font-size", font_size.main ?? null);
          this.style.setProperty("--sub-font-size", font_size.sub ?? null);
        }
      }

      const navItems = this.config.nav_items.map((item, index) => {
        const isActive = item.active ? "active" : "";
        const subNavItems = item.sub_nav_items
          ? item.sub_nav_items
            .map(
              (subItem) => `
                <a href="${subItem.destination}" class="sub-item ${subItem.active ? "active" : ""} nav-item-${index}">
                  <ha-icon icon="${subItem.icon}"></ha-icon>
                  <span>${subItem.name}</span>
                </a>
              `
            )
            .join("")
          : "";

        return `
          <div class="nav-item-container">
            <a href="${item.sub_nav_items ? "#" : item.destination}" class="nav-item ${isActive} nav-item-${index}">
              <ha-icon icon="${item.icon}"></ha-icon>
              <span>${item.name}</span>
              ${item.sub_nav_items ? '<ha-icon icon="mdi:chevron-down" class="subnav-indicator"></ha-icon>' : ""}
            </a>
            <div class="sub-nav-items">${subNavItems}</div>
          </div>
        `;
      }).join("");

      this.content.innerHTML = navItems;

      this.config.nav_items.forEach((item, index) => {
        if (item.sub_nav_items) {
          const navItem = this.querySelector(`.nav-item.nav-item-${index}`) as HTMLElement;
          navItem.addEventListener("click", this._toggleSubnav.bind(this));
      
          const hasActiveSubItem = item.sub_nav_items.some((subItem) => subItem.active);
          if (hasActiveSubItem) {
            const subNav = navItem.nextElementSibling as HTMLElement;
            subNav.style.display = "block";
            navItem.classList.add("unfolded");
          }
        }
      });
      
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
    const navItemContainer = (event.target as HTMLElement).closest(".nav-item-container");
    if (!navItemContainer || !navItemContainer.querySelector(".sub-nav-items")) {
      return;
    }
  
    const subNav = navItemContainer.querySelector(".sub-nav-items")! as HTMLElement;
    const parentItem = navItemContainer.querySelector(".nav-item")! as HTMLElement;
    if (subNav.style.display === "block") {
      subNav.style.display = "none";
      parentItem.classList.remove("unfolded");
    } else {
      subNav.style.display = "block";
      parentItem.classList.add("unfolded");
    }
  }  
}
customElements.define("vertical-stacked-navigation-card", VerticalStackedNavCard);