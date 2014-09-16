---
show: td
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
soundcloudurl: techdiffpodcast/066-files-in-the-cloud
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
    image: /assets/img/modernscientist.png
    title: ""
post_files: ""
---

### Gabe's Latest Crazy Online File Syncing Scheme
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

Gabe begins the discussion by describing a scheme to use a separate Dropbox account running on his WebFaction web hosting, because he can `sftp` from within [Sublime Text](http://www.sublimetext.com/) even though he's unable to install any online syncing services. 

Easy. 

The cloud is always easy when you have IT autonomy...or can find a loophole.

Being able to `sftp`-out does not provide the same benefit of a proper syncing service, but there are some tools that try to help:

* [Backup Box](https://mybackupbox.com/)
* [FTP Box](http://ftpbox.org/)
* [Wappwolf](http://wappwolf.com/dropboxautomator)

Generally, these tools work by offloading sync to a web host. Sure, you can achieve this benefit by `sftp`ing into a computer at home, but then you face issues such as [DNS](http://en.wikipedia.org/wiki/Domain_Name_System) intermediaries if you don't have a static external IP address, [opening ports](http://en.wikipedia.org/wiki/Port_forwarding) into your home network, or just having to leave your home computer on all the time. You may want to consider [having](http://www.webfaction.com/signup?affiliate=potatowire) [someone](https://www.linode.com/) [else](https://www.nitrous.io/) worry about your [uptime](http://en.wikipedia.org/wiki/Uptime).

<a href="http://xkcd.com/705/"><img src="http://imgs.xkcd.com/comics/devotion_to_duty.png" alt="The weird sense of duty really good sysadmins have can border on the sociopathic, but it's nice to know that it stands between the forces of darkness and your cat blog's servers."></a>

> {{ theme:partial src="aside-header" voice="potatowire" text="Again with the Synology" }}
> 
> This episode would have been about five minutes shorter if Gabe could have figured out how to install Dropbox on [his](http://www.macdrifter.com/2013/02/moving-from-a-drobo-to-a-synology-nas.html) [beloved](http://www.macdrifter.com/2013/06/a-synology-plex-server.html) [Synology](https://www.amazon.com/dp/B00CRB53CU?tag=potatowire-20&camp=0&creative=0&linkCode=as4&creativeASIN=B00CRB53CU). His loss is our gain.

### Online Storage and Sync Options
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="4:10" }}

In a embarrassment of tech riches, there are many great sync systems 
available for free or a modest fee:

* [Cloudfuse](https://github.com/redbo/cloudfuse)
* [Dropbox](http://dropbox.com)
* [Box](http://box.com)
* [Windows Azure](http://www.windowsazure.com/en-us/)
* [Google Drive](http://www.google.com/drive/about.html)
* [Plex Cloud Sync](https://elan.plexapp.com/2013/10/24/introducing-cloud-sync-beta/)

Dropbox offers a very refined experience, both through its web interface and its seamless filesystem integration, but your Dropbox folder will probably require some pruning to stay below your subscription's space limit. [Hazel](http://www.noodlesoft.com/hazel.php) is a big help here, as it is with so many other [menial system tasks](http://nerdquery.com/?media_only=0&query=hazel&search=1&category=-1&catid=&type=and&results=50&db=0&prefix=0).

Many of us remember when cool new services 
like [IFTTT](ifttt.com) only supported Dropbox, but these days most web services  start off with integration for virtually all of the usual hosting suspects. On the other hand, these systems aren't much use if they can't sync to mobile, and right now Dropbox is most widely supported.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="7:24" 
person="gabe" quote="You almost need a Dropbox account at this point just to 
use iOS" }}

[Steve Jobs purportedly](http://www.forbes.com/sites/victoriabarret/2011/10/18/dropbox-the-inside-story-of-techs-hottest-startup/) called Dropbox a service rather than a product, but since so many developers have settled on it for sync, things may not have been that different in effect. A little bit of a shakeup in the developer community could be nice, because there are some interesting alternatives:

* [BitTorrent Sync](http://www.bittorrent.com/sync)
* [Transporter](http://www.filetransporter.com/)

When syncing needs go beyond the usual, there are other niche options available. 
Whether you feel the need to control your own data or you want more 
granularity in administering permissions, you can probably find a service that will meet your needs. While Transporter offers an elegant ready-to-go personal Dropbox, BitTorrent Sync offers a distributed sync setup which you may be able to construct with old equipment already on had.

> {{ theme:partial src="aside-header" voice="potatowire" text="Welcome @modernscientist" }}
> 
> Because I knew that [@modernscientist](https://twitter.com/modernscientist) has been using BitTorrent Sync, I asked her to add to the disussion here.

> {{ theme:partial src="aside-header" voice="modernscientist" text="BT Sync" }}
> 
> I have recently started using [BitTorrent Sync](http://www.bittorrent.com/sync) to manage the synchronization of approximately 200 GBs of data between two Macs used for my research. While the end result is similar to traditional cloud storage options such as Dropbox, the BitTorrent protocol does not utilize a centralized server to which all clients upload and download files. Instead, every client can upload and download to all other clients. This decentralized, peer-to-peer model requires the user to provide the devices that will serve as synchronization points (peers), but that requirement also has many advantages. In my situation, it is more cost efficient to provide my own (existing) hardware than pay the monthly fee for increased cloud storage. The BitTorrent protocol also allows users to avoid storing data on servers belonging to someone else, potentially making BitTorrent Sync more private.
> 
> BitTorrent Sync and Dropbox have many similar features, though there are some subtle differences. Much like Dropbox, BitTorrent Sync uses a folder paradigm for determining which files are synchronized. However, folders that are synchronized by BitTorrent Sync can be located anywhere accessible to the peer, including on an attached hard drive or local network. BitTorrent Sync has options that are analogous to Dropbox's selective synchronization and version control features; however BitTorent Sync's selective synchronization recognizes basic [file globbing](http://en.wikipedia.org/wiki/Glob_(programming)), making it more powerful than Dropbox's implementation. Files can also be shared with others using BitTorrent Sync, and write access can optionally be restricted for these shares. Unfortunately, a share must include the entire contents of a torrent, and right now there's no option for downloading shared files through a web browser. 
> 
> Perhaps the most important--and very subtle--difference is that BitTorrent Sync **does not** support extended attributes. This isn't an issue for me, as most of my files do not have extended attributes and those that do have them don't seem to actually use them. Usage scenarios differ, so this limitation should be tested carefully. For example, devout users of file tagging in Mavericks, which relies on extended attributes, may find that BitTorrent Sync does not suit their needs.
> 
> BitTorrent Sync is available on the standard desktop platforms: Mac, Windows, Linux. Though my primary need is the synchronization of files between two Macs, there are advantages to additional peers. A minimum of one updated peer is required for synchronization, so more peers adds robustness to the system. Similarly, additional peers provide more download sources during synchronization, which can make this process faster. For these reasons, I am also running BitTorrent Sync on my Drobo 5N and on a [Backupsy](https://backupsy.com/aff.php?aff=210) server. BitTorrent Sync runs as a command line application on these peers and, thus, setup is a little more complicated than on a Mac.

> iOS and Android versions of BitTorrent Sync are also available. These applications are similar to their Dropbox counterparts in that they only download files on demand.

> {{ theme:partial src="aside-header" voice="potatowire" text="More info" }}
> 
> @modernscientist [blogged about this](http://themodernscientist.com/posts/2014/2014-02-06-torrential_file_synchronization/) on her own site in more detail, so head there if you'd link to know more. Also, the Backupsy link provided above will discount the service as much as 40%, while getting her some extra storage space. Win/win.

### The Challenges of Sharing and Syncing
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="11:03" }}

* [Dropbox for Business](https://www.dropbox.com/business)
* [Box](https://www.box.com/)

When you fold in additional users of your files in the cloud, you also fold in 
a lot of complexity. Syncing solutions designed for business can make this 
complexity more manageable, but that is more capability (and cost) than most 
individuals, families, and small businesses need. Leaving these specialized 
solutions aside, managing your shares can be a bit of a challenge. 

> {{ theme:partial src="aside-header" voice="potatowire" text="Forgotten" }}
> 
> It was me. He was trying to share with me.

Clicking on the "Sharing" icon in Dropbox's web interface does provide a snapshot of your shares. 

{{ theme:partial src="image-set" show="{{ number }}" title="Dropbox Sharing" 
file="dbshare.jpg" }}

Google Drive also provides this information by showing what is shared *with* 
you on its web-view sidebar, and you can view the "visibility " of all your 
documents by clicking the  drop-down in the search field.

{{ theme:partial src="image-set" show="{{ number }}" title="Shared with You" 
file="drivesharedwith.jpg" }}{{ theme:partial src="image-set" show="{{ number 
}}" title="Shared by You" file="drivesharing.jpg" }}

One of the challenges of app integration is a cluttered Dropbox root folder. 
As Gabe alluded to, permission polices have had the unexpected benefit of causing more apps to use the app folder. Some more finicky (cranky?) users think apps unnecessarily restrict themselves.

<blockquote class="twitter-tweet" lang="en"><p>Apps shouldn't be able to claim Dropbox support unless they let the user specify which folder to use.</p>— potatowire (@potatowire) <a href="https://twitter.com/potatowire/statuses/419599924003885056">January 4, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Regardless of whether these policies (or your own) locate folders in inconvenient or inappropriate locations, you can always [symlink](http://en.wikipedia.org/wiki/Symbolic_link) to whichever location you prefer.

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
* [Sourcetree](https://www.atlassian.com/software/sourcetree/overview)

We [may](http://chambersdaily.com/bradleychambers/2014/2/3/out-of-school-71-i-want-to-be-wrong) be living in a Post-PC world, but plenty of us would rather have 
explicit control over our data. [Distributed Version Control](http://en.wikipedia.org/wiki/Distributed_revision_control) with [Git](http://en.wikipedia.org/wiki/Git_(software)) 
or [Mercurial](http://en.wikipedia.org/wiki/Mercurial) has long been a staple in programming circles, but if you 
take the time to learn the language, you'll find 
that [repositories](http://en.wikipedia.org/wiki/Repository_(version_control)) make good homes for prose (or verse) too.

### The Next Big Round of Innovation
{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="26:00" }}

When  something like sync is designed to fade into the background, the whole thing can seem a bit stale. The next round of innovation might involve more abstraction to the cloud, like [Evernote](https://evernote.com/‎), but hopefully some of it will be finding new convenient ways to access our data from anywhere, like [TextDrop](https://www.textdropapp.com/home/Home) .

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com.