import { LitElement, html, property } from 'lit-element';
import { Config, NavItem } from './vertical-stacked-navigation-card';

export class VerticalStackedNavCardEditor extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: Object }) _config!: Config;

  setConfig(config: Config) {
    this._config = config;
  }

  updateNavItemProperty(ev: InputEvent, index: number, property: keyof NavItem) {
    const _config = Object.assign({}, this._config);
    (_config.nav_items[index] as any)[property] = (ev.target as HTMLInputElement).value;
    this._config = _config;
  
    const event = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  // Method to add a new NavItem
  addNavItem(ev: MouseEvent) {
    const _config = Object.assign({}, this._config);
    const newNavItem: NavItem = {
      name: "New Nav Item",
      icon: "mdi:view-dashboard",
      destination: "/",
    };
    _config.nav_items.push(newNavItem);
    this._config = _config;
  
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      ${this._config.nav_items.map(
        (item, index) => html`
          <div>
            <h4>Nav Item ${index + 1}</h4>
            Name:
            <input
              .value=${item.name}
              @focusout=${(ev: InputEvent) => this.updateNavItemProperty(ev, index, 'name')}
            ></input>
            Icon:
            <input
              .value=${item.icon}
              @focusout=${(ev: InputEvent) => this.updateNavItemProperty(ev, index, 'icon')}
            ></input>
            Destination:
            <input
              .value=${item.destination}
              @focusout=${(ev: InputEvent) => this.updateNavItemProperty(ev, index, 'destination')}
            ></input>
            Active:
            <input
              type="checkbox"
              ?checked=${item.active}
              @change=${(ev: InputEvent) => this.updateNavItemProperty(ev, index, 'active')}
            ></input>
            Unfolded:
            <input
              type="checkbox"
              ?checked=${item.unfolded}
              @change=${(ev: InputEvent) => this.updateNavItemProperty(ev, index, 'unfolded')}
            ></input>
            Sub Nav Items:
            <div>
              ${item.sub_nav_items?.map(
                (subItem, subIndex) => html`
                  <!-- Add SubNavItem configuration fields here -->
                `,
              )}
            </div>
          </div>
        `,
      )}
      <button @click=${this.addNavItem}>Add Nav Item</button>
    `;
  }
}

customElements.define('vertical-stacked-nav-card-editor', VerticalStackedNavCardEditor);