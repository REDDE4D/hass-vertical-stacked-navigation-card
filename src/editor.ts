import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { HomeAssistant, fireEvent, LovelaceCardEditor, LovelaceCardConfig } from 'custom-card-helpers';

import { customElement, property, state } from 'lit/decorators';
import { Config } from './vertical-stacked-navigation-card';

interface VerticalStackedNavCardConfig extends LovelaceCardConfig {
  nav_items: Config['nav_items'];
}

@customElement('vertical-stacked-nav-card-editor')
export class VerticalStackedNavCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: VerticalStackedNavCardConfig;

  public setConfig(config: VerticalStackedNavCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div>
        <h3>Configuration</h3>
        <p>Here, you can configure your Vertical Stacked Navigation Card.</p>
        <!-- Add your form elements for the card configuration here. -->
      </div>
    `;
  }

  private _valueChanged(ev: InputEvent): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target as HTMLInputElement & { configValue: string };
    if ((this as any)[`_${target.configValue}`] === target.value) {
        return;
      }
      
    if (target.configValue) {
      if (target.value === '') {
        const tmpConfig = { ...this._config };
        delete tmpConfig[target.configValue];
        this._config = tmpConfig;
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }  
}
