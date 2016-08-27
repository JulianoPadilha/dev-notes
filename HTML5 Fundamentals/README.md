# HTML5 Fundalmentals

## New HTML Elements

`article` <article></article>

The purpose of the article element is to be a container for a self-contained set of content in a document. The easy way to think about this is like a foreign post or a magazine article or a blog post. 

Many pages will only feature one article per page, but that's not a requirement.

An article is just a logical separator for a large group of content on the page.

`aside` <aside></aside>

Now if you have an element that gives semantic meaning to an article, then we also have to have the aside tag.

So think of it this way, if you're looking at a printed magazine, often the content includes like poll quotes or other ancillary information available that's associated with the meat of the content ad often it's presented on the side of the page or sandwiched in the middle of different paragraphs.

This type of content is related, but it's not of a primary importance to the message of the content.

The aside tag places that same type of general significance to content placed inside this element.

`audio`, `video` with their associated `source` and `track` elements

HTML5 now has the ability to play media native in the browser. What's nice about using these controls is that the API for interacting with both audio and video is exactly the same so once you know the Media API, you can control both audio and video elements. As we can notice in the code snippet that the source element is declared multiple times inside the video element in order to provide access to media encoded under different types.

```html
<video>
    <source src="vid.mp4">
    <source src="vid.ogv">
    <source src="vid.webm">
    <track kind="subtitles" label="English Subtitles" src="en.vtt" srclang="en">
</video>
```

There's also a track element available, which gives you the opportunity to provide subtitles to your media and that also works both for audio and video.

`bdi` <bdi></bdi>

The bdi element allows the browse to correctly interpret by directional text. 

So, if you have text that surrounds this element that needs to be going from leeft to right, but some of the text within that context needs to be displayed from right to left, the bdi element will htlp make that happen.

`canvas` <canvas></canvas>

The canvas element is a native drawing surface available within the browser. 

Canvas is the marriage of the new canvas element and an associated JavaScript API.

As you use the canvas, you can declare what type of context you want to use as well. You can choose from 2D and webgl, which is a 3D context. Now this is a pixel-based or rasted context.

So it's not a vector environment so drawing is done on the canvas on a pixel-by-pixel basis as supported by a grid matrix. 

`datalist`

The datalist is a new addition to the collection of the form elements. Ass the code snippet suggests, consider a form where you're giving the user an opportunity to enter their favorite color. While you want the textbox to be open and available for users to enter any value that they want, you also may want to provide a suggestion list and you can do that with an associated datalist.

```html
<input type="text" list="colors">
<datalist id="colors">
    <option src="Blue"></option>
    <option src="White"></option>
</datalist>
```

`details` with their associated `summary` element

How many times have you coded up an area on the page, which show some summary information or perhaps a title and when someone clicks on that text, you expose some more information below it or to the side. 

Sure, it's a trivial task to be done in JavaScript or jQuery, but now you have this same behavior available via elements directly within HTML.

`embed`

The embed element is a new tag that's supposed to be used in favor of the object element in order to embed rich media like Flash, Silverlight or even video content.

`figure` with their associated `figcaption`

The figure and figcaption elements provide a way to associate caption information with figures in an HTML document.

Now you may first think of using these elements with just images and, of course, that's appropriate, but you can also include pre-elements for, say, marking up Source Code listing within a blog post.

```html
<figure>
    <img src="screenshot.png">
</figure>
<figcaption>
    Screenshot of Menu
</figcaption>
```

`header` <header></header> and `footer` <footer></footer>

Now we've arrived at header and footer. You might not think that such humble elements would be the focus of major controversy, but in the beginning that was the case. These elements created a stir as they were first being developed because the meaning of header or footer implied placements or somehow some styling content within the HTML document and often people didn't want to have information about where something might be placed or how it might look within the semantic meaning or the structure of HTML. 

The idea is that the elements themselves should have no opinion about how they're styled. What if all of a sudden you decide that you want that footer information to show up on the side of the page or vice versa? Well, I don't know about you, but just about every webpage that I've ever been to has had a header and most likely a footer and beyond that, the elements that we're discussing here are relevant to the logical container. 

So, that means that you could very well have an HTML document with the header and the footer as the child of an article element and then you could have other containers that have headers and footers inside of them. 

So, the header and footer element can work as the header and footer to the layout of your page, but specifically it's talking about header and footer of the logical container within an HTML document.

`main` <main></main>

The main element is still considered **experimental**. With the ideia behind main is that it's the page's main content.

This elemenet should not be a child of article or aside or header or footer or nav, it's the main content of the page and being that, there should be only one instance of it on any given page.

`math` <math></math>

The math element gives you a place to use the MathML markup language in order to natively represent mathematical equations rather than having to always rely on images in order to represent those equations.

`mark` <mark></mark>

The mark element is used to mark or often highlight or bold text within text. A typical use of mark might be making the search term stand out in the context of search results.

Different browsers have different defaults on how mark text will look, but you can override those settings in the Stylesheet.

`meter`

The meter element, which is often rendered as a bar graph, has its purpose to depict a value within a kwnow range of values.

```html
<meter min="0" max="100" value="70">70 out of 100</meter>
```

`nav` <nav></nav>

The nav element is another one of those elements that brings specific meaning to something that's found on just about every website created. Navigation links are at the heart of wesites and the nav element is used to add semantic meaning to the links that are considered the main navigation links around the site itself.

In other words, you would place the links to the Home, About, Us, and Contact pages inside the nav element.

So, these are only links within pages within the website. If you have links to third-party resources or other links off your site then you wouldn't use a nav element for this purpose.

Nav is the container for the main navigation links of the host website. For instance, many developers will have a nav element in the header of the page, as well as the footer.

`output` <output></output>

The output element is used to provide a place to output the results of a calculation. 

`progress`

The progress element is a native tag that renders a progress bar.

The progress area is animated in the browser given the userid of the interaction is happening within the background.

```html
<progress value="50" max="0"></progress>
```

`section` <section></section>

The section element is one that can be a bit confusing at first.

After all, we have a div in a span elements for a long time and now we have main and article and aside.

So, what's the purpose of a section? Well the section element is used to create a logical container around a set of elements often without regard for how it will be styled on the screen.

So while practically there's virtually no difference between a section or a div element, in fact, the purpose of both of these elements is to create groups among elements, but the rule of thumb to use is that section elements are best used when you want to make an association, but tou dont't have any styling needs and you use divs when grouping is done with the purpose of making the elements looks somehow different on the screen.

Being a logical container, there's no restrictions on using a section. You can open up a section element and place in an article element inside it and then turn around and add another section inside the article and it's the same for divs and so on.

`time`

The time element is really more than just time, but rather think of it as a point in time, which includes year, month, day, minute, second, and even a timezone offset.

The pusbdate attribute on the element is available for your to mark specifically the publish date of a document.

So, if you use pubdate, there can be one and only one time element on the page, which includes the pubdate attribute.

Otherwise, the time element is used to represent any other point in time.

```html
<time datetime="2016-08-24T13:25:23-8:00" pubdate>August 24th, 2016</time>
```

`wbr` 

The wbr element is the word break element. This element is used to assign the point in which to break a word if wrapping becamos necessary. 

So, this element can come in handy if your site features technical, legal or even medical jargon and you want it to appear the right way on the screen.

So, if the text need to wrap on the screen, the browser knows how to break up that word in order to make the wrap work appropriately.

## New JavaScript APIs

`Canvas`

With the Canvas APi, you can declare either a 2D or a 3D context through WebGL and use it as a drawing surface within the browser.

`Contacts`

The Contacts APi is a commom contacts repository found within the browser. Rather than having to have all your friends or contact information saved directly in Google+ or Facebook or some other website, the Contacts API would allow you to have a local repository of this information that websites could access.

`File API`

The File API gives the browser access to sandboxed areas of the user's computer to store data on the file system via JavaScript through the browser.

`Forms`

The Forms API has gotten a boost in HTML5 with the addition of built-in validation.

`Geolocation`

The Geolocation API gives the vrowser the opportunity to request location information from the user. Once granted, the browser is able to use a number of different methods to determine the physical location of the computer or device. The API includes data points such as latitude and longitude and is a perfect fit for a modern location and where applications.

`IndexedDB`

IndexexDB is an API in the realm of local storage within the browser.While there's a few APIs that deal with local storage of data, IndexedDB's purpose is to store sizable amounts of structured data within the browser. So, while you may save a few JSON objects using other APIs, you might store megabytes of data within IndexedDB and it comes stocked with the same type oof indexing you'd expect in any other database to make high performance queries againts data.

You can think of IndexedDB more like an object database rather than a traditional relational database and there are also different APIs for synchronous, as well as async access to data.

`Media Capture`

The Media Capture capabilities will make devices access native to the browser through JavaScript. You'll be able to access the camera, webcam, and so on.

`Microdata`

When you condider HTML5 Microdata, if you think of how content on the web is consumed, you soon realize that the consumer is note just people, but also machines.

Now we have different types of services that are tailor-made for machines and we have webpages with pretty styles and images that are optimized for humans, but what about being able to create a single page that has content fit for both computers, as well as people? Well, Microdata does just that.

By sprinkling in some extra metadata in your existing HTML documents, you're able to readily expose information to machines that is just as easily presented to users.

`Messaging`

The Messaging API is used in conjunction with other APIs like web workers.

`Offline Web Applications`

With the Offline Application API, you have the ability to mark certain pages and resources of you websites as being able to be available, even when there's no connection to the internet available.

This works similarly to he existing browser cache, but resources loaded within the Offline features are reliably served up to the browser upon request, again, when there's no internet connection.

`Selection`

The need for Selection API is really highlighted by the wild success of libraries like jQuery.

In the pre-jQuery pre-HTML5 days, trying to select elements out of the document object model was painful at best. jQuery really filled in that gap by making Selection easy, but now advanced Selection capability is built directly into the browser.

`Server-Sent Events`

Server-Sent Events are an efficient API for sending messages from the server to the browser in one direction,whereas Web Sockets, are a full duplex dibirectional communication path. Now eith Server-Sent Events, you can stream data to connected clients.

`Web Notifications`

Web Notifications is the API that allow you to display notifications to users initiated from the browser. So, this basically gives you an opportunity to display toast within the operating system from a webpage.

`Web Sockets API`

Web Sockets API allows you to send sockets to and from the server. The typical example used here is often a chat application.

`Web Storage`

When we talk about Web Storage, it comes in two flavors - Local Storage and Session Storage.

`Web Workers`

When you think of Web Workers, you can picture in tour mind how threading might work within a browser. If you're building an application where any of the processing is being done on the client, has the opportunity to hand the UI thread, and make the page unresponsive to the user, then by using Web Workers you can split that processing out into a worker, which operates within its own execution context.

`XMLHttpRequestLevel2` or `AJAX`

XMLHttpRequestLevel2 or our good friend AJAX gets an update as well. The AJAX APIs are really pretty full featured, but one thing that'a built-in limitation of AJAX is the single domain constraint. In other words, you can't send an AJAX request to a server that's not the server of origin of the running application.

Level2 allows for cross-domain posting, but adds a security layer so that the interaction is controlled an secure