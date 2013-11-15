---
number: '055'
title: 'Ethernetworking'
type: [discussion]
people: [Gabe Weatherhead, Erik Hess]
topics: [ethernet, home improvement, networking, wiring]
banner: spool.jpg
caption: '[US Library of Congress](http://www.flickr.com/photos/library_of_congress/2179848724/)'
download: 
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120276995"></iframe>'
soundcloud-url: 055-ethernetworking
summary: 'Gabe and Erik take a hard look at what it takes to wire your house for ethernet, from the why, to the how, to the how much.'
---

> #### Producer's Note
> Hey everybody, it's [@potatowire](http://twitter.com/potatowire).
>
> As the producer and editor of these show notes, for each episode I'll occasionally offer my take on the issues at hand in boxes just like this.
>
> Enjoy the show and as always, thanks for listening.

### How's Your Network?

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" url="{{ soundcloud-url }}" time="0:00" }}

{{ theme:partial src="image" show="{{ number }}" title="Gabe's networking gateway drug" file="apple_tv_streaming.png" }}

* Gabe's enabler - [Monoprice](http://monoprice.com)

### Tools & Materials 

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="2:47" }}

* [1,000 feet of Cat 6' cable](http://www.monoprice.com/Product?c_id=102&cp_id=10234&cs_id=1023404&p_id=8092&seq=1&format=2)
* [Crimpers](http://www.monoprice.com/Product?c_id=105&cp_id=10509&cs_id=1050901&p_id=3350&seq=1&format=2) 
* [Cutters](http://www.monoprice.com/Product?c_id=105&cp_id=10509&cs_id=1050903&p_id=8143&seq=1&format=2)
* [Wire strippers](http://www.monoprice.com/Product?c_id=105&cp_id=10509&cs_id=1050901&p_id=3355&seq=1&format=2)
* [Punchdowns](http://www.monoprice.com/Product?c_id=105&cp_id=10509&cs_id=1050903&p_id=7043&seq=1&format=2) *- Maybe Erik is thinking about [Divekick](http://www.giantbomb.com/divekick/3030-38394/)? :: pw*
* [Cat 5](http://en.wikipedia.org/wiki/Category_5_cable) vs. [Cat 6](http://en.wikipedia.org/wiki/Category_6_cable) 

> #### Cat 5 vs. Cat 6
> As Gabe says, it probably doesn't matter. Still, considering the minimal added cost, Cat 6 is probably a smart bet. The bumper sticker version is that, "compared with Cat 5 and Cat 5e, Cat 6 features more stringent specifications for crosstalk and system noise." 

* Fun term of the day? [Alien crosstalk](http://en.wikipedia.org/wiki/Alien_crosstalk)
* A punchdown in [action](http://www.youtube.com/watch?v=cCFQJV0Kr7U#t=176)
* Ethernet [configuration](http://en.wikipedia.org/wiki/T568A/B#Wiring)
* Solid vs. Stranded wires

> #### Solid vs. Stranded Wires
> {{ theme:partial src="image" show="{{ number }}" title="Solid vs Stranded" file="solid-stranded.jpg" }}
> 
> Gabe chose stranded for his installation, and I think the jury is out on this issue in general. The picture above is from [this](http://www.howtogeek.com/70494/what-kind-of-ethernet-cat-5e6a-cable-should-i-use/) page on [howtogeek.com](http://www.howtogeek.com), and they break down all aspects of choosing the right ethernet cable. I think it really boils down to flexibility versus strength. In my opinion, solid is better for running in the walls, and stranded is better for connecting devices to the wall. I'm not as sure about this as most of the other people on the internet seem to be. As for compatibility with connectors, hold that thought.
>
> Of the two main parts to this project -- wiring together the various wall ports, and connecting the various equipment to the walls -- this latter bit is certainly the easier step, but only if you allow it to be. A lot of the "experts" on the various forums state emphatically (as everything on forums is stated) that you shouldn't make your own [patch cables](http://en.wikipedia.org/wiki/Patch_cable). The reasoning here is that patch cables are very cheap, and between the potential of mis-wiring the terminators (remember the A vs. B discussion?) and the potential for a bad connection within the jack itself, and you may be better served having a robot build your cord. If you are stubborn, cheap, or want just the right length, I recommend [these](http://www.amazon.com/gp/product/B000FI9VU2/) from Platinum Tools. The idea here is that you feed the wires through the plug like so:    
> 
> {{ theme:partial src="image" show="{{ number }}" title="Platinum Connectors" file="platinum_connector.jpg" }}
> 
> Snip them square, then push the plug forward slightly to cover the ends, and crimp. Maybe just buy the [patch cables](http://www.amazon.com/Cable-Matters-5-Pack-Snagless-Ethernet/dp/B00C2B81K6/)... I will next time.
> 
> There are many options when it comes to wiring up the wall ports, but I think the best is to use [keystone modules](http://en.wikipedia.org/wiki/Keystone_module). These provide a way to mount a variety of standardized low-voltage plugs to a wall mount. These modules fit into mounts like these:  
> 
> {{ theme:partial src="image" show="{{ number }}" title="Keystone Modules" file="keystone_modules.jpg" }}
> 
> They attach to either a [single ](http://www.lowes.com/Electrical/Electrical-Boxes-Covers/Electrical-Boxes/_/N-1z0xc7b/pl?Ns=p_product_qty_sales_dollar|1#!&N%5B%5D=1z0xc7b&N%5B%5D=1z10wg4)or [double](http://www.lowes.com/Electrical/Electrical-Boxes-Covers/Electrical-Boxes/_/N-1z0xc7b/pl?Ns=p_product_qty_sales_dollar|1#!&N%5B%5D=1z0xc7b&N%5B%5D=1z10wfa)-gang box in the wall, and you simply connect the wire to the plug and snap the plug into the plate. I know this standard has been around for at least a decade too, since I used them to wire up surround speakers that long ago, so you can feel pretty safe using them. 
> 
> When it comes to wiring in the CAT6, these keystone modules make it really easy, since they are color-coded. There are two main varieties of these. The first is [tool-less](http://www.monoprice.com/Category?c_id=105&cp_id=10513&cs_id=1051303): 
> 
> {{ theme:partial src="image" show="{{ number }}" title="Toolless Jack" file="toolless_jack.jpg" }}
> 
> The other is [punch-down](http://www.monoprice.com/Category?c_id=105&cp_id=10513&cs_id=1051309):
> 
> {{ theme:partial src="image" show="{{ number }}" title="Punchdown Jack" file="punchdown_jack.jpg" }}
> 
> The tool-less variety are designed to close on a hinge, both setting and cutting the wires. In contrast, the punch-down requires either a specialized tool or careful use of a thin-bladed screwdriver and a pocket knife (quit judging me). The tool-less ones can be great, but they cut correctly about half of the time, so it might be worth going with the punch-down if you project consists of more than just a few ports. 
>
> Back to stranded vs. solid wiring, check the connectors you intend to buy, but stranded should work better in the tool less connectors, while solid is easier to punch down.

* Shielded or Unshielded cables - back to alien crosstalk again....

### Cost

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="9:25" }}

* "It depends on [how big your house is](http://www.youtube.com/watch?v=RXKqdi0Wp0E)."

### Cat 6 for More than Just Ethernet 

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="10:18" }}

* [HDMI to ethernet](http://www.monoprice.com/Product?c_id=104&cp_id=10425&cs_id=1042501&p_id=7330&seq=1&format=2)
* [USB to ethernet](http://www.cablestogo.com/category/usb/usb-extenders-extensions/usb-over-cat5)
* [Firewire to ethernet](http://www.usbfirewire.com/Parts/rr-fw-cat5-s400.html) 

> #### Firewire to Ethernet Adapters
> I think the market for Firewire is drying up. The best option I could find is no longer for sale, though I did find [this](http://www.datapro.net/products/firewire-wall-plate.html?utm_campaign=relprods&utm_source=firewire-panel-mount-to-header&utm_medium=product), which couldn't be easily run over Cat 6.

### How do you get it through the walls?

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="11:37" }}

* [Electrical Conduit](http://en.wikipedia.org/wiki/Electrical_conduit) 

{{ theme:partial src="image" show="{{ number }}" title="Electrical Conduit" file="electrical_conduit.jpg" }}

* There are some great techniques for pulling wire [here](http://www.wikihow.com/Fish-Wires-Through-a-Conduit-or-Pipe). 

> #### Pulling Wire
> My favorite is using a vacuum cleaner and loose string, because you think there is no way that it will work... until it does.

* Line puller - also known as [fish tape](http://www.amazon.com/Klein-Tools-56001-50-Feet-Strength/dp/B0026TA6RK) *- I have found this very useful over the years :: pw*

{{ theme:partial src="image" show="{{ number }}" title="Fish Tape" file="fish_tape.jpg" }}

* There are many variations of segmented fiberglass wire running kits. Here is the Harbor Freight [version](http://www.harborfreight.com/3-16-inch-x-33-ft-fiberglass-wire-running-kit-65326.html).
* [Network Tester](http://www.monoprice.com/Product?c_id=105&cp_id=10524&cs_id=1052401&p_id=8138&seq=1&format=2)

### The Boxes

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="16:57" }}

* The first network switch - [SMC EZ Switch](http://www.amazon.com/SMC-16-Port-Gigabit-Unmanaged-SMCGS16/dp/B0009J1IB2)
* The [move](http://www.macdrifter.com/2013/02/moving-from-a-drobo-to-a-synology-nas.html) to Synology
* [Synology Link Aggregation](http://www.synology.com/support/tutorials_show.php?lang=us&q_id=525) 

> #### Switches vs. Routers
> This is more complicated than I will explain it here, but a [network switch](http://en.wikipedia.org/wiki/Network_switch) essentially provides a means for any connected device to talk to another. The devices themselves can address their messages, however, and the switch will only deliver it to the intended recipient in that case. This distinguishes it from a hub, which is more of a broadcasting mindset. The main difference between a [router](http://en.wikipedia.org/wiki/Network_router) and a switch, is that in addition to addressing functions, router connects a [local area network](http://en.wikipedia.org/wiki/Local_area_network) to a [wide area network](http://en.wikipedia.org/wiki/Wide_area_network).

> #### Number of lines in a wall
> I'll sometimes use one Cat 6 line with a small network switch on the distant end of the line, if I'm only networking.

* "Bathing your house in wifi"

> #### SSID sharing over ethernet
> I feel stupid, because I had no idea this possible. It's easy too, just make sure the second router has a static IP within the range on the first one, has [DHCP](http://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) turned off, has the same [SSID](http://en.wikipedia.org/wiki/Service_set_(802.11_network)#Service_set_identification), and is on a different [channel](http://en.wikipedia.org/wiki/List_of_WLAN_channels).

* [Verizon FiOS](http://en.wikipedia.org/wiki/Verizon_FiOS) 

> #### Notes on FiOS
> I think it is interesting that FiOS uses three different wavelengths to transmit voice, video, and data down one line. Another interesting (to me, at least)  fact is that Verizon employs a number of passive optical splitters which "fans out" the same signal on up to 32 fibers.
> 
> This is the box they install at your house:
> 
> {{ theme:partial src="image" show="{{ number }}" title="FiOS Box" file="fios.jpg" }}

* "Grandma is going to hack into my machine and steal all my warez"  
 
### Gabe's Setup

* The networking closet  

{{ theme:partial src="image" show="{{ number }}" title="The Closet" file="the_closet.jpg" }}
{{ theme:partial src="image" show="{{ number }}" title="The Vents" file="the_vents.jpg" }}

* The rack itself  

{{ theme:partial src="image" show="{{ number }}" title="The Rack" file="the_rack.jpg" }}

* [Rack-mounted servers](http://en.wikipedia.org/wiki/19-inch_rack)

> #### Facts about Racks
> I discovered that the height of the modules in a rack-mount server are in multiples of 1.75 inches, and each multiple is called a "rack unit" or "U." Also, the industry standard rack is 42U tall and 19 inches wide.

### Parting Shots

{{ theme:partial src="timestamp" url="{{ soundcloud-url }}" time="26:33" }}

* Erik's GTD [problem](http://technicaldifficulties.us/episodes/040-helping-erik-procrastinate-productively-with-a-gtd-reboot)
* Firewire as the Phoenix - [Thanks Steve](http://www.geekculture.com/joyoftech/joyarchives/1164.html)
* Peer-to-peer thunderbolt networking - Ars Technica: [OS X 10.9 brings fast but choppy Thunderbolt networking](http://arstechnica.com/apple/2013/10/os-x-10-9-brings-fast-but-choppy-thunderbolt-networking/) 

> #### On Thunderbolt Networking
> Like Erik indicated, the connection is a bit spotty, and the reason for this is initially unclear. In the update to the the post, Mr. van Beijnum tested his setup with iPerf, which removes the protocol from the equation, and he saw speeds above 5.3Gbps, which is pretty alright.

*  Some other detail can be found here on the [Ars forum](http://arstechnica.com/civis/viewtopic.php?p=25543691#p25543691)--Beware, here be tcpdumps....

> #### Producer's Note
> Well, that's all for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to [me@potatowire.com](mailto:me@potatowire.com)
