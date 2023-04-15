import { VerticalStackedNavCard } from "./vertical-stacked-navigation-card";
import { LovelaceCardEditor } from "custom-card-helpers";
import "./editor";
import { VerticalStackedNavCardEditor } from "./editor";

const _getCardEditor = () => {
  return document.createElement(
    "vertical-stacked-nav-card-editor"
  ) as LovelaceCardEditor;
};

customElements.define("vertical-stacked-navigation-card", VerticalStackedNavCard);
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "vertical-stacked-nav-card",
  name: "Vertical Stacked Navigation Card",
  preview: true,
  description: "A custom card for vertical stacked navigation.",
  getCardEditor: _getCardEditor,
});
