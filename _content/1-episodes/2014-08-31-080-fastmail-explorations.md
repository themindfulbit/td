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
shorcuts, my favorite feature might be the ability to have folders in
your sidebar be hidden unless you have new email in them. This is done
very easily after clicking the "Create or edit folders" link in the
sidebar. From here just utilize the dropdown box to change how the
floder is displayed. It ought to look somethink like this:
> 
> {{ theme:partial src="image" title="Auto-hiding Folders" show="{{ number }}" file="auto-hide.png" }}
> 
> The reason that I like this feature so much, is that through the use
of the server-side rules I have in place (stay tuned), only certain
email goes to my inbox, but I can also see at a glance whether there is
anything that I need to process in my sub-folders. If I am caught up,
there will be nothing in my sidebar at all.

{{ theme:partial src="section-header" title="Using the Keyboard" url="{{ soundcloudurl }}" time="m:ss" }}

{>>Put in a tutorial for setting up mail forward from gmail<<}
{>>Insert instructions for using a custom domain with Fastmail<<}

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

{>>Shout out to Sanebox here. It's good but I canceled my account. I do most everything with filters and smart mailboxes<<}

{{ theme:partial src="section-header" title="Searchhing" url="{{ soundcloudurl }}" time="m:ss" }}

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

