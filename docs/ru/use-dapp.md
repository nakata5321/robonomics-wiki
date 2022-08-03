---
title: DApp Usage

contributors: [nakata5321]
translated: false
---

After finishing with ["Robonomics integration setup"](/docs/add-smart-device-to-robonomics/), all options of our DApp will bee available for you.
For now, you could get telemetry of all your sensors and send **launch** to device. Let's start with telemetry.

## SmartHome Telemetry

Go to DApp and  choose service ["SmartHome Telemetry"](https://dapp.robonomics.network/#/services). You will forward to DApp website. In first login give permission to website to use polkadot{.js} extension. You will see next:

<robo-wiki-picture src="home-assistant/telemetry-start.jpg" />

In account's list find address of `SUB_ADMIN`. Press green button in the raw with account.

<robo-wiki-picture src="home-assistant/admin-tel.jpg" />

Now `SUB_ADMIN` address became **blue**. Press on it, and you will go to datalog page. Here You will see all your **"telemetry datalogs"**.

<robo-wiki-picture src="home-assistant/tel-datalog.jpg" />

Let's read the latest telemetry datalog. Insert `SUB_ADMIN` seed in secret key field. Then press **READ**. Wait until DApp will load telemetry and then press **DECRYPT** button. You will get your telemetry from all sensors.

<robo-wiki-picture src="home-assistant/telemetry.jpg"/>

That's all.

## Launch devices

Go to DApp and  choose service ["SmartHome Telemetry"](https://dapp.robonomics.network/#/services). You will forward to DApp website. In first login give permission to website to use polkadot{.js} extension. You will see next:

<robo-wiki-picture src="home-assistant/telemetry-start.jpg" />

Find address of your `user` account and press blue button:

<robo-wiki-picture src="home-assistant/datalog-start.jpg" />

And you will see popup "Launch" window:

<robo-wiki-picture src="home-assistant/launch-window.jpg" />

Launch command call HomeAssistant service, so first two fields are **service name** - "Platform" and **service function** - "Name". Let's find them.

For this go to your Home Assistant interface in browser -> `Developer tools` -> `SERVICES` and turn on `YAML mode`.

<robo-wiki-picture src="home-assistant/ha-services.jpg" />

start write service, which you want to find in a field.

<robo-wiki-picture src="home-assistant/ha-light.jpg" />

Let's find a `light` service. You will see available functions(`turn_on`, `turn_off`, `toggle`). Choose `turn_on` function.

<robo-wiki-picture src="home-assistant/ha-light-on.jpg" />

On the picture you see **service name** - `light` and **service function** - `turn_on`. Write this statements to popup window.

<robo-wiki-picture src="home-assistant/light-window.jpg" />

Next we need to find sensor ID. for this go to main window `Overview`. Find sensor, which you want to turn on(in our example it is light) and press on it. 

<robo-wiki-picture src="home-assistant/light-name.jpg" />

You will see popup window and "settings" button on it right top corner. Press on it. Popup window will change. In new window you will find required `entity_id`:

<robo-wiki-picture src="home-assistant/entity-ha.jpg" />

Copy it and paste to field in our dapp:

<robo-wiki-picture src="home-assistant/dapp-entity.jpg" />

Finally, press `SEND` button and sign transaction with your password. Wait until transaction will be in block check your light. It should be turned on (sometimes it takes a bit more time).

Congratulations, You fully installed and setup Your Home Assistant with Robonomics!
