---
banner: /assets/img/dish-art.jpg
title: Taming WiFi with Bradley Chambers
number: "061"
showtype: interview
people:
  - Gabe Weatherhead
  - Erik Hess
  - Bradley Chambers
topics:
  - WiFi
  - Networking
caption: '[NASA](http://www.flickr.com/photos/nasacommons/8972299673/sizes/o/)'
download: >
  http://www.buzzsprout.com/7417/140581-061-taming-wifi-with-bradley-chambers.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127854435%3Fsecret_token%3Ds-kiaVq&color=ff6600&auto_play=false&show_artwork=true"></iframe>'
soundcloudurl: 061-taming-wifi-with-bradley
summary: "Bradley Chambers drops by to help Gabe and Erik understand how to make WiFi work in the home. Along the way they talk about the way wireless signals propagate and interfere, how to select the best hardware, and how to configure your router's software to ensure a secure and reliable wireless network."
post_images:
  - 
    image: /assets/img/bradley-chambers.jpg
    title: ""
  - 
    image: /assets/img/overlap.png
    title: ""
post_files: ""
---

### Guest Spotlight: Bradley Chambers

{{ theme:partial src="image" title="Bradley Chambers" show="{{ number }}" file="bradley-chambers.jpg" }}

> {{ theme:partial src="aside-header" voice="potatowire" text="Producer's Note" }}
> 
> This week marks our second episode with a guest expert. Before we begin, here is a bit more about Bradley Chambers, this week's guide to the tricky world of WiFi. 

Bradley's sparse Twitter bio sums him up as "Jesus follower, husband, father," and that's a good place to start. He lives in Chattanooga, TN with his wife and two sons and serves as Director of Information Technology for Brainerd Baptist School. 

Bradley can be regularly heard on the [*Out of School*](http://outofschool.net/) podcast discussing educational technology with his co-host [Fraser Speirs](http://www.speirs.org/). He also blogs (not daily) at [Chambers Daily](http://chambersdaily.com/) and the content there is of the same high quality you'd expect from the author of [*Learning to Love Evernote*](http://chambersdaily.com/learning-to-love-evernote/) and [*Learning to Love Photo Management*](http://chambersdaily.com/learning-to-love-photo-management/). 

You can find Bradley online via [Twitter](http://twitter.com/bradleychambers), [ADN](http://alpha.app.net/bradleychambers), and [LinkedIn](http://www.linkedin.com/in/chambersbradley).

### When was the last time you re-thought how you're doing your WiFi?

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

Gabe begins the episode by asking Erik a silly question about whether he has reconsidered [how he](http://themindfulbit.com/blog/ruhoh-i-rebuilt-the-blog-again) [does a thing](http://technicaldifficulties.us/episodes/040-helping-erik-procrastinate-productively-with-a-gtd-reboot) – WiFi in this case. 

[Skype problems](http://technicaldifficulties.us/episodes/060-family-video-conferencing#skype) caused Erik's most recent clean sweep and (as is so often the case in the world of tech) the new setup completely failed to solve his actual problem, but he liked it better anyway. Since this [opens a can of worms](http://mentalfloss.com/article/31039/how-did-term-open-can-worms-originate), Gabe and Erik invited someone with both a broader and deeper knowledge of WiFi onto the show to help them dive deeper. Enter Bradley Chambers.

> {{ theme:partial src="aside-header" voice="potatowire" text="Mass per Unit Volume" }}
> 
> This material is very dense and while the show doesn't stray much, you can certainly tell this is a complicated subject when listening. The show notes here will occasionally fall down some of the rabbit holes that the hosts were able to avoid, but in general, I will also try to hit the high points, while offering some useful links that provide additional depth.  

When Bradley started his IT job in 2009 or so, WiFi was not ubiquitous, but now it's included in [previously dumb household items](http://www.amazon.com/gp/product/B009GDHYPQ/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B009GDHYPQ&linkCode=as2&tag=potatowire-20), is the default network connection for [television doohickeys](http://www.amazon.com/gp/product/B00BGGDVOO/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00BGGDVOO&linkCode=as2&tag=potatowire-20), and shares its frequency with [baby monitors](http://arstechnica.com/tech-policy/2009/05/blame-baby-monitors-not-congestion-for-your-wifi-woes/) and [microwaves](http://en.wikipedia.org/wiki/Electromagnetic_interference_at_2.4_GHz#Microwave_oven). This ubiquity means that WiFi tools and support for the protocol have never been better, but it has also spawned a host of interference and bandwidth challenges.

### A firm foundation of what Wifi really is

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="4:55" }} 

WiFi, in its most basic from, is very easy to understand: a wireless way to network computers. Reduced another step in tech complexity, WiFi just means "internet." 

Behind this simple veneer, however, there is immeasurable complexity. No one knows this better than Bradley Chambers, whose day job involves ensuring WiFi delivers the interwebs in the same automatic way that a faucet delivers water.

> {{ theme:partial src="aside-header" voice="potatowire" text="Water" }}
> 
> Or in the same automatic way that a faucet delivers beer in the Weatherhead house

<blockquote class="twitter-tweet" lang="en"><p>The keezer is near complete. <a href="http://t.co/MGMATldF">pic.twitter.com/MGMATldF</a></p>— macdrifter (@macdrifter) <a href="https://twitter.com/macdrifter/statuses/297746531136712704">February 2, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> 

A [network hub](http://en.wikipedia.org/wiki/Ethernet_hub) is really just a dumb version of a [network switch](http://en.wikipedia.org/wiki/Network_switch), the latter of which you may remember from the [Ethernetworking episode of Technical Difficulties](http://technicaldifficulties.us/episodes/055-ethernetworking#switches). The main difference between these two devices is that the hub rebroadcasts its signals, rather than trying to properly address its communication. When Bradley calls WiFi "hubs in the air," this is the distinction. [Wireless access points](http://en.wikipedia.org/wiki/Wireless_access_point) broadcast their signals [omnidirectionally](http://term.ly/omnidirectional), so that all participating devices can "see" the signals.

> {{ theme:partial src="aside-header" voice="potatowire" text="2.4 vs 5" }}
> 
>  When we consider the transmission of individual [ethernet frames](http://en.wikipedia.org/wiki/Ethernet_frame) for an increasing number of devices, the radio signal itself becomes important. In common use are both 2.4 GHz and 5 GHz. 
>
> Generally speaking, 2.4 is widely considered the "junk band" and can be compared to the lanes nearest merging onramps of a congested highway, while the 5 GHz band is like the passing lane. Continuing this traffic metaphor, the passing lane is faster when there aren't too many cars in it, and since the 2.4 GHz band is the most commonly used [industrial, scientific, and medical (ISM) bands](http://en.wikipedia.org/wiki/ISM_band), there is a lot of [merging traffic](http://en.wikipedia.org/wiki/Electromagnetic_interference_at_2.4_GHz). Even considering only WiFi traffic, 2.4 has an increased problem with [Co-channel interference](http://en.wikipedia.org/wiki/Co-channel_interference), because it is only 72 MHz wide, while the 5 GHz band is 910 MHz wide.
> 
> {{ theme:partial src="image" show="{{ number }}" title="WLAN Channel Overlap" file="overlap.png" }}
>
> 
>  To beat up my metaphor a bit more, 5 GHz has more lanes.  Also, note that a [channel](http://en.wikipedia.org/wiki/List_of_WLAN_channels) just refers to a small, 5 MHz  segment of its respective band. Its easier than saying your WiFi router is on channel 11 rather than 2.462 GHz.
>
> Congestion and interference aren't the only reasons that 5 GHz is faster though. Since the 2.4 and 5 band represent the frequency of the [carrier wave](http://en.wikipedia.org/wiki/Carrier_signal) that the WiFi router is using to transmit its information, all else being equal, moving to the higher frequency band would carry information slightly more than twice as fast.
> 
> ***
>
> ##### Correction
>
> Shortly after going live with this episode, an error in this last paragraph was pointed out by [Allen MacKenzie](https://twitter.com/mackenab):
>
<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/macdrifter">@macdrifter</a> Same bandwidth with same noise/interference has same capacity, regardless of carrier frequency.</p>&mdash; Allen B. MacKenzie (@mackenab) <a href="https://twitter.com/mackenab/statuses/419628314593353728">January 5, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
> 
> Essentially, the question of speed boils down to how much information can be transmitted and received in a given period of time. Because these waves travel at the speed of light, the only way to convey more information per unit of time is to code more information into the carrier signal. 
>
> The informational capacity of a wave is defined by the [bandwidth](http://en.wikipedia.org/wiki/Bandwidth_\(signal_processing\)) which is defined in this context as the difference between the higher and lower frequencies in a given set of frequencies. The set of frequencies in this case corresponds to a WiFi channel, and since both the 2.4 GHz and 5 GHz bands have channels that are 5 MHz wide, they have the same "storage capacity." 
>
> That being said, modern equipment can pair multiple channels together, thereby increasing the available bandwidth and providing a speed benefit. These wider channels are more prone to interference, however, because there are more frequencies that can be affected. As discussed above, the 5 GHz band is less prone to interference and is therefore more able to support wider channels. 
>
> So... the 5 GHz band is faster. Easy, right?
> 
> ***
> 
> One trade-off with a higher frequency signal is range. I am unqualified to talk about the physics involved here, but all waves are [attenuated](http://en.wikipedia.org/wiki/Attenuation) as they travel through a medium, but lower frequency waves can travel further before they are attenuated to an unusable level. 
>
> An illustration of an extreme extension of this principle in action is the [communication with submarines](http://en.wikipedia.org/wiki/Communication_with_submarines) using [extremely low frequency](http://en.wikipedia.org/wiki/Extremely_low_frequency) waves, often using frequencies as low as 3 Hz which penetrate seawater to a submarine's operating depths.  You may want to use 2.4 GHz, even with all of its negatives, in an old house with [lath-and-plaster](http://en.wikipedia.org/wiki/Lath_and_plaster) walls, in order to get sufficient range. As Gabe notes, old houses can also resist Cat-6 cable installation in many creative ways. 

* For more information on interference, here are a few [additional](http://support.apple.com/kb/HT1365?viewlocale=en_US&locale=en_US) [resources](http://www.cisco.com/en/US/prod/collateral/wireless/ps9391/ps9393/ps9394/prod_white_paper0900aecd807395a9_ns736_Networking_Solutions_White_Paper.html).
* You could also focus on [selecting](http://www.revolutionwifi.net/2013/03/80211ac-channel-planning.html) the [best channel](https://discussions.apple.com/thread/4471837?tstart=0).
* The [802.11 protocol](http://en.wikipedia.org/wiki/IEEE_802.11#Protocol) you choose may decide your band anyway.

> {{ theme:partial src="aside-header" voice="bradley" text="Channels and Speed" }}
> 
> We didn't cover channel width because it doesn't affect home users as much, but it does affect speeds. Learn more [here](http://www.connect802.com/80211n_channels.htm).  Channel width and [QAM](http://en.wikipedia.org/wiki/256-QAM#Quantized_QAM) is very important in 802.11ac to see max speeds. Learn even more [here](http://blogs.aerohive.com/blog/the-wi-fi-security-blog/real-world-80211ac-speeds-qam-and-channel-width). 

### Planning your network

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="10:00" }} 

[Very fancy](http://www.aerohive.com) hardware can also [band steer](https://www.youtube.com/watch?v=vzs7zfSJ1DM) and select the best band available, and dual-band routers are becoming [pretty commonplace](http://www.amazon.com/s/ref=sr_nr_p_n_feature_keywords_0?rh=n%3A172282%2Cn%3A541966%2Cn%3A300189%2Ck%3Awifi+router%2Cp_n_feature_four_browse-bin%3A5928098011%2Cp_n_feature_keywords_browse-bin%3A2882828011&keywords=wifi+router). You can really customize your wireless if you have [ethernet everywhere](http://technicaldifficulties.us/episodes/055-ethernetworking).

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="11:02" person="bradley" quote="My rule is that everything that is stationary gets plugged in to ethernet" }}

Adding access points will increase the airtime available for other devices. Additionally, the available WiFi bandwidth won't be limited by devices streaming data at a high bitrate.

Bradley [has provided](http://chambersdaily.com/bradleychambers/2013/7/25/80211ac-a-survival-guide) [some very good](http://chambersdaily.com/bradleychambers/2013/10/23/on-the-ipad-and-80211ac) [guidance](http://chambersdaily.com/bradleychambers/2013/9/11/on-the-iphone-5s-and-80211ac) about the eventual [transition to 802.11ac](http://chambersdaily.com/bradleychambers/2013/8/9/when-should-you-upgrade-to-80211ac), but a lot of deals can be found on 802.11n hardware, and for most people, he recommends getting the older [AirPort Extreme](http://store.apple.com/us/product/FD031LL/A/refurbished-airport-extreme-base-station) and an [Airport Express](http://store.apple.com/us/product/MC414LL/A/airport-express). 

If you want to do it all with one router, you can go the route Gabe did and [leave the walled garden](http://thewirecutter.com/reviews/best-wi-fi-router-asus-rt-n66u/), which will allow you to buy [huge antennas](http://www.amazon.com/gp/product/B00DMJI9TA/ref=as_li_ss_tl?ie=UTF8&tag=duckwing-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=B00DMJI9TA) if you need more range.

> {{ theme:partial src="aside-header" voice="potatowire" text="Wirecutter says &ldquo;Wait&rdquo;" }}
> 
> The Wirecutter has their ["Best Wifi Router"](http://thewirecutter.com/reviews/best-wi-fi-router-asus-rt-n66u/) – currently Gabe's Asus RT-N66u – in its "Wait!" status due to current versions all being 802.11AC. As discussed in this show, there is not currently an obvious need to go AC, but if you are at all concerned about being future-proof (for a bit longer, at least), then it might be good to wait, if you are happy with your current setup.
>
> For my part, this router has had an average price on Amazon of $144.95, but it was last at an historic low of $124.99 and is out of Amazon's stock. This seems to indicate the end of the current part's run, so I will also add the less-revered "potatowire Wait!" status to it.

Having [multiple access points](http://support.apple.com/kb/HT4145?viewlocale=en_US&locale=en_US) should allow effortless physical movement through the network's coverage. This is sometimes called a [roaming network](http://support.apple.com/kb/ht4260), and is built in to enterprise hardware and Apple's and other high-end consumer equipment.

> {{ theme:partial src="aside-header" voice="gabe" text="WiFi Configuration Clarification" }}
> 
> The best possible setup is to configure multiple access points, connected through Ethernet, and broadcasting on the same [SSID](http://en.wikipedia.org/wiki/Service_set_(802.11_network)#Basic_service_set_identification_.28BSSID.29). Most devices can then roam from one access point (AP) to another as needed. If you do this using Apple AirPort base stations connected by Ethernet, then setup is as easy as having them broadcast the same network SSID. Ideally they would broadcast on different channels.
> 
> Extending a network wirelessly by repeating the WiFi signal itself typically works in a hub-and-spoke model. Only one central base station's transmission can be repeated, and while you can have multiple repeaters, they all are repeating the same signal. This has reduced throughput in most cases because the same antenna is used to transmit and receive. The alternative is to repeat with multiple APs or to utilize [multiple-input and multiple-output (MIMO)](http://en.wikipedia.org/wiki/MIMO) technology, which has the same effect but is executed through the use of multiple antennas in a base station. Extending a network in either of these ways is called a mesh network, and you may remember this term from our [Sonos episode](http://technicaldifficulties.us/episodes/056-sonos-showdown). 

* If you have multiple access points connected by ethernet, it is easy to connect something like a [File Transporter](http://www.filetransporter.com) or other [NAS](http://en.wikipedia.org/wiki/Nas), without worrying about how it affects your network's speed.

> {{ theme:partial src="aside-header" voice="gabe" text="Channels and Speed" }}
> 
> At 20:45 in the show, I meant you can’t run Ethernet, not "WiFi," though a Cambridge apartment.

* As Erik alluded to, sometimes you can have a network whose strength [goes to 11](http://www.youtube.com/watch?v=4xgx4k83zzc), and the FCC doesn't have a very big investigative arm, does it?

### Managing what you've got

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="23:49" }} 

If you have a modern dual-band router you have the benefit of serving 802.11ac to some devices but also broadcasting a 802.11n signal to older devices. There are [real benefits](http://www.macworld.com/article/2041546/how-802-11ac-networking-boosts-the-macbook-airs-wi-fi-performance.html) to this too. 

If you have to extend your network wirelessly, you will [likely](http://superuser.com/questions/435609/does-a-wireless-repeater-slow-things-down-for-everyone) notice the [effect on speed](https://discussions.apple.com/thread/3950525) on anything but newer 802.11ac equipment.

When you have visitors, you may only want to secure your own network while allowing them to share your bandwidth. It is worth checking how your router's guest configuration works, beacuse it might steal some bandwidth from your main network. If so, it may only make sense to turn it on when you have guests. 

{{ theme:partial src="image" title="AirPort Utility Guest Network Configuration" show="{{ number }}" file="guest-network.png" }}

When it comes to uninvited guests on your network, we asked friend of the show [Sean Korzdorfer](https://twitter.com/korzdorfer) for a quick security assessment.

> {{ theme:partial src="aside-header" voice="korzdorfer" text="Korzdorfer on WiFi Security" }}
> 
> My default answer to any security question is: "It depends." I know, it's not what you want to hear. I have more bad news: most of what you know about security is probably wrong. It's okay. It happens to everyone. The important thing to keep in mind is security is a balancing act between risk and convenience … And since we're talking about home WiFi networks, let's throw performance into the mix. Easy-Peasy. All I need to know is: What are you securing? Who do you trust? What are the threats to the first question? How new is your hardware? Does your ISP allow you admin privileges to their hardware? Do your kids have video game consoles / toys that connect to WiFi? Do you work from home? Do you stream video? Do you have lath and plaster walls? How creepy are your neighbors? Getting the idea?
> 
> ##### Keeping Bad Guys Out Is the Easy Part
> * Change your router's default login and password.
> * Password protect your network.
>     * Don't use [WEP](http://en.wikipedia.org/wiki/Wired_Equivalent_Privacy).
>         * Unless you have old hardware that doesn't support WPA2. (It's better than nothing.)
>     * Do use [WPA2 Personal](http://en.wikipedia.org/wiki/Wi-Fi_Protected_Access).
>         * Yes, everyone behind the router is using a shared cryptographic key and can easily [sniff](https://www.google.com/search?client=safari&rls=en&q=wireshark&ie=UTF-8&oe=UTF-8) each other's packets. Good thing you're sharing that password with people you trust.
>         * Use a long password. Size matters.
>         * Use a unique password.
> * Be wary of [WiFi extenders](http://en.wikipedia.org/wiki/Wireless_distribution_system).
>     * Encryption is dependent upon the vendor.
>     * Slower performance.
>     * Flip side: easier and cheaper than running an [Ethernet backbone](http://technicaldifficulties.us/episodes/055-ethernetworking).
> * [MAC filtering will not protect anything](https://wiki.archlinux.org/index.php/MAC_Address_Spoofing).
>     * [MAC_Find](http://www.coffer.com/mac_find/)
> * [Hiding your SSID is silly](http://www.library.cornell.edu/dlit/ds/links/cit/redrover/ssid/wp_ssid_hiding.pdf).
> * Understand: the most nefarious external attack a home network will (probably) have to withstand is harmless [wardriving](http://en.wikipedia.org/wiki/Wardriving) from a [child's video game](http://en.wikipedia.org/wiki/Treasure_World).
> 
> ##### It's What on the Inside that Counts
> * The actual risk to your home network is an [Insider Problem](http://nob.cs.ucdavis.edu/bishop/projects/insider.html).
> * Not all developers use secure programming practices.
>     * How many apps on your phone were developed by good people cutting their teeth on Objective-C?
>         * Does their app call home?
>         * What information are they transmitting?
>         * Are they using HTTPS?
>         * Are there any bugs that might create a vulnerability?
>     * Use [Little Snitch](http://www.obdev.at/products/littlesnitch/index.html) on your Mac.
> * Convenient Features Might Increase Risk.
>     * [Back to My Mac](http://tools.ietf.org/rfc/rfc6281.txt).
>     * Air Drop.
>     * File Sharing.
>     * Internet Sharing.
>     * Bluetooth Sharing.
>     * Printer Sharing.
> * People are always the weakest link.
>     * Do you share your network password with guests?
>     * Do you have children who share your network password with friends?
>     * Are you using a VPN for transmitting sensitive information or email?
> 
> I know, this can be a little overwhelming and scary. What if I told you there is no such thing as a *secured* network? Don't panic. The good news is your personal data isn't as valuable as you want to believe it is … And on the off chance you do have something worth [committing a felony](https://fpc.state.gov/documents/organization/103707.pdf) for, [brute forcing your network password](https://hacktivity.com/hu/letoltesek/archivum/169/) takes time and effort. I'd probably just break a window instead                 

* [Using AirDrop without wireless](http://macs.about.com/od/LionTipsNtricks/qt/Airdrop-With-Or-Without-A-Wireless-Connection.htm)
* [WiFi in exchange for chores](http://www.theatlantic.com/technology/archive/2012/07/sorry-kids-want-todays-wifi-password-do-your-chores/260524/)

Bradley bragged about [Chattanooga's](http://www.washingtonpost.com/blogs/the-switch/wp/2013/09/17/how-chattanooga-beat-google-fiber-by-half-a-decade/) internet access, and Gabe let us in on the fiery hatred for Comcast that burns within his soul

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="40:53" person="gabe" quote="I don't even want their hardware touching my house" }} 

IP address management is one of the tweaks that may be required in a heavily-networked home. [DHCP](http://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) can fail in some cases, and setting a static IP can help if you are noticing addressing conflicts. [DNS](http://en.wikipedia.org/wiki/Domain_Name_System) settings are another area where you can customize the way your network runs. As Bradley mentioned, [OpenDNS](http://www.opendns.com/home-solutions/) offers services to restrict some internet access.

### Enterprise Concerns

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="48:46" }} 

The old model of [thin access points](http://www.cisco.com/web/about/ac123/ac147/images/ipj/ipj_9-3/93_wlan_fig2_lg.jpg) that rely on single controllers don't allow the redundancy required by Enterprise, and the [new models](http://www.aerohive.com/pdfs/Aerohive-Whitepaper-Cooperative_Control_Wireless_LAN_Architecture.pdf) are very advanced and finely tuned to suit unique needs. Scalability is the specialty of companies like [Aerohive](http://www.aerohive.com/node/394) and [JAMF](http://www.jamfsoftware.com). It is probably out of your [price range](http://store.apple.com/us/product/HB286LL/A/aerohive-ap121-80211n-dual-radio-enterprise-wi-fi-access-point?fnode=58).

> {{ theme:partial src="aside-header" voice="potatowire" text="Producer's Note" }}
> 
> As Gabe mentioned, boiling tea can truly affect your WiFi, since [most consumer microwaves operate at 2.45 GHz](http://en.wikipedia.org/wiki/Microwave_oven#Principles). Since this is in the heart of the 2.4 GHz band, it is only the microwave's shielding that minimizes the effect. As was talked about in the audio, this is a radio frequency (RF) problem not a WiFi one. Moving to the 5 GHz band will help, but your best bet to reduce the effect of interference and also improve your available bandwidth is to expand your WiFi network using Cat-6 cable. When considering hardware, an AirPort Extreme paired with an AirPort Express or two is tough to beat. This will offer the most capable, yet easiest-to-use option for the average user.
> 
> TL;DR Version? WiFi is *hard*.
> 
> Well, that's all for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com.