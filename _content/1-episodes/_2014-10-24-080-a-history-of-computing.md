---
show: td
number: "080"
title: A History of Computing with Dr. Drang
type:
  - interview
people:
  - Gabe Weatherhead
  - Erik Hess
  - Dr. Drang
topics:
  - computing
  - punchcards
  - apple
  - unix
banner: /assets/img/not-drang.jpg
caption: '[Internet Archive](https://www.flickr.com/photos/internetarchivebookimages/14783937073)'
download: >
  http://www.buzzsprout.com/7417/206997-td-080.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169175884%3Fsecret_token%3Ds-jeIew&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
soundcloudurl: techdiffpodcast/080-a-history-of-computing
summary: >
  Dr. Drang returns to explore his
  background in computing from the late
  1970s to today. Along the way we
  discover what happens when you mess up a
  punchcard, what Linux was like in the
  early days, why he uses a Mac today, and
  his perspectives on the near future of
  computing.
showtype: interview
post_images: ""
post_files: ""
---

{{ theme:partial src="section-header" title="Our Favorite Internet Snowman" url="{{ soundcloudurl }}" time="0:00" }}

Dr. Drang is the pseudonymous and occasionally cranky genius-snowman-engineer behind [*And Now It's All This*](http://leancrew.com). You can also find him on Twitter: [@drdrang](https://twitter.com/drdrang). We asked him to join us to discuss his personal computing history and share his thoughts on the future of Apple's desktop and mobile platforms.

{{ theme:partial src="image" title="" caption="[NASA](https://www.flickr.com/photos/nasacommons/7538102080/in/photostream/)" show="{{ number }}" file="favorite-snowman.jpg" }}

Dr. Drang didn't begin using a computer until he went to college in the early 1980s. The lone computer at his high school was tied up by a data processing class, which was focused on teaching data entry via punchcards in a vocational setting.

The computing world was at the dawn of a revolution. While the [Apple II](http://en.wikipedia.org/wiki/Apple_II) had been for sale for a short while at this point, the [Commodore 64](http://en.wikipedia.org/wiki/Commodore_64) wouldn't be released until 1982. Popularization of home computing had just begun, and the [Xerox Star](http://en.wikipedia.org/wiki/Xerox_Star) offered one of the first commercially available graphical user interfaces for a cool $75,000 ($195,000 in today's dollars).

It was in this environment that Dr. Drang began his computing journey.

{{ theme:partial src="section-header" title="Punch Cards and FORTRAN" url="{{ soundcloudurl }}" time="3:35" }}

Dr. Drang's first exposure to computers was learning FORTRAN in an Introduction to Programming course his Freshman Year of collge. He believes he was one of the last people to learn computing via punch cards and [Keypunch Machines](http://en.wikipedia.org/wiki/Keypunch_machine). Wikipedia has a [thorough write up](http://en.wikipedia.org/wiki/Punched_card) of the IBM style punched cards.

{{ theme:partial src="image" title="" caption="[Autopilot](http://en.wikipedia.org/wiki/File:IBM_129_Card_Data_Recorder.jpg)" show="{{ number }}" file="ibm129-keypunch.jpg" }}

Punch cards were quite unforgiving, and if you made a mistake on the keypunch machine you had to go back and re-punch the whole card from the beginning. The top section of the card would print what you were punching in ink, and below that the rectangular holes punched into the card would allow it to be read when pulled into the computer. Often the ink would run out and you couldn't tell what you'd punched. For some advanced students that didn't matter because they could read the holes.

{{ theme:partial src="image" title="A Punchcard Before" caption="" show="{{ number }}" file="punchcard-new.jpg" }}

{{ theme:partial src="image" title="A Fortran Punched Card After" caption="" show="{{ number }}" file="FortranCardPROJ039.jpg" }}

One card was used per line of [FORTRAN](http://en.wikipedia.org/wiki/Fortran) code, and they'd stack up in a bin. Then the cards would be taken to a special window where they'd be taken and run. Later (*an hour or more later*) you'd get the output back in stacks of folded printer paper.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="8:35" person="drang" quote="You'd take them to the High Priests of the Mainframe Computer" }} 

If you discovered that there was a bug in your program, you had to go find it and repeat the process. As you'd probably guess, this process took a significant amount of time.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="9:49" person="gabe" quote="So you'd only get about eight mistakes a day?" }} 

Drang thinks that this process has possibly caused him to be more deliberate than he would if he learned computing in an interactive, terminal-based environment. He tends to write more before he tests.

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="fortran-pad.jpg" }}

Since time on the Keypunch Machine was almost as limited as time on the mainframe, students purchased special pads of paper to write programs out by hand first. Dr. Drang used them for a while before realizing that they weren't much more helpful than normal paper.

> {{ theme:partial src="aside-header" voice="drang" text="Make Mistakes Faster" }}
> 
> Rich Siegel (of [BBEdit](http://www.barebones.com/) fame) [used to work](http://appstories4girls.wordpress.com/2013/07/12/rich-siegel/) for a company called THINK, which made Lightspeed Pascal and LightspeedC for early Macs. They ran an ad with a tagline "Make mistakes faster" because it was one of the first interactive IDEs that gave you feedback when it experienced a bug.
>
> {{ theme:partial src="image" title="" caption="" show="{{ number }}" file="make-mistakes-ad.jpg" }}
>
> There's a nice interview with Rich  on [episode 36](http://www.imore.com/debug-36-rich-siegel-bbedit) of [Debug](http://www.imore.com/debug) in which he talks about his days with Think. 

{{ theme:partial src="section-header" title="Enter the Terminal" url="{{ soundcloudurl }}" time="17:30" }}

Programming languages at the time were much less helpful and fluid than today. They had to be "closer to the metal" due to the limitations of the machines involved. Statements were closer in syntax to how a computer "thinks" about problems than how people think about them.

When Dr. Drang began working in a terminal in his second programming course later in his undergraduate years (1980-1981). The terminals available to students were "dumb" timesharing terminals that were either hardwired or modem-connected to the mainframe, and they were scattered around campus. He even had one in his dorm building. These terminals did have screens, but he could only edit one line of code at a time using ICE (Illinois Central Editor). 

Line editors (like the [better known](http://en.wikipedia.org/wiki/Ed_(text_editor)) `ed`) are the ancestors of more modern visual editors like `vi`. You could view up to 24 lines at a time and move back and forth in the program from the terminal, but you couldn't easily edit multiple lines of code at once.

{{ theme:partial src="image" title="The DEC LA36 DECwriter II Terminal" caption="" show="{{ number }}" file="decwriter.jpg" }}

DEC made some printer terminals at the time that used fan-fold paper instead of a screen. While wasteful, it at least allowed you to see all your code at once. They were also helpful for turning in programming assignments.

{{ theme:partial src="section-header" title="Programs and Languages" url="{{ soundcloudurl }}" time="23:49" }}

Dr. Drang was an engineering student rather than a computer science major, which influenced the kind of programming he was doing and languages he was using at the time. He started with elementary FORTRAN, learning loops and other basic programming tasks. CS students learned other languages that are dead now, but FORTRAN has remained in use.

At the time he took programming courses simply because he had to, but in his senior year he had a technical elective class available and decided to take a course in [Pascal](http://en.wikipedia.org/wiki/Pascal_(programming_language)). That was the course where he feels he first learned programming, partially because his professor was young, energetic and interested in teaching the craft of [structurecd programming](http://en.wikipedia.org/wiki/Structured_programming).

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="dogfooding.png" }}

The capstone project of the class was to write their own line editor, then use it to edit its own source code. This is called ["dogfooding"](http://www.newrepublic.com/article/115349/dogfooding-tech-slang-working-out-glitches) which is an expression that has risen to popular culture out of nerd culture at Microsoft. It generally means using your own creation for real work and not just as a QA target. The expression represents something that is fairly commonplace now in software development. Dogfooding can often reveal bugs and awkward interactions models that scripted testing may not.

{{ theme:partial src="section-header" title="The Computer as Tool and Toy" url="{{ soundcloudurl }}" time="30:43" }}

The first time Dr. Drang remembers using a computer as a tool rather than an end in itself was during graduate school. He was assisting his professor in teaching a masters-level class, and wrote a program to do reliability calculations to help create assignments for the students. 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="32:42" person="drang" quote="If you really want to know a topic... sign up to teach the class" }}

What this experience helped him realize is that he had to first teach the computer to do the problem, and discover all the corner cases the problem could encounter. This is the best way to really understand how a process works. It makes you get past all the hand-waving and get to the core of the process and all its exceptions.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="33:52" person="drang" quote="The key with programming is that you have an absolutely unforgiving student" }}

Dr. Drang's first personal computer was a Commodore 64 he bought in graduate school, but his first Mac was a 512K in spring of 1985.

{{ theme:partial src="image" title="Drang's First Mac" caption="" show="{{ number }}" file="mac512k.jpg" }}

He wrote his PhD thesis and many of the supporting programs for it on the 512K using Mac Pascal. It was the machine that started him down the road of playing with computers for fun and work.

> {{ theme:partial src="aside-header" voice="gabe" text="My First Computer" }}
>
> My first computer was a calculator. It was a [Texas Instruments TI-74](http://en.wikipedia.org/wiki/TI-74) pocket computer. It was hard to call it a computer even then. But it was programmable using BASIC and it was the first time I could write down logic and have it repeatedly executed with different input. It was a computer.
> 
> Programming that little piece of plastic was not fun. It displayed one line at a time and forget any reasonable stack trace. But it made me think and plan my programs carefully because for that exact reason. Dumb mistakes were even less fun than now.

{{ theme:partial src="section-header" title="Fun with UNIX" url="{{ soundcloudurl }}" time="35:38" }}

In 1996 Dr. Drang was getting tired of the Mac OS and its multitasking limitations. It used [cooperative multitasking](http://en.wikipedia.org/wiki/Computer_multitasking#Cooperative_multitasking) which was nearly the same as no multitasking at all. Programs had to grant time for multitasking explicitly in the code, which was inconvenient at best and unstable at worst. Crashes were common.

{{ theme:partial src="image" title="" caption="" show="{{ number }}" file="beos.png" }}

At the time Apple was looking for another company to purchase. It ended up being Steve Jobs's [NeXT](http://en.wikipedia.org/wiki/NeXT) with its [NeXTSTEP](http://en.wikipedia.org/wiki/NeXTSTEP) operating system, but was rumored to be [Be](http://en.wikipedia.org/wiki/Be_Inc.), founded by [Jean-Louis Gassee's](http://en.wikipedia.org/wiki/Jean-Louis_Gass%C3%A9e) and the maker of [BeOS](http://en.wikipedia.org/wiki/BeOS). Regardless, Drang took that as a sign that Apple was aware that they didn't know how to write a good OS and wouldn't for a few years. He started looking at alternatives.

He chose Linux, which was as informative an experience as his first class in Pascal. He enjoyed returning to the command line, as well as the UNIX philosophy where single purpose tools are strung together to do more powerful tasks. That philosophy has stuck with him to this day.

{{ theme:partial src="image" title="Red Hat Linux 4.2" caption="" show="{{ number }}" file="redhat42.png" }}

In the late 1990s, Linux was young but tremendously stable. His first distribution was Red Hat 4.1 or 4.2. While it was stable, it wasn't incredibly user friendly, and when he switched back to a Mac in late 2004 it was because he'd grown tired of being his own system administrator. At that point OS X had reached a point where he could keep his UNIX workflow while being freed of the "[fiddly](http://en.wikipedia.org/wiki/Dependency_hell)" parts of running Linux as a primary OS.

Nevertheless, the pain of managing his own Linux system taught him a great deal about how to work in the UNIX environment. Those skills have helped him through the present day, both personally and professionally. Most of his report generating workflows rely on the command line and they've been stable for more than a decade.

{{ theme:partial src="section-header" title="Back to the Mac" url="{{ soundcloudurl }}" time="45:30" }}

After returning to the Mac, Dr. Drang's workflow has evolved a greater balance between command line and GUI programs. He started using BBEdit alongside his terminal, and could work with those programs to get his day-to-day work done. He used to make graphics directly in [PostScript](), but now uses OmniGraffle. Acorn is his go-to image editor for photographs if he needs something more capable than Preview.  

{{ theme:partial src="app" show="{{ number }}" image="bbedit.png" name="BBEdit" description="Specifically crafted in response to the needs of Web authors and software developers, BBEdit provides an abundance of high-performance features for editing, searching, and manipulation of text." price="$49.99" developer="http://www.barebones.com/products/bbedit/" appstore="" }}

{{ theme:partial src="app" show="{{ number }}" image="omnigraffle.png" name="OmniGraffle" description="Need a diagram, process chart, quick page-layout, website wireframe or graphic design? OmniGraffle can help you make eye-popping graphic documents quickly." price="$99.99" developer="http://www.omnigroup.com/omnigraffle/" appstore="https://itunes.apple.com/us/app/omnigraffle-6/id711830901?mt=12" }}

{{ theme:partial src="app" show="{{ number }}" image="acorn.png" name="Acorn" description="Everyone needs to edit images at some point, but not everyone has the time to learn complicated super pricey image editing programs. This is why we created Acorn." price="$29.99" developer="http://flyingmeat.com/acorn/" appstore="https://itunes.apple.com/us/app/acorn-4-image-editor-for-humans/id634108295?mt=12" }}

All that being said, Dr. Drang still keeps the Terminal app alive so he can get one at a moment's notice. He's a Mac user not just because it's a Mac, but because it's UNIX plus.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="51:53" person="drang" quote="If the terminal is no longer available I have to leave" }}

{{ theme:partial src="section-header" title="The Near Future and Recent Past of the Mac and iOS" url="{{ soundcloudurl }}" time="55:10" }}

Gabe, Erik and Dr. Drang proceed to discuss the near future of the Mac and iOS platform in light of the history of Apple and the Mac platform. 

> {{ theme:partial src="aside-header" voice="erik" text="Mea Culpa" }}
>
> It's been a tough summer for the Technical Difficulties team, and while the show was recorded in early August it's taken a <strike>little while</strike> few months to get it out the door. This discussion took place before the Fall 2014 Apple product announcements, so we hadn't yet seen the iPhone 6 and 6 Plus, not to mention the Apple Watch, iPad Air 2 and Retina iMac.
>
> While I think the discussion is timeless and still highly relevant, we'd like to apologize to our listeners and (most especially) Dr. Drang for our laziness.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="63:19" person="drang" quote="I have no idea when you're going to put this out" }}

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="63:21" person="gabe" quote="Neither do we" }}

They continue by discussing the difficulties Apple has experienced with network applications and syncing, and how that's made it tough for developers historically to rely on their infrastructure. This put Mac-first developers of applications like [Yojimbo](http://www.barebones.com/products/yojimbo/) in a tough spot, and allowed the rise of cross-platform competitors like [Evernote](https://evernote.com/).

{{ theme:partial src="section-header" title="What would you miss most?" url="{{ soundcloudurl }}" time="77:12" }}

Next Dr. Drang talks briefly about the applications, services, and toolkits he'd miss the most if he did have to leave the Mac (something he himself admits is extremely unlikely). Highest on the list are BBEdit and AppleScript (the functionality, not the language itself). 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="82:18" person="drang" quote="If Apple isn't supporting AppleScript itself, then why should you as a third-party-developer do it?" }}

On top of all that, the Mac still is the only platform that works right out of the box. It's an extremely consistent platform that has no parallel in the Windows or Linux world.

> {{ theme:partial src="aside-header" voice="bob" text="Audio Engineer's Note" }}
>
> If you have -- or hear -- any feedback, let me know on Twitter [@takitapart](http://twitter.com/takitapart/), or email bob at vanderclay dot com.

> {{ theme:partial src="aside-header" voice="potatowire" text="Producer's Note" }}
>
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/), or feel free to send an email to me at potatowire dot com.
