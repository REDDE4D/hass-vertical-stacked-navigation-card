import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class VerticalStackedNavCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card>
          ${this.config.nav_name !== "none" ? `<header>${this.config.nav_name || "My Custom Navigation"}</header>` : ""}
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector("div");
    }

    if (!this.isContentSet) {
      this.isContentSet = true;

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

      this.content.innerHTML = `
          <style>
              ha-card header {
                padding-top: 10px;
                padding-left: 16px;
                padding-bottom: 20px;
                font-weight: bold;
                font-size: 20px;
              }
              .nav-item-container {
                margin-bottom: 5px;
              }
              .nav-item {
                display: flex;
                align-items: center;
                text-decoration: none;
                background-color: ${this.config?.custom_styles?.colors?.background?.main || "rgba(255, 255, 255, 0.2)"};
                padding: 10px;
                color: ${this.config?.custom_styles?.colors?.text?.main || "#fff"};
                border-radius: 5px;
                font-size: ${this.config?.custom_styles?.font_size?.main || "20px"};
                position: relative;
              }
              .nav-item.unfolded {
                border-bottom-right-radius: none !important;
              }
              .sub-item {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: ${this.config?.custom_styles?.colors?.text?.sub || "#fff"};
                position: relative;
                padding: 5px;
                background-color: ${this.config?.custom_styles?.colors?.background?.sub || "rgba(255, 255, 255, 0.2)"};
                margin-left: 15px;
                padding-left: 25px;
                font-size: ${this.config?.custom_styles?.font_size?.sub || "14px"};
                border-radius: none;
              }
              .sub-item:first-child {
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
              }
              .sub-item:last-child {
                border-bottom-left-radius: 3px;
                border-bottom-right-radius: 3px;
              }
              .nav-item:hover {
                background-color: ${this.config?.custom_styles?.colors?.hover?.main || "rgba(255, 255, 255, 0.3)"};
              }
              .nav-item.active {
                background-color: ${this.config?.custom_styles?.colors?.active?.main || "rgba(55, 55, 255, 0.5)"};
              }
              .subnav-indicator {
                position: absolute;
                right: 5px;
              }
              ha-icon {
                margin-right: 5px;
              }
              .sub-nav-items {
                display: none;
              }
              .sub-nav-items.open {
                display: block;
              }
              .sub-item:hover {
                background-color: ${this.config?.custom_styles?.colors?.hover?.sub || "rgba(255, 255, 255, 0.3)"};
              }
              .sub-item.active {
                background-color: ${this.config?.custom_styles?.colors?.active?.sub || "rgba(55, 55, 255, 0.5)"};
              }
          </style>
          ${navItems}
        `;

        this.config.nav_items.forEach((item, index) => {
          if (item.sub_nav_items) {
            const navItem = this.querySelector(`.nav-item.nav-item-${index}`);
            navItem.addEventListener("click", this._toggleSubnav.bind(this));
  
            const hasActiveSubItem = item.sub_nav_items.some((subItem) => subItem.active);
            if (hasActiveSubItem) {
              const subNav = navItem.nextElementSibling;
              subNav.style.display = "block";
              navItem.classList.add("unfolded");
            }
          }
        });
    }
  }

  _toggleSubnav(event) {
    event.preventDefault();
    const navItemContainer = event.target.closest(".nav-item-container");
    if (!navItemContainer.querySelector(".sub-nav-items")) {
      return;
    }

    const subNav = navItemContainer.querySelector(".sub-nav-items");
    const parentItem = navItemContainer.querySelector(".nav-item");
    if (subNav.style.display === "block") {
      subNav.style.display = "none";
      parentItem.classList.remove("unfolded");
    } else {
      subNav.style.display = "block";
      parentItem.classList.add("unfolded");
    }
  }

  setConfig(config) {
    if (!config.nav_items) {
      throw new Error("You need to define nav_items");
    }
    this.config = config;
  }

  getCardSize() {
    return this.config.nav_items.length * 1;
  }
}

customElements.define("vertical-stacked-navigation-card", VerticalStackedNavCard);

class VerticalStackedNavCardEditor extends LitElement {
  static get properties() {
    return {
      _config: {},
    };
  }

  setConfig(config) {
    this._config = config;
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    // You can add your visual editor elements here, for example:
    return html`
      <div>
        Visual editor for the vertical-stacked-navigation-card.
      </div>
    `;
  }
}

customElements.define("vertical-stacked-navigation-card-editor", VerticalStackedNavCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "vertical-stacked-navigation-card",
  name: "Vertical Stacked Nav Card",
  preview: false,
  description: "A custom card with a vertical stacked navigation",
  editor: "vertical-stacked-navigation-card-editor",
});