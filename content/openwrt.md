---
title: OpenWRT
---

OpenWRT is a system made primarly for routers, which I use on both of routers I currently have: [[r4ag-xiaomi-router|Mi Router AC1200]] and [[tp-link-c20|TP Link Archer C20]].

Pros:
- It works(not always tho)
- Stable
- Open-Source
- Fully configurable and mostly declarative
  
Cons:
- Not stable on every router
- Sometimes quite hard to install (because of router vendors)
- Sometimes has to much changes between two versions (eg 22 and 23 which has different firewall + nft instead of iptables)


What I myself really recommend to do after installing OpenWRT:
- Install DoH / DoT service
- Install luci-theme
- Try to make your own services into declarative LuCI-compatible(as apps) services
- RTFM!