[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
![GitHub package.json version](https://img.shields.io/github/package-json/v/redde4d/hass-vertical-stacked-navigation-card?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/redde4d/hass-vertical-stacked-navigation-card?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/redde4d/hass-vertical-stacked-navigation-card?style=for-the-badge)

# Vertical Stacked Navigation Card for Home Assistant

A custom Home Assistant card for displaying a vertical stacked navigation with optional sub-navigation and extensive customization options.
![Screenshot 2023-04-10 105210](https://user-images.githubusercontent.com/12301042/230868340-aa03753e-18f8-458b-8ff7-bd182ed87439.png)

## What's New in v1.0.0

Version 1.0.0 brings a major update with comprehensive UI improvements and extensive customization options:

- **Enhanced Visual Editor** - Improved organization with collapsible sections, color preview circles, and better visual hierarchy
- **Extensive Customization** - Over 50+ customization options for complete control over appearance
- **Modern Design** - Updated default styles to match Home Assistant 2024/2025 design system
- **Better Code Quality** - Improved TypeScript safety, cleaner code structure, and better performance
- **Full Backward Compatibility** - All existing configurations continue to work without changes

## Features

- **Visual Editor** - Easy-to-use GUI configuration with organized sections
- **Sub-Navigation** - Support for nested navigation items with collapsible sections
- **Extensive Customization Options**:
  - Colors (background, text, hover, active states, icons)
  - Typography (font sizes, weights, families for text and icons)
  - Layout (padding, spacing, borders, border radius)
  - Effects (box shadows, transitions, animations)
  - Header customization
- **Modern Design** - Clean interface that matches Home Assistant's design language
- **Responsive** - Works seamlessly across all device sizes

## Installation

### HACS

1. Add the Repository (`https://github.com/REDDE4D/hass-vertical-stacked-navigation-card.git`) to Custom repositories
2. Seach for `Vertical Stacked Navigation Card` and install.

### Manual

1. Download the `vertical-stacked-navigation-card.js` file and place it in your `config/www` folder.
2. Add a reference to `vertical-stacked-navigation-card.js` in `Settings -> Dashboard`:

```yaml
/local/vertical-stacked-navigation-card.js
```

## Usage

To use the card, add it via the GUI or add the following configuration to a manual card:

```yaml
type: "custom:vertical-stacked-navigation-card"
nav_name: "My Custom Navigation"
nav_items:
  - icon: "mdi:home"
    name: "Home"
    destination: "/lovelace/home"
    active: true
  - icon: "mdi:lightbulb"
    name: "Lights"
    sub_nav_items:
      - icon: "mdi:sofa"
        name: "Living Room"
        destination: "/lovelace/lights/living-room"
        active: true
      - icon: "mdi:bed"
        name: "Bedroom"
        destination: "/lovelace/lights/bedroom"
  - icon: "mdi:thermostat"
    name: "Climate"
    destination: "/lovelace/climate"
```

## Options

| **Name**      | **Type** | **Default** | **Description**                                                                    |
| ------------- | -------- | ----------- | ---------------------------------------------------------------------------------- |
| type          | string   |             | The custom card type, should always be `'custom:vertical-stacked-navigation-card'` |
| nav_name      | string   |             | The name of the card header. Set it to 'none' to hide the header                   |
| nav_items     | list     |             | An list of Items representing each navigation item                                 |
| custom_styles | map      | (optional)  | Override default styles. See custom_styles                                         |

### Navigation Items

Each navigation item in the nav_items list should contain the following properties:
| **Name** | **Type** | **Default** | **Description** |
| ------------- | -------- | ----------- | ----------------------------------------------------------- |
| icon | string | | The icon for the nav item (e.g., 'mdi:home') |
| name | string | | The name of the nav item |
| destination | string | (optional) | The destination URL for the nav item |
| active | bool | false | Set to `true` if the nav item should be marked as active |
| unfolded | bool | false | Set to `true` if the nav item should be unfolded by default |
| sub_nav_items | list | (optional) | An list of items representing each sub-navigation item |

### Sub-navigation Items

Each sub-navigation item in the `sub_nav_items` list should contain the following properties:
| **Name** | **Type** | **Default** | **Description** |
| ----------- | -------- | ----------- | ------------------------------------------------------------ |
| icon | string | | The Icon for the sub-nav item (e.g., 'mdi:sofa') |
| name | string | | The name of the nav item |
| destination | string | | The destination URL for the nav item |
| active | bool | false | Set to `true` if the sub-nav item should be marked as active |

### custom_styles

The `custom_styles` option allows you to customize virtually every aspect of the card's appearance. All style options are optional.

| **Name**           | **Type** | **Description**                                           |
| ------------------ | -------- | --------------------------------------------------------- |
| colors             | map      | Color customization for all elements                      |
| font_size          | map      | Font and icon sizes for text and icons                    |
| font_weight        | map      | Font weights for normal and active states                 |
| font_family        | map      | Font families for main and sub navigation                 |
| border_radius      | map      | Border radius for items and card                          |
| padding            | map      | Padding customization for items, content, and card        |
| spacing            | map      | Spacing between items and icons                           |
| border             | map      | Border styles for navigation items                        |
| box_shadow         | map      | Box shadow effects for various states                     |
| header             | map      | Header styling options                                    |
| transitions        | map      | Animation transition duration                             |
| subnav_indicator   | map      | Customization for the subnav chevron indicator            |

#### custom_styles.colors

| **Name**     | **Type** | **Description**                                              |
| ------------ | -------- | ------------------------------------------------------------ |
| background   | map      | Background colors (main/sub)                                 |
| text         | map      | Text colors (main/sub)                                       |
| hover        | map      | Hover state colors (main/sub)                                |
| active       | map      | Active state background colors (main/sub)                    |
| active_text  | map      | Active state text colors (main/sub)                          |
| icon         | map      | Icon colors (main/sub)                                       |

Each color property accepts a `main` and `sub` value for main navigation items and sub-navigation items respectively.

#### custom_styles.font_size

| **Name** | **Type** | **Description**              |
| -------- | -------- | ---------------------------- |
| text     | map      | Text font sizes (main/sub)   |
| icon     | map      | Icon sizes (main/sub)        |

#### custom_styles.font_weight

| **Name**     | **Type** | **Description**                        |
| ------------ | -------- | -------------------------------------- |
| main         | string   | Font weight for main nav items         |
| sub          | string   | Font weight for sub nav items          |
| main_active  | string   | Font weight for active main items      |
| sub_active   | string   | Font weight for active sub items       |

#### custom_styles.font_family

| **Name** | **Type** | **Description**                   |
| -------- | -------- | --------------------------------- |
| main     | string   | Font family for main nav items    |
| sub      | string   | Font family for sub nav items     |

#### custom_styles.border_radius

| **Name** | **Type** | **Description**                 |
| -------- | -------- | ------------------------------- |
| main     | string   | Border radius for main items    |
| sub      | string   | Border radius for sub items     |
| card     | string   | Border radius for the card      |

#### custom_styles.padding

| **Name**  | **Type** | **Description**                                                  |
| --------- | -------- | ---------------------------------------------------------------- |
| main      | map      | Padding for main items (top/right/bottom/left)                   |
| sub       | map      | Padding for sub items (top/right/bottom/left)                    |
| content   | string   | Padding for card content area                                    |
| card      | string   | Padding for the entire card                                      |

#### custom_styles.spacing

| **Name**    | **Type** | **Description**                     |
| ----------- | -------- | ----------------------------------- |
| nav_items   | string   | Spacing between navigation items    |
| icon        | map      | Icon spacing (main/sub)             |

#### custom_styles.border

| **Name** | **Type** | **Description**              |
| -------- | -------- | ---------------------------- |
| main     | string   | Border for main items        |
| sub      | string   | Border for sub items         |

#### custom_styles.box_shadow

| **Name**      | **Type** | **Description**                      |
| ------------- | -------- | ------------------------------------ |
| main          | string   | Box shadow for main items            |
| sub           | string   | Box shadow for sub items             |
| main_hover    | string   | Box shadow for main items on hover   |
| sub_hover     | string   | Box shadow for sub items on hover    |
| main_active   | string   | Box shadow for active main items     |
| sub_active    | string   | Box shadow for active sub items      |
| card          | string   | Box shadow for the card              |

#### custom_styles.header

| **Name**     | **Type** | **Description**                              |
| ------------ | -------- | -------------------------------------------- |
| font_size    | string   | Font size for header                         |
| font_weight  | string   | Font weight for header                       |
| font_family  | string   | Font family for header                       |
| color        | string   | Text color for header                        |
| padding      | map      | Padding for header (top/right/bottom/left)   |

#### custom_styles.transitions

| **Name**   | **Type** | **Description**                    |
| ---------- | -------- | ---------------------------------- |
| duration   | string   | Transition duration for animations |

#### custom_styles.subnav_indicator

| **Name** | **Type** | **Description**                        |
| -------- | -------- | -------------------------------------- |
| size     | string   | Size of the subnav chevron indicator   |
| color    | string   | Color of the subnav chevron indicator  |

## Examples

### Basic Example

Here is a simple configuration to get started:

```yaml
type: custom:vertical-stacked-navigation-card
nav_name: My Navigation
nav_items:
  - icon: mdi:home
    name: Home
    destination: /lovelace/home
    active: true
  - icon: mdi:lightbulb
    name: Lights
    sub_nav_items:
      - icon: mdi:sofa
        name: Living Room
        destination: /lovelace/lights/living-room
      - icon: mdi:bed
        name: Bedroom
        destination: /lovelace/lights/bedroom
  - icon: mdi:thermostat
    name: Climate
    destination: /lovelace/climate
```

### Advanced Example with Custom Styling

This example demonstrates the extensive customization options available:

```yaml
type: custom:vertical-stacked-navigation-card
nav_name: My Custom Navigation
nav_items:
  - icon: mdi:home
    name: Home
    destination: /lovelace/home
    active: true
  - icon: mdi:lightbulb
    name: Lights
    unfolded: true
    sub_nav_items:
      - icon: mdi:sofa
        name: Living Room
        destination: /lovelace/lights/living-room
        active: true
      - icon: mdi:bed
        name: Bedroom
        destination: /lovelace/lights/bedroom
  - icon: mdi:thermostat
    name: Climate
    destination: /lovelace/climate
custom_styles:
  colors:
    background:
      main: rgba(0, 0, 0, 0.5)
      sub: rgba(0, 0, 0, 0.3)
    text:
      main: "#ffffff"
      sub: "#e0e0e0"
    hover:
      main: rgba(15, 105, 55, 0.8)
      sub: rgba(15, 105, 55, 0.6)
    active:
      main: rgba(55, 55, 255, 0.8)
      sub: rgba(55, 55, 255, 0.6)
    active_text:
      main: "#ffffff"
      sub: "#ffffff"
    icon:
      main: "#ffffff"
      sub: "#e0e0e0"
  font_size:
    text:
      main: 18px
      sub: 14px
    icon:
      main: 24px
      sub: 20px
  font_weight:
    main: "400"
    sub: "300"
    main_active: "600"
    sub_active: "500"
  border_radius:
    main: 8px
    sub: 6px
    card: 12px
  padding:
    main:
      top: 12px
      right: 16px
      bottom: 12px
      left: 16px
    sub:
      top: 8px
      right: 16px
      bottom: 8px
      left: 32px
  spacing:
    nav_items: 4px
    icon:
      main: 12px
      sub: 10px
  box_shadow:
    main: 0 2px 4px rgba(0,0,0,0.1)
    main_hover: 0 4px 8px rgba(0,0,0,0.2)
    main_active: 0 2px 8px rgba(55,55,255,0.3)
  header:
    font_size: 20px
    font_weight: "600"
    color: "#ffffff"
    padding:
      top: 16px
      right: 16px
      bottom: 12px
      left: 16px
  transitions:
    duration: 0.3s
  subnav_indicator:
    size: 20px
    color: "#ffffff"
```

This example creates a navigation card with a custom header, three navigation items (one with sub-navigation items that's unfolded by default), and extensive custom styling including colors, typography, layout, and effects.

![Screenshot 2023-04-10 104829](https://user-images.githubusercontent.com/12301042/230867778-24ec7d60-da2d-4197-a1e6-226aa1187fff.png)

## Contributing

Feel free to open issues or submit pull requests to improve this custom card.
