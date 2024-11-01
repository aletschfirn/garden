---
title: Split Tunneling
---
Split Tunneling is a technology/knowledge/software to split your internet traffic based on different rules or instructions.

As a nice example, I have set up split tunneling to an AmneziaWG server using script from itdog ([[https://github.com/itdoginfo/domain-routing-openwrt|Link to a GitHub]]) for some websites to access it (some of them are requiring connection from a different country than what I am in as of now, and some... just because yes), and so, how it works?

As I try to enter some website (let's say - google.com), I send DNS request to resolve google.com domain into an IP adress, which router gets from DNS-server, and stores it. From there connection happens like this: PC -> router -> AWG server -> website server, and then fully back, instead of going like this: PC -> router -> ISP -> Roskomnadzor -> website server, and fully back...

*-But wouldn't it make a bit of extra latency in connection?*

Yeah, it does make it, but not that big. I don't play multiplayer video-games or use applications that needs *really* low latency on internet connection, so I don't really care about that.

*-Does it work well on OpenWRT itself? (or isn't it going to make a lot of pressure on router?)*

More than nice, and it doesn't require *that much* of resources.
![[Pasted image 20241101200032.png | Screenshot of load]]
