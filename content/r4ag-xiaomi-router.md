---
title: Xiaomi 4A Gigabit Edition Router (v2)
---

Mi Router 4a Gigabit v2 (shortly - R4AGv2, alternative name - Mi Router AC1200) was released in somewhat 2022, and in april first info appeared on openwrt forum with guide on how to enable ssh with luci...

This router comes with FW 2.30.20 and up, as for me it was 2.30.500(?).

Some tech specs:
- 128mb RAM
- 16mb Flash
- MT7621 (880Mhz)
- 2 LAN ports
- 12V charging (can be used with powerbank(?), altho can't test)

This thing costed me around 2k RUB or around 19 EUR (with enough money I could, in theory, buy Keenetic Start, which I wanted, but was afraid of due to lack of Entware)

**Does support latest [[openwrt|OpenWRT]] version** (I use 23.05.3 due to being lazy to compile amnezia-wg packages myself), on which it works really good
![[Pasted image 20241101191543.png]]

As for me, 16mb flash isn't quite fine, but I can use it for AmneziaWG [[split-tunneling]] (or domain routing, as you prefer to call it), which is alr nice, altho I can't use sing-box to connect to v2ray VLESS xTLS Reality server :(

List of what works:
- DoH (https-dns-proxy with removed google doh)
- zapret (removed later, will make a post about it)
- AmneziaWG
- Merging 2.4ghz and 5ghz WiFi's (with some problems, probably related to some misconfiguration)

List of what doesn't work:
- Sing-box (even 8mb is not enough for it)
- Some nice adblock (that blocks youtube ads...)
- Anything that requires over 7.5mb of memory (you can, in theory, use RAM as a storage, but I don't recommend that at all...)
