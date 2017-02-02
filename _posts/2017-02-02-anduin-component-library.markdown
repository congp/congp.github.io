---
layout: alt_post
title:  "Anduin Component Library"
categories: ux-ui-design, front-end
project_type: UX/UI Design and Front-end Development
display_id: anduin-component-library
feature_image: ['acl/acl-feature-img.png']
excerpt: "The story about one of our design team's quests to solve the biggest mess of design and front-end development."
opening_content: "There are two types of people in this world; the ones who write well thought out and maintainable CSS, who aren't afraid of adding more things or going back to their code looking terrified, who have good night's sleep and fun weekends. And then we have this type:
"
---

<img src="{{ site.baseurl }}/assets/img/acl/css-family-guy.gif">

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      This is a story of how we've found ourselves being the latter type, then worked hard enough to become the former. Here's how that story went. (Brace yourself, it's going to be a long post, there's a TL;DR underneath, read that then look at them images if you're feeling extremely lazy, then head over to <a href="http://anduin.design">here</a> to check out the site. You bastard.)
      <br/><br/>
      <strong>TL;DR</strong><br/>
      True story. We got tired of modifying existing CSS whenever there's a new design. So we built <a href="http://anduin.design">this library</a> to include a set of reusable components. Everybody's happy and the design team got a big raise/bonus. Well that last part isn't so true, but the rest was told as exactly how it occured.
    </p>
    <p class="content__body--text-post">
      Writing CSS is fun at the beginning, really, when it was a clean slate and you can give anything any name you want to, experiment with styles and so on. But that is bad practice, the reasons are simple, it’s not future proof, it lacks a proper convention, the styles repeat themselves from component to component.
    </p>
    <p class="content__body--text-post">
      Firstly, why isn’t it not future proof, you asked? The idea of product development is that as time goes by, the product will grow and to be able to accomplish that so-called growth, it has to scale to match it. But with bad CSS practice, after a few months, heck, after just one redesign, you would have already seen things breaking here and there, style clashing everywhere, all of the sudden you find poops all over your site (I’ve tried my best not to swear). Therefore a proper convention is what people would mention and suggest we should have, but what kind of convention? That brings us to the second point. There are plenty of conventions on writing maintainable CSS on the Internet such as Modular, BEM, even BEMIT an extended version of BEM, etc. It was like trying to build our own Tower of Babel then ending up punished because we got too close to God and now we all speak different languages and following different conventions. It was a mad world. But there isn’t much we could do, TBH. Lastly, the biggest rule of programming is <strong>DRY</strong> or <strong>DON’T REPEAT YOURSELF</strong>. But with a badly planned, unconventional system, this is the thing that keeps happening. And really, once you’re in such deep shit, the only thing you could do is break the whole thing and build it back up from the ground. So that was what we did — kind of, more on this momentarily.
    </p>
  </div>
</div>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Two CSS properties walk into a bar.<br><br>A barstool in a completely different bar falls over.</p>&mdash; Thomas Fuchs (@thomasfuchs) <a href="https://twitter.com/thomasfuchs/status/493790680397803521">July 28, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      <span>So potentially these were the identified problems with our current styling system; you’d find this very familiar with your own situations, too.</span>
    </p>
    <ul>
      <li>A lot of wrapping elements into one big container that is page/view specific. So basically, you would see, for example <code>.step-view</code> and then a bunch of nested components for that view. As a result, if you’re in a different view, you can’t access stylings of the same component inside <code>.step-view</code>. You can include <code>.step-view</code> as the class name for this new view but your markup no longer making any sense. So your last solution is to rewrite that chunk of code inside another wrapping container…and the mess begins.</li>
      <li>Variables were all over the place and not centralized, thus, we ended up with two different variables that were assigned the same value and used for the same purpose. Also, things that should have been in variables weren’t being specified as variable, which resulted in a lot of “Find and Replace” whenever something had to change.</li>
      <li>Deep nesting was insane. It was okay until we turned on scss-linter. Then…it became a nightmare. Seriously. A lot of moving elements outside a wrapper, then a lot of things were breaking visually. I tried not to cry, but ended up crying for the whole week. Just kidding. I just shat bricks, that’s all, no big deal.</li>
      <li>Icons were badly managed. We would have a big folder of individual icons; also a big icon sprite with a bunch of different icons, too. And everything was inconsistent. The same icon but at a different size would have to be another sprite. So we ended up with a pair of “father and child” icon, or “adult and kid” or whatever, I think you got my point.</li>
      <li>Last but not least, we didn’t have a goddamn system of anything. No color system, no typographic system, no layering (z-index) system (I realized we were in desperate need of this after reading fat’s article and totally got inspired by it. You rock, dude! Shout out!). Thank god we have a grid system, but that wasn’t enough. And that’s linked with the variable problem above, since there’s no system, new variables kept on popping up and probably were used once or twice throughout.</li>
    </ul>
    <p class="content__body--text-post">This was us when new things were thrown our way…</p>
  </div>
</div>

<img src="{{ site.baseurl }}/assets/img/acl/funny-box-guy.gif">

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      Writing good CSS requires hard work. Hours were committed into the making of this so-called component library. After many commits, PRs and code review sessions, we’ve finally saved ourselves from the brutality of messy CSS. But more on that later, here is the process of how we got to it.
    </p>
    <p class="content__body--text-post">
      At first, we sat down to list out all the elements in the system that we needed to take a look into. After we had a list, which you could see on the left of the site, then came the redesign part. So for more than a week we were just picking colors, trying to come up with a coloring system. Then we ditched Helvetica Neue and decided to go with Open Sans because, let’s face it, Opens Sans was created for UI whilst Helvie is old and wasn’t really taking into consideration all of the screen viewing aspects of a good typeface (try “responsibilities” in Helvie and see how hard that is to separate the “i” and the “l”). Not just choosing a new font, we also came up with a brand new typographic system of font sizes, weights and consistent line heights. Oh, the line heights. Phew.
    </p>
    <p class="content__body--text-post">
      We created mockups on Sketch of these elements and components. Here's our typical Sketch file, neathly organized.
    </p>
  </div>
</div>

<img src="{{ site.baseurl }}/assets/img/acl/sketch-file.png">

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      So after a few rounds of discussions we finally settled on using rscss’s <a href="http://rscss.io/">naming convention</a> because we believe it’s quite straightforward. Also Tri hated underscores, let alone BEM and BEMIT uses double underscores (I think he cried a little when he saw that). So anyway, we have a small section on <a href="http://anduin.design/docs/naming.html">our adopted naming convention</a> if you’re eager to check it out.
    </p>
    <p class="content__body--text-post">
      For our SCSS files, we’ve broken them down into components so each component gets a single file and all stylings related to that component stay there. We follow strict rules of writing SCSS so that the output is consistent, allowing us to end up with beautiful and maintainable code that no one has to cry in the future. That’s problem number one, solved. Honestly, maybe by the time you’re reading this post, this library is still a work in progress, we are still constantly refactoring our codebase to make the CSS looks as humanly as possible, while being super duper dry if you know what I mean.
    </p>
    <p class="content__body--text-post">
      For solving the icon problem, we’ve created a brand new icon set, called Super Tight Iconset. This time, instead of using a sprite, we put together an icon font. This helps solves a number of problems.
    </p>
    <ul>
      <li>Vector based.</li>
      <li>Scalable when it comes to using different sizes.</li>
      <li>Easier to use because now you can call a class name</li>
      <li>Consisten styling</li>
      <li>For solving the icon problem, we’ve created a brand new icon set, called Super Tight Iconset. This time, instead of using a sprite, we put together an icon font. This helps solves a number of problems.</li>
    </ul>
    <p class="content__body--text-post">
      <em>Updated: I know some of you might think icon font isn’t the best option anymore. We’re aware of that and, at the time of building this library, we believed it was the best option to solve our problems. All of that had changed as we've now switched our entire icon system to SVG icons, I have written a great automation task builder so we could easily maintain this hassle free and guess what? Cross browswer friendly. Yay! Below is our SVG icon set. More on the technical side of this later!</em>
    </p>
  </div>
</div>

<img src="{{ site.baseurl }}/assets/img/acl/stis-master.png">

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      Great library comes with great documents! We’ve realized this early on, so apart from focusing on getting things right with our codebase, we were also heavily invested in crafting the perfect documentations so that others after us could see and know what’s going on. One thing I am glad is that we’ve implemented all the styling back into the documentation pages. We basically create and apply at the same time to know what’s good or bad and what needs to be addressed. Also, all the demos are pretty much interactive, you can go ahead and try them out.
    </p>
    <p class="content__body--text-post">
      Building this component library helps us to strengthen our skills. It trained us to think ahead and to be careful with each CSS implementation. At the beginning, we were stuck with the mindset of why building something when we don’t even have it in our current system. Then we got passed that and realized we’re building for the future, not present, we’re building these components to maintain the present but also to scale it in the future, that’s how a lot of these components come around and crafted.
    </p>
    <p class="content__body--text-post">
      This component library took a lot of our time, free time to be exact. But it’ll save us tons of time in the future and like I said, next time if you see us, we’ll be the ones with good night’s sleep and fun weekends. And I think it’s totally worth it.
    </p>
    <p class="content__body--text-post">
      The completion of this component library isn’t a reason for us to stop right here. This is version 1. And there’s hope for many more to come. And this library will be maintained by the Design Team and their new salary bonus (hah, kidding again). But the point is that we now have a system and we’re confident that with this system acting as a strong foundation, we’re on track for building and scaling our product toward the future.
    </p>
    <p class="content__body--text-post">
      We’ve been using ACL internally since v1.0.0 and as of today, May 6th 2016, we’re happy to announce that it’s available for everyone to give it a try. It’s much appreciated that you guys provide feedback to us so we could improve it even more. Now, head to the Download page and grab a copy of the CSS file and start using it for your next project! Actually, read on for a few last sentences first before doing that…
    </p>
  </div>
</div>

<img src="{{ site.baseurl }}/assets/img/acl/funny-excited-kid.gif">

<div class="row">
  <div class="small-12 medium-12 large-6 columns">
    <p class="content__body--text-post">
      BTW, shout out to you if you’ve made it all the way to the bottom of this post! Here are some more great pictures!
    </p>
  </div>
</div>
