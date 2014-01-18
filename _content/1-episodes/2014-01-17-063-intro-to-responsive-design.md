---
number: "063"
title: Intro to Responsive Web Design
type:
  - discussion
people:
  - Gabe Weatherhead
  - Erik Hess
topics:
  - web
  - design
  - responsive
  - adaptive
  - sass
  - compass
banner: /assets/img/maquette.jpg
caption: '[Het Nieuwe Instituut](http://www.flickr.com/photos/nai_collection/8157177063/)'
download: >
  http://www.buzzsprout.com/7417/143046-063-intro-to-responsive-web-design.mp3
player: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/129636942%3Fsecret_token%3Ds-8QbCc&color=ff6600&auto_play=false&show_artwork=true"></iframe>'
soundcloudurl: 063-intro-to-responsive-web
summary: "This week's topic is responsive web design, both what it is, and how it's done. Erik steers clear of the controversies surrounding the issue and talks about what it actually takes to make your site work on a wide range of screen sizes."
showtype: interview
post_images:
  - 
    image: /assets/img/underconstruction.gif
    title: ""
post_files: ""
---

> {{ theme:partial src="aside-header" voice="potatowire" text="Before we begin" }}
> 
> It should be obvious to anyone familiar with our hosts that this episode's topic is right in Erik's wheelhouse. He is in control of the notes this week, and I think they have now realized that they don't need me. It's been nice knowing you. 

### Introducing Responsive Web Design

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="0:00" }}

Responsive web design is the way you structure and style a website so it looks appropriate for all screen sizes and platforms. 

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="0:22" person="gabe" quote="Some people have a hard time making their site look good on any device." }}

In audio portion of this episode, Gabe and Erik focus on the strategic issues around responsive web design. The show notes, by comparison, will look at the things you have to do on a tactical level to make a responsive site happen, using a simple, effective toolchain.

For a live example of responsive design, load up any of these sites on a desktop or laptop with a fairly large screen:

* [Technical Difficulties](http://technicaldifficulties.us/episodes)
* [Macdrifter](http://macdrifter.com)
* [The Mindful Bit](http://themindfulbit.com)
* [NerdQuery](http://nerdquery.com)

Drag the window's edge until it's as narrow as you can make it, then expand it slowly and watch as the page elements and fonts grow and respond to the changing width of the browser. All these sites use the exact same tools and techniques we discuss here.

#### Who is this for?

By necessity, this is a more technical topic than we've discussed on the show before. Still, we believe it's one that's relevant to a large number of our listeners, many of whom have personal blogs or reference sites.

To get the most out of this tutorial, you will probably need to be comfortable with a few things first:

* Simple HTML/CSS
* Basic web design principles
* Running a given command in the terminal
* Text editing, using whatever plain-text editor you prefer
* Running a web server on your local machine

If you don't meet any of the above criteria, don't worry. There are many tutorials available on the web or in books that can help you get up to speed. You still may pick up something by listening in and reading through the show notes, so stick with us.

#### What's the problem?

The problem is that since the mid-2000s the number and variety of devices and screens used to view websites has exploded. Ten years ago, it was safe to assume that people would be looking at your site on a 1024 × 768 screen using Microsoft Internet Explorer 6. 

> {{ theme:partial src="aside-header" voice="potatowire" text="Win some lose some" }}
> 
> I think that we lost a lot of [true artistry](http://noahstokes.com/) in addition to uniform experience.
> 
> <img style="width: 100px; display: inline;" src="/assets/img/underconstruction.gif">

Those days are long past.

Today, you should be prepared to serve your site to browsers as small as the original iPhone (320 × 480 pixels) all the way up to desktop displays sporting 2560 × 1440 pixel resolutions or higher. Even on the desktop there's a wide variety, as some users prefer narrow overlapping windows, while others prefer browsing full-screen.

It's difficult to make font and interaction element choices that work equally well on both big and small screens. Some designers prefer to keep things simple, making a single layout (usually around 960 pixels wide) and trusting mobile users to pinch and zoom for reading and navigation.

Strictly speaking, there's nothing wrong with this sort of design, especially for content-driven sites with simple navigation. Unfortunately, some sites with long [line lengths](http://baymard.com/blog/line-length-readability) may be difficult to read even when zoomed in. Other sites with detailed, interactive navigation (think multi-level, nested hierarchies) may make it difficult for users of small screens to find what they're looking for as they pan through a zoomed site seen though their virtual soda straw.

The alternative is to adapt your layout so that it responds properly to the size of the browser window being used. That's called responsive or adaptive design.

> {{ theme:partial src="aside-header" voice="erik" text="Flamewarning" }}
>
> There are some major philosophical flame-wars over responsive design, adaptive design, whether there's a difference between them, and even whether we should be designing this way at all. Like any inexact science or art, there are substantial differences in perspective, and they all offer good arguments and accept different compromises.
>
> I'm not here to tell you how responsive design *should* be done. I'm telling you how *I do it*. If you're interested, I highly encourage you to scour the web for alternate perspectives and tools. It's a great way to broaden your horizons. 
>
> If you find something cool, let me know. I like cool things.

#### Before We Begin

We've created a simple responsive website as part of this tutorial. You can find the source code for the tutorial as well as for the Technical Difficulties site itself on [Github](https://github.com/).

* [Tutorial Source Code](https://github.com/themindfulbit/responsive)
* [Technical Difficulties Source Code](https://github.com/themindfulbit/td)
* [The Mindful Bit Source Code](https://github.com/themindfulbit/tmb)

Here's a link to the live demo of the tutorial site, if you want to try it out.

* [Tutorial Live Demo Site](http://responsive.technicaldifficulties.us) 

> {{ theme:partial src="aside-header" voice="erik" text="Viewport width" }}
>
> For clarity's sake, I  omitted the responsive viewport width readout in the demo code.

### The Tools

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="4:30" }}

We're going use the following languages and libraries to design a simple responsive site:

* [CSS](http://en.wikipedia.org/wiki/CSS)
* [Sass](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Takitapart Web Framework](https://github.com/takitapart/takitapart-framework)

Each library in this toolset builds on top of the one before it like [nesting dolls](http://en.wikipedia.org/wiki/Matryoshka_doll), with basic CSS at its core.

> {{ theme:partial src="aside-header" voice="erik" text="Why these tools?" }}
>
> There are tons of similar platforms and frameworks out there. Why do I use these?
>
> A few reasons:
>
> * They work
> * They're what I know and use every day
> * They're fairly simple to get up and running
> * They offer a tremendous amount of flexibility and growth potential
>
> As always, if these tools don't work for you, look around, try a bunch of new things and find a workflow that fits your needs. Then come back and tell me about all the awesome new tools you've found, so I can start using them too.

#### Configuring the toolset

Before we start discussing the different tools, let's get them installed. We're assuming you've got a web server running on your computer already. 

> {{ theme:partial src="aside-header" voice="erik" text="Web Servers" }}
>
> Due to time constraints and the broad variety of platforms out there, the act of setting up a web server is outside the scope of this discussion.
>
> If you're on a Mac, you've got a couple of options. You could use [OS X's built-in Apache server](http://brianflove.com/2013/10/23/os-x-mavericks-and-apache/). You could use the free version of [MAMP](http://mamp.info). Or you could do what I do and use [Homebrew](http://brew.sh/) to install [php 5.5](https://github.com/josegonzalez/homebrew-php) which lets you create a temporary webserver via the terminal with one simple command:
>
> `php -S localhost:8888`
>
> There are many options, so feel free to contact me on [App.net](http://app.net/themindfulbit), if you run into any problems that Google can't help you surmount. 
>
> You can also try me on [Twitter](http://twitter.com/themindfulbit), but you don't know pain until you've helped somebody troubleshoot their development platform 140 characters at a time.

In the root folder of your new site, run the following command in a terminal window, followed by your password if necessary. It will install Sass, Compass, and the Takitapart Web Framework on your machine:

~~~
sudo gem install compass.takitapart.framework
~~~

Next we're going to create the foundational files for your design. It's another one-liner:

~~~
compass create
~~~

Let's make some tweaks to those files, just to be sure they're all set for our use. 

In the root of your directory you should see a file named `config.rb`. Open it up and after the first comment add this line:

~~~
# Require any additional compass plugins here.
require "takitapart"
~~~

That tells Compass we're using the Takitapart Web Framework.

Finally, we'll need to give the web-server something to show. Create a file called `index.html` in the root of your web directory and fill it with the following lines:

~~~
<!doctype html>
<html>
  <head>
    <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
    <!--[if IE]>
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu potatowire ac, vulputate eget nulla. Mauris massa sem, ttscoff sed cursus et, semper tincidunt lacus. Praesent sagittis, drang id egestas consequat, nisl orci vehicula libero, quis hotdogsladies nulla magna interdum sem. Macdrifter eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.</p>
  </body>
</html>
~~~

If you load this simple web page in a browser, you'll notice a few things right away. First, unless you have a thing for [unleaded](http://en.wikipedia.org/wiki/Leading) Times New Roman, it's not the most attractive site, but it *is* fairly readable. Second, it doesn't look like we've done anything but put some text on the page. *What's all that Takitapart stuff for, anyway?*

Trust me. We'll get there.

Third and most importantly, if you shrink down the browser window to as tiny as you can possibly get it, the site doesn't look a whole lot worse. In fact, those shorter lines even seem a little *easier* to read. What's up with *that?*

{{ theme:partial src="image-set" title="Wide" show="{{ number }}" file="basic-wide.png" }}{{ theme:partial src="image-set" title="Narrow" show="{{ number }}" file="basic-narrow.png" }}

The central takeaway is this: 

Before you add *any* styling to a website, it already works better in a tiny mobile browser than a big desktop one. As you style the site, make sure you don't "break" the experience for mobile users. This is one of many reasons why it's smart to design with a *mobile-first* mindset.

> {{ theme:partial src="aside-header" voice="erik" text="Development Browser" }}
>
> You'll probably want to use a browser with good development tools. Every browser has them, but my favorite is Chrome with the Web Developer extension.
>
> {{ theme:partial src="image" title="Chrome Dev Tools" show="{{ number }}" file="chrome-dev-tools.png" }}
>
> I use the web inspector *a lot* when I'm developing, and on a big screen I usually pop it out into its own separate window.

Let's take a break now and briefly discuss what each of these fancy libraries do.

#### Sass

The folks who make [Sass](http://sass-lang.com/) call it "CSS with superpowers" and I have to agree. Sass is an extension of CSS that adds [a whole lot of great stuff](http://sass-lang.com/guide) that probably should be there from the start:

* **Variables:** Useful for a lot of things, like defining a color at the beginning of your stylesheet so you only have to change it in one place.
* **Nesting:** This can save a lot of redundant CSS lines while making it clearer what styles apply to which elements, and limiting their scope.
* **Mixins:** Think of these like functions for your stylesheet. They're particularly helpful for handling widely varying browser-specific syntax with one elegant line of code.
* **Math:** This is critical for grid layouts.

The way Sass works is by creating `.scss` files that you later compile into valid CSS. You can see that our initial setup left you with a few of those files ready to go in your website's cleverly named `sass` directory.

We'll work with those in a little bit.

#### Compass

[Compass](http://compass-style.org) describes [itself](http://en.wikipedia.org/wiki/Anthropomorphism) as "an open-source CSS Authoring Framework". Building on Sass, it offers two things that are really useful:

* A toolset to compile and compress Sass
* A library of mixins for making a whole lot of tricky cross-platform styling much easier

There's actually a third thing it offers which may be more important: excellent [documentation](http://compass-style.org/reference/compass/).

Let's do something fun with Compass real quick. Open up a new tab in Terminal and make sure you're in the root directory of your website. Now type this command:

~~~
compass watch
~~~

You should get a response that looks like this:

{{ theme:partial src="image" title="Keep Watching..." show="{{ number }}" file="compass-watch.png" }}

Not very interesting, huh? Let's change things up a bit.

#### Takitapart Web Framework

Now go in and add the following lines to your `sass/screen.scss` file after  `@import "compass/reset"`:

~~~
@import "takitapart/normalize";
@import "takitapart/typography";
@import "takitapart/grid";
@import "takitapart/form";
@import "takitapart/print";
~~~

Save your file, and check that terminal window one more time:

{{ theme:partial src="image" title="I told you to keep watching!" show="{{ number }}" file="compass-watched.png" }}

Compass saw that you changed your `screen.scss` file (not changing any others) and recompiled it for you. Refresh your browser and you'll see that it's starting to look a little different, with a sans-serif font and a little more line spacing.

{{ theme:partial src="image" title="Well, something happened." show="{{ number }}" file="compass-sans.png" }}

The site changed because the Takitapart Web Framework added a bunch of normalization to your stylesheet. Take a look at the `stylesheets/screen.css` file real quick.

Whoa! Five lines of Sass is now *nearly 800 lines* of CSS!

> {{ theme:partial src="aside-header" voice="erik" text="But, but... SLOW!!!" }}
>
> I know, you're worried that all the helpful stuff Compass puts in your CSS file makes it huge and your site slow, aren't you?
>
> {{ theme:partial src="image" title="I feel bloated." show="{{ number }}" file="but-slow.png" }}
> 
> Despite being very helpful during development (remember, your web inspector only shows you the CSS ([for now](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors)) - try finding that styling bug without the Sass line numbers) you probably don't need all that nice breathing room and helpful commenting cluttering up your production stylesheet. 
>
> You can get a nice compressed version of your CSS file for your production site by running `compass compile --output-style compressed --force` which will minimize file size (usually it's about 1/3 the size of the uncompressed version) speed up your site for bandwidth-limited visitors.
> 
> {{ theme:partial src="image" title="Much better." show="{{ number }}" file="compressed-sass.png" }}
>

The [Takitapart Web Framework](https://github.com/takitapart/takitapart-framework) builds on Compass to normalize the often conflicting default styling across different browsers. It also gives us the tools to build a [grid](http://en.wikipedia.org/wiki/Grid_(graphic_design)).

{{ theme:partial src="image" title="Not this..." show="{{ number }}" file="not-grid.jpg" }}

{{ theme:partial src="image" title="...this." show="{{ number }}" file="the-grid.png" }}

Grids are helpful because they give us a tool to logically lay out text, images and other elements in a design. They're even more helpful in responsive design because their sequence of alternating [columns and gutters](http://en.wikipedia.org/wiki/Column_(typography)) lends itself well to expanding and contracting content as the browser size changes.

We'll get back to the grid in just a little bit, but first let's fix the viewport.

### Setting the Viewport

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="11:45" }}

What is a viewport anyway? Well, it's the area your browser uses to display a site.

{{ theme:partial src="fancy-quote" url="{{ soundcloudurl }}" time="11:51" person="gabe" quote="Like on a submarine?" }}

In the old days, there used to be just one kind of viewport, which was the size of your computer's browser window. When iOS came out, Apple engineers needed a way to make normal sites functional on a very small screen. Their solution was to have iOS tell the websites that the browser was really 980 pixels wide instead of 320. Other mobile browsers followed suit.

Here's a little more information for those who want to get into the details:

* [A Tale of Two Viewports Part One](http://www.quirksmode.org/mobile/viewports.html)
* [A Tale of Two Viewports Part Two](http://www.quirksmode.org/mobile/viewports2.html)
* [Configuring the Viewport](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)

Unfortunately this is a bit counterproductive where we're concerned. Why?

{{ theme:partial src="image-set" title="Tiny Text!" show="{{ number }}" file="tiny-text.png" }}

Well, because without some tweaking, that text is going to look incredibly tiny on a mobile browser. And pinch-to-zoom isn't going to help you much unless you like scrolling horizontally... a *lot*.

{{ theme:partial src="image-set" title="Scroll, scroll..." show="{{ number }}" file="scroll-scroll.png" }}

#### Fixing the viewport

Overriding this feature is actually pretty easy. Just add the following line just after `<head>` in your `index.html` file.

~~~
<meta name="viewport" content="width=device-width">
~~~

This tells the mobile browser that a pixel is a pixel.

{{ theme:partial src="image-set" title="Fixed!" show="{{ number }}" file="viewport-fix.png" }}

> {{ theme:partial src="aside-header" voice="erik" text="Well, Actually..." }}
>
> On retina devices, it still pretends that it's a low-resolution screen, so one pixel is equal to four retina pixels and...
>
> *Oh... you knew all that already...*

### Establishing the Grid

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="15:05" }}

Now that a pixel is (mostly) a pixel on all platforms, let's get to building that grid. The Takitapart Web Framework offers a good set of defaults, but they have to be initialized first.

Add the following lines to your `screen.scss` file after the `@import` calls:

~~~
// Base font-size in pixels.
$font-size: 16;
// Base line-height.
$line: $font-size * 1.5;
$em: $font-size * 1;
// Number of columns.
$columns: 12;
// Width of the outer margin, in percent.
$outer-margin: 5.55555%;
body {
  @include grid();
}
~~~

Refreshing your browser won't show much in the way of change, but we've set some important values as variables.

First, we set the base value for the `$font-size` variable to 16 pixels. This is a good default, but you can move it up or down as needed by your site's design and [its audience](https://twitter.com/drdrang). The next two lines build on this, setting the line-height to 1.5 times the base font size, which we also set equal to one em.

> {{ theme:partial src="aside-header" voice="erik" text="Ems vs. Pixels" }}
>
> Since switching to a responsive workflow I avoid setting the sizes of elements using pixels and predominantly use the relative measure "[em](http://en.wikipedia.org/wiki/Em_\(typography\))". This allows me to adjust the size of multiple elements with one line rather than adjust each individually.
>
> This is extremely useful when building a responsive site, as you can have the font size and other elements change with browser size.
>
> See also: [W3C - The Amazing em Unit and Other Best Practices](http://www.w3.org/WAI/GL/css2em.htm)

The next variable is the number of columns, which we'll set to 12. As the site adapts to larger screen sizes, different elements will start by filling all twelve the columns then gradually shrink, sharing horizontal space with other elements as space allows. Twelve is a good number because it breaks into groups easily, allowing 1, 2, 3, 4 and 6 column layouts. 

The final variable is outer margin width, which is independent of the gutter width between the columns. The default is 1/18 of the viewport width (5.55555%) which is as good a starting place as any. As you gain more experience, you may  wish to set this value to zero and handle all margins on an element-by-element basis.

The final step is to initialize the grid on the `body` element, using the `@include` syntax, which tells the Sass compiler that you want to use the `grid()` mixin.

Refresh your browser and you should see those nice outer margins drop into place. Our new responsive website is coming along nicely.

### Responding to Screen Size

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="20:40" }}

Now that we've got everything set, let's start filling the site out. First we've got to add a little structure to the bare content, so update your `index.html` file so that it looks like this:

~~~
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
    <!--[if IE]>
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->
  </head>
  <body>
    <div id="header">
      <h1>My Awesome Responsive Site</h1>
    </div>
    <div id="core">
      <div id="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci magna. Phasellus augue justo, sodales eu potatowire ac, vulputate eget nulla. Mauris massa sem, ttscoff sed cursus et, semper tincidunt lacus. Praesent sagittis, drang id egestas consequat, nisl orci vehicula libero, quis hotdogsladies nulla magna interdum sem. Macdrifter eget orci vitae eros accumsan mollis. Cras mi mi, rutrum id aliquam in, aliquet vitae tellus. Sed neque justo, cursus in commodo eget, facilisis eget nunc. Cras tincidunt auctor varius.</p>
      </div>
      <div id="nav">
        <div id="posts">
          <h2>Posts</h2>
          <ul>
            <li><a href="/">Page 1</a></li>
            <li><a href="/">Page 2</a></li>
            <li><a href="/">Page 3</a></li>
          </ul>
        </div>
        <div id="links">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Site 1</a></li>
            <li><a href="/">Site 2</a></li>
            <li><a href="/">Site 3</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="footer">
      <p>Made with awesome responsiveness by me, 2014.</p>
    </div>
  </body>
</html>
~~~

Hopefully you're beginning to see the wisdom of the "mobile-first" philosophy. Since small screens offer the most constrained canvas for design, building this way forces the developer to answer all the hard questions first.

If you refresh your screen and take your browser down to its narrowest width (320 pixels wide for Chrome, which is convenient for iPhone layouts) you'll see that a lot has naturally fallen into place. You've got a header with a site title, your content next, your site navigation after that, and a footer at the bottom. 

By thoughtfully picking the location of your major elements, you've already a pretty good mobile layout *without doing anything special*.

In order to make the elements a little easier to visualize, let's give them some color using variables. Before `body` insert these lines:

~~~
$header-color: #f6a9a9;
$content-color: #a9a9f6;
$nav-color: #dddddd;
$posts-color: #ac76c3;
$links-color: #76acc3;
$footer-color: #a9f6a9;
~~~

Then replace your `body` styling with this:

~~~
body {
  @include grid();
  #header {
    background-color: $header-color;
    @include column(12);
  }
  #content {
    background-color: $content-color;
    @include column(12);
  }
  #nav {
    background-color: $nav-color;
    @include column(12);
    #posts {
      background-color: $posts-color;
      @include column(12,12);
    }
    #links {
      background-color: $links-color;
      @include column(12,12);
    }
  }
  #footer {
    background-color: $footer-color;
    @include column(12);
  }
}
~~~

When you refresh your browser, the different elements should stand out a bit more. By this point, your site should be looking something like this (click or tap to enlarge):

{{ theme:partial src="image-set" title="Taste the Rainbow" show="{{ number }}" file="div-colors.png" }}

Notice the gray bars outside the `#posts` and `#links` elements. The`#nav` element is colored gray here, and since it encloses the `#posts` and `#links` elements, you are seeing the automatic column padding showing through.

Let's get back to the Sass for a bit. Did you notice the nesting? How about the variables for the colors? Pretty simple, huh?

Now let's talk about that other line that crops up everywhere:

`@include column(12);`

That line is telling the element to take up all twelve columns in the grid, making one big column appropriate to a mobile browser. So what about the `@include column(12,12);` for `#posts` and `#links`? That tells a sub-element to take up all twelve of the parent's columns. Because the first sub-element `#posts` fills all twelve columns, the second sub-element `#links` is forced beneath it.

That gray padding in the `#nav` element doesn't look too nice, so get rid of it by adding `padding: 0;` to the line right before `#posts`.

#### Them's the Breaks

Let's give our site some breathing room and look at the screen at 600 pixels wide:

{{ theme:partial src="image" title="Like an old Kindle Fire" show="{{ number }}" file="tabletish.png" }}

Not bad. The header looks fine and the content is still quite readable. We're wasting a lot of space with those `#nav` sub-elements though. Maybe we could stack 'em side by side or something. We'll do that with CSS media queries.

Put the following code immediately after the closing brace of your `body` styling:

~~~
@media screen and (min-width: 32em) {
  body {
    #nav {
      #posts,
      #links {
        @include column(6,12);
      }
    } 
  }
}
~~~

Refresh and:

{{ theme:partial src="image" title="Side by Side" show="{{ number }}" file="side-by-side.png" }}

Pretty good! It makes for a more efficient use of space, that's for sure. What we've done is tell the browser that for window widths greater than 32em (512 pixels here, since we set 16 pixels = 1em) we want the `#posts` and `#links` sub-elements to take up only six of their parent's twelve columns. Because the Takitapart Web Framework floats all column inhabitants to the left by default, they nestle up right next to each other.

Resize your browser window width back and forth around the 512-pixel point and you'll see the elements snap from stacked to side-by-side and back again, without refreshing the browser. This point is called a breakpoint.

> {{ theme:partial src="aside-header" voice="erik" text="Point Break...point" }}
>
> Here are a couple of guidelines I use when choosing breakpoints. First, you should let your content be your guide. If the site looks fine at a given browser size, it doesn't need a breakpoint. As soon as it starts to look bad, break it and try an altered layout.
>
> Additionally, you may want to avoid picking common screen sizes for your breakpoints. Strange things can happen at a break, and you don't want those quirks messing up the experience for your site's visitors.
>
> Finally, try not to get too picky about your exact element sizes. There are no pixel-perfect layouts when designing a fluid web page, so expect things to look a little strange sometimes. Fix what you can and accept that this is the web and not print. If you *do* need a rigid, pixel-perfect layout, use fixed design within each breakpoint, and bridge the gap between those breakpoints with fluid margins. If that sentence doesn't make sense, then you probably don't really need a rigid, pixel-perfect layout.

#### Adding a sidebar

Stretch your site out to 768 pixels wide, which is the width of an iPad in portrait orientation. The site still works, but the line length of the text is getting a bit too wide. Let's try using that excess space for something useful like a sidebar.

Beneath the closing brace of your `@media` query, put the following lines:

~~~
@media screen and (min-width: 42em) {
  body {
    #content {
      @include column(9);
      float: right;
    }
    #nav {
      @include column(3);
      padding: 0;
      #posts,
      #links {
        @include column(3,3);
      }
    } 
  }
}
~~~

So what are we doing here? First, we set a new breakpoint at 42em (672 pixels). Next, we shrink the `#content` element from 12 to 9 columns, overriding the default `float` so that it stays right instead of going left. Remember, elements pile up in the order they appear in the HTML file. Since the `#nav` element comes after `#content`, you have to force it right with the `float: right;` instruction.

Lastly, we've resized the `#nav` element to three columns, reminded it that we don't want those gray padding sidebars, and told both `#posts` and `#links` that they should utilize all three of their parent's columns. Let's refresh the browser and see how it looks.

{{ theme:partial src="image" title="Now With 100% More Sidebar" show="{{ number }}" file="sidebar.png" }}

Not bad at all! Note that the `#footer` element automatically clears both of the columns above because it's twelve columns wide – too wide to do anything else. Pretty cool, huh?

> {{ theme:partial src="aside-header" voice="erik" text="It's All Just Math" }}
>
> The mathematically-inclined reader may have already guessed this, but all the `@include column(3,3);` line is doing is setting the CSS `width:` property to the first number divided by the second number. In that sense `@include column(6,12);` is precisely equal to `@include column(3,6);` or even `@include column(1,2);`.
>
> That being said, I try to keep all the numbers "un-reduced" unless I need to fit, say, three equally spaced elements into a four-column parent. Then, bending the rules works like a champ.

#### Work on the Core

Stretch your browser window width past 1024 pixels or so, and things start to get a little too stretchy. There are two solutions available to you at this point, and we'll give them both a try.

The first option is to add columns of white space to the left and right of your content. To do this, we use the `@include push(x,y);` mixin. To that end, let's add a third breakpoint to your `screen.scss` file:

~~~
@media screen and (min-width: 62em) {
  body {
    #header {
      @include column(10);
      @include push(1);
    }
    #core {
      @include column(10);
      @include push(1);
      padding: 0;
      #content {
        @include column(7,10);
        float: right;
      }
      #nav {
        @include column(3,10);
        padding: 0;
        #posts,
        #links {
          @include column(3,3);
        }
      }
    }
    #footer {
      @include column(10);
      @include push(1);
    }
  }
}
~~~

What we're doing here is making the widest elements ten columns wide, and pushing them one column to the right, leaving a column of space on *both* sides. 

You may have noticed the `#core` element earlier and wondered why it's there. This kind of enclosing element allows us to take the entire central block and push it right, without disrupting the elements within or having to individually `@include push();` them. 

Refresh your browser and see how it turned out.

{{ theme:partial src="image" title="A little space on the sides." show="{{ number }}" file="nice-core.png" }}

> {{ theme:partial src="aside-header" voice="erik" text="You Can Pull, Too" }}
>
> The `@include push(x,y);` mixin has an evil twin: `@include pull(x,y);`. It works the same as `push`, just in the opposite direction. I've only used it a few times, but it's nice to have when you do need it.

#### Making things a bit bigger

The sidebars were a nice fix, but you've got the same problem again once your viewport reaches 1200 pixels wide. One option is to enlarge the sidebars by using `@include push(2);` and shrinking the widest elements to eight columns wide. You can keep going with that for a bit, but after a while it becomes a little unwieldy.

There's another option you may want to use, and that's to make everything bigger. We do that by adjusting the size of the grid itself.  

Add the next nine breakpoints (*yes, nine*) below your previous ones:

~~~
@media screen and (min-width: 70em) {
  @include baseline-grid(20);
}
@media screen and (min-width: 80em) {
  @include baseline-grid(22);
}
@media screen and (min-width: 90em) {
  @include baseline-grid(24);
}
@media screen and (min-width: 100em) {
  @include baseline-grid(26);
}
@media screen and (min-width: 110em) {
  @include baseline-grid(28);
}
@media screen and (min-width: 120em) {
  @include baseline-grid(30);
}
@media screen and (min-width: 130em) {
  @include baseline-grid(32);
}
@media screen and (min-width: 140em) {
  @include baseline-grid(34);
}
@media screen and (min-width: 150em) {
  @include baseline-grid(36);
}
~~~

Refresh your browser, and if you're on a large display pull the window as wide as it will go. You'll see everything smoothly increase in size *assuming you scaled everything in relative measures like ems and percentages*. This is why it's a good idea to avoid exact pixel sizes whenever possible. They don't scale.

> {{ theme:partial src="aside-header" voice="erik" text="Except..." }}
>
> Every rule has an exception, and this one is no... exception. When I need a hairline border, I use `border-width: 1px;` since that will always give me the thinnest border possible on that platform.

### We've Only Just Begun

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="29:20" }}

There's so much more to cover, but it goes beyond the scope of an intro. There are three issues we should touch on before you go: accessibility, images, and unfriendly (old Microsoft) browsers.

#### Accessibility

Unfortunately this critically important issue that is just [too big](http://www.d.umn.edu/itss/training/online/webdesign/accessibility.html) to squeeze into this discussion. Luckily, nothing we've done so far should *hinder* accessibility, and the font scaling can help in some cases.

#### Images

Responsive image manipulation is still in its infancy, but here are a few considerations that will help you now and start you down a good path for future exploration.

First, try to work as much as possible in a vector image format like [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics). Anything that looks more like a diagram than a picture (many logos, interface elements, or other similar graphics) can be presented in razor-sharp fidelity at all screen resolutions by serving up a vector SVG file.

[All modern browsers](http://caniuse.com/svg) support SVG natively, and you can offer a CSS [`background-image:` fallback](http://css-tricks.com/svg-fallbacks/) for older applications.

#### Older Browsers (IE)

Speaking of older browsers (generally IE 8 and earlier) you can use [conditional comments](http://msdn.microsoft.com/en-us/library/ms537512.ASPX) to serve up an alternate stylesheet that will only be used Internet Explorer. You can even target specific versions if you like.  In fact, you've already used conditional comments in the demo site. Check out lines 7 through 9 in your `index.html` file:

~~~
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
    <!--[if IE]>
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->
  </head>
  <body>
  ...
~~~

Those lines serve up an alternate `ie.css` file generated from the `ie.scss` file. Compass includes it by default.

### That About Does It

{{ theme:partial src="timestamp" url="{{ soundcloudurl }}" time="30:40" }}

Remember that there are no hard-and-fast rules for any of this stuff. This field is changing every day, and new tools, technologies, and hacks regularly come along to change your entire workflow.

This is awesome though, and hopefully it's the reason why we started messing with this stuff in the first place. Good luck, happy coding, and let us know if you run into any problems that a Google search doesn't readily solve.

> {{ theme:partial src="aside-header" voice="potatowire" text="Until next week" }}
> 
> Well, that's it for this week. If you have anything that you'd like to add to or correct in the show notes you can find me on Twitter [@potatowire](http://twitter.com/potatowire/) or feel free to send an email to me at potatowire dot com. Also let us know if you like this instructive type of show. It's an experiment that we may re-visit again.