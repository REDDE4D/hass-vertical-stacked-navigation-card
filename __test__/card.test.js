const { HomeAssistant, PlaywrightBrowser } = require('hass-taste-test')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

const CONFIGURATION_YAML = `
input_boolean:
  test:
`

let hass // Global Home Assistant for this test file

beforeAll(async () => {
    hass = await HomeAssistant.create(CONFIGURATION_YAML, {
        browser: new PlaywrightBrowser(process.env.BROWSER || 'firefox'),
    })
    // Add your card's JavaScript bundle to Lovelace
    await hass.addResource(__dirname + '/../dist/vertical-stacked-navigation-card.js', 'module')
}, 120000) // 30 second timeout in case Home Assistant needs to install

afterAll(async () => await hass.close())

it('Custom Card', async () => {
    // Change type to your card type, and add whatever configuration you need
    const dashboard = await hass.Dashboard(
        [
            {
                type: 'custom:vertical-stacked-navigation-card',
                nav_name: 'My Custom Navigation',
                nav_items: [
                    {
                        icon: "mdi:home",
                        name: "Home",
                        destination: "/lovelace/home",
                        active: true
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
                            }
                        ]
                    },
                    {
                        icon: "mdi:thermostat",
                        name: "Climate",
                        destination: "/lovelace/climate"
                    }
                ],
                custom_styles: {
                    colors: {
                        text: {
                            main: "#111",
                            sub: "#111",
                        },
                        background: {
                            main: "rgba(0, 0, 0, 0.5)",
                            sub: "rgba(0, 0, 0, 0.5)",
                        }
                    },
                }
            },
        ]
    )
    // await hass.callService() is how you can call a service
    expect(await dashboard.cards[0].screenshot()).toMatchImageSnapshot()
}, 60000)