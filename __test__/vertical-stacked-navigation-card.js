import { html, LitElement } from "https://unpkg.com/lit?module";

class VerticalStackedNavCard extends HTMLElement {

  static getConfigElement() {
    return document.createElement("vertical-stacked-navigation-card-editor");
  }

  static getStubConfig() {
    return {
      nav_name: "My Custom Navigation",
      nav_items: [
        {
          icon: "mdi:home",
          name: "Home",
          destination: "/lovelace/home",
          active: true,
        },
        {
          icon: "mdi:lightbulb",
          name: "Lights",
          sub_nav_items: [
            {
              icon: "mdi:sofa",
              name: "Living Room",
              active: true,
              destination: "/lovelace/lights/living-room",
            },
            {
              icon: "mdi:bed",
              name: "Bedroom",
              destination: "/lovelace/lights/bedroom",
            },
          ],
        },
      ],
    };
  }

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
window.customCards = window.customCards || [];
window.customCards.push({
  type: "vertical-stacked-navigation-card",
  name: "Vertical Stacked Nav Card",
  preview: false,
  description: "A custom card with a vertical stacked navigation",
});

class VerticalStackedNavCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    this._config = config;
  }

  navNameChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    _config.nav_name = ev.target.value;
    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  addNavItem(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    if (!_config.nav_items) {
      _config.nav_items = [];
    }

    _config.nav_items.push({
      name: "New Nav Item",
      icon: "mdi:home",
    });

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  removeNavItem(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const index = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    _config.nav_items.splice(index, 1);

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  navItemNameChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const index = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    _config.nav_items[index].name = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  navItemIconChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const index = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    _config.nav_items[index].icon = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  navItemDestinationChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const index = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    _config.nav_items[index].destination = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  addSubNavItem(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const index = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    if (!_config.nav_items[index].sub_nav_items) {
      _config.nav_items[index].sub_nav_items = [];
    }

    _config.nav_items[index].sub_nav_items.push({
      name: "New Sub Nav Item",
      icon: "mdi:home",
      destination: "lovelace",
    });

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  removeSubNavItem(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const navItemIndex = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    const subNavItemIndex = parseInt(ev.target.closest(".sub-nav-item-container").getAttribute("index"));
    _config.nav_items[navItemIndex].sub_nav_items.splice(subNavItemIndex, 1);

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  subNavItemNameChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const navItemIndex = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    const subNavItemIndex = parseInt(ev.target.closest(".sub-nav-item-container").getAttribute("index"));
    _config.nav_items[navItemIndex].sub_nav_items[subNavItemIndex].name = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  subNavItemIconChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const navItemIndex = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    const subNavItemIndex = parseInt(ev.target.closest(".sub-nav-item-container").getAttribute("index"));
    _config.nav_items[navItemIndex].sub_nav_items[subNavItemIndex].icon = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);


    this.dispatchEvent(event);
  }

  subNavItemDestinationChanged(ev) {
    if (!this._config) {
      return;
    }

    const _config = Object.assign({}, this._config);

    const navItemIndex = parseInt(ev.target.closest(".nav-item-container").getAttribute("index"));
    const subNavItemIndex = parseInt(ev.target.closest(".sub-nav-item-container").getAttribute("index"));
    _config.nav_items[navItemIndex].sub_nav_items[subNavItemIndex].destination = ev.target.value;

    this._config = _config;

    const event = new ConfigChangedEvent(_config);

    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
    <style>
      .card-config {
        padding: 0 16px 16px;
      }
      .nav-item-container {
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 16px;
      }
      .sub-nav-item-container {
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 16px;
      }
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      label {
        display: block;
        margin-bottom: 8px;
      }
      hr {
        margin: 16px 0;
      }
    </style>

      <div class="card-config">
        <label for="nav_name">Nav Name</label>
        <input
          id="nav_name"
          .value="${this._config.nav_name || ""}"
          @focusout="${this.navNameChanged}"
        />
        <hr>
        <label for="nav_items">Nav Items</label>
        <div id="nav_items">
          ${this._config.nav_items.map((navItem, index) => {
      return html`
              <div class="nav-item-container" index="${index}">
                <label for="nav_item_name_${index}">Nav Item Name</label>
                <input
                  id="nav_item_name_${index}"
                  .value="${navItem.name || ""}"
                  @focusout="${this.navItemNameChanged}"
                />
                <label for="nav_item_icon_${index}">Nav Item Icon</label>
                <input
                  id="nav_item_icon_${index}"
                  .value="${navItem.icon || ""}"
                  @focusout="${this.navItemIconChanged}"
                />
                <label for="nav_item_destination_${index}">Nav Item Destination</label>
                <input
                  id="nav_item_destination_${index}"
                  .value="${navItem.destination || ""}"
                  @focusout="${this.navItemDestinationChanged}"
                />
                <label for="nav_item_sub_nav_items_${index}">Nav Item Sub Nav Items</label>
                <div id="nav_item_sub_nav_items_${index}">
                  ${navItem?.sub_nav_items?.map((subNavItem, subNavItemIndex) => {
        return html`
                      <div class="sub-nav-item-container" index="${subNavItemIndex}">
                        <label for="sub_nav_item_name_${index}_${subNavItemIndex}">Sub Nav Item Name</label>
                        <input
                          id="sub_nav_item_name_${index}_${subNavItemIndex}"
                          .value="${subNavItem.name || ""}"
                          @focusout="${this.subNavItemNameChanged}" 
                        />
                        <label for="sub_nav_item_icon_${index}_${subNavItemIndex}">Sub Nav Item Icon</label>
                        <input
                          id="sub_nav_item_icon_${index}_${subNavItemIndex}"
                          .value="${subNavItem.icon || ""}"
                          @focusout="${this.subNavItemIconChanged}"
                        />
                        <label for="sub_nav_item_destination_${index}_${subNavItemIndex}">Sub Nav Item Destination</label>
                        <input
                          id="sub_nav_item_destination_${index}_${subNavItemIndex}"
                          .value="${subNavItem.destination || ""}"
                          @focusout="${this.subNavItemDestinationChanged}"
                        />
                        <button @click="${this.removeSubNavItem}">Remove Sub Nav Item</button>
                      </div>
                    `;
      })}
                  <button @click="${this.addSubNavItem}">Add Sub Nav Item</button>
                </div>
                <button @click="${this.removeNavItem}">Remove Nav Item</button>
              </div>
            `;
    })}
          <button @click="${this.addNavItem}">Add Nav Item</button>
          </div>
      </div>
    `;
  }
}

customElements.define("vertical-stacked-navigation-card-editor", VerticalStackedNavCardEditor);

class ConfigChangedEvent extends Event {
  constructor(config) {
    super("config-changed", {
      bubbles: true,
      composed: true,
    });
    this.detail = { config: config };
  }
}