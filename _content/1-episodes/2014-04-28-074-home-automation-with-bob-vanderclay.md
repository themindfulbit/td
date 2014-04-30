---
number: "074"
title: Home Automation with Bob VanderClay
type:
  - interview
people:
  - Gabe Weatherhead
  - Erik Hess
  - Bob VanderClay
topics:
  - home automation
  - sonos
  - hue
  - wemo
banner: /assets/img/unimate.jpg
caption: '[Glucksman Library](https://www.flickr.com/photos/ul_digital_library/11102656665)'
download: >
  http://www.buzzsprout.com/7417/169040-074-home-automation-with-bob-vanderclay.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146573770%3Fsecret_token%3Ds-ef0SX&color=ff5500&auto_play=false&hide_related=false&show_artwork=true"></iframe>'
soundcloudurl: 074-home-automation-with-bob-vanderclay
summary: 'Bob VanderClay returns to discuss the ultimate topic for Technical Difficulties: Home Automation. We touch on several popular tools, including Hue, SmartThings, WeMo, and Nest.'
showtype: interview
post_images: ""
post_files: ""
---

{{ theme:partial src="section-header" title="The Ultimate Topic" url="{{ soundcloudurl }}" time="0:00" }}

Home automation is a troubled topic that exemplifies pretty much everything that's broken about technology these days.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="0:27" person="gabe" quote="Or everything that you can broke" }}

Like any technology early in its adolescence, the various manufacturers in the industry are trying to appeal to a broad audience, but in doing so they are presenting a wildly differing, and often incompatible visions of ideal home automation. Luckily, the rise of mobile technology and improvement of [IFTTT](http://ifttt.com)-style API bridges have made it more possible to unite these disparate systems into a somewhat coherent whole.

This week, friend-of-the-show [Bob VanderClay](http://takitapart.com/) rejoins Gabe and Erik as they revel in their home automation triumphs and bemoan their tragedies.

#### (Re)Introducing Bob VanderClay

{{ theme:partial src="image" title="Bob VanderClay" caption="" show="{{ number }}" file="bob-vanderclay.jpg" }}

You might remember Bob from [Episode 032](http://technicaldifficulties.us/episodes/032-blogging-platforms-with-bob-vanderclay) where he discussed blogging platforms.

Bob worked as a developer for NASA, ETS, BAE, and the US Joint Forces Command, before moving into the private sector. He's currently Erik's [partner](https://www.youtube.com/watch?feature=player_detailpage&v=UNz8eLW7pdo#t=20) at [high90](http://high90.com) where he develops web applications for the multifamily software industry.

#### A Litany of Disasters

It's probably best to start with a short overview of where everybody is coming from. The table below highlights the systems we've used, loved, and hated over the years.

<table class="use-matrix">
  <tr>
    <td class="item"><h4><a href="http://www.sonos.com/">Sonos</h4></a></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/gabe-avatar.png" /></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/erik-avatar.png" /></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/bob-avatar.jpg" /></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://www.logitech.com/en-us/product/harmony-ultimate">Logitech Harmony Ultimate</a></h4></td>
    <td class="avatar"></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/erik-avatar.png" /></td>
    <td class="avatar"></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="https://nest.com/thermostat/life-with-nest-thermostat/">Nest</a></h4></td>
    <td class="avatar"></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/erik-avatar.png" /></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/bob-avatar.jpg" /></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://www.belkin.com/us/Products/home-automation/c/wemo-home-automation/">WeMo</a></h4></td>
    <td class="avatar"></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/erik-avatar.png" /></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/bob-avatar.jpg" /></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://www.synology.com/en-us/surveillance/index#Deployment_tabs_1">Synology Surveillance Station</a></h4></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/gabe-avatar.png" /></td>
    <td class="avatar"></td>
    <td class="avatar"></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://www.smartthings.com/">SmartThings</a></h4></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/gabe-avatar.png" /></td>
    <td class="avatar"></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/bob-avatar.jpg" /></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://meethue.com/">Hue</a></h4></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/gabe-avatar.png" /></td>
    <td class="avatar"></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/bob-avatar.jpg" /></td>
  </tr>
  <tr>
    <td class="item"><h4><a href="http://www.jascoproducts.com/z-wave/">GE/Jasco Smart Switches</a></h4></td>
    <td class="avatar"><img src="{{ _site_url }}assets/img/gabe-avatar.png" /></td>
    <td class="avatar"></td>
    <td class="avatar"></td>
  </tr>
</table>

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="2:55" person="gabe" quote="It went back into the somewhere box." }}

{{ theme:partial src="section-header" title="Smart Switches and WeMo" url="{{ soundcloudurl }}" time="3:34" }}

In theory, the dream has always been to have your smart home be wired into the walls. We'd be able to interact with everything the way we're used to, but could also do it more awesomely *with technology*. Unfortunately, that remains more of a dream than a reality, as "smart" wiring options have proven anything but. Gabe's experiences are sadly typical in this arena.


> {{ theme:partial src="aside-header" voice="gabe" text="So Many Options" }}
>
> [X10](http://en.wikipedia.org/wiki/X10_(industry_standard)) has been around since the 70's and has become the defacto standard for wireless appliance controls. One advantage of X10 modules is that communication can occur over the home power lines. Many X10 controls rely on wall-warts and lightbulb adapters but the most severe issues with X10 are caused by interference with the signals between devices caused by appliances and wiring.
> 
> [Insteon](http://en.wikipedia.org/wiki/Insteon), [Z-Wave](http://en.wikipedia.org/wiki/Zwave), and [ZigBee](http://en.wikipedia.org/wiki/ZigBee) followed on the heels of X10. [Insteon](https://www.insteon.com) is a proprietary technology that is widely available in the US and works as a mesh network over a combination of power line and RF. 
> 
> ZigBee is based on the 802.15 standard and also works as a mesh network operating without a single master control.
> 
> Z-Wave operates as an RF mesh network in the 900MHz range. Z-Wave may interfere with sub-GHz cordless phones, if those are still around. Interestingly, the [Open Z-Wave](http://www.openzwave.com) project aims at making an open standard free of expensive development kits. This has already resulted in a [Raspberry Pi daughter board](http://razberry.z-wave.me).

> {{ theme:partial src="aside-header" voice="potatowire" text="Hobbyists" }}
> 
> One of aspects of this industry that I find fascinating is the work that goes on in the parallel hobby electronics industry. There have been wireless communications tutorials like [this one](http://ladyada.net/make/xbee/arduino.html) online since 2008, and individual chipsets can be had for as little as $10. Versions of the [Xbee](http://en.wikipedia.org/wiki/XBee), even directly supports the ZigBee protocol, but general 802.15, Bluetooth, and NFC components can all be purchased for a relatively small (monetary) cost. 
> 
> Let's face it, all home automation falls squarely in the "tinkering" camp, and if I'm going the tinker, I'm going to ***tinker***.



#### Smart Switches: Wiping out on the Z-Wave

As you might recall from [earlier](http://technicaldifficulties.us/episodes/055-ethernetworking) [episodes](http://technicaldifficulties.us/episodes/056-sonos-showdown) Gabe's home was built in the seventies, and is full of pleasant (read: unpleasant) surprises in the walls that interfere with the sorts of modern conveniences he's come to expect in a family home.

Gabe bought about a dozen of the [GE/Jasco Z-Wave](http://www.jascoproducts.com/z-wave/) Smart Switches for his home, called an electrician and got down to work. 

> {{ theme:partial src="aside-header" voice="erik" text="Z-Wave" }}
>
> I didn't know a whole lot about Z-Wave before the show, so I was surprised to find out that it creates its own low-bandwidth wireless network at 900 MHz. While that might interfere with older cordless phones, it won't interfere with WiFi which operates mostly in the 2.4 GHz band. As we discussed in an [earlier show](http://technicaldifficulties.us/episodes/061-taming-wifi-with-bradley-chambers), interference can be a big concern in a home with a lot of connected toys... er, devices.
>
> If you're interested in learning more about Z-Wave, here are a few useful links:
>
> * [Z-Wave on Wikipedia](http://en.wikipedia.org/wiki/Z-Wave)
> * [The Z-Wave Home Page](http://www.z-wave.com/home)
> * [The Z-Wave Alliance](http://www.z-wavealliance.org/)
> * [The Open Z-Wave Project](https://code.google.com/p/open-zwave/)

Unfortunately, given the crazy topology of his home wiring configuration, they didn't integrate well and were returned. His specific problems might not crop up in your home, but Gabe particularly struggled with the 3-way dimmers and toggles. The 2-way ones worked much better.

> {{ theme:partial src="aside-header" voice="gabe" text="I Was Warned, 3-Ways are Hard" }}
>
> I did a good amount of research into the Z-Wave switches and there are [plenty of reports](http://diy.stackexchange.com/questions/38874/z-wave-3-way-lights-problem) of difficulty with [3-way switches](http://www.smarthome.com/forum/topic.asp?TOPIC_ID=8199). It was obvious that 3-way (not to mention 4-way) switches would be a challenge. I like challenges. My electrician? Not so much.

In general, trends seem to be moving away from this kind of in-wall support given the rapidly changing state of the technology and wide variety of alternatives.

> {{ theme:partial src="aside-header" voice="erik" text="Lutron and X10" }}
>
> Many builders use [Lutron](http://www.lutron.com/en-US/Pages/default.aspx) home automation products as well. It's a proprietary system with marketing that seems geared towards contractors and large organizations (so, not us).
>
> On the other end of the spectrum is [X10](http://en.wikipedia.org/wiki/X10_\(industry_standard\)), a home automation protocol which has been the standard since shortly after its inception in the late 1970s. Devices have historically been cheap and accessible, and there are many manufacturers who offer a wide range of compatible hardware.
>
> You can find a short history of X10 [here](http://home.planet.nl/~lhendrix/x10_history.htm), and for more on the technical aspects of the X10 protocol, you can look [here](http://www.smarthomeusa.com/info/x10theory/x10theory/#theory).


#### Wall Warts: WeMo

A popular alternative to expensive switches and smart outlets is [WeMo](http://www.belkin.com/us/Products/home-automation/c/wemo-home-automation/). Belkin has been working on WeMo for a few years now, gradually expanding their lineup from a simple networked wall wart to lighting and power efficiency solutions.

{{ theme:partial src="image-set" title="WeMo Outlet" show="{{ number }}" file="wemo-outlet.jpg" }}{{ theme:partial src="image-set" title="WeMo Motion" show="{{ number }}" file="wemo-motion.jpg" }}{{ theme:partial src="image-set" title="WeMo Insight" show="{{ number }}" file="wemo-insight.jpg" }}{{ theme:partial src="image-set" title="WeMo Switch" show="{{ number }}" file="wemo-switch.jpg" }}{{ theme:partial src="image-set" title="WeMo Lighting" show="{{ number }}" file="wemo-lighting.jpg" }}

> {{ theme:partial src="aside-header" voice="erik" text="Christmas Lighting and Beyond?" }}
>
> I've used WeMo outlets for two years now as my primary Christmas lighting control, and they've worked great. They've even stood up to some fairly chilly winters outside (not recommended if you live in an area with liquid precipitation) attached to an outlet on my front porch. You can set up timers inside the WeMo mobile app, basing it on local sunset or a specific time.
>
> {{ theme:partial src="image" title="Erik's WeMo Stack" caption="" show="{{ number }}" file="wemo-stack.jpg" }}
>
> Despite their success during the holidays, I've struggled to find a use for them the rest of the year because they're a bit awkward in practice. If they're on a switched outlet, that switch always has to remain on. If the outlet is low to the ground and you don't have your phone, you have to bend over to activate it with the button on the housing, which can be difficult if the only outlet is buried behind your couch. 
>
> In my house, I've also struggled with units occasionally dropping off the network. For timed holiday lights this is no big deal at all -- the timers still work fine. For daily use lighting, it can be pretty frustrating.

The biggest problem with WeMo? 

*Wall warts are ugly.*

> {{ theme:partial src="aside-header" voice="gabe" text="On and Off Doesn't Always Mean On and Off" }}
>
> I'd argue that the biggest problem with the WeMo controls are that with many modern electronics toggling power doesn't actually turn the device back on. Toggle the power on an air conditioner and it almost always means the air conditioner stays off until a human touches the "on" button. It might work for a refrigeration unit or floor lamp, but it's no solution for a computer or TV. Electronics are too smart for us now.


{{ theme:partial src="section-header" file="holiday-fleet.jpg" title="Hue" url="{{ soundcloudurl }}" time="15:10" }}

Phillips' [Hue](http://meethue.com/en-us/) bulbs seem like the perfect expression of the internet of things. Each light is connected wirelessly and is individually addressable, has a nearly infinite color palate, is controllable via a well-designed remote application, and  includes a robust API.

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="hue-bulbs.jpg" }}

The color options are fun, but not really practical unless you're a kid, really into crazy accent lighting, or like to throw sweet disco [raves](http://www.vice.com/en_uk/read/rave-culture-a-handy-guide-for-middle-america). 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="19:13" person="bob" quote="There are very few rave parties at my house." }}

The aforementioned API is an excellent feature, however, and there are plenty of devices which take advantage of it. Bob uses an Android App called Lampshade.io which provides a much broader ability to control your bulbs.

{{ theme:partial src="gapp" show="{{ number }}" image="lampshade.png" name="Lampshade.io" description="LampShade is the leading Android app for controlling smart lightbulbs" price="Free" developer="http://lampshade.io/" playstore="https://play.google.com/store/apps/details?id=com.kuxhausen.huemore" }}

Lampshade's Pro upgrade offers lockscreen and home screen widget integrates with an app called [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) that acts as a kind of [IFTTT](http://ifttt.com) for your phone. For example, when Bob triple-clicks the volume-up button on his Nexus 5, an app called [QuickClick](https://play.google.com/store/apps/details?id=com.blor.quickclickgold) fires off a Tasker macro that tells Lampshade to toggle the lights in his house. Similarly, using IFTTT Bob's WiFi-enabled scale tells his lights to come on when he steps on the scale first thing in the morning.

Despite their extensive feature-set, Hue still falls short of the ideal when ease-of-use is considered. They work passably with switches, in the sense that providing power to a Hue bulb turns it on. Unfortunately, the bulb powers on at full brightness and in its default color, which might not be what you're expecting. 

> {{ theme:partial src="aside-header" voice="potatowire" text="Not glowstick friendly" }}
>
> A rave requires precise lighting management. Everyone knows that.

Fortunately, Hue is planning bring out a series of portable, [wireless switching units](http://meethue.com/en-us/inside-hue/lux-and-tap/) to market soon. This will help, but not completely solve what may be an unsolvable problem: As long as there is a way to cut power to a smart device, it will probably always act dumb. Even if you do need mood lighting.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="24:11" person="gabe" quote="I don't use any of the Getting in the Mood Themes" }}

{{ theme:partial src="section-header" title="SmartThings" url="{{ soundcloudurl }}" time="28:28" }}

[SmartThings](http://www.smartthings.com/) started off on [Kickstarter](https://www.kickstarter.com/projects/smartthings/smartthings-make-your-world-smarter) as a way to make the little things in your life just a bit smarter.

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="smartthings.jpg" }}

They're now a fully-operational enterprise that offers several products, all of which connect via a wide range of protocols and networks including Zigbee (2.4 GHz), Z-Wave (900 MHz), and WiFi. Many of their offerings remove the need for wire being battery powered, and there are several manufacturers signeed up, so you've got multiple options if you're choosy.

> {{ theme:partial src="aside-header" voice="gabe" text="Dumb Things" }}
>
> Of all the products in my automation experiment, I liked the SmartThings-branded hardware the best. Mostly because they are dead simple to install if you have an iOS device. The hub setup involves plugging in the hub and tapping the connection button. You launch the iOS app and connect it to the hub with the code provided. That's it. To connect a sensor, you pull the tab out of the back which separates the battery contacts. You then open the iOS app and the new sensor is ready to setup. The whole system setup is pretty similar to IFTTT, and there are a bunch of pre-configured options to choose from. I'm not sure it could be any easier.



Given the number of sensors available, the possibilities are nearly endless. Gabe has a sensor in his garage which will alert him if the garage door is open longer than 30 minutes, so he doesn't inadvertently let the dog out. Bob has a vibration sensor that tells him when someone knocks on his front door, even if he's in another state (mental or physical--we're not quite sure).

{{ theme:partial src="section-header" title="Nest" url="{{ soundcloudurl }}" time="32:30" }}

Nest Labs got its start by creating a simple, intelligent, next-generation thermostat. The company was founded by the [guy](http://en.wikipedia.org/wiki/Tony_Fadell) who helped create the iPod, and they've recently branched out by creating a hybrid smoke and carbon monoxide detector.

> {{ theme:partial src="aside-header" voice="gabe" text="Privacy" }}
>
> They were also recently purchased by Google, which spawned innumerable jokes on Twitter and the inevitable privacy (over)reactions. Sometimes conveniently contained in [the same post](http://www.techhive.com/article/2087981/despite-nest-purchase-google-isnt-welcome-in-my-house.html). Come on people, it's not like we're [talking about Facebook](https://twitter.com/notch/status/448586381565390848) here.


{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="nest.jpg" }}

One of the major selling points of the Nest thermostat is that it's (usually) simple to install and even simpler to use. One of the biggest problems with home automation solutions is that they're often difficult for the technically disinclined. Nest passes that test with flying colors. Turn the knob, set the temperature.

It's simplicity hides a sophisticated algorithm and built-in motion detectors which attempt to be smart about when you're home and away, to cut down on your energy use. Unfortunately for people who work at home like Erik and Bob, that feature doesn't get much use.

Also, as friend-of-the-show [Bradley Chambers](https://twitter.com/bradleychambers) mentioned in [Episode 061](http://technicaldifficulties.us/episodes/061-taming-wifi-with-bradley-chambers) Nest operates on 2.4 GHz WiFi only, which could be an inconvenience if you're otherwise ready for the interference-busting benefits of the 5 GHz variety.

Finally, Nest does require relatively modern wiring so it can stay powered. That's enough to keep Gabe from installing it altogether.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="35:55" person="gabe" quote="I'm a little concerned about calling my electrician at this point." }}
    
{{ theme:partial src="section-header" title="Sonos" url="{{ soundcloudurl }}" time="38:10" }}

We've already discussed Sonos extensively on [Episode 056](http://technicaldifficulties.us/episodes/056-sonos-showdown), but it fits nicely into this discussion, too. Gabe has had more success with his setup recently, though the speakers still come ungrouped every now and then. His daughter likes how good it sounds playing her favorite movie soundtrack again and again. And again.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="39:45" person="erik" quote="Let it go, Gabe" }}

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="sonos-overview.jpg" }}

Unfortunately, Sonos is still complicated enough that it doesn't pass the six-year-old test, a common refrain for this kind of home automation product. While Gabe thinks Hue is simpler to use than Sonos, Erik and Bob disagree.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="42:07" person="bob" quote="Text #FFFFFF to Hue Bulbs at..." }}

Bob has had a lot of success using an Android App called Macronos to create playlists, groupings and volume controls that reside as shortcuts on his phone's home screen just like apps.

{{ theme:partial src="gapp" show="{{ number }}" image="macronos.png" name="Macronos for Sonos" description="Macronos is the easiest way to get music playing on Sonos.
Control Sonos directly from the various apps using the Cast icon.
Press the Cast icon, select the MacronosCast device and choose a Sonos player (No setup required)." price="Free" developer="" playstore="https://play.google.com/store/apps/details?id=dk.youtec.android.macronos" }}

Macronos ties into Tasker as well, meaning Bob has one button that turns off his lights and turns on a music playlist when he goes to bed. It can also trigger via an [NFC](http://en.wikipedia.org/wiki/Near_field_communication) tag on his nightstand.

Sonos continues to be in active development, with a [beautiful new controller app](http://www.sonos.com/newcontrollerapp) in beta and the recent addition of Google Play Music integration. That latter addition was enough to allow Erik to drop his Spotify account entirely.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="45:47" person="erik" quote="How AirPlay is supposed to be" }}

{{ theme:partial src="section-header" title="Universal Remotes" url="{{ soundcloudurl }}" time="45:46" }}

Universal remotes were among the first attempts at home automation, but the bewildering array of devices that a good remote must control means very few companies have been successful.

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="lh-remote.jpg" }}

##### Logitech Harmony Ultimate

After a great experience with the more traditional [Logitech Harmony One](http://www.amazon.com/Logitech-Advanced-Universal-Discontinued-Manufacturer/dp/B005FO43OU/ref=sr_1_1?ie=UTF8&qid=1398633425&sr=8-1&keywords=logitech+harmony+one), Erik decided to give the Harmony Ultimate a try.

{{ theme:partial src="product" show="{{ number }}" image="lhu.jpg" name="Logitech Harmony Ultimate" description="Harmony Ultimate gives you all the control you deserve. Control home theater devices behind closed cabinets and walls. Access IR devices as well as Bluetooth game consoles. Even use your mobile phone as a powerful, personal universal remote control." msrp="$349.99" manufacturer="http://www.logitech.com/en-us/product/harmony-ultimate" amazon="http://www.amazon.com/Logitech-Harmony-Ultimate-Customizable-Cabinet/dp/B00BQ5RY1G/ref=sr_1_1?ie=UTF8&qid=1398633466&sr=8-1&keywords=logitech+harmony+ultimate" }}

It's as reliable as you can expect something to be that has to control multiple devices via multiple methods, but at least it offers a handy fix-it-myself mode to get any unruly devices in line with a minimal amount of fuss. The remote has to be programmed via website, which is great in that it remembers what devices you own, but it's kind of a pain to have to install Silverlight and use Safari on a Mac just to program your remote.

The mobile app is capable, if a bit cumbersome. To bring the discussion full circle, it will also control your Hue lights if you want.

##### Other Options

[Roomie Remote](http://www.roomieremote.com/) is a $9.99 iOS based universal remote app that will control connected devices natively and IR devices with any of a number of adapters available in their [store](http://www.roomieremote.com/store/).

{{ theme:partial src="app" show="{{ number }}" image="roomie-remote.png" name="Roomie Remote" description="Roomie is a universal remote to control your home theater components supporting thousands of devices – often via direct communication over your home network rather than requiring additional hardware." price="$9.99" developer="http://www.roomieremote.com/" appstore="https://itunes.apple.com/app/id431497717?mt=8" }}

The number of supported services are truly dizzying, and a reminder of what can already be controlled purely via the network:

- Insteon
- Vera
- Sonos
- Hue
- IP Control TV 
- Plex

Yet another option Gabe tried was UnityRemote, a Bluetooth IR blaster for iOS. Unfortunately it's no longer available. Gabe's ended up in his "somewhere" box alongside his Smart Switches.

> {{ theme:partial src="aside-header" voice="erik" text="Gabe's Somewhere Box" }}
>
> *Am I the only one creeped out by this?*

{{ theme:partial src="section-header" title="Wrapping it Up" url="{{ soundcloudurl }}" time="55:30" }}

[NFC](http://en.wikipedia.org/wiki/Near_field_communication) is still a dream technology, and like nearly all dream technologies, it's not nearly reliable enough to be magical. It's particularly susceptible to electromagnetic interference from power cords and chargers.

This is a common refrain across all platforms these days. We expect car-level or light-switch-level ease-of-use and reliability, but often forget that cars and home wiring took over a century to become as reliable as they are today.

> {{ theme:partial src="aside-header" voice="potatowire" text="Well..." }}
>
> Maybe not [car-level ease-of-use](https://medium.com/p/1045a061594f)

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="1:00:39" person="erik" quote="It seems like we're waiting for a Blackberry moment" }}

The [lawsuits](https://nest.com/press/nest-counters-honeywell-allegations-of-patent-infringement/) against Nest are just one example of how these disruptive new technologies frighten the incumbents of home automation.

API integration services like [IFTTT](http://ifttt.com) and [Zapier](https://zapier.com/) are another reason for optimism. They are the glue that binds many different platforms together. Since this show was recorded, IFTTT has released their [Android app](https://play.google.com/store/apps/details?id=com.ifttt.ifttt) on the Google Play store.

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> There is still plenty of time to hope for a home automation future worthy of a science fiction novel, but in the meantime, we nerds will continue to demonstrate the potential to non-believers with refrains of, "hold on, I just gotta reset this one thing... You're gonna love this." 
> 
> I want to believe.
>
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/), or feel free to send an email to me at potatowire dot com.