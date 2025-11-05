import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: var(--card-padding, 8px);
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
  }

  ha-card header {
    padding: var(--header-padding-top, 16px) var(--header-padding-right, 16px)
      var(--header-padding-bottom, 12px) var(--header-padding-left, 16px);
    font-weight: var(--header-font-weight, 500);
    font-size: var(--header-font-size, 18px);
    color: var(--header-text-color, var(--primary-text-color));
    font-family: var(--header-font-family, inherit);
    line-height: 1.4;
  }

  .card-content {
    padding: var(--content-padding, 8px);
  }

  .nav-item-container {
    margin-bottom: var(--nav-item-spacing, 4px);
  }

  .nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: var(
      --main-background-color,
      var(--card-background-color, rgba(0, 0, 0, 0.05))
    );
    padding: var(--main-padding-top, 12px) var(--main-padding-right, 16px)
      var(--main-padding-bottom, 12px) var(--main-padding-left, 16px);
    color: var(--main-text-color, var(--primary-text-color));
    border-radius: var(--main-border-radius, 8px);
    position: relative;
    cursor: pointer;
    transition: all var(--transition-duration, 0.2s) ease;
    border: var(--main-border, none);
    box-shadow: var(--main-box-shadow, none);
    font-weight: var(--main-font-weight, 400);
  }

  .nav-item span {
    font-size: var(--main-font-size, 16px);
    font-family: var(--main-font-family, inherit);
    flex: 1;
  }

  .nav-item ha-icon {
    --mdc-icon-size: var(--main-icon-size, 24px);
    margin-right: var(--main-icon-spacing, 12px);
    color: var(--main-icon-color, currentColor);
  }

  .unfolded {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .sub-nav-items {
    display: none;
    background-color: var(
      --sub-container-background-color,
      var(--card-background-color, transparent)
    );
    border-bottom-left-radius: var(--main-border-radius, 8px);
    border-bottom-right-radius: var(--main-border-radius, 8px);
    overflow: hidden;
  }

  .sub-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--sub-text-color, var(--secondary-text-color));
    position: relative;
    padding: var(--sub-padding-top, 10px) var(--sub-padding-right, 16px)
      var(--sub-padding-bottom, 10px) var(--sub-padding-left, 48px);
    background-color: var(
      --sub-background-color,
      var(--card-background-color, rgba(0, 0, 0, 0.02))
    );
    border-radius: var(--sub-border-radius, 0);
    transition: all var(--transition-duration, 0.2s) ease;
    border: var(--sub-border, none);
    box-shadow: var(--sub-box-shadow, none);
    font-weight: var(--sub-font-weight, 400);
  }

  .sub-item span {
    font-size: var(--sub-font-size, 14px);
    font-family: var(--sub-font-family, inherit);
    flex: 1;
  }

  .sub-item ha-icon {
    --mdc-icon-size: var(--sub-icon-size, 20px);
    margin-right: var(--sub-icon-spacing, 12px);
    color: var(--sub-icon-color, currentColor);
  }

  .sub-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .sub-item:last-child {
    border-bottom-left-radius: var(--main-border-radius, 8px);
    border-bottom-right-radius: var(--main-border-radius, 8px);
  }

  .nav-item:hover {
    background-color: var(
      --main-hover-color,
      var(--secondary-background-color, rgba(0, 0, 0, 0.08))
    );
    transform: var(--main-hover-transform, none);
    box-shadow: var(--main-hover-box-shadow, var(--main-box-shadow, none));
  }

  .nav-item.active {
    background-color: var(
      --main-active-color,
      var(--primary-color, rgba(3, 169, 244, 0.15))
    );
    color: var(--main-active-text-color, var(--primary-color));
    font-weight: var(--main-active-font-weight, 500);
    box-shadow: var(--main-active-box-shadow, var(--main-box-shadow, none));
  }

  .subnav-indicator {
    position: absolute;
    right: 12px;
    --mdc-icon-size: var(--subnav-indicator-size, 20px);
    transition: transform var(--transition-duration, 0.2s) ease;
    color: var(--subnav-indicator-color, currentColor);
  }

  .nav-item.unfolded .subnav-indicator {
    transform: rotate(180deg);
  }

  .sub-item:hover {
    background-color: var(
      --sub-hover-color,
      var(--secondary-background-color, rgba(0, 0, 0, 0.05))
    );
    transform: var(--sub-hover-transform, none);
    box-shadow: var(--sub-hover-box-shadow, var(--sub-box-shadow, none));
  }

  .sub-item.active {
    background-color: var(
      --sub-active-color,
      var(--primary-color, rgba(3, 169, 244, 0.1))
    );
    color: var(--sub-active-text-color, var(--primary-color));
    font-weight: var(--sub-active-font-weight, 500);
    box-shadow: var(--sub-active-box-shadow, var(--sub-box-shadow, none));
  }
`;

const editorStyles = css`
  .card-config {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h3 {
    margin: 16px 0 8px 0;
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
  }

  .nav-items-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 12px;
  }

  .main-nav-name {
    width: 100%;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    background-color: var(--card-background-color);
    gap: 8px;
  }

  .nav-item-main-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nav-item-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr) auto;
    align-items: center;
    gap: 8px;
  }

  .sub-nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }

  .sub-nav-item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
    background-color: var(--secondary-background-color);
    gap: 8px;
  }

  .sub-nav-item-main-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .main-config-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }

  .input-icon-picker {
    flex: 1;
    min-width: 0;
  }

  .input-name {
    flex: 2;
    min-width: 0;
  }

  .destination-input {
    width: 100%;
  }

  .sub-nav-item-options {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;
  }

  mwc-button {
    --mdc-theme-primary: var(--primary-color);
  }

  .add-nav-item {
    border-radius: 8px;
  }

  .add-sub-nav-item {
    color: var(--primary-color);
    border-radius: 8px;
  }

  .remove-nav-item {
    color: var(--error-color);
    border-radius: 8px;
  }

  .remove-sub-nav-item {
    color: var(--error-color);
    border-radius: 8px;
  }

  details {
    margin-top: 8px;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }

  details summary {
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    color: var(--primary-text-color);
    padding: 4px 0;
    list-style: none;
    display: flex;
    align-items: center;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details summary::before {
    content: "▶";
    display: inline-block;
    margin-right: 8px;
    transition: transform 0.2s ease;
    font-size: 12px;
  }

  details[open] summary::before {
    transform: rotate(90deg);
  }

  details details {
    background-color: var(--secondary-background-color);
  }

  .details-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
  }

  .color-preview {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 8px;
    border: 2px solid var(--divider-color);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .color-preview:hover {
    transform: scale(1.05);
  }

  .custom-style-input {
    flex: 1;
  }

  ha-textfield,
  ha-icon-picker {
    width: 100%;
  }

  ha-formfield {
    display: flex;
    align-items: center;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 8px 0;
  }

  .help-text {
    color: var(--secondary-text-color);
    font-size: 12px;
    margin-top: 4px;
    font-style: italic;
  }
`;

export { styles, editorStyles };
