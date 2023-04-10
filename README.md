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

### Manual

1. Download the `vertical-stacked-nav-card.js` file and place it in your `config/www` folder.
2. Add a reference to `vertical-stacked-nav-card.js` in `Settings -> Dashboard`:

```yaml
/local/vertical-stacked-nav-card.js
```

### HACS

## Usage

To use the card, add the following configuration to a manual card:

```yaml
type: "custom:vertical-stacked-nav-card"
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
| type             | string   |             | The custom card type, should always be `'custom:vertical-stacked-nav-card'`               |
| nav_name         | string   |             | The name of the card header. Set it to 'none' to hide the header                          |
| nav_items        | list     |             | An list of Items representing each navigation item                                        |
| hover_color      | string   | (optional)  | Default hover color for nav items. (Defaults to 'rgba(255, 255, 255, 0.3)')               |
| active_color     | string   | (optional)  | Default background color for active nav items. (Defaults to 'rgba(55, 55, 255, 0.5)')     |
| sub_active_color | string   | (optional)  | Default background color for active sub-nav items. (Defaults to 'rgba(55, 55, 255, 0.5)') |

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

## Example

Here is an example configuration for a vertical stacked navigation card:

```yaml
type: custom:vertical-stacked-nav-card
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
hover_color: rgba(15,105,55,0.8)
active_color: rgba(55,55,255,0.8)
sub_active_color: rgba(222,25,246,0.8)
```

This example will create a navigation card with a custom header, three navigation items (one with sub-navigation items), and custom styles for the active states and hover state.

![Screenshot 2023-04-10 104829](https://user-images.githubusercontent.com/12301042/230867778-24ec7d60-da2d-4197-a1e6-226aa1187fff.png)

## Contributing

Feel free to open issues or submit pull requests to improve this custom card.
