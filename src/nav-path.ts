import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";

type View = {
  path?: string;
  title?: string;
};

type LovelaceConfig = {
  views: View[];
};

@customElement("destination-input")
class DestinationInput extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property() label = "";
  @property() placeholder = "";
  @property() value = "";

  @state() destinations: string[] = [];
  @state() isOpen = false;

  static get styles() {
    return css`
      .dropdown {
        position: absolute;
        background-color: var(--primary-background-color);
        z-index: 1;
        display: none;
      }

      .dropdown.open {
        display: block;
      }

      .option {
        padding: 8px;
        cursor: pointer;
      }

      .option:hover {
        background-color: var(--primary-color);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchDestinations();
  }

  async fetchDestinations() {
    if (this.hass) {
      const lovelaceConfig: LovelaceConfig = await this.hass.callWS({
        type: "lovelace/config",
      });

      this.destinations = lovelaceConfig.views.map(
        (view) => `/lovelace/${view.path || view.title}`
      );
    }
  }

  handleInput(ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("change", { detail: { value: this.value } })
    );
    this.isOpen = true;
  }

  handleBlur() {
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  handleItemClick(value: string) {
    this.value = value;
    this.isOpen = false;
    this.dispatchEvent(
      new CustomEvent("change", { detail: { value: this.value } })
    );
  }

  render() {
    return html`
      <div style="position: relative;">
        <ha-textfield
          .label="${this.label}"
          style="width: 100%;"
          .placeholder="${this.placeholder}"
          .value="${this.value}"
          @input="${this.handleInput}"
          @blur="${this.handleBlur}"
        ></ha-textfield>
        <div class="dropdown ${this.isOpen ? "open" : ""}">
          ${this.destinations.map(
            (destination) => html`
              <div
                class="option"
                @click="${() => this.handleItemClick(destination)}"
              >
                ${destination}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

export default DestinationInput;
