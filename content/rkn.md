---
title: RosKomNadzor
---


RosKomNadzor(short - RKN) is russian state network agency, which "secures" russian pro-government position by blocking everything that is somehow opposite to government rhetorics or politics.

Web-content blocks are made by this scheme(using DPI - Deep Packet Inspection technology):
- Block by SNI(service name indication)-server name in TLS
- Block by IP-used for discord voice-chat block
- Protocol block(ECH, WG, OpenVPN as an example)

RKN primarly uses SNI block, since it is way easier, especially with cloudflare-based websites.

And what about bypassing such DPI?

As reccomended and as I have used before, the best method is in modifiyng TCP packets before sending them to ISP (on router level) using different tools - nfqws, tpws, etc...

Another method is just to use secure Proxy/VPN protocols - AmneziaWG or XRay VLESS. I'm using this method because using nfqws became a lot more hard, unreliable, and slow, as RKN have managed to detect some TCP modifications.
