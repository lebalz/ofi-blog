---
sidebar_custom_props:
  id: d5c4dacd-0817-451b-9a4e-e8ab9bf283cf
---
# 3. Netzwerk

:::info[Voraussetzung]
Sie brauchen einen Node-RED Server, der im Internet erreichbar ist.

Falls Sie diesen noch nicht aufgesetzt haben, können Sie zum Node-Red Teil wechseln und dort einen Server aufsetzen.
:::


Hier merken wir die Limitationen vom eingesetzten ESP8266: Er ist im allgemeinen nicht schnell genug, um die Zertifikate von sicheren HTTPS Webseiten zu verifizieren. Aus diesem Grund verwenden wir nur HTTP-Verbindungen.

Doch Node-RED ist ausschliesslich über HTTPS erreichbar. Wie funktioniert dies nun?

## Proxy-Server
> Der Proxy Server ist ein Vermittler oder Stellvertreter und nimmt Anfragen entgegen, die er unter seiner eigenen Identität weiterleitet.
> Kommt eine Verbindung zwischen einem Client und einem Server zustande, bleiben die Adressen von Client und Server den Kommunikationspartnern jeweils verborgen. Im Gegensatz zur Network Address Translation (NAT) werden Adressen nicht nur einfach ausgetauscht, sondern der Proxy Server führt die Kommunikation selbst. [^1]

Wir verwenden also einen Proxy-Server, welcher über HTTP erreichbar ist und die Anfrage dann per HTTPS an den Node-RED Server weiterleitet. Die Antwort wird dann wiederum per HTTP an den ESP8266 zurückgeschickt.

Der Proxy-Server ist auf dem Informatik-Server der Schule gehostet und ist unter der Adresse http://proxy.gbsl.website erreichbar. Damit nun der Proxy-Server weiss, wohin die eigentliche Anfrage gehen soll, wird die URL wie folgt verändert:

```
Ziel-Adresse: https://node-red-XY7Z.onrender.com/api/joke
                      \________________________/\_______/
                               |                    |
                              URI                  path

Proxy-URL:     http://<URI>.proxy.gbsl.website/<path>
                      \___/                    \____/
                        |                         |
                    Subsubdomain                 path

Proxy-Adresse: http://node-red-XY7Z.onrender.com.proxy.gbsl.website/api/joke                              
```

## ESP8266
Im Terminal des ESP8266 können wir nun Daten direkt an den Node-RED Server senden. Anstatt mit Postman schicken wir nun also die Daten direkt vom ESP8266 an den Server.

Dazu müssen wir
1. eine Verbindung zu einem Netzwerk herstellen (`network`)
2. Daten abschicken und auf Antwort warten (`urequests`)
3. offene Verbindungen schliessen

```python
import network
# WLAN als Empfangsstation initialisieren
wlan = network.WLAN(network.STA_IF)
# WLAN aktivieren
wlan.active(True)
# verbinden mit dem Netzwerk
wlan.connect('SSID', 'PASSWORD')
# ist das Netzwerk verbunden?
wlan.isconnected()


# HTTP-Request erstellen
import urequests
# Datenpaket erstellen
data = {'value': 42}
# Datenpaket abschicken
res = urequests.post('http://node-red-xyzq.onrender.com.proxy.gbsl.website/api/sensor', json=data)
# Antwort ausgeben
res.content

# Verbindung schliessen
res.close()
```


 
:::aufgabe[Mit dem Netzwerk verbinden]

Material
: [👉 Netzwerk-Projekt](assets/network-assets.zip)

Laden Sie das Beispiel-Projekt herunter und untersuchen Sie dieses genauer.

Passen Sie dieses so an, dass die Daten an Ihren eigenen Node-RED Server geschickt werden. ()
:::[]

[^1]: [Ip-Insider](https://www.ip-insider.de/was-ist-ein-proxy-server-a-665349/)