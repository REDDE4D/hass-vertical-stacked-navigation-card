import { css } from "lit";

const styles = css`
  .nav-item-container .nav-item span {
    font-size: var(--main-font-size, 20px);
  }

  .nav-item-container .sub-nav-items .sub-item span {
    font-size: var(--sub-font-size, 14px);
  }

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
    background-color: var(--main-background-color, rgba(255, 255, 255, 0.2));
    padding: 10px;
    color: var(--main-text-color, #fff);
    border-radius: 5px;
    position: relative;
  }
  .nav-item.unfolded {
    border-bottom-right-radius: none !important;
  }
  .sub-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--sub-text-color, #fff);
    position: relative;
    padding: 5px;
    background-color: var(--sub-background-color, rgba(255, 255, 255, 0.2));
    margin-left: 15px;
    padding-left: 25px;
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
    background-color: var(--main-hover-color, rgba(255, 255, 255, 0.3));
  }
  .nav-item.active {
    background-color: var(--main-active-color, rgba(55, 55, 255, 0.5));
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
    background-color: var(--sub-hover-color, rgba(255, 255, 255, 0.3));
  }
  .sub-item.active {
    background-color: var(--sub-active-color, rgba(55, 55, 255, 0.5));
  }
`;

const editorStyles = css`
  .card-config {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    border: 0.5px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
  }

  .nav-item-main-config {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .sub-nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-left: 16px;
  }

  .sub-nav-item {
    display: flex;
    flex-direction: column;
    border: 0.5px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
    margin-bottom: 5px;
  }

  .sub-nav-item-main-config {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .icon-input {
    max-width: calc(33.33% - 20px);
  }

  .name-input {
    margin-left: 10px;
    max-width: calc(33.33% - 10px);
  }

  .destination-input {
    margin-left: 10px;
    max-width: calc(33.33% - 10px);
  }

  button.add-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
  }

  button.add-sub-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
    margin-top: 5px;
  }

  button.remove-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--error-color);
    border-radius: 5px;
    border: none;
  }

  button.remove-sub-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--error-color);
    border-radius: 5px;
    border: none;
  }

  .custom-styles,
  .custom-colors,
  .custom-textcolor,
  .custom-hover,
  .custom-active,
  .custom-background,
  .custom-fontsize,
  .custom-textsize,
  .custom-iconsize {
    margin-top: 16px;
    padding: 8px;
    border-radius: 4px;
  }

  .custom-styles summary,
  .custom-colors summary,
  .custom-textcolor summary,
  .custom-hover summary,
  .custom-active summary,
  .custom-background summary,
  .custom-fontsize summary,
  .custom-textsize summary,
  .custom-iconsize summary {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    color: var(--primary-text-color);
  }

  .custom-styles {
    border: 1px solid var(--divider-color);
  }

  .custom-colors,
  .custom-textcolor,
  .custom-hover,
  .custom-active,
  .custom-background,
  .custom-fontsize,
  .custom-textsize,
  .custom-iconsize {
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }

  paper-input {
    --paper-input-container-input-color: var(--primary-text-color);
    --paper-input-container-color: var(--secondary-text-color);
    --paper-input-container-focus-color: var(--primary-color);
    --paper-input-container-invalid-color: var(--error-color);
  }

  .color-preview {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    margin-right: 8px;
    vertical-align: middle;
  }
`;

export { styles, editorStyles };
