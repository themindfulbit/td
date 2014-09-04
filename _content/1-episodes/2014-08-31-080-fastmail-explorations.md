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
    title: ""
    image: /assets/img/auto-hide.png
post_files: ""
---

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
of the server-side rules I have in place (stay tuned), only certain
email goes to my inbox, but I can also see at a glance whether there is
anything that I need to process in my subfolders. If I am caught up,
there will be nothing in my sidebar at all.

{{ theme:partial src="section-header" title="Using the Keyboard" url="{{ soundcloudurl }}" time="m:ss" }}

Moving from Gmail to Fastmail is simple. The first thing to do is setup a Gmail forwarding service available in the Gmail settings. Every non-spam message sent to Gmail will automatically get forwarded to the Fastmail account. We'll cover how to send messages with alias from address later.

{{ theme:partial src="image" title="" caption="Gmail Forwarding" show="{{ number }}" file="Screen Shot 20140903_203133.jpg" }}

Fastmail can automatically import all of your old email for you. In fact, they provide [some simple to follow instructions](https://www.fastmail.fm/help/receive/migrate.html) for several common email providers. The first thing you'll need to do is enable IMAP on your Gmail account.

{{ theme:partial src="image" title="" caption="Gmail IMAP Settings" show="{{ number }}" file="Screen Shot 20140903_203635.jpg" }}

Once that's done, configure the import from the Fastmail settings. All the messages will be imported over a period of minutes to hours, depending on the size of your Gmail archive. This runs unattended and you'll receive a message upon completion.

{{ theme:partial src="image" title="" caption="Fastmail Importer" show="{{ number }}" file="Screen Shot 20140903_203407.jpg" }}

Note that Google does not use folders. Tags are lost during the migration. I recommend importing Gmail messages into a new archive folder.

A "Personality" in Fastmail is like a virtual "from" address. This allows a user to send email through an external mail server right from within the Fastmail service. Combine a personality for sending messages with mail forwarding from a different email account and no one will be any the wiser that you manage all of your email from one Fastmail account.

Here's a simple example using my preferred web hosting provider [Webfaction](https://www.webfaction.com/?affiliate=macdrifter). Login to Fastmail and go to the settings and then "Accounts". Switch to the "Advanced" option. From here, you can create a new personality. Provide the "from" address you want to use for the personality. If you are using  an external server, then you'll need the SMTP connection details. For Webfaction it looks something like this:

{{ theme:partial src="image" title="" caption="Advanced Personality Connection" show="{{ number }}" file="Screen Shot 20140901_090844.jpg" }}

Fastmail can now send mail as the external sender by choosing it from a drop down when composing new messages or replying. The recipient will not easily detect (if they care to) that the original message was sent from Fastmail.

If you want to fake it, you can avoid the SMTP connection stuff and just have Fastmail assign a different sender address to the header. To anyone just using a dumb email client, it will likely look as if the message came from another account. However, digging just below the surface will reveal the Fastmail address as the origin of the message.

There are a couple different options for receiving messages from an external email through Fastmail. The easiest option is to setup mail forwarding from the old email account. For iCloud, login to the iCloud web mail and open the preferences (gear icon in the lower left). Add your Fastmail email address for the forwarding service. I prefer to keep all of the mail in iCloud and do nothing with it other than forward. I no longer use iCloud mail at all.

{{ theme:partial src="image" title="" caption="iCloud Mail Forwarding" show="{{ number }}" file="Screen Shot 20140901_093408.jpg" }}

### Stupid Address Tricks ###

Fastmail has great spam filtering but sometimes spam comes from companies that we have legitimate associations with. In those cases no automatic spam filtering will be effective. That's why I give out unique addresses to everyone that requires it. Fastmail adopts the long standing Gmail option of [plus addressing](https://www.fastmail.fm/help/receive/addressing.html). Append a plus and some other word to your primary email address. It's a very subtle way to mask your main email address. For example, gabe+verizon@technicaldifficulties.us is still sent to gabe@technicaldifficulties.us but now I know Verizon is the source of the spam. But even better than that, I can easily trash all mail sent to that address with a server side mail rule and never be bothered by their garbage again.

The other advantage to the plus addressing is that it's a convenient way to automatically file messages as they come in. For example, if I had a folder somewhere in my Fastmail hierarchy named "verizon" then a message sent to gabe+verizon@technicaldifficulties.us would miss my inbox entirely and be gently placed in the verizon folder.

Not everything is great about plus addressing though. Some email systems may refuse the format. In those cases you should use subdomain addressing.

Subdomain addressing is very similar to a plus address. In our example, you'd use the address "verizon@gabe.technicaldifficulties.us" where the user name is included as part of the domain. As with plus addressing, these messages will also be filled if there's a matching folder somewhere in your account.

If you want to be even more elegant, then I suggest setting up a new MX record at your host to handle all email sent to any recipient at your TLD. Most hosts make this simple and Fastmail has [some easy to follow directions](https://www.fastmail.fm/help/receive/domains.html). This means people can send a message to any address at your domain, like our example "verizon@technicaldifficulties.us". Of course, this is the way to go if you have your own domain.

> {{ theme:partial src="aside-header" voice="potatowire" text="No
plusses" }}
>
> I essentially do the same thing, but because I have all mis-addressed
> email (i.e. not associated with an alias), I just change the whole email
> address. This means I can redirect my email with a more natural-sounding
> address, in case I ever have to say it or share it with my wife (i.e.
> netflix@potatowire.com), but I still use suckispammers@potatowire.com,
> if the situation calls for it. 
> 
> I also use purpose-oriented addresses to direct email without having 
> to rinker with my rules, such as orders@potatowire.com and
> newsletters@potowire.com. Nothing innovative here, but it took me way
> too long to think of nonetheless.


> {{ theme:partial src="aside-header" voice="gabe" text="Keyboard Shortcuts or GTFO" }}
>
> Anyone that's proficient with Gmail will tell you that the real power is all in the keyboard shortcuts. [Gmail has a huge variety of shortcuts](http://www.shortcutworld.com/en/web/Gmail.html) and many of them are derived from older email tools. But the most important shortcuts are the ones that get the email read and moved out of the inbox. Fastmail has [a rich set of shortcuts](https://www.fastmail.fm/help/receive/kbshortcuts.html) that either mimic or duplicate the Gmail shortcuts. Moving from Gmail to Fastmail is pretty easy but there are some differences that will require some brain re-wiring, like "y" for archiving.

`j`/`k` - move to next and previous message, as in Vim
`/` - search, also as in Vim
`x` - select current message
`g` - goto folder with select by substring
`d` or `#` - delete message
`m` - move message with select destination by substring
`y` - archive message
`!` - report as spam
`.` - mark, then `r` for read, `u` for unread, `p` for pin, etc.

{{ theme:partial src="section-header" title="Spam, Ham, and Server-side Rules" url="{{ soundcloudurl }}" time="m:ss" }}


The spam filtering in Fastmail is excellent. It's tough for me to tell if it's better than Gmail. I think Gmail accounts get much more spam in general than a custom domain. It's probably pretty easy to send millions of messages to "randomstring@gmail.com".

Fastmail spam filtering uses SpamAssasin to score messages. Obvious spam is removed from the inbox. You can also mark messages as spam and Fastmail will learn about what your spam looks like. The more you mark, the better it gets. You can also tweak how aggressive spam filtering will be.

{{ theme:partial src="image" title="" caption="Spam Protection Settings" show="{{ number }}" file="Screen Shot 20140902_181954.jpg" }}

Fastmail is also very tough on spammers that might try to use their service. The recommend that you get written consent from recipients to things like newsletters before sending out a blast. If they get reports of spam on an account and the owner can not prove that the email was requested, they will boot the user off of the service.

> {{ theme:partial src="aside-header" voice="gabe" text="I Get No Spam" }}
>
> Mail rules are a must. Using rules inside of Apple's Mail.app was a blessing for filtering out junk from friends as well as non-spam advertisements. But when  my Mac was off, the rules were useless and this was only exacerbated by processing more of my email through my phone. Fastmail's server-side rules were a huge step forward in convenience but a small step back in complexity.
> 
> The Fastmail rules are easily configured through a basic GUI and a lot can be accomplished this way. I manage all of my rules through the basic mail filters. But if you want control on par to Mail.app then you'll need to master the [Sieve language](https://www.fastmail.fm/help/technical/sieve.html). If you do, you'll be a wizard with your mail.

{>>A tutorial and examples of basic server side mail rules would be good here<<}

{>>POTATOWIRE ::: An introduction to Sieve<<}

> {{ theme:partial src="aside-header" voice="potatowire" text="The first
rule of email" }}
>
> A number of years ago, I decided that I needed my own email address.
> I liked the idea of having a completely personalized address, sure, but
> I also wanted to completely own the way that so many people communicate
> online. The stories of [being locked out of Gmail](LINK) were still
> relatively rare, but it seemed weird to still rely on Google, even
> though I was inordinately proud of having been on Gmail since [account
> creation required an invitation](LINK). If I had my own email address, I
> could take it with me anywhere or even host it myself. [Google Apps](LINK)
> was the first provider I tried, and I honestly had no issues with it.
> I did have a brief freak-out about Google though, and decided to try to
> find a dedicated mail provider. I tried Fastmail and the rest is boring
> history.
>
> Once I made this switch, and my email began all coming to its new
> home, I was left with a messy inbox. This led me to set up some rules in
> Mail.app, which was okay, but come on, the system relied on Mail.app.
> some time later, I set up a rule in the Fastmail webapp while away from
> my Mac, and it was easy and worked well with lots of advanced options, 
> but the last thing I wanted was to begin relying on some proprietary
> system. 
> 
> That's when I noticed that the Fastmail rmail rules were just
> implementing the [Sieve language](LINK) behind the scenes. This changed
> everything. If I ever decided to leave Fastmail, I could easily bring my
> rules with me. Fastmail being characteristically awesome, they made it
> [easy to get the script out](LINK) of the settings, but since it is just
> plain text in a flat file, there are plenty of ways to back up or move
> on. Besides, this made it very easy to version control.
> 
> Having been convinced, I dug into the language and found out how
> flexible it is. I don't do much that couldn't be done using the web
> interface, but I will someday. In the meantime, here are some basics to
> get you started. 

You're unlikely to make anything as automatic and comprehensive as paid service like [Sanebox](https://www.sanebox.com) but you can accomplish some amazing things with well considered rules and actions.

{{ theme:partial src="section-header" title="Searching" url="{{ soundcloudurl }}" time="m:ss" }}


One of Fastmail's more famous features is the [powerful search syntax](https://www.fastmail.fm/help/receive/search.html). It follows a familiar phrase-type of syntax. Searing "in:verizon statement" will search only in a folder named "verizon" for a substring that contains "statement". There are a variety of phrases that allow very precise searching across dates, recipients, senders, even headers. You can find some more tips [at Macdrifter.com](http://www.macdrifter.com/2014/05/fastmail-searching.html)

Search terms are combined using boolean operators. For example, searching for messages received within the last two weeks that are not in my "__Bacon" folder uses this simple phrase:
after:"2w" NOT in:__Bacon

Server-side searches can be saved as smart folders. The search is executed when the folder is accessed. In this way, I have quick access to all emails with attachments or messages received in the past week, regardless of where they've been filed.

It's hard to go back to a lesser client on iOS or even the Mac, which is one of the reasons I really enjoy Fastmail. The web app is so good, I can use it on my phone and have access to all of the searching power I use on my desktop.

{{ theme:partial src="section-header" title="Other Features" url="{{ soundcloudurl }}" time="m:ss" }}

Fastmail provides a file storage option for accessing and using attachments. At the most basic level files are stored on the server and easily attached to any outgoing message. This can be taken one step further and files can be shared with a generic link. Fastmail also provides basic photo album creation and sharing too. If you don't want to run a server but you want great email support and the option to share an occasional file, it's hard to beat Fastmail.


The primary reason to use the address book function in Fastmail is for address completion and automatic white listing of addresses. I still prefer to keep my addresses in iCloud since there are many more custom contact properties. But for an address book, it's more than sufficient with support for photos, multiple contacts and addresses as well as automatic [Gravatar](https://en.gravatar.com) integration for incoming messages. If you have a business account, you can even administer a group address book separate from the individual users.


Within the past few months Fastmail [added a feature rich web calendar](http://blog.fastmail.fm/2014/06/23/announcing-the-fastmail-calendar/) included with a paid account. It's very close to the Google calendar service in functionality. As with their email, their calendar web app is stunning on both the desktop and mobile. It also provides two-way syncing with Gmail or iCloud calendars. If you're looking for an option to consolidate a bunch of calendars in one web application, it's a good option.

{{ theme:partial src="image" title="" caption="Fastmail Calendar Invite" show="{{ number }}" file="Screen Shot 20140903_211708.jpg" }}

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
