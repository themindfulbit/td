---
number: "066"
title: Files in the Cloud
type:
  - discussion
people:
  - Gabe Weatherhead
  - Erik Hess
topics:
  - files
  - cloud
  - storage
  - sftp
  - sync
  - dropbox
banner: /assets/img/file-cabinet.jpg
caption: '[Mennonite Church USA](http://www.flickr.com/photos/mennonitechurchusa-archives/9011343990/)'
download: >
  http://www.buzzsprout.com/7417/147653-066-files-in-the-cloud.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132835633%3Fsecret_token%3Ds-dyR30&color=ff5500&auto_play=false&hide_related=false&show_artwork=true"></iframe>'
soundcloudurl: 066-files-in-the-cloud
summary: >
  Gabe and Erik take a look at a number of
  different online sync and storage
  options for moving your files to the
  cloud.
showtype: interview
post_images:
  - 
    image: /assets/img/drivesharedwith.jpg
    title: ""
  - 
    image: /assets/img/drivesharing.jpg
    title: ""
  - 
    image: /assets/img/dbshare.jpg
    title: ""
  - 
    image: /assets/img/raspberrypi.jpg
    title: ""
  - 
    title: ""
    image: /assets/img/modernscientist.png
post_files: ""
---

### Gabe's Latest Crazy Online File Syncing Scheme
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

Gabe describes the way he uses a separate Dropbox account tied to his 
WebFaction web hosting plan to enable remote Sublime Text script editing from 
his Windows machine at work.

* [Backup Box](https://mybackupbox.com/)
* [FTP Box](http://ftpbox.org/)
* [Wappwolf](http://wappwolf.com/dropboxautomator)

### Online Storage and Sync Options
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="4:10" }}

* [Cloudfuse](https://github.com/redbo/cloudfuse)
* [Dropbox](http://dropbox.com)
* [Box](http://box.com)
* [Windows Azure](http://www.windowsazure.com/en-us/)
* [Google Drive](http://www.google.com/drive/about.html)
* [Plex Cloud 
Sync](https://elan.plexapp.com/2013/10/24/introducing-cloud-sync-beta/)
* [Hazel](http://www.noodlesoft.com/hazel.php)

In a true tech embarrassment of riches, there are many great sync systems 
available for free or a modest fee. Many of us remember when cool new services 
like [IFTTT](ifttt.com) only supported Dropbox, but web service often start 
off integrating virtually all of the usual suspects. On the other hand, these 
systems are not of much use if they can't sync to mobile, and right now it's 
Dropbox that is most widely supported.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="7:24" 
person="gabe" quote="You almost need a Dropbox account at this point just to 
use iOS" }}

As Gabe's "crazy scheme" using ssh, Dropbox, and WebFaction can provide a way 
around this limitation by using Dropbox as an intermediary between multiple 
other systems. The free 2GB account tier makes this an even easier solutions. 
[Steve Jobs 
purportedly](http://www.forbes.com/sites/victoriabarret/2011/10/18/dropbox-the-
inside-story-of-techs-hottest-startup/) called Dropbox a service rather than a 
product, but if Apple had acquired them, iCloud would likely have become better 
quicker, but multi-OS life would certainly have become much harder.

* [BitTorrent Sync](http://www.bittorrent.com/sync)
* [Transporter](http://www.filetransporter.com/)

When syncing needs go beyond usual, there are more niche options available. 
Whether you feel the need to control your own data or you want more 
granularity in administering permissions, you can find a service ready to 
stand in for you. While Transporter offers an elegant ready-to-go personal Dropbox, BitTorrent Sync offers a distributed sync setup which you may be able to construct with old equipment already on had.

> {{ theme:partial src="aside-header" voice="potatowire" text="Welcome @modernscientist" }}
> 
> Because I knew that [@modernscientist](https://twitter.com/modernscientist) has been using BitTorrent Sync, I asked her to add to the disussion here.

> {{ theme:partial src="aside-header" voice="modernscientist" text="BT Sync" }}
> 
> I have recently started using [BitTorrent Sync](http://www.bittorrent.com/sync) to manage the synchronization of approximately 200 GBs of data between two Macs used for my research. While the end result is similar to traditional cloud storage options such as Dropbox, the BitTorrent protocol does not utilize a centralized server to which all clients upload and download files. Instead, every client can upload and download to all other clients. This decentralized, peer-to-peer model requires the user to provide the devices that will serve as synchronization points (peers), but that requirement also has many advantages. In my situation, it is more cost efficient to provide my own (existing) hardware than pay the monthly fee for increased cloud storage. The BitTorrent protocol also allows users to avoid storing data on servers belonging to someone else, potentially making BitTorrent Sync more private.
> 
> BitTorrent Sync and Dropbox have many similar features, though there are some subtle differences. Much like Dropbox, BitTorrent Sync uses a folder paradigm for determining which files are synchronized. However, folders that are synchronized by BitTorrent Sync can be located anywhere accessible to the peer, including on an attached hard drive or local network. BitTorrent Sync has options that are analogous to Dropbox's selective synchronization and version control features; however BitTorent Sync's selective synchronization recognizes basic file globbing, making it more powerful than Dropbox's implementation. Files can also be shared with others using BitTorrent Sync, and write access can optionally be restricted for these shares. Unfortunately, a share must include the entire contents of a torrent, and right now there's no option for downloading shared files through a web browser. 
> 
> Perhaps the most important--and very subtle--difference is that BitTorrent Sync **does not** support extended attributes. This isn't an issue for me, as most of my files do not have extended attributes and those that do have them don't seem to actually use them. Usage scenarios differ, so this limitation should be tested carefully. For example, devout users of file tagging in Mavericks, which relies on extended attributes, may find that BitTorrent Sync does not suit their needs.
> 
> BitTorrent Sync is available on the standard desktop platforms: Mac, Windows, Linux. Though my primary need is the synchronization of files between two Macs, there are advantages to additional peers. A minimum of one updated peer is required for synchronization, so more peers adds robustness to the system. Similarly, additional peers provide more download sources during synchronization, which can make this process faster. For these reasons, I am also running BitTorrent Sync on my Drobo 5N and on a [Backupsy](https://backupsy.com/aff.php?aff=210) server. BitTorrent Sync runs as a command line application on these peers and, thus, setup is a little more complicated than on a Mac.

> iOS and Android versions of BitTorrent Sync are also available. These applications are similar to their Dropbox counterparts in that they only download files on demand.

> {{ theme:partial src="aside-header" voice="potatowire" text="More info" }}
> 
> @modernscientist [blogged about this](http://themodernscientist.com/posts/2014/2014-02-06-torrential_file_synchronization/) on her own site in more detail, so head there if you'd link to know more. Also, the Backupsy link above will provide a discount of as much as 40%, while getting her some extra storage space. Win/win.

### The Challenges of Sharing and Syncing
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="11:03" }}

* [Dropbox for Business](https://www.dropbox.com/business)
* [Box](https://www.box.com/)

When you fold in additional users of your files in the cloud, you also fold in 
a lot of complexity. Syncing solutions designed for business can make this 
complexity more manageable, but that is more capability (and cost) than most 
individuals, families, and small businesses need. Leaving these specialized 
solutions aside, managing your shares can be a bit of a challenge. Clicking on 
the "Sharing" icon in Dropbox's web interface does provide a good snapshot. 

{{ theme:partial src="image-set" show="{{ number }}" title="Dropbox Sharing" 
file="dbshare.jpg" }}

Google Drive also provides this information, but showing what is shared *with* 
you on its web-view sidebar, and you can view the "visibility " of all your 
documents by clicking the  drop-down in the search field.

{{ theme:partial src="image-set" show="{{ number }}" title="Shared with You" 
file="drivesharedwith.jpg" }}{{ theme:partial src="image-set" show="{{ number 
}}" title="Shared by You" file="drivesharing.jpg" }}

One of the challenges of app integration is a cluttered Dropbox root folder. 
As Gabe alluded to, [somewhat recent changes to the permission polices]() have 
had the unexpected benefit of causing more apps to use the app folder. Some 
more finicky (cranky?) users think apps unnecessarily restrict themselves

Tweet

Regardless of whether these policies, or your own, put folders in where they 
are not best found, you can always [symlink]() to wherever you prefer.

Apps using folders
dropbox permissions
aliasing
repositories
ifttt ios
bandwidth
lan link

Syncing apps are not always the best stewards of your internet connection, 
however, and while Drive will allow you pause sync, you can't specifically 
throttle its bandwidth. Dropbox gives you both of these throttling options, 
but it sure does work the CPU over.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="18:52" 
person="erik" quote="It's reticulating splines" }}

### SFTP and Git: Less Friendly, More Configurable

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="21:32" }}

* [Sublime SFTP](http://wbond.net/sublime_packages/sftp)
* [Transmit](http://panic.com/transmit/)
* [Github](https://github.com/)
* [Bitbucket](https://www.atlassian.com/software/bitbucket/overview)
* [Sourcetree](https://www.atlassian.com/software/ sourcetree/overview)

We [may]() be living in a [Post-PC] world, but plenty of us would rather have 
explicit control over our data. [Distributed Version Control]() with [Git]() 
or [Mercurial]() has long been a staple in programming circles, but if you 
take the time to learn the [sometimes frustrating]() language, you'll find 
that [repositories]() make good homes for prose (or verse) too.

### The Next Big Round of Innovation
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="26:00" }}

* [TextDrop](https://www.textdropapp.com/home/Home)   

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com.