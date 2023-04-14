[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

# Vertical Stacked Navigation Card for Home Assistant

A custom Home Assistant card for displaying a vertical stacked navigation with optional sub-navigation.
![Screenshot 2023-04-10 105210](https://user-images.githubusercontent.com/12301042/230868340-aa03753e-18f8-458b-8ff7-bd182ed87439.png)

## Features

- Define navigation items
- Set custom icons and names for each link
- Add sub-navigation to nav items
- Set active and hover color for nav items and sub-items

## Installation

### HACS

1. Add the Repository (`https://github.com/REDDE4D/hass-vertical-stacked-navigation-card.git`) to Custom repositories
2. Seach for `Vertical Stacked Navigation Card` and install.

### Manual

1. Download the `vertical-stacked-navigation-card.js` file and place it in your `config/www` folder.
2. Add a reference to `vertical-stacked-nav-card.js` in `Settings -> Dashboard`:

```yaml
/local/vertical-stacked-navigation-card.js
```

## Usage

To use the card, add the following configuration to a manual card:

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

| **Name**         | **Type** | **Default** | **Description**                                                                           |
| ---------------- | -------- | ----------- | ----------------------------------------------------------------------------------------- |
| type             | string   |             | The custom card type, should always be `'custom:vertical-stacked-navigation-card'`        |
| nav_name         | string   |             | The name of the card header. Set it to 'none' to hide the header                          |
| nav_items        | list     |             | An list of Items representing each navigation item                                        |
| custom_styles    | map      | (optional)  | Override default styles. See custom_styles                                                |

### Navigation Items
Each navigation item in the nav_items list should contain the following properties:
| **Name**      | **Type** | **Default** | **Description**                                          |
| ------------- | -------- | ----------- | -------------------------------------------------------- |
| icon          | string   |             | The icon for the nav item (e.g., 'mdi:home')             |
| name          | string   |             | The name of the nav item                                 |
| destination   | string   | (optional)  | The destination URL for the nav item                     |
| active        | bool     | false       | Set to `true` if the nav item should be marked as active |
| sub_nav_items | list     | (optional)  | An list of items representing each sub-navigation item   |

### Sub-navigation Items
Each sub-navigation item in the `sub_nav_items` list should contain the following properties:
| **Name**    | **Type** | **Default** | **Description**                                              |
| ----------- | -------- | ----------- | ------------------------------------------------------------ |
| icon        | string   |             | The Icon for the sub-nav item (e.g., 'mdi:sofa')             |
| name        | string   |             | The name of the nav item                                     |
| destination | string   |             | The destination URL for the nav item                         |
| active      | bool     | false       | Set to `true` if the sub-nav item should be marked as active |

### custom_styles
See Example for details
| **Name**    | **Type** | **Default**             | **Description**                                              |
| ----------- | -------- | ----------------------- | ------------------------------------------------------------ |
| colors      | map      |                         | The Icon for the sub-nav item (e.g., 'mdi:sofa')             |
| font_size   | map      | `main: 20px, sub: 14px` | The name of the nav item                                     |

#### custom_styles:colors
| **Name**    | **Type** | **Default**                 | **Description**                                              |
| ----------- | -------- | --------------------------- | ------------------------------------------------------------ |
| hover       | map      | `rgba(255, 255, 255, 0.3)`  | The hover-color of main or sub item                          |
| active      | map      | `rgba(55, 55, 255, 0.5)`    | The active-color of main or sub item                         |
| text        | map      | `#fff`                      | The text-color of main or sub item                           |
| background  | map      | `rgba(255, 255, 255, 0.2)`  | The background-color of main or sub item                     |


## Example

Here is an example configuration for a vertical stacked navigation card:

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
    hover: 
      main: rgba(15,105,55,0.8)
      sub: rgba(15,105,55,0.8)
    active:
      main: rgba(55,55,255,0.8)
      sub: rgba(55,55,255,0.8)
    text:
      main: #fff
      sub: #fff
    background:
      main: rgba(0,0,0,0.5)
      sub: rgba(0,0,0,0.5)
  font_size:
    main: 25px
    sub: 14px
```

This example will create a navigation card with a custom header, three navigation items (one with sub-navigation items), and custom styles for the active states and hover state.

![Screenshot 2023-04-10 104829](https://user-images.githubusercontent.com/12301042/230867778-24ec7d60-da2d-4197-a1e6-226aa1187fff.png)

## Contributing

Feel free to open issues or submit pull requests to improve this custom card.
