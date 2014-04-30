---
banner: /assets/img/power-banner.jpg
title: Drunk With Power
number: "062"
showtype: discussion
people:
  - Erik Hess
  - Gabe Weatherhead
topics:
  - Power Management
  - Power Strips
  - Surge Protectors
caption: '[Library of Congress](http://www.flickr.com/photos/library_of_congress/2179851346/)'
download: >
  http://www.buzzsprout.com/7417/140620-062-drunk-with-power.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127920253%3Fsecret_token%3Ds-LXJpf&color=ff6600&auto_play=false&show_artwork=true"></iframe>'
soundcloudurl: 062-drunk-with-power
summary: >
  Struggling with unreliable power at home
  and on the road, Gabe and Erik talk
  about how they make sure their gadgets
  stay running.
post_images:
  - 
    image: /assets/img/isabel-2003-map-VB-VA.jpg
    title: ""
  - 
    image: /assets/img/ice-storm.jpg
    title: ""
  - 
    image: /assets/img/home.jpg
    title: ""
  - 
    image: /assets/img/energizer.jpg
    title: ""
  - 
    image: /assets/img/belkin.jpg
    title: ""
  - 
    image: /assets/img/lc2.jpg
    title: ""
  - 
    image: /assets/img/g5.jpg
    title: ""
  - 
    image: /assets/img/quadra.jpg
    title: ""
post_files: ""
---

### On the Unreliability of Home Electricity in the 21st Century

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

Lamenting the frequency of blackouts and brownouts in the Sierra Nevada and Northeast US, Erik and Gabe trade horror stories of natural disasters and run-of-the-mill outages. 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="1:15" person="mailmate" quote="Ding!" }}

> {{ theme:partial src="aside-header" voice="potatowire" text="Technical Difficulties" }}
>
> Sometimes Gabe and Erik's Technical Difficulties are weather related:
> 
> {{ theme:partial src="image" show="{{ number }}" title="<a href='http://en.wikipedia.org/wiki/December_2008_New_England_and_Upstate_New_York_ice_storm'>2008 ice storm</a>" file="ice_storm.jpg" }}
> 
> {{ theme:partial src="image" show="{{ number }}" title="<a href='http://en.wikipedia.org/wiki/Hurricane_Isabel'>Hurricane Isabel</a>" file="isabel_2003_map_VB_VA.jpg" }}
> 
> Sometimes not...
> 
> <blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/techdiffpodcast">@techdiffpodcast</a> You guys will do anything to live up to the name.</p>— Dr. Drang (@drdrang) <a href="https://twitter.com/drdrang/statuses/417003041213001728">December 28, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


### Let's Talk About UPSes a Little Bit

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="4:40" }}

An [uninterruptible power supply (UPS)](http://en.wikipedia.org/wiki/Uninterruptible_power_supply) is simply a big battery that sits quietly plugged in to an outlet, [trickle charging](http://en.wikipedia.org/wiki/Trickle_charging). Should [disaster](http://www.huffingtonpost.com/2012/10/30/hurricane-sandy-power-outages-new-yorkers_n_2046187.html) strike, however, it leaps into action and begins to beep loudly. Oh yeah, it provides power, too. 

As a quick reminder, recall that a home's electricity is supplied from the power company in the form of [alternating current (AC)](http://en.wikipedia.org/wiki/Alternating_current), while a battery supplies its power in the form of [direct current (DC)](http://en.wikipedia.org/wiki/Direct_current). Since everything connected to a wall outlet via the UPS expects AC power, the UPS employs a [power inverter](http://en.wikipedia.org/wiki/Power_inverter) to convert AC to DC for charging and DC to AC when powering your gadgets in a blackout.

> {{ theme:partial src="aside-header" voice="potatowire" text="Full circle" }}
> 
> In a nerd's house, this power is almost always converted back to DC. Digital devices need DC power, because the 1s and 0s everyone is always talking about are actually distinct changes between on and off using 0 and 5 [volts](http://en.wikipedia.org/wiki/Voltage) (It doesn't have to be 0 and 5V, but that is the convention). Since AC power is a flow of energy alternating between a positive and negative [charge](http://en.wikipedia.org/wiki/Electric_charge), it is ill-suited to represent 1s and 0s.
> 
> A nerd will of course turn this carefully-delivered power into tweets about power outages.

There are many good models of UPSes, but the common brands are  [CyberPower](http://www.cyberpowersystems.com/index.html?region=US), [APC](http://www.apc.com/products/category.cfm?id=13) and [Tripplite](http://www.tripplite.com/en/products/ups-battery-backup-systems.cfm). The naming conventions hearken back to the days when all computers were some color of gray, but there is a system if you look hard enough.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="5:22" person="erik" quote="It's in dimensionless units of awesomeness." }}

Within each brand's line, there are products designed to handle a particular electrical load. When you dig in, you'll see the capacities are listed in  [volt-amperes (VA)](http://en.wikipedia.org/wiki/Volt-ampere), which is typically the way that AC capacity is measured. This makes sense given that AC power is what's being supplied, but you can also find the battery's capacity measured in watts, if that is more meaningful to you. there are various [sizing tools](http://www.apc.com/tools/wizard/home/zoneForm.cfm) designed to help, but although they have been updated since Gabe last looked...

{{ theme:partial src="image-set" show="{{ number }}" title="Quadra" file="quadra.jpg" }}{{ theme:partial src="image-set" show="{{ number }}" title="LC II" file="lc2.jpg" }}{{ theme:partial src="image-set" show="{{ number }}" title="G5 PowerMac" file="g5.jpg" }}

...don't expect the representative devices to have the most up-to-date specs. 

Rather than allowing you to finish your [magnum opus](http://en.wikipedia.org/wiki/Magnum_opus), a UPS exists to provide a graceful end to your [current work](http://en.wikipedia.org/wiki/Twitter). If you have un-monitored equipment, most new UPSes are able to [communicate](http://en.wikipedia.org/wiki/Uninterruptible_power_supply#Communication) [with a computer](http://www.cyberpowersystems.com/products/management-software/energy-saver.html) or server in order to initiate a normal shutdown. As Gabe mentioned, a 1000 VA UPS will add about an hour to a rMBP's battery life.
 
> {{ theme:partial src="aside-header" voice="potatowire" text="Forced shutdown" }}
> 
> My home server is a homebuilt ZFS server, and the boot drive can be corrupted after an unexpected shutdown, requiring the drive to be re-imaged. While the data you care about may be safe on the other drives (if you do it right, and buy a [Synology](http://www.amazon.com/gp/product/B0078RETQE/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0078RETQE&linkCode=as2&tag=potatowire-20) if you're not sure you did) that's a pain that can easily be avoided with the help of a UPS.

In addition to the protections offered during a full blackout, UPSes are a good investment in areas prone to [brownouts](http://en.wikipedia.org/wiki/Brownout_(electricity)) or other issues of power quality. The protection offered in this case is a smoothing or evening-out of the power that is coming from the power grid. During an under-voltage situation, a UPS will maintain acceptable power to attached equipment, and a [line-interactive](http://en.wikipedia.org/wiki/Uninterruptible_power_supply#Line-interactive) UPS can do so without the use of its battery.

The act of converting AC to DC power for battery storage, and then from DC to AC power for use, can [distort the voltage](http://en.wikipedia.org/wiki/Uninterruptible_power_supply#Power_factor) and [some](http://en.wikipedia.org/wiki/Passive_PFC) [sort](http://en.wikipedia.org/wiki/Active_PFC) of filter must be applied to correct this. Higher quality UPS equipment is more likely to provide cleaner power, so this is not the place to cut corners. Consistent low power fluctuations can [damage computer hardware](http://superuser.com/questions/113113/why-are-brownouts-so-harmful) in many insidious ways.

If you're having trouble selecting a UPS to buy, you could always just go with the what the hosts purchased. Gabe has the [CyberPower CP1000](http://www.cyberpowersystems.com/products/ups-systems/pfc-sinewave-series/CP1000PFCLCD.html) (Amazon average price [$104.61](http://www.amazon.com/gp/product/B000QZ3UG0/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000QZ3UG0&linkCode=as2&tag=potatowire-20), and Erik has the [APC ES-750](http://www.apc.com/resource/include/techspec_index.cfm?base_sku=BE750G-JP) (Amazon average price [$86.45](http://www.amazon.com/gp/product/B000Z80ICM/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000Z80ICM&linkCode=as2&tag=potatowire-20)).

> {{ theme:partial src="aside-header" voice="erik" text="Buy Gabe's" }}
>
> My APC is just fine, but I bought it off the cuff at Best Buy a few years ago. Knowing how much thought Gabe puts into his purchases, I'd say you should get the CyberPower if you can afford it.

### Surge Protection

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="13:30" }}

On top of the risk of under-voltage, there is a danger of [voltage spikes](http://en.wikipedia.org/wiki/Voltage_spike). The types of UPSes sold for use with electronics are also designed to protect against surges, but dedicated [surge protectors](http://en.wikipedia.org/wiki/Surge_protector) can be had for much less. Surge protectors work by blocking unsafe voltages of sending them to [ground](http://en.wikipedia.org/wiki/Ground_(electricity)). They are rated by how much electricity [they let through](http://en.wikipedia.org/wiki/Surge_protector#Clamping_voltage) and by how much excess energy [they can safely handle](http://en.wikipedia.org/wiki/Surge_protector#Joules_rating). 

Surge protectors are extremely common, but if you are on the market for a higher-quality part, Erik's choice is the [APC Performance SurgeArrest 11](https://www.apc.com/products/resource/include/techspec_index.cfm?base_sku=P11GTV) (average Amazon price [$24.89](http://www.amazon.com/gp/product/B0012YLTR6/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0012YLTR6&linkCode=as2&tag=potatowire-20)). Keep in mind that he
is prone to flouting [the rules](http://www.compliance.gov/publications/fast-facts/power-strips-and-dangerous-daisy-chains/), which is [not necessarily a good idea](http://electronics.stackexchange.com/questions/34048/why-daisy-chaining-surge-protectors-not-recommended).

> {{ theme:partial src="aside-header" voice="potatowire" text="Bad memories" }}
> 
> If you are wondering why Erik felt he needed permission to confess his rule-breaking habits, remember that he has often been subject to random inspections at home and work.
>
> {{ theme:partial src="image-set" title="Home" show="{{ number }}" file="jfk.jpg" }}{{ theme:partial src="image-set" title="Sweet" show="{{ number }}" file="stateroom.png" }}{{ theme:partial src="image-set" title="Home" show="{{ number }}" file="laptop-stateroom.jpg" }}

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="14:55" person="gabe" quote="Have you ever looked into a whole-house surge protector?" }}

While it may be tempting to try to protect all of the electronics in your house from the evils of high voltage, whole-house solutions are not likely to be [worth the cost](http://www.us-tech.com/RelId/1082596/ISvars/default/Why_Whole_Building_Surge_Protectors_Don't_Work.htm). You could always ask Gabe for the name of his electrician. 

<!-- {{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="16:19" person="gabe" quote="That's the sign of a good electrician, when he refuses to take your money" }} -->

### Power on the Road

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="17:48" }}

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="18:50" person="erik" quote="Hey, do you mind if I put my surge protector in there?" }}

Charging electronics while traveling can be a challenge if you don't come prepared. Once you arrive at your [Holiday Inn Express](http://www.youtube.com/watch?v=7jo_x7ecIFg), you can actually use the goofy lamp outlet if you remember to bring the swivel-plugged wonder that is the [Belkin SurgePlus](http://www.belkin.com/us/p/P-BST300/).

{{ theme:partial src="image" show="{{ number }}" title="<a href='http://www.amazon.com/Belkin-SurgePlus-3-Outlet-Charger-Protector/dp/B00ATZJ5YS/ref=sr_1_1?ie=UTF8&qid=1389331220&sr=8-1&keywords=Belkin+SurgePlus'>Average Amazon price $23.44</a>" file="belkin.jpg" }} 

> {{ theme:partial src="aside-header" voice="erik" text="Correction" }}
>
> Gabe and I mentioned that the Belkin SurgePlus doesn't have iPad class (2.1A) USB ports, but that's no longer true. The new version supports 2.1A (combined) for its two USB ports. This was such a killer feature for me that I went out and bought a new one.

It's easy to keep your batteries topped while sitting in your car, which may also be your office, and if you plan ahead, you can [charge *everyone's* batteries](http://www.energizerpower.com/inverters/EN180.php). 

{{ theme:partial src="image" show="{{ number }}" title="<a href='http://www.amazon.com/gp/product/B00ATXEPQI/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00ATXEPQI&linkCode=as2&tag=potatowire-20'>Average Amazon price $32.42</a>" file="energizer.jpg" }} 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="22:00" person="gabe" quote="The previous one I had was like this giant tumor that hung off of the dash" }}

When selecting a portable battery to charge without access to a power source, you can opt for a battery case or a battery brick. Both have pros and cons, and you likely know which you prefer before setting out to purchase one. One other benefit of the battery bricks that was unstated in the podcast is that they provide the ability to power anything that uses a USB charger.

Erik is partial to the Mophie:

* [Mophie Juice Pack Air](http://www.mophie.com/shop/iphone-5/juice-pack-air-iphone-5)
* [Mophie Juice Pack Dock](http://www.mophie.com/shop/juice-pack-dock)
* [Mophie Powerstand](http://www.mophie.com/shop/ipad/powerstand-ipad-lightning-connector-1)

While Gabe prefers the power brick variants:

* [Monoprice Charger](http://www.monoprice.com/Product?c_id=108&cp_id=10831&cs_id=1083110&p_id=9531&seq=1&format=2)

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="28:06" person="erik" quote="I tend to be a battery hoarder" }}

When it comes to keeping your laptop ready to use, the best bet is to either always be carrying your charger or to prolong your [battery life](http://gigaom.com/2013/06/22/extend-the-battery-life-of-your-macbook-no-matter-how-old-it-is/). And you may need to do both.

> {{ theme:partial src="aside-header" voice="potatowire" text="Laptop Batteries" }}
> 
> Gabe and Erik briefly touched on laptop battery best practices, but there seems to always be some controversy here. [Apple says](http://www.apple.com/batteries/notebooks.html) not to leave them plugged in, but [other smart people say](http://www.dansdata.com/danletters017.htm) that this isn't really a concern with modern chargers and [lithium-ion batteries](http://en.wikipedia.org/wiki/Lithium-ion_battery). [Memory effect](http://en.wikipedia.org/wiki/Memory_effect) is definitely not an issue with Li-ion batteries, but they are still damaged by heat and only have a finite number of cycles (using and recharging 100% of battery capacity-not necessarily in one fell swoop-equals one full charge cycle) available to them. [Minimize both of these ill effects](http://batteryuniversity.com/learn/article/how_to_prolong_lithium_based_batteries), and the lifespan of your battery should improve. I lack the discipline (and desire) to [charge only to 80%, while not dipping below 40%](http://www.wired.com/gadgetlab/2013/09/laptop-battery/?cid=12494134), but I know you are better than me.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="31:48" person="gabe" quote="I'm UPS-promiscuous but with my Synology I'm pretty dedicated." }}

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
>
> Erik's old [Garmin iQue 3600](http://www.amazon.com/Garmin-Handheld-Americas-Detailed-Mapping/dp/B000087BXU) may have lacked the battery life required to walk around the block, but it does serve as a reminder of how easy we have things now. Battery technology is a little better, power consumption technology is *much* better, and most of our devices never see a power cord during the day. We've come a long way.
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com.