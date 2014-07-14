---
number: "077"
title: Learning Vim with Potatowire
type:
  - discussion
people:
  - Gabe Weatherhead
  - Erik Hess
  - Potatowire
topics:
  - command-line
  - text editing
  - vim
  - tmux
banner: /assets/img/vim.jpg
caption: '[US National Archives](https://www.flickr.com/photos/usnationalarchives/7158584668)'
download: >
  https://www.buzzsprout.com/7417/188306-077-learning-vim-with-potatowire.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158320675%3Fsecret_token%3Ds-PsuOC&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>'
soundcloudurl: 076-whats-living-in-gabes-closet
summary: >
  Potatowire finally leaves the womb,
  joining Gabe and Erik to discuss
  command-line text editing with vim. We
  learn how he started, why he uses a
  forty-year old text editor, and some
  cool things you can do when your hands
  never have to leave the keyboard.
showtype: discussion
post_images:
  - 
    image: /assets/img/vim-1st.jpg
    title: ""
  - 
    image: /assets/img/c64-prog-ref-guide.jpg
    title: ""
  - 
    image: /assets/img/hjkl.jpg
    title: ""
post_files: ""
---

> {{ theme:partial src="aside-header" voice="potatowire" text="This is weird" }}
>
> This is a strange episode for me. Usually I am the guy who comments from
outside the conversation, and I am often the one who stitches the links and
asides together with narrative. In this case Gabe and Erik asked me to come
into the conversation as it happened, rather than afterwards.
> 
> This also meant that I had to listen to my own recorded voice, which I usually
try to avoid. Anyway, what follows is a long discussion about Vim and the
terminal. I am very strong proponent about Vim, but I *try* not to browbeat
people about it, since I know that it works best for me, and not necessarily
for everyone else. Though it should be. Damn it, that slipped out.
>
> Also, if it seems like my attention occaisionally wandered, my kids came home during the middle of the recording, and my daughter, in particular, thought she ought to have my undivided attention periodically. I am not a professional.

{{ theme:partial src="section-header" title="Introducing Potatowire" url="{{ soundcloudurl }}" time="0:00" }}

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="1:50" person="potatowire" quote="I like my friends online where I can keep an eye on them." }}

* [MacVim](https://code.google.com/p/macvim/)
* [Dr. Bunsen - The Text Triumvirate](http://www.drbunsen.org/the-text-triumvirate/)
  * [zsh](http://www.zsh.org/) and [Oh-My-Zsh](http://ohmyz.sh/)
  * [Vim](http://www.vim.org/)
  * [tmux](http://tmux.sourceforge.net/)

The story about how I became so fascinated by Vim and the command line is not
terribly glamorous or interesting. I think [Dr.Drang](http://twitter.com/drdrang) has a much better story, leaving aside some
of the [great material](http://web.cecs.pdx.edu/~kirkenda/joy84.html) that
exists from the formative years of these tools.

Like many kids, I liked video games before I liked computers, and in my case,
the two first became connected by the [Commodore 64](http://en.wikipedia.org/wiki/Commodore_64), which was both computer and
game platform. It wasn't really great at either function, but I didn't know
that. I loved [Jumpman](http://en.wikipedia.org/wiki/Jumpman) and
[Popeye](https://www.youtube.com/watch?v=rCwGxOTfUXM), and that even caused me
to dig into the [Programmer's Reference Guide](http://www.commodore.ca/manuals/c64_programmers_reference/c64-programmers_reference.htm)
to try to write my own game.

{{ theme:partial src="image-set" show="{{ number }}" title="Memories" file="c64-prog-ref-guide.jpg" }}

I may have [stunted my programming
growth](http://cdn.motinetwork.net/motifake.com/image/demotivational-poster/1004/smoking-cigarettes-demotivational-poster-1272240833.jpg)
by starting too young though, because I didn't go back to programming again
until college.

It was also in college that I really realized that the command line lurked
there underneath the surface of all that pretty [GUI](http://en.wikipedia.org/wiki/Graphical_user_interface). I don't remember what I was
trying to do, but I was having some trouble accomplishing a task with the
[wonderful computer](http://en.wikipedia.org/wiki/Intel_80486DX2) that I had
been given, and the guy who lived across the hall from me asked me why I didn't
just do *whatever it was* in [DOS](http://en.wikipedia.org/wiki/DOS) instead of
in [Windows 3.11](http://toastytech.com/guis/win311.html). I dug in a little,
and the command line had me hooked.

Fast forward to 2004, and I had a little extra money that I excitedly plunked
down to buy a [PowerBook G4 1.5
17"](http://www.everymac.com/systems/apple/powerbook_g4/faq/differences-between-12-15-17-powerbook-g4-models-introduced-april-19-2004.html).

> {{ theme:partial src="aside-header" voice="potatowire" text="The management regrets the error" }}
>
> I said that I bought my new Mac in 2007, but I meant *2004*. Was there something 
> else that happened in 2007?

It was a revelation. As I poked around this new-to-me [OS
X](https://twitter.com/potatowire/status/473873091354177536) I discovered the
hidden settings made possible by [`defaults
write`](http://www.defaults-write.com/). I was in love with the command line
all over again.

My computer use [took another leap forward in its evolution](https://www.youtube.com/watch?v=RlGqVk_9JLg) when I read a post
on [O'Reilly's Radar](http://radar.oreilly.com/), which has since been lost from both my
mind and my bookmarks, about this editor called Vim that I really knew nothing
about. This was interesting, but nothing *really* changed for me until I read [Steve Losh's](https://twitter.com/stevelosh) post about [Coming Home to
Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/). I thought it was
wonderful and compelling and I [switched text
editors](http://en.wikipedia.org/wiki/TextMate) on the spot.

{{ theme:partial src="section-header" title="Learning about the tools" url="{{ soundcloudurl }}" time="11:36" }} 

#### tmux - The Terminal Multiplexer

[Tmux](http://tmux.sourceforge.net/) is a terminal multiplexer. That didn't mean much to me when I was first told that either, but the idea is that you can have multiple terminal sessions in a single terminal window or emulator. You can organize these into *panes* by splitting the windows into sections, or into *windows*, which most of us would think of as tabs. Another main feature is that you can *detach* from a session, and anything you have in progress will continue on while you are away. When you later *attach* back to your session, everything is as you left it, even though you may have closed your terminal window, restarted your computer, or have decided to `ssh`-in using your phone. 

Much of the discussion in the audio was devoted to Vim, and tmux alone is worthy of its own show, but if this has piqued your interest, there are countless resources available online, from [basic](http://mutelight.org/practical-tmux) [crash courses](http://robots.thoughtbot.com/a-tmux-crash-course) to the [more exhaustive](http://www.openbsd.org/cgi-bin/man.cgi?query=tmux&sektion=1). While I do [wonder about the cost](http://twitter.com/potatowire/status/442691860629565441), the [Pragpub tmux book](http://pragprog.com/book/bhtmux/tmux) is a very good way to go from zero to tmux-functional in a couple days. In case you're wondering, I remained too cheap to buy it, but a [friend](https://twitter.com/themindfulbit) gave it to me, and I can personally vouch for it as a good starting point.
 
#### Vim - Everything Improved

Now, those of you familiar with Vim know that it isn't very easy to switch to without significant forethought. For starters, it is ugly right out of the box. Really ugly. Second of
all, once you try to type something into the ugly window, say, "hello
world," you will actually see this:

{{ theme:partial src="image" show="{{ number }}" title="Windows version, so even uglier" file="vim-1st.jpg" }}

This is because Vim opens into [*Normal
mode*](http://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes#normal_.28command.29).
This is correct, right, sweetness and light, etc.; you just don't know it yet. So, a
text editor that won't let you just type text. Just bear with me. What happens
when you start typing, "hello world" in normal mode is nothing until you get to
'l' when it tries to move the cursor to the right, but it can't because that is
[virtual space](http://usevim.com/2012/09/21/vim101-virtualedit/), since you
haven't yet "typed" anything. It's not until you get to the "o" that anything
other than a [beep or visual bell](http://en.wikipedia.org/wiki/Bell_character) happens, because when you type the "o" you
are telling Vim to "open a line below this one and go into [*Insert
Mode*](http://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes#insert_.28and_replace.29)."
After this, you can type " world" with impunity. Insert mode is where you can
type like usual. At this point you may just want to quit Vim an move on. Wait,
how in the Sam Hill do you quit Vim? For that you need to enter [Command-line or Command mode](http://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes#command-line) by typing `:`.

Vim doesn't seem to like beginners.

With this sort of first impression, why does anyone use Vim if they don't have
to? Well, in my mind the biggest reason is that Vim rewards hard work. It
rewards hard work with efficiency and with value, and the main reason I 
say this is because of how the Vim vocabulary functions.

##### Vocabulary

Vim has its own vocabulary, and once you learn it it applies everywhere.
There are a lot of good resources about this language, but the basics are pretty easy to grasp. The general idea
is that there are *verbs*, *objects*, and *modifiers*. To keep it simple(er),
we are going to talk about all of these in Normal mode.

The verbs fall into the general categories of *movement* and *action*. This is my distinction. The most
familiar way to *move* around is with the arrow keys, or in better Vim fashion,
using the `h`, `j`, `k`, and `l` keys. 

{{ theme:partial src="image" show="{{ number }}" title="hjkl" file="hjkl.jpg" }}

This isn't very efficient though, and Vim lets you make bigger moves. A basic
but useful subset of these bigger moves can be found in this table (each row 
has a command and its opposite):

| Key    | Moves you to: | Key    | Moves you to: |
| :----- | :------------ | :----- | :------------ |
| `gg` | Top of the buffer (file) | `G` | Bottom of the buffer |
| `0` | Beginning of the line | `$` | End of the Line |
| `(` | Beginning of the "sentence" | `(` | End of the "sentence" |
| `{` | Beginning of the "paragraph" | `}` | End of the "paragraph" |
| `W` | *Forward* to the beginning of the next WORD | `B` | *Backwards* to the beginning of the next WORD |

I worked from big movements to small, and I left plenty of things out. Just
like when learning a foreign language, you can function with limited
vocablulary, you just won't be very eloquent. 

This small subset of the Vim "language" will allow you
to move around, and once you have mastered these, you can expand your word list using [one
of](http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html) the many
[great cheatsheets](http://vimcheatsheet.com/) that exist, or you can use my
method of putting a few new things you want to learn on a Post-it stuck to your
monitor. 

One other note on the table above, is that Vim distinguishes between
words and WORDS. There is a pretty good description of what this means
[here](http://stackoverflow.com/a/14390568), but stated simply, a "word" is
literally a word, while a "WORD" is *whatever* surrounded by whitespace. I
think WORD is the better choice for us right now, because it is usually what you want.

This is great, you can move around, but why is this any different from using
keyboard shortcuts? The biggest way they're better in my opinion is that these
*movements* can be combined with the *actions* I mentioned earlier. Some
examples of actions would be `d` to delete, `y` to yank (Vim for copy), `c` to change,
and `v` to select. You can combine the *actions* with the *movements*,
so for example, `y$` yanks from the cursor to the end of the line, `d}`
deletes from the cursor to the end of the paragraph, etc. One final note
here, when you delete in Vim, you are in effect, cutting the text,
because the contents are moved into the unnamed register. I wrote more
about that in the [clipboard episode of
TD](http://technicaldifficulties.us/episodes/065-stupid-clipboard-tricks#registers).

The last part of Vim vocabulary I'd like to highlight is the *object*.
Now, the movements above would qualify as objects when combined with the
actions in my examples, but some actions always require objects. Two good examples of
this are `t`, meaning "till," and `f`, meaning "find." These both operate 
similarly, and both are probably best explained by an example.

Let the `x` in "hello world" represent the cursor position.

For `hxllo world`, `tw` yields `helloxworld`, and `fw` yields 
`hello xorld`. To elaborate a bit, the cursor moves forward until it finds the character
that was the *object*, and it either stops right before the character or
right on it. Because Vim seeks to be logical, `F` and `T` work the same
way, only the cursor moves backwards. This relationship between uppercase and lowercase letter commands recurs often, and it is another example of how you can learn a Vim convention once and apply it everywhere

The last thing I will say about vocabulary is to point out that this
only scratches the surface. I will leave the following as exercises for the 
reader: try typing any of the previous commands with a `2` in front, and
try typing a `.` after any of them. If you want to explore this language analogy a little more, try
these links:

* [Vim Text Objects: The Definitive Guide](http://blog.carbonfive.com/2011/10/17/vim-text-objects-the-definitive-guide/)
* [Vim as
  Language](http://benmccormick.org/2014/07/02/learning-vim-in-2014-vim-as-language/)
* This is part two of a serious that [Ben 
McCormick](http://benmccormick.org/2014/06/30/learning-vim-in-2014-the-basics/benmccormick.org)
just started, but man, it looks like it will be a great help for
those starting out.

> {{ theme:partial src="aside-header" voice="potatowire" text="Herr Doktor" }}
>
> I talked a bit in the audio about Dr. Drang's thoughts on why Vim doesn't work with theway he writes, as highlighted in [this post](http://www.leancrew.com/all-this/2011/11/the-siren-song-of-vim/). I seem to write in a similar way as he does, but while the modes bothered him, I always am ready to edit, because I spend most of my time in Normal mode. I used to always find myself in the the wrong mode, but that changed for me once I decided that I would train myself to go back to Normal mode every time I wasn't actively typing. This worked for me. Now my left pinky continually pecks at the Escape key any time I am deep in thought. I get a lot of weird looks in meetings, where there is usually no keyboard in sight...
>
> While I'm talking about Dr. Drang (as I so often do here), you really ought to go back and read his series "Text Files and Me." Seriously, go read the whole thing, I'll wait.
> 
> * [Part 1](http://www.leancrew.com/all-this/2011/02/text-files-and-me-part-1/)
> * [Part 2](http://www.leancrew.com/all-this/2011/03/text-files-and-me-part-2/)
> * [Part 3](http://www.leancrew.com/all-this/2011/04/text-files-and-me-part-3/)
> * [Part 3.5](http://www.leancrew.com/all-this/2011/04/text-files-and-me-part-3-5/)
> * [Part 4](http://www.leancrew.com/all-this/2011/07/text-files-and-me-iv-bbedit-and-textmate/)

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="24:19" person="potatowire" quote="Next thing you know I'm playing a song in Pandora" }}

{{ theme:partial src="section-header" title="Tweaking your setup" url="{{ soundcloudurl }}" time="37:37" }}

As I earlier said, Vim is ugly out of the box, and some of its settings could benefit from some tuning. Vim makes this pretty easy...well Vim easy, at least. There are global settings for Vim which can be applied to all users, but most people keep all of their personal settings in a `.vimrc` file which lives in the [home directory](http://en.wikipedia.org/wiki/Home_directory). This is just a plain text file that contains customizations written in the Vim Language, and sometimes I think 10% of Github is hosted `.vimrc files`. There is plenty of ready help online.

#### Custom colors

I have been using [Ethan Schoonover's](https://twitter.com/ethanschoonover) [Solarized](http://ethanschoonover.com/solarized) color scheme ever since I first saw it, but I recognize that others remain color-curious. For those in that camp, I don't think there is a better comparison-shopping resource than [this](http://daylerees.github.io/). All of these themes are available in [this repository](https://github.com/daylerees/colour-schemes), so switch around to your heart's content. Vim makes installing a new color scheme as simple as copying the folder to the `~/.vim/colors` directory and typing `:colorscheme solarized` or `:colo solarized`. Vim has a short version of all common commands, and the convention for writing these is of the form `:colo[rscheme]`, with the part in brackets being optional. I'll write it this way from now on.

> {{ theme:partial src="aside-header" voice="potatowire" text="For ST refugees" }}
>
> I mentioned the [Spacegray](https://github.com/kkga/spacegray) color scheme, and if you want it go [here](https://github.com/chriskempson/base16-vim), because it is based on the [base16](https://github.com/chriskempson/base16) project.

#### Keyboard Mapping and the Help System

Gabe asked about seeing a list of all the key mappings, and the way to get a listing of your custom mappings all at once is to type `:nmap`, `:imap`, `:vmap`, etc. You can see a summary of all default mappings by utilizing `:h[elp] index`. I didn't know about these  commands when we recorded the episode and had previously just taken a look in my .vimrc when something in Vim surprised me. Now, this provides a listing and general summary, but it doesn't really teach you anything. For that purpose, let's venture into the help system.

The help system in Vim is very capable, and I have no problem saying that it is the best in any software application I have ever used. This being Vim, some homework is required. To drive that point home, you can even run `:h[elp] help` (which opens helphelp.txt), but I'll highlight a number of techniques here so that you can be pretty capable right off the bat.

First of all, if you are browsing help just to learn, you probably want to have it take up the whole window instead of having it split. If so, type `<C-W>o`. `C` is how the Control Key is represented in Vim convention and the `<>` indicates the use of a [modifier or special key](http://en.wikipedia.org/wiki/Modifier_key), `Control` plus `w` then `o` in this case,  and you'll see this sort of thing if you read about Vim on the interwebs. I mention this becuase my small mind was cunfused by this for a little while. Anyway `<C-W>` is the way that you talk to the window, and in this case you are typing saying "Window, only," because you want the active window to be the only window.

Regardless of how you get there, once you are in the help files, you can get away with just typing `/` to search and then navigate by going forward with `n` and backwards with `N`. That works fine, and I did it for years, but it is much better to utilize the tags in Vim help. With your cursor in `|bookmark|`, typing `<C-]>` will search for where that `*tag*` is defined in the help files. Even better, if you see an interesting term in the documentation, `<C-]> will search the help tags for whatever `WORD` (remember that distinction earlier) the cursor is on. 

Now, as you move around from tag to tag, you may want to go back, and the way to do that is either with `<C-T>` (think "Control Tag"), which jumps you back one older entry in the tag stack, or with `<C-O>` (think "Control Older"), which jumps you back one older entry in the "jump list" of old cursor positions (`<C-I>` takes you to newer cursor positions in the jump list). Jumping by cursor position is good if you have used `/` to search a little within the help file.

All of this assumes that you know what you what the help subject you want is, but Vim provides some tools if you don't know exactly what you want. The first step here is to ensure that "wildmenu" on with `:set wildmenu`. Wildmenu in Vim allows for `<Tab>` completion in command mode, and it is fantastic. In this case, wildmenu means that you can type `:h patt<Tab>` and Vim will cycle through the available options. Even better, because sometimes the list of potential matches is long, you can  type `:h patt<C-D>` and see a list of the available possibilities.

Another option when you are shooting blind if the use helpgrep by typing `helpg[rep] {pattern}`. You can navigate through the matches with the `:cn[ext]` or `:cp[revious] to jump around between the matches.  Or use `:cw[indow]` to get the list of matches.

One final assistance I can recommend is the [Beautiful Vim Cheat-Sheet](http://vimcheatsheet.com/). I used an older one when i was starting out, but this version provides a nice logical layout of the basics for getting around Vim. I like it.

#### Plugins

I talked about this in the audio, but in general, I am against adding plugins to Vim too early. In a similar vein, I don't think it is wise to just start with someone else's `.vimrc`. I did that when I started and to this day, I have lingering confusion over whether some mappings are a part of baseline Vim or not. Had I to do it over again, I would work with a barebones installation (with Solarized installed though. I am not an animal), and make changes to my installation only when I reached repeated friction points in my workflow. I would also better learn the help system right away. As a counterpoint, there are full Vim "Distributions" like [Janus](https://github.com/carlhuda/janus), so you are free to go in the completely opposite direction.

With my preamble out of the way, here are the plugins that I mentioned on the show:

* [Pathogen](https://github.com/tpope/vim-pathogen) - This plugin management system developed by [Tim Pope](https://twitter.com/tpope) is probably the main reason that the Vim bundle ecosystem is so healthy. Pathogen makes adding a plugin as easy as copying a folder into your `.vim` folder.
* [Vundle](https://github.com/gmarik/Vundle.vim) - In my opinion, the only thing better than managing plugins through the filesystem is managing them right in the `.vimrc`. Using Vundle you simply put the location of a plugin's repository in your `.vimrc` and Vundle clones the repository and puts everything in its proper place after running `:PluginInstall` from within Vim.
* [YouCompleteMe](https://github.com/Valloric/YouCompleteMe) - YCM, as the cool kids call it, is a code-completion engine for Vim, and I am in love with it. It works in virtually any language, and it is pre-compiled so that it is fast. I have run it locally and on a remote server, and it always seems snappy and responsive. The project page has some gifs showing it in action, so take alook there to see some pictures worth far more than a thousand of my words.
* [UltiSnips](https://github.com/SirVer/ultisnips) - This text expansion tool is the next of new-to-me plugins that I am madly in love with. Similar in capability to the much-beloved [TextExpander](http://smilesoftware.com/TextExpander/index.html), this tool allows fill-in snippets, shell script expansion, and quick editing snippets while you work. The author has some great screencasts beginning with [this one](http://www.sirver.net/blog/2011/12/30/first-episode-of-ultisnips-screencast/), and the always-great [Drew Neil](https://twitter.com/nelstrom) has begun a series on [Vimcasts](http://vimcasts.org/episodes/meet-ultisnips/). My favorite feature may be its integration with YouCompleteMe, and it allows for fuzzy-search to find my snippets, because, as I talked about in the audio, I can't remember keyboard shortcuts for the life of me. The starter set of snippets I mentioned in the audio can be found [here](https://github.com/honza/vim-snippets).
* [Easy Motion](https://github.com/Lokaltog/vim-easymotion) - This plugin takes Vim's already great movement to the next level with some additional functionality and creative text highlighting. I am beating a dead horse, but learn baseline Vim motion before installing this. [I cannot be held responsible for my actions](http://media.tumblr.com/tumblr_lqeto3WZ3S1qdd6a1.gif) if you ignore this advice.

#### Managing Dotfiles

Managing and tweaking your dotfiles can be an addictive pursuit if you're not careful. We talked about it a little during the audio, but it is probably worth its own show (yeah, right. Like Gabe and Erik will ever let me near a microphone after this episode). For now I'll just point out a couple of good resources to learn more.

* [Git](http://git-scm.com/) - It used the goal of putting my dotfiles online as the impetus to actually learn Git, and I now know enough fix every third thing I screw up. I like [Bitbucket's Git tutorials](https://www.atlassian.com/git/tutorial/git-basics) best, and their [Bitbucket 101 documentation](https://confluence.atlassian.com/display/BITBUCKET/Bitbucket+101) is great for learning about either Git or [Mercurial](http://mercurial.selenic.com/).  
*[Bitbucket](https://bitbucket.org) - I keep everything on Bitbucket, because it allows me to have private repositories for nothing, and as I just demonstrated, I like their documentation. I don't know if they are really better about their institutional misogyny or not, but I think it's safe to say they are [*better* than some others that come to mind](http://techcrunch.com/2014/03/15/julie-ann-horvath-describes-sexism-and-intimidation-behind-her-github-exit/).
* [dotfiles.github.io](http://dotfiles.github.io/) - Earlier criticism aside, I don't know of a better place to go to learn more about how smart people manage their dotfiles. I don't have do give my opinion about simply installing someone's complete dotfiles system, [do I](http://media.giphy.com/media/rkDS4KEVbMHKw/giphy.gif)?

{{ theme:partial src="section-header" title="Working Remotely" url="{{ soundcloudurl }}" time="61:55" }}

I do some work when mobile, as in while moving, so I often am subject to the pain of spotty internet connections. I have found no better tool than [Mosh](http://mosh.mit.edu/) to help me deal with this issue. Mosh, for "Mobile Shell" details a number of features on its page, but my favorite is "intelligent local echo." This is what I talked about in the audio as "intuiting" the response, but the idea here is that it doesn't wait for server response before locally echoing what was typed. This means that typing delay virtually disappears. You can [find some technical](http://reproducingnetworkresearch.wordpress.com/2013/03/13/cs244-2013-evaluation-of-mosh-mobile-shell-performance-results/] details online or you consider it magic, like I do.

I also alluded to my love affair with [DigitalOcean](https://www.digitalocean.com/?refcode=729ca113e3c7), and it is love, to be sure. I don't like to be tied to a particular platform or OS at this point in my life, so I am slowly moving everything that is essential to my workflow onto my own online host. Right now, that host is DigitalOcean. They give me complete control of my own "droplet" (read: `sudo` and root access), so it is my server and their hosting. It also feels *very* fast, and I think this is probably due to magic too. I can use Vim on this server, with no noticeable lag, from any device, and the installation script I talked about in the audio can clone this setup to any Ubuntu system, so I don't feel any lock-in. The script is four-for-five now, so maybe it does work...

> {{ theme:partial src="aside-header" voice="potatowire" text="Producer's Note" }}
>
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/), or feel free to send an email to me at potatowire dot com.
