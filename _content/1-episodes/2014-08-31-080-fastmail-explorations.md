---
number: "080"
title: Fastmail Explorations
people:
  - Gabe Weatherhead
  - Erik Hess
banner: ""
showtype: interview
topics: ""
caption: ""
download: ""
player: ""
soundcloudurl: ""
summary: ""
post_images:
  - 
    image: /assets/img/auto-hide.png
    title: ""
  - 
    title: ""
    image: /assets/img/rules.png
post_files: ""
---

> {{ theme:partial src="aside-header" voice="gabe" text="Web vs. Native" }}
> 
> The arguments about native vs. web app have torn families apart and divided nations. I lean more toward native apps ***if*** I can use it where and when I like. There are plenty of native mail apps that work very well and plenty of web apps for mail that stink. I was very skeptical of the Fastmail web app until I tried it.
> Wow. It's just so good everywhere. The Fastmail web app is responsive in the best way. It works right on a mobile device without having to zoom and pan. It's also very fast. Importantly, the Fastmail web app provides features not available in most native apps, like powerful search and keyboard shortcuts for things I care about.
> There are three advantages of the Fastmail web app on mobile:
> 1) I can access it through a 1Password entry, making login to multiple accounts easy and very secure.
> 2) I can have separate accounts open in different tabs, thus avoiding mixing business with less painful business.
> 3) It supports gestures where they makes sense. Slide right to left to delete, tap and drag to move, or slide left to right for archiving.
> 
> There's a lot to like about the Fastmail web apps and I appreciate someone giving mobile the attention it deserves. They've considered the difference between screen size on a phone vs. a tablet and provide access to additional menu controls by tapping the message on the phone. File drag-and-drop works with the web app on a desktop.
> 
> However, there are some things web apps aren't good at. The biggest issue is offline use. After caching the inbox list, you can browse while offline. You can even create a draft message and save it to the local cache in Safari for iOS. When you reconnect, the draft will be uploaded to the server but often with variable results like duplicate drafts. Native apps also get special treatment when interacting with other native apps. For most of my use, these aren't important detractors.



> {{ theme:partial src="aside-header" voice="gabe" text="Archive or File but no Tags" }}
> 
> Fastmail has a built in Archive folder and easily accessed archive buttons (like slide to archive on mobile). If you're an archiver, then it's no problem to move to Fastmail. I happen to be 99% filing and 1% archiving. I archive things when I want to delay thinking about them. I guess my Archive is more like a temporary staging area and my folders are where I put my archives.
> 
> Fastmail does not supporting tagging. If you just use it as an IMAP server and use an app like MailTags, you're fine. But if you rely on Gmail tags, Fastmail is going to be rough for you. I really prefer nested folders to define an ontology for my mail. The keyboard shortcut to file a message in the web app, m, makes it pretty easy to figure out the right folder. Auto-complete in the pop-up for filing also improves the efficiency of hearding the messages.



{{ theme:partial src="section-header" title="Why Fastmail" url="{{ soundcloudurl }}" time="0:00" }}

> {{ theme:partial src="aside-header" voice="gabe" text="So Many Email Accounts" }}
>
> Let's clear the skeletons out of the closet. Over the years I've used, AOL, Hotmail, Yahoo, and Gmail for email. There's been many more through various university accounts. It's almost all out of my reach now. But for the past 5+ years I've primarily used my own domains for email which makes it mine more than any other service ever has. I highly recommend owning your own domain and getting an email address on that domain. Your email address will always be yours and you can usually point it to a new email provider with little effort.

{{ theme:partial src="section-header" title="The Webapp" url="{{ soundcloudurl }}" time="m:ss" }}

> {{ theme:partial src="aside-header" voice="potatowire" text="Useful Folders" }}
> 
> Like Gabe, I use and adore the Fastmail webapp. Besides the keyboard
shortcuts, my favorite feature might be the ability to have folders in
your sidebar be hidden unless you have new email in them. This is done
very easily after clicking the "Create or edit folders" link in the
sidebar. From here just utilize the dropdown box to change how the
folder is displayed. It ought to look something like this:
> 
> {{ theme:partial src="image" title="Auto-hiding Folders" show="{{ number }}" file="auto-hide.png" }}
> 
> The reason that I like this feature so much, is that through the use
of the server-side rules (stay tuned), only certain
email goes to my inbox, but I can also see at a glance whether there is
anything that I need to process in my subfolders. If I am caught up,
there will be nothing in my sidebar at all.


A "Personality" in Fastmail is like a virtual "from" address. This allows a user to send email through an external mail server right from within the Fastmail service. Combine a personality for sending messages with mail forwarding from a different email account and no one will be any the wiser that you manage all of your email from one Fastmail account.

Here's a simple example using my preferred web hosting provider [Webfaction](https://www.webfaction.com/?affiliate=macdrifter). Login to Fastmail and go to the settings and then "Accounts". Switch to the "Advanced" option. From here, you can create a new personality. Provide the "from" address you want to use for the personality. If you are using  an external server, then you'll need the SMTP connection details. For Webfaction it looks something like this:

{{ theme:partial src="image" title="" caption="Advanced Personality Connection" show="{{ number }}" file="Screen Shot 20140901_090844.jpg" }}

Fastmail can now send mail as the external sender by choosing it from a drop down when composing new messages or replying. The recipient will not easily detect (if they care to) that the original message was sent from Fastmail.

If you want to fake it, you can avoid the SMTP connection stuff and just have Fastmail assign a different sender address to the header. To anyone just using a dumb email client, it will likely look as if the message came from another account. However, digging just below the surface will reveal the Fastmail address as the origin of the message.

> {{ theme:partial src="aside-header" voice="potatowire"If you're all-in" }}
> 
> If you are doing this for a domain that is already setup with Fastmail, creating a new personality will be how you generate an originating email address that is different from your log in. You won't have to worry about SMTP settings, since they will already be set. I use many addresses that I only use to receive email and if I do want to respond, I have to choose a different personality or stop and create it.

There are a couple different options for receiving messages from an external email through Fastmail. The easiest option is to setup mail forwarding from the old email account. For iCloud, login to the iCloud web mail and open the preferences (gear icon in the lower left). Add your Fastmail email address for the forwarding service. I prefer to keep all of the mail in iCloud and do nothing with it other than forward. I no longer use iCloud mail at all.

{{ theme:partial src="image" title="" caption="iCloud Mail Forwarding" show="{{ number }}" file="Screen Shot 20140901_093408.jpg" }}

### Stupid Address Tricks ###

Fastmail has great spam filtering but sometimes spam comes from companies that we have legitimate associations with. In those cases no automatic spam filtering will be effective. 

> {{ theme:partial src="aside-header" voice="gabe" text="Targeted email addresses" }}
> 
> This is why I give out unique addresses to everyone that requires it. Fastmail adopts the long standing Gmail option of [plus addressing](https://www.fastmail.fm/help/receive/addressing.html). Append a plus and some other word to your primary email address. It's a very subtle way to mask your main email address. For example, gabe+verizon@technicaldifficulties.us is still sent to gabe@technicaldifficulties.us but now I know Verizon is the source of the spam. But even better than that, I can easily trash all mail sent to that address with a server side mail rule and never be bothered by their garbage again.
> 
> The other advantage to the plus addressing is that it's a convenient way to automatically file messages as they come in. For example, if I had a folder somewhere in my Fastmail hierarchy named "verizon" then a message sent to gabe+verizon@technicaldifficulties.us would miss my inbox entirely and be gently placed in the verizon folder.
> 
> Not everything is great about plus addressing though. Some email systems may refuse the format. In those cases you should use subdomain addressing.
> 
> Subdomain addressing is very similar to a plus address. In our example, you'd use the address "verizon@gabe.technicaldifficulties.us" where the user name is included as part of the domain. As with plus addressing, these messages will also be filed if there's a matching folder somewhere in your account.
> 
> If you want to be even more elegant, then I suggest setting up a new MX record at your host to handle all email sent to any recipient at your TLD. Most hosts make this simple and Fastmail has [some easy to follow directions](https://www.fastmail.fm/help/receive/domains.html). This means people can send a message to any address at your domain, like our example "verizon@technicaldifficulties.us". Of course, this is the way to go if you have your own domain.

> {{ theme:partial src="aside-header" voice="potatowire" text="No
plusses" }}
>
> I go with Gabe's elegant (ooooh, fancy!) option since I can redirect my email with a more natural-sounding
> address, in case I ever have to say it aloud or share it with my wife (i.e.
> netflix@potatowire.com). I still use suckispammers@potatowire.com when the situation calls for it. 

{{ theme:partial src="section-header" title="Using the Keyboard" url="{{ soundcloudurl }}" time="m:ss" }}

> {{ theme:partial src="aside-header" voice="gabe" text="Keyboard Shortcuts or GTFO" }}
>
> Anyone that's proficient with Gmail will tell you that the real power is all in the keyboard shortcuts. [Gmail has a huge variety of shortcuts](http://www.shortcutworld.com/en/web/Gmail.html) and many of them are derived from older email tools. But the most important shortcuts are the ones that get the email read and moved out of the inbox. Fastmail has [a rich set of shortcuts](https://www.fastmail.fm/help/receive/kbshortcuts.html) that either mimic or duplicate the Gmail shortcuts. Moving from Gmail to Fastmail is pretty easy but there are some differences that will require some brain re-wiring.

Here is an incomplete list of shortcuts

* `j` and `k` - move to next and previous message, as in Vim
* `/` - search, also as in Vim
* `x` - select current message
* `d` or `#` - delete message
* `y` - archive message
* `m` - move message
* `!` - report as spam
* `.` - mark, then `r` for read, `u` for unread, `p` for pin, etc.

If you are a point-and-click kind of person, the Fastmail web app also has you covered, with features like drag and drop for moving messages and dropdown menus for accessing all email operations.

{{ theme:partial src="image" title="" caption="GUI too" show="{{ number }}" file="gui-move.jpg" }}


{{ theme:partial src="section-header" title="Spam, Ham, and Server-side Rules" url="{{ soundcloudurl }}" time="m:ss" }}


The spam filtering in Fastmail is excellent. It's tough for me to tell if it's better than Gmail. I think Gmail accounts get much more spam in general than a custom domain. It's probably pretty easy to send millions of messages to "randomstring@gmail.com".

Fastmail spam filtering uses SpamAssasin to score messages. Obvious spam is removed from the inbox. You can also mark messages as spam and Fastmail will learn about what your spam looks like. The more you mark, the better it gets. You can also tweak how aggressive spam filtering will be.


There are also tricks for avoiding accidental spam filtering. Adding a domain such as "*.macdrifter.com" as an address book contact will prevent any messages from that TLD from being sequestered. You can also provide a secret word to people you like and their messages will always be assumed safe AND will bypass all mail filters.


{{ theme:partial src="image" title="" caption="Spam Protection Settings" show="{{ number }}" file="Screen Shot 20140902_181954.jpg" }}

> {{ theme:partial src="aside-header" voice="potatowire" text="So good" }}
> 
> Fastmail gives each user an individually trainable [Bayesian database](http://en.wikipedia.org/wiki/Bayesian_spam_filtering), but since they seem to think of everything, you can specify certain folders as spam/non-spam training folders in the event that you prefer to use native mail clients.


Fastmail is also very tough on spammers that might try to use their service. They recommend that you get written consent from recipients to do things like newsletters before sending out a blast. If they get reports of spam on an account and the owner can not prove that the email was requested, they will boot the user off of the service.

> {{ theme:partial src="aside-header" voice="gabe" text="I Get No Spam" }}
>
> Mail rules are a must. Using rules inside of Apple's Mail.app was a blessing for filtering out junk from friends as well as non-spam advertisements. But when  my Mac was off, the rules were useless and this was only exacerbated by processing more of my email through my phone. Fastmail's server-side rules were a huge step forward in convenience but a small step back in complexity.
> 
> The Fastmail rules are easily configured through a basic GUI and a lot can be accomplished this way. I manage all of my rules through the basic mail filters. But if you want control on par to Mail.app then you'll need to master the [Sieve language](https://www.fastmail.fm/help/technical/sieve.html). If you do, you'll be a wizard with your mail.

Fastmail permits a pretty full set of rules making through its logically
laid out Settings page. 

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
[Sieve](http://sieve.info/) script. Fastmail 
[provides a good rundown](https://www.fastmail.fm/help/receive/rules.html)
on their rules system, but they also allow access to the script itself so
that you can [edit it manually](https://www.fastmail.fm/help/technical/sieve.html)

> {{ theme:partial src="aside-header" voice="potatowire" text="The first
rule of email" }}
>
> A number of years ago, I decided that I needed my own email address.
> I liked the idea of having a completely personalized address, sure, but
> I also wanted to completely own the way that so many people communicate
> online. The stories of [being locked out of Gmail](https://support.google.com/mail/answer/43692?hl=en) were still
> relatively rare, but I still wasn't happy relying only on on Google, even
> though I felt I deserved some nerd cred since I joined Gmail when [account
> creation required an invitation](http://www.webdevelopersnotes.com/tips/gmail/gmail-invites.php). If I had my own email address, I
> could take it with me anywhere or even host it myself. [Google Apps](https://www.google.com/enterprise/apps/business/)
> was the first provider I tried (I really stretched my comfort zone, huh), and it was great.
> I did have a brief freak-out about Google a few years ago though, and decided to try to
> find a dedicated mail provider. I tried Fastmail and the rest is boring
> history.
>
> Once I made this switch, and my email began all coming to its new
> home, I was left with a messy inbox. This led to rules in
> Mail.app, which was okay, but come on, the system relied on Mail.app.
> some time later, I trialed a rule in the Fastmail webapp while away from
> my Mac, and it was easy and had some advanced options, 
> but the last thing I wanted was to begin relying on some proprietary
> system. 
> 
> That's when I noticed that the Fastmail rmail rules were just
> implementing the Sieve language. This changed
> everything. If I ever decided to leave Fastmail, I could easily bring my
> rules with me. Fastmail being characteristically awesome, they made it
> [easy to get the script out](LINK) of the settings.
>
> {{ theme:partial src="image" title="" caption="Un-nerding" show="{{ number }}" file="revert-sieve.jpg" }}
>
> Since it is just plain text, there are plenty of ways to back up or even move
> on to a new provider, in addition to being very easy to version control.
> 
> Having been thus convinced, I dug into the language and found out how
> flexible it is. I don't do much that couldn't be done using the web
> interface, but I will someday. 

Fastmail doesn't currently supprt the entire [Sieve Spec](http://www.ietf.org/rfc/rfc5228.txt), but it includes the common extensions:
 
* [Relational Tests](http://www.ietf.org/rfc/rfc5231.txt) - Tests whether a field is
greater than, less than, or has some other relation to another field. For instance yuu could
act on an email with a certain number of people on the "To:" line.
* [Subaddress Extension](http://www.ietf.org/rfc/rfc5233.txt) - Breaks up the incoming address into
`:user` and `:detail` using some sort divider, like a "+". This
 enables the subdomain addressing mentioned earlier. 
* [Copying without Side Effects](http://www.ietf.org/rfc/rfc3894.txt) - Allows actions to take place without affecting the original message.
One example of the utility here would be to backup certain messages through
filing or forwarding.
* [Regular Expression Extension](http://tools.ietf.org/html/draft-ietf-sieve-regex-01) - This permits conditions to be set based
on regular expressions instead of exact matches, globbing, etc.
* [IMAP flag Extension](https://www.fastmail.fm/help/technical/draft-melnikov-sieve-imapflags-04.txt) - Sets IMAP flags such as flagged, deleted, answered, etc.
* [Body Extension](http://www.ietf.org/rfc/rfc5173.txt) - Checks for a
string in the body of an email. It can be further refined to look for
plain text strings, html strings, etc.

Fastmail also offers a custom notification extension, which allows an SMS to be sent based on incoming messages. THis requires the [purchase of SMS credits](https://www.fastmail.fm/go/purchasesms) for 12 cents each, and rules to utilize this extension [can be created via the GUI or by Sieve script](https://www.fastmail.fm/help/receive/advancedforwarding.html
 
This just scratches the surface of Fastmail's Sieve implemetation, but
spend some time browsing through the extension documentation linked
above, and you will see how powerful this language is. Gabe 
[previously wrote up](http://www.macdrifter.com/2013/11/server-side-mail-rules.html)
how he uses his server-side rules too, and it is easy to find some
inspiration there.

At the time of this writing, you are cannot use the web
interface to adjust your rules once you edit your Sieve script manually,
but the [beta server](https://beta.fastmail.fm/) does provide a way to
have your cake and eat it too, through the use of "blocks" that combine 
auto-generated Sieve with user-created additions.


> {{ theme:partial src="aside-header" voice="gabe" text="Shout out to Sanebox" }} 
> 
> As an alternative to all of this, [Sanebox](https://www.sanebox.com/) is good but I canceled my account. I do most everything with filters and smart mailboxes.

{{ theme:partial src="section-header" title="Searching" url="{{ soundcloudurl }}" time="m:ss" }}


One of Fastmail's more famous features is the [powerful search syntax](https://www.fastmail.fm/help/receive/search.html). It follows a familiar phrase-type of syntax. Searching "in:verizon statement" will search only in a folder named "verizon". There are a variety of phrases that allow very precise searching across dates, recipients, senders, even headers.

Search terms are combined using boolean operators. For example, searching for messages received within the last two weeks that are not in the "__Bacon" folder uses this simple phrase:
after:"2w" NOT in:__Bacon

Server-side searches can be saved as smart folders. The search is executed when the folder is accessed. In this way, it is easy to have quick access to all emails with attachments or messages received in the past week, regardless of where they've been filed.

> {{ theme:partial src="aside-header" voice="gabe" text="Tip: Saved Search URLs" }}
> 
> Create a search. Locate a message and right click (or tap and hold on iOS) and copy the URL. You'll get a URL like this:
> 
> https://www.fastmail.fm/mail/search:after%3A%222w%22+NOT+in%3A__Bacon/55ccdd75d9cb2f764-e68088183u4885?u=5sf94300
> 
> The URL is a shortcut to that exact message within that search result set. Clicking the link later will reload the search and that specific message in the result set.


{>>Two Factor Authentication Option: https://www.fastmail.fm/help/account/2fa.html<<}


It's hard to go back to a lesser client on iOS or even the Mac, which is one of the reasons I really enjoy Fastmail. The web app is so good, I can use it on my phone and have access to all of the searching power I use on my desktop.

{{ theme:partial src="section-header" title="Other Features" url="{{ soundcloudurl }}" time="m:ss" }}

Fastmail provides a file storage option for accessing and using attachments. At the most basic level files are stored on the server and easily attached to any outgoing message. This can be taken one step further and files can be shared with a generic link. Fastmail also provides basic photo album creation and sharing too. If you don't want to run a server but you want great email support and the option to share an occasional file, it's hard to beat Fastmail.


{>>ADDRESS BOOK<<}

{>>THE NEW CALENDAR<<}

{{ theme:partial src="section-header" title="Missing Features" url="{{ soundcloudurl }}" time="m:ss" }}

* Notifications - Real-time push type of notifications are on the
	Fastmail roadmap, so if you need this feature, consider an
	[intervention](http://en.wikipedia.org/wiki/Intervention_(counseling)), and look elsewhere in the meantime.

* Tags - Gmail isn't really IMAP, and that is why tags work there, IMAP
	uses the traditional folder metaphor, and consequently, you are not
	likely to see tags anytime soon

{{ theme:partial src="section-header" title="Types of Accounts" url="{{ soundcloudurl }}" time="m:ss" }}

> {{ theme:partial src="aside-header" voice="gabe" text="Fastmail Accounts" }}
>
> Fastmail supports several levels of individual accounts. Most of the difference between the individual account types can be chalked up to storage space allocation. If you need tons of mail storage then you'll need to pay for it.
> 
> The Fastmail web app allows for login to multiple accounts with fast access to any account right from the landing page. There's no real reason to logout before accessing a different account.
> 
> I've also used the business account from Fastmail. It's a nearly identical experience except for two differences:
> 1. There's an option so email between employees on a business account stay on the Fastmail servers.
> 2. As an administrator, you get control over granting, locking and archiving employee accounts.
> 
> I have not used [the Family plan](https://www.fastmail.fm/signup/family.html). It allows you to combine multiple personal accounts under one bill but you also get the option to share contacts and calendars as well as administer and monitor accounts for the kids.

At the time of these show notes, the pricing for Fastmail [personal accounts](https://www.fastmail.fm/signup/personal.html) breaks down like this:

$10/yr for 250MB of email
$20/yr for 1GB
$40/yr for 15GB
$120/yr for 60GB

You can also purchase more storage space as needed.

