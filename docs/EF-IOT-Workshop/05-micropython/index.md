---
sidebar_custom_props:
  id: e0629f86-9d64-4675-b3c0-0fff0d6d4507
---
# Micro Python

## Vorbereitung VS Code

👉 [PyMakr-Preview](https://marketplace.visualstudio.com/items?itemName=pycom.pymakr-preview)

Die Erweiterung __PyMakr__ ermöglicht es uns, mit VS Code auf den ESP8266 zu programmieren. Dazu müssen wir die Erweiterung installieren und über eine Konfiguration festlegen, wie der ESP8266 angeschlossen ist.

Suchen Suchen :mdi-magnify: Sie dazu in den Einstellungen :mdi-cog-outline: nach 

```
pymakr.devices.configs
```

und klicken Sie auf `Edit in settings.json`. Dort wird für eine Schnittstelle (ein konkreter USB-Anschluss am Laptop oder für jeden USB-Dongle) eine eigene Konfiguration angelegt. Wir benötigen für den ESP8266 eine Konfiguration mit folgenden Einstellungen:

```json
"pymakr.devices.configs": {
    "5&1487bdb9&0&6": {
        "autoConnect": "onLostConnection",
        "name": "USB-Links-Oben",
        "username": "micro",
        "password": "python",
        "hidden": false,
        "rootPath": "/",
        "adapterOptions": {
            "chunkDelay": 20,
            "chunkSize": 2048
        }
    }
}
```

Die Hardware-ID (im obigen Beispiel `5&1487bdb9&0&6`) muss dabei für jeden USB-Anschluss individuell angepasst werden. Die Hardware-ID kann über die Einstellungen :mdi-cog-outline: unter `pymakr.devices` ermittelt werden.


Zudem legen wir das Benachrichtigungsverhalten in den Einstellungen :mdi-cog-outline: auf `debug` fest.
Suchen :mdi-magnify: Sie nach

```
pymakr.logLevel
```


--> https://www.donskytech.com/micropython-using-vscode-pymakr-on-esp32-esp8266/
--> https://linuxhint.com/program-esp32-micropython-vs-code-pymakr/