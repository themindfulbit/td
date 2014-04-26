---
number: "074"
title: 'Home Automation with Bob VanderClay'
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
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146573770%3Fsecret_token%3Ds-ef0SX&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true"></iframe>'
soundcloudurl: >
  074-home-automation-with-bob-vanderclay
summary: "Bob VanderClay returns to discuss the ultimate topic for Technical Difficulties: Home Automation. We touch on several popular tools, including Hue, SmartThings, WeMo, and Nest."
showtype: interview
post_images: ""
post_files: ""
---

{{ theme:partial src="section-header" title="The Ultimate Topic" url="{{ soundcloudurl }}" time="0:00" }}

Home automation is a troubled topic that encompasses pretty much everything that's broken about technology these days.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="0:27" person="gabe" quote="Or everything that you can broke" }}

Like any technology in its early adolescence, the many manufacturers in the space are trying to appeal to a broader audience, but in doing so, the manufacturers often suggest wildly differing or incompatible visions of what home automation looks like. Luckily, the rise of mobile technology and improvement of [IFTTT](http://ifttt.com)-style API bridges have brought these disparate systems together into a somewhat coherent whole.

This week, friend-of-the-show [Bob VanderClay](http://takitapart.com/) returns to join Gabe and Erik in sharing their triumphs and tragedies of home automation.

#### (Re)Introducing Bob VanderClay

{{ theme:partial src="image" title="Bob VanderClay" caption="" show="{{ number }}" file="bob-vanderclay.jpg" }}

You might remember Bob from [Episode 032](http://technicaldifficulties.us/episodes/032-blogging-platforms-with-bob-vanderclay) where he discussed blogging platforms.

Bob worked as a developer for NASA, ETS, BAE, and the US Joint Forces Command, before moving into the private sector. He's currently Erik's partner at [high90](http://high90.com) where he develops web applications for the multifamily software industry.

### A Litany of Disasters

It's probably best to start with an overview of where everybody is coming from, highlighting the systems we've each used, loved, and hated over the years.

#### Erik's Automation Attempts

* Sonos
* Logitech Harmony Ultimate
* Nest
* WeMo

#### Gabe

* Sonos
* Security Camera (Synology)
* Smart Things
* Hue
* Some Logitech Harmony remote

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="2:55" person="gabe" quote="It went back into the somewhere box." }}

#### Bob

* Sonos
* Nest
* Hue
* Smart Things
* WeMo

{{ theme:partial src="section-header" title="Smart Switches and WeMo" url="{{ soundcloudurl }}" time="3:34" }}

* Gabe's house was built in the 70s.
* He bought 12-15 switches
* GE Jasco Switches
* Tried 3-way dimmers, 3-way toggles, and 2-way toggles.
* Do connect to SmartThings
* Require neutral lines
* Don't work well with 3-way
* Another alternative is Lutron
* Lutron is proprietary
* The general trend has been to move away from the wall
* Bob thinks a centralized system is no longer viable
* Lobot
* X10
* The trend has also been towards decentralization

#### WeMo

* Wall Warts can be a bit inconvenient

{{ theme:partial src="image" title="Erik's WeMo Stack" file="wemo-stack.jpg" }}

{{ theme:partial src="section-header" title="Hue" url="{{ soundcloudurl }}" time="15:10" }}

* Doesn't work well with switches
* Toggling turns it on to full power and default brightness
* Hue is coming out with switches
* Expensive, not necessary for flood lights
* Colors are great for kids, and sweet rave parties
- Doesn't play well with physical switches.
- Has a really good Web API.
- Lampshade (tasker plugin).
- IFTTT / Scheduling

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="19:13" person="bob" quote="There are very few rave parties at my house." }}

* Making hue guest friendly
* Lamps are easy enough due to the switch.
* Slight delay before it comes on could make people think it's not working even if it is
* Need a foolproof physical fallback (broadly applicable)

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="24:11" person="gabe" quote="I don't use any of the Getting in the Mood Themes" }}

* Sunk Cost Fallacy
* Bob: Limit to Accent lighting, recommend physical switches for main lighting
* Gabe: Well made, easy to set up, app is nice, works with IFTTT
* Bob: Hue has great API, which Android takes advantage of
* Tasker - IFTTT for your phone
* QuickClick - maps tasker activities to phone volume keys
* Bob's WiFi scale turns on the lights when he steps on it in the morning.

{{ theme:partial src="section-header" title="Smart Things" url="{{ soundcloudurl }}" time="28:28" }}

* Works with a lot of things
* Internet of things
* Gabe gets an alert if the garage door is open for longer than 30 min and lets him see what the temperature of the garage is.
* Bob has a vibration sensor that sends a signal when someone knocks on his front door
* Battery powered
- Zigbee (2.4ghz)
- ZWave (repeater / 900mhz over) 
- Motion detection

{{ theme:partial src="section-header" title="Nest" url="{{ soundcloudurl }}" time="32:30" }}

* Erik: Takes something that was complex and made it simpler for everybody, including family
* Bob: It just works. Added extra functionality to an already existing tool. Intuitive for guests.
* Erik: Swap modes between heat, heat/cool, cool. Good for the desert/mountains.
- Too smart, disabled all autoscheduling. 
- Not enough routine in my life. 
- LOVE remote access and control of my system.
- Incredibly easy for guests to control temperature (foolproof fallback).

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="35:55" person="gabe" quote="I'm a little concerned about calling my electrician at this point." }}

{{ theme:partial src="section-header" title="Progressive Decentralization" url="{{ soundcloudurl }}" time="36:10" }}

- Old Way
    - Centrally controlled (computer or dedicated hardware)
    - Manufacturer lockin.
    - Slow to respond to changing technological landscape.
- New Way
    - Loosely coupled set of tools, service, hardware.
    - Standards based (WiFi, BT, etc.)
    - Multi standard support.
    - Web APIs.
    - Activity-based setup.
    
{{ theme:partial src="section-header" title="Sonos" url="{{ soundcloudurl }}" time="38:10" }}

* Sonos episode
* Gabe uses it mostly as an AirPlay target
* Still more capable than assigning multiple AirPlay target speakers from a computer
* Gabe: Not really guest/family friendly

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="39:45" person="erik" quote="Let it go, Gabe" }}

* Doesn't necessary pass the six-year-old test. They just want to press the play button.
* Gabe: they still occasionally become ungrouped
* Gabe: Hue is as simple as they can get

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="42:07" person="bob" quote="Text #FFFFFF to Hue Bulbs at..." }}

* Macronos
* Create playlists, groupings and volume controls then turn them into one-click home screen shortcuts
* Ties in to Tasker
* Bob has one-click button that turns off his lights and turns on music at night, he can also do it via an NFC tag on his nightstand
* Just added Google Play Music support which gives the best of iTunes and Spotify integration, all your music plus an online library
* They keep improving the functionality

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="45:47" person="erik" quote="How AirPlay is supposed to be" }}

{{ theme:partial src="section-header" title="Universal Remotes" url="{{ soundcloudurl }}" time="45:46" }}

##### Logitech Harmony Ultimate

* WiFi enabled base station with two small IR blasters
* Remotes programmed via website
* Includes traditional remote
* Apps on different mobile platforms
* Has been pretty reliable
* Quick-Select Channel buttons auto-programmed to your cable company
* "Fix it Myself" menu is extremely useful
* It will control Hue Lights

##### Roomie Remote (iOS)

- IPBased IR receivers
- Supports everything:
    - Insteon
    - Vera
    - Sonos
    - Hue
    - IP Control TV 
    - Plex

##### Unity remote

* Cool, but ended up in Gabe's something box
* Bluetooth

{{ theme:partial src="section-header" title="NFC" url="{{ soundcloudurl }}" time="55:30" }}

* Bob uses it, but 99% reliable isn't reliable enough
* Tasker Integration
* Susceptible to interference from power lines
* Lamp cord was enough to throw it off
* Inductive charging is completely unworkable
* Takes away the magic when it doesn't work right
* That's a common refrain across all these platforms. We expect car-level or light-switch-level reliability.
* Cars and electricity are very mature (100+ year) technology
* Haven't reached enough market interest to make this stuff mundane

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="1:00:39" person="erik" quote="It seems like we're waiting for a Blackberry moment" }}

* Nest lawsuits

{{ theme:partial src="section-header" title="API Integrations" url="{{ soundcloudurl }}" time="1:03:03" }}

* IFTTT
* IFTTT is now on Android
* Zapier

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/), or feel free to send an email to me at potatowire dot com.