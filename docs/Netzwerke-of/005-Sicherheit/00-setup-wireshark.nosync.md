# WIFI Sniffing Demo

- Wireshark im Monitor Mode (Achtung, aktive WLAN-Verbindungen müssen deaktiviert werden, damit der Monitor Mode auf MacOSX funktionert)
- Möglichst nahe ans WLAN-Signal, insbesondere bei billigem Hotspot...
- Etwas Geduld...
- Capturing Filter, damit Package-Loss reduziert werden kann

```sh title="GET oder POST requests"
port 80 and ((tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420) or (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504F5354))
```


```sh title="ip source starts with 192.168"
src net 192.168
```

