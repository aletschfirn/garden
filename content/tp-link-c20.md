---
title: TP-Link Archer C20 v4
---

Archer C20 is a basic router w/o USB and with low storage... With OpenWRT support (needs to be installed with TFTP. Just set TFTP server IP to 192.168.0.66 and leave tp_recovery.bin in server's root folder, then hold reset and restart your router. Voila!)

Tech specs:

- 8mb flash (2mb is free inside OpenWRT)
- 64mb RAM
- MT7628AN SoC (which works... kinda bad, because of mt76 driver... Check out [[https://github.com/openwrt/mt76/issues/547 | this issue]] to understand... It may get fixed in 24.20, or something next after 24.10, if [[https://git.openwrt.org/?p=openwrt/openwrt.git;a=commitdiff;h=7236d4f82b57680d76a52abc934130cb02cc913c | this]] patch gets accepted into mainstream)

Small review after few years of usage: **better buy keenetic... or asus**
