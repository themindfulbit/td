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

{>>Put in a tutorial for setting up mail forward from gmail<<}
{>>Insert instructions for using a custom domain with Fastmail<<}

A "Personality" in Fastmail is like a virtual "from" address. This allows a user to send email through an external mail server right from within the Fastmail service. Combine a personality for sending messages with mail forwarding from a different email account and no one will be any the wiser that you manage all of your email from one Fastmail account.

Here's a simple example using my preferred web hosting provider [Webfaction](https://www.webfaction.com/?affiliate=macdrifter). Login to Fastmail and go to the settings and then "Accounts". Switch to the "Advanced" option. From here, you can create a new personality. Provide the "from" address you want to use for the personality. If you are using  an external server, then you'll need the SMTP connection details. For Webfaction it looks something like this:

{{ theme:partial src="image" title="" caption="Advanced Personality Connection" show="{{ number }}" file="Screen Shot 20140901_090844.jpg" }}

Fastmail can now send mail as the external sender by choosing it from a drop down when composing new messages or replying. The recipient will not easily detect (if they care to) that the original message was sent from Fastmail.

If you want to fake it, you can avoid the SMTP connection stuff and just have Fastmail assign a different sender address to the header. To anyone just using a dumb email client, it will likely look as if the message came from another account. However, digging just below the surface will reveal the Fastmail address as the origin of the message.

There are a couple different options for receiving messages from an external email through Fastmail. The easiest option is to setup mail forwarding from the old email account. For iCloud, login to the iCloud web mail and open the preferences (gear icon in the lower left). Add your Fastmail email address for the forwarding service. I prefer to keep all of the mail in iCloud and do nothing with it other than forward. I no longer use iCloud mail at all.

{{ theme:partial src="image" title="" caption="iCloud Mail Forwarding" show="{{ number }}" file="Screen Shot 20140901_093408.jpg" }}

### Stupid Address Tricks ###

Fastmail has great spam filtering but sometimes spam comes from companies that we have legitimate associations with. In those cases no automatic spam filtering will be effective. That's why I give out unique addresses to everyone that requires it. Fastmail adopts the long standing Gmail option of plus addressing. Append a plus and some other word to your primary email address. It's a very subtle way to mask your main email address. For example, gabe+verizon@technicaldifficulties.us is still sent to gabe@technicaldifficulties.us but now I know Verizon is the source of the spam. But even better than that, I can easily trash all mail sent to that address with a server side mail rule and never be bothered by their garbage again.

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

{>>GABE ::: Tutorial for using aliasing and subdomain addressing and personalities<<}

> {{ theme:partial src="aside-header" voice="gabe" text="Keyboard Shortcuts or GTFO" }}
>
> Anyone that's proficient with Gmail will tell you that the real power is all in the keyboard shortcuts. [Gmail has a huge variety of shortcuts](http://www.shortcutworld.com/en/web/Gmail.html) and many of them are derived from older email tools. But the most important shortcuts are the ones that get the email read and moved out of the inbox. Fastmail has [a rich set of shortcuts](https://www.fastmail.fm/help/receive/kbshortcuts.html) that either mimic or duplicate the Gmail shortcuts. Moving from Gmail to Fastmail is pretty easy but there are some differences that will require some brain re-wiring.

{>>Outline Fastmail keyboard shortcuts here.<<}

`j`/`k` - move to next and previous message, as in Vim
`/` - search, also as in Vim
`x` - select current message
`d` or `#` - delete message
`m` - move message
`y` - archive message
`!` - report as spam
`.` - mark, then `r` for read, `u` for unread, `p` for pin, etc.

{{ theme:partial src="section-header" title="Spam, Ham, and Server-side Rules" url="{{ soundcloudurl }}" time="m:ss" }}

{>>SPAM FILTERING AND TRAINING<<}

> {{ theme:partial src="aside-header" voice="gabe" text="I Get No Spam" }}
>
> Mail rules are a must. Using rules inside of Apple's Mail.app was a blessing for filtering out junk from friends as well as non-spam advertisements. But when  my Mac was off, the rules were useless and this was only exacerbated by processing more of my email through my phone. Fastmail's server-side rules were a huge step forward in convenience but a small step back in complexity.
> 
> The Fastmail rules are easily configured through a basic GUI and a lot can be accomplished this way. I manage all of my rules through the basic mail filters. But if you want control on par to Mail.app then you'll need to master the Sieve language. If you do, you'll be a wizard with your mail.

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
> interface, but I will someday. In the menatime, here are some basics to
> get you started. 

{>>Shout out to Sanebox here. It's good but I canceled my account. I do most everything with filters and smart mailboxes<<}

{{ theme:partial src="section-header" title="Searching" url="{{ soundcloudurl }}" time="m:ss" }}

{>>SEARCH<<}

{{ theme:partial src="section-header" title="Other Features" url="{{ soundcloudurl }}" time="m:ss" }}

{>>USING FILES<<}

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

