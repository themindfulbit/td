---
number: "079"
title: Exploring FastMail
people:
  - Gabe Weatherhead
  - Erik Hess
showtype: discussion
topics: 
  - email
  - FastMail
banner: /assets/img/pony-express.jpg
caption: '[Internet Archive](https://www.flickr.com/photos/internetarchivebookimages/14761137812)'
download: "https://www.buzzsprout.com/7417/203357-079-fastmail.mp3?client_source=buzzsprout_site"
player: "<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167113326%3Fsecret_token%3Ds-SuMxJ&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>"
soundcloudurl: "079-exploring-fastmail"
summary: "This week, we take a detailed look at why Gabe switched to and continues to use FastMail. We introduce the webapps, basic searching and filtering, and discuss some of the service's lesser-known but still compelling features."
post_images:
  - 
    title: ""
    image: /assets/img/auto-hide.png
    title: ""
  - 
    image: /assets/img/rules.png
    title: ""
  - 
    title: ""
    image: /assets/img/revert-sieve.jpg
  - 
    title: ""
    image: /assets/img/gui-move.jpg
post_files: ""
---

{{ theme:partial src="section-header" title="Introducing FastMail" url="{{ soundcloudurl }}" time="0:00" }}

[FastMail](http://www.fastmail.fm/?STKI=7717857)(affiliate link) is an online email provider that is a compelling alternative to Gmail and iCloud ([seriously?](http://awesomegifs.com/wp-content/uploads/come-on-gob-arrested-development.gif)) mail.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="1:14" person="gabe" quote="That sounds like an accusation" }}

An Australian company offering a paid service with a strong feature set (even if they are based in a [Five Eyes](http://en.wikipedia.org/wiki/Five_Eyes) country) their strong suit is their highly responsive support model, which uses real human beings.

{{ theme:partial src="section-header" title="Types of Accounts" url="{{ soundcloudurl }}" time="2:55" }}

On their lowest plan, you can use one of several different preexisting domains, but you can pay more to use your own.  At the time of writing, the pricing for FastMail [personal accounts](https://www.FastMail.fm/signup/personal.html) breaks down like this:

* $10/yr for 250MB of email
* $20/yr for 1GB
* $40/yr for 15GB
* $120/yr for 60GB

You can also purchase more storage space as needed.

> {{ theme:partial src="aside-header" voice="gabe" text="FastMail Accounts" }}
>
> FastMail supports several levels of individual accounts. Most of the difference between the individual account types can be chalked up to storage space allocation. If you need tons of mail storage then you'll need to pay for it.
> 
> The FastMail web app allows multiple accounts, with fast access to any account right on the landing page. There's no real reason to logout before accessing a different account.
> 
> I've also used the business account from FastMail. It's a nearly identical experience except for two differences:
>
> 1. There's an option so email between employees on a business account stay on the FastMail servers.
> 2. As an administrator, you get control over granting, locking and archiving employee accounts.
> 
> I have not used [the Family plan](https://www.FastMail.fm/signup/family.html). It allows you to combine multiple personal accounts under one bill but you also get the option to share contacts and calendars as well as administer and monitor accounts for the kids.

For the security conscious (and who isn't these days) you can set up [Two Factor Authentication](https://www.FastMail.fm/help/account/2fa.html). FastMail has a very sane view of security, which is evident in its [communications on the subject](https://www.fastmail.fm/help/ourservice/security.html). They do everything possible on their end to maintain the security of your email but take care to point out that without using email encryption software such as [Pretty Good Privacy (PGP)](http://en.wikipedia.org/wiki/Pretty_Good_Privacy) or [Secure/Multipurpose Internet mail Extensions [S/MIME)](http://en.wikipedia.org/wiki/Smime), webmail remains flawed from a security standpoint. 

> {{ theme:partial src="aside-header" voice="potatowire" text="A good indication" }}
>
> In reality, webmail is as private as a postcard, and efforts to claim otherwise are disingenuous at best. As FastMail's security page points out, (Hushmail)[https://www.hushmail.com/] turned over unencrypted email to the U.S. Government when served with a court order, in accordance with their [privacy policy](https://www.fastmail.fm/help/legal/privacy.html). Take note of this, ["a privacy-oriented email service](https://www.hushmail.com/about/) stores your unencrypted email. I much prefer FastMail's take on security than one [that can't really deliver](http://assets.nydailynews.com/polopoly_fs/1.1300712.1364565374!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/job-meme.jpg) what it promises.

With their robust featureset, and a quick webapp, Gabe thinks FastMail actually can make email fun again.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="4:45" person="gabe" quote="I actually really love email" }}

> {{ theme:partial src="aside-header" voice="gabe" text="So Many Email Accounts" }}
>
> Let's clear the skeletons out of the closet. Over the years I've used AOL, Hotmail, Yahoo, and Gmail for email. There have been many more through various university accounts. It's almost all out of my reach now. But for the past 5+ years I've primarily used my own domains for email. That makes it mine more than any other service. I highly recommend owning your own domain and getting an email address on that domain. Your email address will always be yours and you can point it to a new email provider, usually with little effort.

{{ theme:partial src="section-header" title="The FastMail Web App" url="{{ soundcloudurl }}" time="5:22" }}

Gabe started off with FastMail by using regular email apps and connecting through IMAP. Eventually the FastMail Web App won him over, with its speed, design, and liberal use of keyboard shortcuts.

{{ theme:partial src="image" title="FastMail Web App on the Desktop" caption="" show="{{ number }}" file="fastmail-desktop.png" }}

The FastMail Web App has some impressive keyboard shortcuts on the desktop. Here's an incomplete list:

* `j` and `k` - move to next and previous message, as in Vim
* `/` - search, also as in Vim
* `x` - select current message
* `d` or `#` - delete message
* `y` - archive message
* `m` - move message
* `!` - report as spam
* `.` - mark, then `r` for read, `u` for unread, `p` for pin, etc.

> {{ theme:partial src="aside-header" voice="gabe" text="Keyboard Shortcuts or GTFO" }}
>
> Anyone that's proficient with Gmail will tell you that the real power is all in the keyboard shortcuts. [Gmail has a huge variety of shortcuts](http://www.shortcutworld.com/en/web/Gmail.html) and many of them are derived from older email tools. But the most important shortcuts are the ones that get the email read and moved out of the inbox. FastMail has [a rich set of shortcuts](https://www.FastMail.fm/help/receive/kbshortcuts.html) that either mimic or duplicate the Gmail shortcuts. Moving from Gmail to FastMail is pretty easy but there are some differences that will require some brain re-wiring, like `y` for archiving.

If you are a point-and-click kind of person, the FastMail web app also has you covered, with features like drag and drop for moving messages and dropdown menus for accessing all email operations.

The mobile web view is impressively capable, giving the impression that it's a native app with some features you couldn't find natively. Gabe uses [1Password](https://agilebits.com/onepassword) to quickly get to different parts of the webapp, for example.

{{ theme:partial src="image" title="GUI too" caption="" show="{{ number }}" file="gui-move.jpg" }}

> {{ theme:partial src="aside-header" voice="gabe" text="Web vs. Native" }}
> 
> The arguments about native vs. web app have torn families apart and divided nations. I lean more toward native apps ***if*** I can use it where and when I like. There are plenty of native mail apps that work very well and plenty of web apps for mail that stink. I was very skeptical of the FastMail web app until I tried it.
>
> Wow. It's just so good everywhere. The FastMail web app is responsive in the best way. It works right on a mobile device without having to zoom and pan. It's also very fast. Importantly, the FastMail web app provides features not available in most native apps, like powerful search and keyboard shortcuts for things I care about.
> There are three advantages of the FastMail web app on mobile:
>
> 1. I can access it through a 1Password entry, making login to multiple accounts easy and very secure.
> 2. I can have separate accounts open in different tabs, thus avoiding mixing business with less painful business.
> 3. It supports gestures where they make sense. Slide right to left to delete, tap and drag to move, or slide left to right for archiving.
> 
> There's a lot to like about the FastMail web apps and I appreciate someone giving mobile the attention it deserves. They've considered the difference between screen size on a phone vs. a tablet and provide access to additional menu controls by tapping the message on the phone. File drag-and-drop works with the web app on a desktop.
> 
> However, there are some things web apps aren't good at. The biggest issue is offline use. After caching the inbox list, you can browse while offline. You can even create a draft message and save it to the local cache in Safari for iOS. When you reconnect, the draft will be uploaded to the server but often with variable results like duplicate drafts. Native apps also get special treatment when interacting with other native apps. For most of my use, these aren't important detractors.

{{ theme:partial src="image" title="FastMail Web App on Mobile" caption="" show="{{ number }}" file="fastmail-mobile.png" }}

{{ theme:partial src="section-header" title="Searching" url="{{ soundcloudurl }}" time="8:00" }}

One of FastMail's more famous features is the [powerful search syntax](https://www.FastMail.fm/help/receive/search.html). It follows a familiar phrase-type of syntax. Searching `in:verizon statement` will search only in a folder named `verizon` for a substring that contains `statement`. There are a variety of phrases that allow very precise searching across dates, recipients, senders, even headers. You can find some more tips [at Macdrifter.com](http://www.macdrifter.com/2014/05/FastMail-searching.html)

Search terms are combined using boolean operators. For example, searching for messages received within the last two weeks that are not in my `__Bacon` folder uses this simple phrase:

`after:"2w" NOT in:__Bacon`

Server-side searches can be saved as smart folders. The search is executed when the folder is accessed. In this way, it is easy to have quick access to all emails with attachments or messages received in the past week, regardless of where they've been filed.

> {{ theme:partial src="aside-header" voice="gabe" text="Tip: Saved Search URLs" }}
> 
> Create a search. Locate a message and right click (or tap and hold on iOS) and copy the URL. You'll get a URL like this:
> 
> `https://www.FastMail.fm/mail/search:after%3A%222w%22+NOT+in%3A__Bacon/55ccdd75d9cb2f764-e68088183u4885?u=5sf94300`
> 
> The URL is a shortcut to that exact message within that search result set. Clicking the link later will reload the search and that specific message in the result set.
>
> It's hard to go back to a lesser client on iOS or even the Mac, which is one of the reasons I really enjoy FastMail. The web app is so good, I can use it on my phone and have access to all of the searching power I use on my desktop.

{{ theme:partial src="section-header" title="Spam, Ham, and Server-side Rules" url="{{ soundcloudurl }}" time="11:17" }}

You can't really control what email you get, but you can control what happens after it is sent but before it reaches you. FastMail handles some of that itself spam filtering, and it provides a rich toolset for user personalization.

> {{ theme:partial src="aside-header" voice="gabe" text="Spam" }}
> 
> The spam filtering in FastMail is excellent. It's tough to tell if it's better than Gmail. I think Gmail accounts get much more spam in general than a custom domain. It's probably pretty easy to send millions of messages to `randomstring@gmail.com`.
> 
> FastMail spam filtering uses [SpamAssassin](http://spamassassin.apache.org/) to score messages. Obvious spam is removed from the inbox. You can also mark messages as spam and FastMail will learn about what your spam looks like. The more you mark, the better it gets. You can also tweak how aggressive spam filtering will be.
> 
> There are also tricks for avoiding accidental spam filtering. Adding a domain such as `*.macdrifter.com` as an address book contact will prevent any messages from that TLD from being sequestered. You can also provide a secret word to people you like and their messages will always be assumed safe AND will bypass all mail filters.

{{ theme:partial src="image" title="Spam Protection Settings" caption="" show="{{ number }}" file="Screen Shot 20140902_181954.jpg" }}

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="14:16" person="gabe" quote="I didn't know how many meat products were involved in technology" }}

> {{ theme:partial src="aside-header" voice="potatowire" text="So good" }}
> 
> FastMail gives each user an individually trainable [Bayesian database](http://en.wikipedia.org/wiki/Bayesian_spam_filtering), but since they seem to think of everything, you can specify certain folders as spam/non-spam training folders in the event that you prefer to use native mail clients.

FastMail is also very tough on spammers that might try to use their service. They recommend that you get written consent from recipients to do things like newsletters before sending out a blast. If they get reports of spam on an account and the owner cannot prove that the email was requested, they will boot the user off of the service.

> {{ theme:partial src="aside-header" voice="gabe" text="I Get No Spam" }}
>
> Mail rules are a must. Using rules inside of Apple's Mail.app was a blessing for filtering out junk from friends as well as non-spam advertisements. But when my Mac was off, the rules were useless and this was only exacerbated by processing more of my email through my phone. FastMail's server-side rules were a huge step forward in convenience but a small step back in complexity.
> 
> The FastMail rules are easily configured through a basic GUI and a lot can be accomplished this way. I manage all of my rules through the basic mail filters. But if you want control on par to Mail.app then you'll need to master the [Sieve language](https://www.FastMail.fm/help/technical/sieve.html). If you do, you'll be a wizard with your mail.

FastMail permits a pretty full set of rules making through its logically laid out Settings page. 

{{ theme:partial src="image" title="Rules Settings" show="{{ number }}" file="rules.png" }}

Choosing "Rules" from the left sidebar provides
four basic categories of actions which can be taken when new mail
arrives:

1. Discard - Deletes before delivering to the user
2. Forward - Forward to a different email address
3. Autoreply - Out-of-office type of notifications.
4. Organize - File, pin, or otherwise act on new mail

There are various options available here, but in general, it is the
organization actions that provide the most flexibility. Behind the
scenes, this GUI method of rule setting is really just creating a 
[Sieve](http://sieve.info/) script. FastMail 
[provides a good rundown](https://www.FastMail.fm/help/receive/rules.html)
on their rules system, but they also allow access to the script itself so
that you can [edit it manually](https://www.FastMail.fm/help/technical/sieve.html)

> {{ theme:partial src="aside-header" voice="potatowire" text="The first
rule of email" }}
>
> A number of years ago, I decided that I needed my own email address. I liked the idea of having a completely personalized address, sure, but I also wanted to completely own the way that so many people communicate online. 
>
> The stories of [being locked out of Gmail](https://support.google.com/mail/answer/43692?hl=en) were still relatively rare, but I still wasn't happy relying only on Google, even though I felt I deserved some nerd cred since I joined Gmail when [account creation required an invitation](http://www.webdevelopersnotes.com/tips/gmail/gmail-invites.php). If I had my own email address, I could take it with me anywhere or even host it myself. [Google Apps](https://www.google.com/enterprise/apps/business/) was the first provider I tried (I really stretched my comfort zone, huh), and it was great.
> 
> I did have a brief freak-out about Google a few years ago though, and decided to try to find a dedicated mail provider. I tried FastMail and the rest is boring history.
>
> Once I made this switch, and my email began all coming to its new home, I was left with a messy inbox. This led to rules in Mail.app, which was okay, but come on, the system relied on Mail.app.
>
> Some time later, I made a rule in the FastMail webapp while away from my Mac, and it was easy with some advanced options,  but the last thing I wanted was to begin relying on some other proprietary system. 
> 
> That's when I noticed that the FastMail email rules were just implementing the Sieve language behind the scenes. This changed everything. If I ever decided to leave FastMail, I could easily bring my rules with me. FastMail being characteristically awesome, they made it easy to get the script out of the settings page ([Settings → Rules → Advanced](https://www.fastmail.fm/go/settings/rules)).
>
> {{ theme:partial src="image" title="Un-nerding" caption="" show="{{ number }}" file="revert-sieve.jpg" }}
>
> This will also cause the old script to be sent to you (by email, naturally, as an attachment). Since it is just plain text, there are plenty of ways to back up or even move
> on to a new provider, in addition to being very easy to version control.
> 
> Having been thus convinced, I dug into the language and found out how flexible it is. I don't do much that couldn't be done using the web interface, but I will someday. In the meantime, here are some basics to get you started. 

FastMail doesn't currently support the entire [Sieve Spec](http://www.ietf.org/rfc/rfc5228.txt), but it includes the common extensions:
 
* [Relational Tests](http://www.ietf.org/rfc/rfc5231.txt) - Tests whether a field is
greater than, less than, or has some other relation to another field. For instance you could
act on an email with a certain number of people on the "To:" line.
* [Subaddress Extension](http://www.ietf.org/rfc/rfc5233.txt) - Breaks up the incoming address into
`:user` and `:detail` using some sort divider, like a "+". This
 enables the subdomain addressing which follows. 
* [Copying without Side Effects](http://www.ietf.org/rfc/rfc3894.txt) - Allows actions to take place without affecting the original message. One example of the utility here would be to backup certain messages by filing or forwarding.
* [Regular Expression Extension](http://tools.ietf.org/html/draft-ietf-sieve-regex-01) - This permits conditions to be set based on regular expressions instead of exact matches, globbing, etc. You're unlikely to make anything as automatic and comprehensive as paid service like [Sanebox](https://www.sanebox.com) but you can accomplish some amazing things with well considered rules and actions.
* [Body Extension](http://www.ietf.org/rfc/rfc5173.txt) - Checks for a string in the body of an email. It can be further refined to look for plain text strings, html strings, etc.

FastMail also offers a custom notification extension, which allows an SMS to be sent based on incoming messages. This requires the [purchase of SMS credits](https://www.FastMail.fm/go/purchasesms) for 12 cents each, and rules to utilize this extension [can be created via the GUI or by Sieve script](https://www.FastMail.fm/help/receive/advancedforwarding.html).
 
This just scratches the surface of FastMail's Sieve implementation, but spend some time browsing through the extension documentation linked above, and you will see how powerful this language is. Gabe  [previously wrote up](http://www.macdrifter.com/2013/11/server-side-mail-rules.html) how he uses his server-side rules too, and it is easy to find some inspiration there.

At the time of this writing, you are cannot use the web interface to adjust your rules once you edit your Sieve script manually, but the [beta server](https://beta.FastMail.fm/) does provide a way to have your cake and eat it too, through the use of "blocks" that combine auto-generated Sieve with user-created additions. Soon enough, they will roll this out to all customers.

> {{ theme:partial src="aside-header" voice="gabe" text="Shout out to Sanebox" }} 
> 
> As an alternative to all of this, [Sanebox](https://www.sanebox.com/) is good but I canceled my account. I do most everything with filters and smart mailboxes.

{{ theme:partial src="section-header" title="Stupid Address Tricks" url="{{ soundcloudurl }}" time="15:15" }}

FastMail has great spam filtering but sometimes spam comes from companies that we have legitimate associations with. In those cases no automatic spam filtering will be effective. 

> {{ theme:partial src="aside-header" voice="gabe" text="Targeted email addresses" }}
> 
> This is why I give out unique addresses to everyone that requires it. FastMail adopts the long standing Gmail option of [plus addressing](https://www.FastMail.fm/help/receive/addressing.html). Append a plus and some other word to your primary email address. It's a very subtle way to mask your main email address. For example, `gabe+verizon@technicaldifficulties.us` is still sent to `gabe@technicaldifficulties.us` but now I know Verizon is the source of the spam. But even better than that, I can easily trash all mail sent to that address with a server side mail rule and never be bothered by their garbage again.
> 
> The other advantage to the plus addressing is that it's a convenient way to automatically file messages as they come in. For example, if I had a folder somewhere in my FastMail hierarchy named `verizon` then a message sent to `gabe+verizon@technicaldifficulties.us` would miss my inbox entirely and be gently placed in the verizon folder.
> 
> Not everything is great about plus addressing though. Some email systems may refuse the format. In those cases you should use subdomain addressing.
> 
> Subdomain addressing is very similar to a plus address. In our example, you'd use the address `verizon@gabe.technicaldifficulties.us` where the user name is included as part of the domain. As with plus addressing, these messages will also be filed if there's a matching folder somewhere in your account.
> 

If you want to be even more elegant, then you can set up a new MX record at your host to handle all email sent to any recipient at your TLD. Most hosts make this simple and FastMail has [some easy to follow directions](https://www.FastMail.fm/help/receive/domains.html). This means people can send a message to any address at your domain, like our example `verizon@technicaldifficulties.us`. Of course, this is the way to go if you have your own domain.

> {{ theme:partial src="aside-header" voice="potatowire" text="No
plusses" }}
>
> I essentially do the same thing, but because I have all mis-addressed email (i.e. not associated with an alias), I just change the whole email address. This means I can redirect my email with a more natural-sounding address, in case I ever have to say it or share it with my wife (i.e. `netflix@potatowire.com`) but I still use `suckitspammers@potatowire.com` if the situation calls for it. 
> 
> I also use purpose-oriented addresses to direct email without having to tinker with my rules, such as `orders@potatowire.com` and `newsletters@potowire.com`. Nothing innovative here, but it took me way too long to think of nonetheless.

{{ theme:partial src="section-header" title="Other Features" url="{{ soundcloudurl }}" time="18:13" }}

The primary reason to use the address book function in FastMail is for address completion and automatic white listing of addresses. Gabe still prefers to keep his addresses in iCloud since there are many more custom contact properties. But for an address book, it's more than sufficient with support for photos, multiple contacts and addresses as well as automatic [Gravatar](https://en.gravatar.com) integration for incoming messages. If you have a business account, you can even administer a group address book separate from the individual users.

Within the past few months FastMail [added a feature rich web calendar](http://blog.FastMail.fm/2014/06/23/announcing-the-FastMail-calendar/) included with a paid account. 

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="fastmail-calendar.png" }}

It's very close to the Google calendar service in functionality. As with their email, their calendar web app is stunning on both the desktop and mobile. It also provides two-way syncing with Gmail or iCloud calendars. If you're looking for an option to consolidate a bunch of calendars in one web application, it's a good option.

{{ theme:partial src="image" title="FastMail Calendar Invitation" caption="" show="{{ number }}" file="Screen Shot 20140903_211708.jpg" }}

Finally, FastMail provides a file storage option for accessing and using attachments. At the most basic level, files are stored on the server and easily attached to any outgoing message. This can be taken one step further and files can be shared with a generic link. FastMail also provides basic photo album creation and sharing too. If you don't want to run a server but you want great email support and the option to share an occasional file, it's hard to beat FastMail.

{{ theme:partial src="section-header" title="A Few Missing Features" url="{{ soundcloudurl }}" time="20:20" }}

FastMail is incredibly capable, but here are a couple of things that the service doesn't (yet) offer.

#### Tags

Gmail isn't really IMAP, and that's why tags work there. IMAP uses the traditional folder metaphor, and consequently, you are not likely to see tags anytime soon.

> {{ theme:partial src="aside-header" voice="gabe" text="Archive or File but no Tags" }}
> 
> FastMail has a built in Archive folder and easily accessed archive buttons (like slide to archive on mobile). If you're an archiver, then it's no problem to move to FastMail. I happen to be 99% filing and 1% archiving. I archive things when I want to delay thinking about them. I guess my Archive is more like a temporary staging area and my folders are where I put my archives.
> 
> FastMail does not supporting tagging. If you just use it as an IMAP server and use an app like MailTags, you're fine. But if you rely on Gmail tags, FastMail is going to be rough for you. I really prefer nested folders to define an ontology for my mail. The keyboard shortcut to file a message in the web app `m` makes it pretty easy to figure out the right folder. Auto-complete in the pop-up for filing also improves the efficiency of herding the messages.

Tags are a mindset, really, and folder use can have it's own draw.

> {{ theme:partial src="aside-header" voice="potatowire" text="Useful Folders" }}
> 
> Like Gabe, I use and adore the FastMail webapp. Besides the keyboard
shortcuts, my favorite feature might be the ability to have folders in
your sidebar be hidden unless you have new email in them. This is done
very easily after clicking the "Create or edit folders" link in the
sidebar. From here just utilize the dropdown box to change how the
folder is displayed. It ought to look something like this:
> 
> {{ theme:partial src="image" title="Auto-hiding Folders" show="{{ number }}" file="auto-hide.png" }}
> 
> The reason that I like this feature so much, is that through the use
of the server-side rules I have in place, only certain
email goes to my inbox, but I can tell at a glance if there is
something I need to process in my subfolders. If I am caught up,
my sidebar will be clear of everything but my inbox.

#### External Address Book Sync

You've got to either use theirs exclusively, or manage contacts manually via import and export.

#### Push Notifications

Real-time push type of notifications are on the FastMail roadmap, so if you need this feature, consider an [intervention](http://en.wikipedia.org/wiki/Intervention_(counseling)), and look elsewhere in the meantime.

{{ theme:partial src="section-header" title="Moving to FastMail" url="{{ soundcloudurl }}" time="26:04" }}

If FastMail's compelling feature set has convinced you to give it a shot, moving from Gmail to FastMail is simple. The first thing to do is setup a Gmail forwarding service available in the Gmail settings. Every non-spam message sent to Gmail will automatically get forwarded to the FastMail account. We'll cover how to send messages with alias from address later.

{{ theme:partial src="image" title="Gmail Forwarding" caption="" show="{{ number }}" file="Screen Shot 20140903_203133.jpg" }}

FastMail can automatically import all of your old email for you. In fact, they provide [some simple to follow instructions](https://www.FastMail.fm/help/receive/migrate.html) for several common email providers. The first thing you'll need to do is enable IMAP on your Gmail account.

{{ theme:partial src="image" title="Gmail IMAP Settings" caption="" show="{{ number }}" file="Screen Shot 20140903_203635.jpg" }}

Once that's done, configure the import from the FastMail settings. All the messages will be imported over a period of minutes to hours, depending on the size of your Gmail archive. This runs unattended and you'll receive a message upon completion.

{{ theme:partial src="image" title="FastMail Importer" caption="" show="{{ number }}" file="Screen Shot 20140903_203407.jpg" }}

Note that Google does not use folders. Tags are lost during the migration. I recommend importing Gmail messages into a new archive folder.

A "Personality" in FastMail is like a virtual "from" address. This allows a user to send email through an external mail server right from within the FastMail service. Combine a personality for sending messages with mail forwarding from a different email account and no one will be any the wiser that you manage all of your email from one FastMail account.

Here's a simple example using my preferred web hosting provider [Webfaction](https://www.webfaction.com/?affiliate=macdrifter). Login to FastMail and go to the settings and then "Accounts". Switch to the "Advanced" option. From here, you can create a new personality. Provide the "from" address you want to use for the personality. If you are using  an external server, then you'll need the SMTP connection details. For Webfaction it looks something like this:

{{ theme:partial src="image" title="Advanced Personality Connection" caption="" show="{{ number }}" file="Screen Shot 20140901_090844.jpg" }}

FastMail can now send mail as the external sender by choosing it from a drop down when composing new messages or replying. The recipient will not easily detect (if they care to check) that the original message was sent from FastMail.

If you want to fake it, you can avoid the SMTP connection stuff and just have FastMail assign a different sender address to the header. To anyone just using a dumb email client, it will likely look as if the message came from another account. However, digging just below the surface will reveal the FastMail address as the origin of the message.

> {{ theme:partial src="aside-header" voice="potatowire" text="If you're all-in" }}
> 
> If you are doing this for a domain that is already setup with FastMail, creating a new personality will be how you generate an originating email address that is different from your log in. You won't have to worry about SMTP settings, since they will already be set. As I alluded to above, I use many addresses to only receive email, and if I do want to respond, I have to choose a different personality or stop and create it.

There are a couple different options for receiving messages from an external email through FastMail. The easiest option is to setup mail forwarding from the old email account. For iCloud, login to the iCloud web mail and open the preferences (gear icon in the lower left). Add your FastMail email address for the forwarding service. I prefer to keep all of the mail in iCloud and do nothing with it other than forward. I no longer use iCloud mail at all.

{{ theme:partial src="image" title="iCloud Mail Forwarding" caption="" show="{{ number }}" file="Screen Shot 20140901_093408.jpg" }}

> {{ theme:partial src="aside-header" voice="bob" text="Audio Engineer's Note" }}
>
> If you have -- or hear -- any feedback, let me know on Twitter [@takitapart](http://twitter.com/takitapart/), or email bob at vanderclay dot com.

> {{ theme:partial src="aside-header" voice="potatowire" text="Producer's Note" }}
>
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/), or feel free to send an email to me at potatowire dot com.
