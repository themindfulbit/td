---
show: td
number: "065"
title: Stupid Clipboard Tricks
type:
  - discussion
people:
  - Gabe Weatherhead
  - Erik Hess
topics:
  - clipboard
  - keyboard maestro
  - textexpander
banner: /assets/img/clipboard-tricks.jpg
caption: '[SMU Central University](http://www.flickr.com/photos/41131493@N06/8880203168/in/photolist-ewHn2b-8DwfYA)'
download: td065.m4a
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/131210154%3Fsecret_token%3Ds-r4CnB&color=ff5500&auto_play=false&show_artwork=true"></iframe>'
soundcloudurl: techdiffpodcast/065-stupid-clipboard-tricks
summary: >
  Clipboards and Pasteboards are the topic
  of the week, as Gabe breaks down the
  tools and utilities he uses to get
  through the day on his Mac.
showtype: interview
post_images:
  - 
    image: >
      /assets/img/Screen-Shot-20140126-154558.jpg
    title: Alfred Clipboard History
  - 
    image: >
      /assets/img/Screen-Shot-20140126-154701.jpg
    title: Keyboard Maestro Clipboard Viewer
  - 
    image: >
      /assets/img/Screen-Shot-20140125-114101.jpg
    title: CloudApp Clipboard App
  - 
    image: >
      /assets/img/Screen-Shot-20140126-161509.jpg
    title: Keyboard Maestro Clipboard Sharing
  - 
    image: >
      /assets/img/Screen-Shot-20140126-154736.jpg
    title: Type Clipboard
  - 
    image: >
      /assets/img/Screen-Shot-20140126-154748.jpg
    title: The Plain Text Clipboard
  - 
    image: >
      /assets/img/Screen-Shot-20140126-154448.jpg
    title: URL Encode Clipboard
  - 
    image: >
      /assets/img/Screen-Shot-20140126-163246.jpg
    title: CopyLess Clipboard
post_files: ""
---
### How did you just do that?

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

After reminiscing about how confusing and surprising other people's [Portal runs](http://www.youtube.com/watch?v=3KEePDv5kgg) can be, Gabe tries to figure out why Erik isn't using a clipboard manager.

### Use Cases

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="2:05" }}

* Rich Text to plain text/Markdown conversion
* Converting text case
* Appending text
* Stripping characters
* Encoding Strings

Many people treat the clipboard as a temporary way station between apps. While that's true, it's also an opportunity to transform and manipulate the information before it gets to its final destination.

Plain text is awesome, but many apps support RTF formatting that can be a nuisance when jumping to another app like your email client. While some applications support the "paste and match style" function, that's not a universal option. Rather than relying on some developer's whim, try stripping out the formatting when the text is on the clipboard.

The clipboard is another good opportunity for converting and encoding text. Whether it be converting lower case to title case or URL encoding a string, why bother using a totally separate application when it's already on your clipboard?

### Sync and Online Services

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="3:55" }}

* [Cloud App](http://www.getcloudapp.com)
* [Droplr](https://droplr.com/join/d/tR009a9Q)
* [Evernote](http://evernote.com)

> {{ theme:partial src="aside-header" voice="gabe" text="Sync or Share" }}
>
> I refer to these services as clipboard syncing services which is technically incorrect. I use them as a way to share clips between devices. Some use them to share clips with other people. Using any of these services to make clippings available between devices requires a conscious effort to put the material on their host.
>
> If what you want is true clipboard syncing then there are a few methods. [CloudClip](http://www.thinkbitz.com/cloudclip/) is what I would recommend. It doesn't have a web interface but it does sync your clipboards over the Internet using iCloud. There are also utilities that use Bluetooth like [Scribe](http://usescribe.com), but those require your devices to be near each other and connected by Bluetooth. There's also [Command-C](http://www.danilo.to/command-c) which works over WiFi.
>
> I still prefer Evernote because it's available everywhere, including the web and Windows. I also rarely wish that my clipboards were "automatically" syncing. I don't want sensitive data flying around unnecessarily. 

Of the three of these web-based clipboard services, Gabe prefers Evernote for its ubiquity. Previously, [he was a CloudApp user](http://www.macdrifter.com/2012/10/cloudapp-and-droplr.html). All three can handle images and formatted text. Droplr has the best support for code snippets. They all provide options for sharing links to clippings and are private by default. You can't really go wrong with any one of these services.

The CloudApp Mac app is a good option if just want a web-syncing clipboard tool. The Mac app is easy to use and provides a history view of the items you have uploaded.

{{ theme:partial src="image" title="CloudApp Clipboard" show="{{ number }}" file="Screen-Shot-20140126-154558.jpg" }}


> {{ theme:partial src="aside-header" voice="gabe" text="Why Do It?" }}
>
> I'd suggest thinking carefully about what you are trying to accomplish with clipboard syncing and sharing services. Most of my needs are simply to get bits of information from my Mac to an iOS device or vice versa. These are usually one off situations. I have never encountered a problem that required my entire OS X and iOS clipboards to be perfectly in sync. Most of the time, I really just need a bit of text on my phone that I have on my Mac. There are numerous ways to do this today.
>
> Most text editors sync through Dropbox before you can even open your other device. Before there were good reliable ways, I used Pastebot. However Pastebot hasn't been tocuhed in a very long time and is downright horrible on an iPad. I'd also suggest that [iMessage is a good basic solution](http://www.macdrifter.com/2012/02/the-imessage-clipboard.html) for getting information between Apple devices.

### Mac Applications

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="6:00" }}

* [iClip](http://www.irradiatedsoftware.com/iclip/)
* [CopyLess](http://www.maxbor.net/portfolio/copyless)
* [Alfred](http://www.alfredapp.com/)
* [Chrome Plain Text Passwords](http://www.theguardian.com/technology/2013/aug/07/google-chrome-password-security-flaw)
* [Alfred Clipboard History and Snippets](http://support.alfredapp.com/features:clipboard)
* [Cobook](https://cobook.co/)
* [TextExpander](http://smilesoftware.com/TextExpander/index.html)
* [Brett Terpstra's TextExpander Tools](http://brettterpstra.com/projects/te-tools/)

[iClip](http://www.irradiatedsoftware.com/iclip/) is a very good and highly visual clipboard manager. It's not as sophisticated as some of the tools Erik and Gabe dive into, but it may be the right fit if you just want an easy to use clipboard history browser on your Mac.

[CopyLess](http://www.maxbor.net/portfolio/copyless) is the one Gabe prefers, because of his penchant for removing all text styling on the clipboard. This area is so well served that it may just take one feature to win you over. CopyLess has good keyboard shortcuts and does a good job of preserving information like the source app in the history view.

{{ theme:partial src="image" title="CopyLess Clipboard" show="{{ number }}" file="Screen-Shot-20140126-163246.jpg" }}

> {{ theme:partial src="aside-header" voice="gabe" text="The pbcopy and pbpaste Commands" }}
>
> Mac OS X provides the built in Darwin functions [pbcopy and pbpaste](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/pbcopy.1.html). This is a simple way to write scripts that work with the system clipboard. I've used it in many [Python scripts](http://www.macdrifter.com/2011/12/python-and-the-mac-clipboard.html) and Keyboard Maestro macros without a problem.



### Alfred

If you are already an Alfred user, then you already have a pretty good clipboard history app. Just turn it on in the Alfred preferences and configure a shortcut. The history can go back as far as 3 months but it's user configurable. You can even exclude some application like 1Password from the history to avoid holding on to sensitive information too long.

{{ theme:partial src="image" title="Alfred Clipboard History" show="{{ number }}" file="Screen-Shot-20140126-154558.jpg" }}

> {{ theme:partial src="aside-header" voice="gabe" text="Local vs. Web History" }}
>
> Since applications like Keyboard Maestro and Alfred only exist on my Mac and do not sync information over the Internet, I don't have any concerns about sensitive information being recorded in the history. I use FileVault on my Mac, so in theory someone would need to know my master password to view the history. However, there are plenty of tools that sync information through the Internet and I would think twice about allowing them to grab my passwords.

### Keyboard Maestro

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="17:38" }}

[Keyboard Maestro](http://www.keyboardmaestro.com/main/) is a macro execution system for the Mac. Macros are simple to assemble, using a wide range of flexible pre-configiured actions. Many of the macros that Gabe describes use the standard actions available without any programming knowledge required. 

* [Mac Power Users 064](http://www.macpowerusers.com/2011/11/28/mpu-065-keyboard-maestro/)
* [Zett's Markdown Library](https://github.com/Zettt/km-markdown-library) 

> {{ theme:partial src="aside-header" voice="gabe" text="One Tool to Rule Them All" }}
>
> There are so many options for powerful and customizable workflow tools on the Mac that it can get a little messy. I've assigned each of my primary tool-chains to a different domain. All snippet expansion is done with TextExpander, unless there's something it just can not easily do. All keyboard shortcut actions are handled by Keyboard Maestro. All launcher and search functions are handled by Alfred.
>
> Clipboard actions was the first domain that it was difficult to restrain myself because TextExpander, Alfred and Keyboard Maestro each do something the other does not. I've settled on using Alfred for the basic clipboard history stuff and Keyboard Maestro for everything else.

The Keyboard Maestro clipboard history viewer can be as simple as a list of your most recent additions. You can also create and manage any number of custom clipboards separate from the system clipboard. The items in the clipboards are static and live on after reboots.

{{ theme:partial src="image" title="Keyboard Maestro History Viewer" show="{{ number }}" file="Screen-Shot-20140126-154701.jpg" }}


> {{ theme:partial src="aside-header" voice="potatowire" text="Down the Vim rabbit hole" }}
>
> Vim also has the ability to use multiple clipboards of a sort, and they are called registers.  If you have used Vim at all, you may already know a register as the thing you yank (copy) or delete (cut) into. This particular register is known as "unnamed," and there are [nine types of registers](http://vimdoc.sourceforge.net/htmldoc/change.html#registers) in all. Registers are identified first with the `"` character, and the unnamed register is really just named `""`. I'd like to highlight a couple of nice things about these registers.
> 
> As you yank (`y`) or delete (`d`, `c`, `s`, or `x`) you move your selection into `""` *and* into the numbered register `0` with a yank or register `1` for a delete or change. I often delete a few items before realized that I still needed some of the text, but the nice thing is all may not be lost, because each time you delete or change, the item in `1` is rolled to `2`, `2` to `3`, etc. Gone but not forgotten...well, except for item number nine. It actually is forgotten, so this is only good for a quick fix. If you know you will need some text again, put it into a named register. Note that the `0` is always the last yanked item, and it never rolls anywhere. That is because you don't delete text when you yank it, so it isn't lost the same way deleted text can be.
> 
> When the goal is text re-use, you can specify one of 26 single-letter named registers. A lower case number fills the register from scratch, but a capital letter appends to what's already in the register. I know, Vim *is* awesome. An example command to illustrate this is `"ryy`, which yanks the entire  line into the `r` register.  To get it back out of there, you could type `"rp` which puts (pastes) the yanked line into place after the cursor. 
> 
> It's easy to lose track of the state of your registers, so remember that you can type the command `:reg` to print out all of your defined registers. I could go on, but I hear the conductor playing me off the stage. 


Keyboard Maestro also provides a way to share the full contents of a clipboard instance between Macs on the same network. Jump into the preferences an enable the webserver on the Macs.

{{ theme:partial src="image" title="Keyboard Maestro Clipboard Sharing" show="{{ number }}" file="Screen-Shot-20140126-161509.jpg" }}

As an exmple of how simple it is to use Keyboard Maestro to do complex clipboard manipulations, Gabe describes a macro to paste the clipboard text through typing. That macro can be as simple as a single pre-made action. With a just a couple of tweaks, you can create a macro that responds appropriately to based on the content current on the clipboard. If it's text, it gets typed out, if not, it gets pasted as normal.

{{ theme:partial src="image" title="Type Clipboard Text" show="{{ number }}" file="Screen-Shot-20140126-154736.jpg" }}

Gabe also mentions a "plain text clipboard" in Keyboard Maestro. This macro copies text to a named clipboard and automatically removes all styling information.

{{ theme:partial src="image" title="The Plain Text Clipboard" show="{{ number }}" file="Screen-Shot-20140126-154748.jpg" }}

Keyboard Maestro also provides actions for doing very sophisticated things with text. For example, URL encoding a string by converting things like spaces, brackets and other "un-safe" characters with a single macro action.

{{ theme:partial src="image" title="URL Encode Clipboard" show="{{ number }}" file="Screen-Shot-20140126-154448.jpg" }}

### TextExpander

TextExpander is typically used to expand snippets but it also includes functions for working with the clipboard contents. You can also trigger a shell script or AppleScript to be executed during snippet expansion. That's an easy way to grab the clipboard and start ripping it apart.

Unlike Keyboard Maestro, TextExpander will only operate on text *after* it has been placed on the clipboard rather than converting selected text.

One place where TextExpander wins, is with the cursor position token. After expanding a snippet, the cursor can be repositioned within the string.

> {{ theme:partial src="aside-header" voice="gabe" text="The Clipboard Conduit" }}
>
> It's easy to think of the clipboard as just a temporary holding place between apps or for a short period of time. When I started to think of it as an entry point for scripts and macros, it transformed (pun intended) the way I worked. If I can get it on my clipboard, I can do almost anything with it.

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com.
