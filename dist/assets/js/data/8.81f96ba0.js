(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(e){e.exports=JSON.parse('{"data":{"tag":{"title":"Markdown","belongsTo":{"edges":[{"node":{"title":"Say hello to Gridsome 🎉","path":"/say-hello-to-gridsome","date":"7. February 2019","timeToRead":3,"description":"A new static site generator baby is born. It\'s highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!","coverImage":null,"content":"<p>A new static site generator baby is born. It\'s highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!</p>\\n<p>We think <strong>Gridsome</strong> is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites.  React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with JAMstack. Gridsome is the Vue.js alternative to Gatsby.</p>\\n<p>With <strong>Gridsome</strong> you get a <strong>universal GraphQL layer</strong> for all your connected data sources. It\'s like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc. </p>\\n<p>Here is an example on how to query posts from the GraphQL layer in a page:</p>\\n<pre class=\\"language-html\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">></span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Layout</span><span class=\\"token punctuation\\">></span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h2</span><span class=\\"token punctuation\\">></span></span>Latest blog posts<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h2</span><span class=\\"token punctuation\\">></span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span><span class=\\"token punctuation\\">></span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation\\">=</span><span class=\\"token punctuation\\">\\"</span>edge in $page.allWordPressPost.edges<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation\\">=</span><span class=\\"token punctuation\\">\\"</span>edge.node.id<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">></span></span>\\n        {{ edge.node.title }}\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">></span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">></span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Layout</span><span class=\\"token punctuation\\">></span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">></span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>page-query</span><span class=\\"token punctuation\\">></span></span><span class=\\"token graphql\\">\\n<span class=\\"token keyword\\">query</span> Blog <span class=\\"token punctuation\\">{</span>\\n  allWordPressPost <span class=\\"token punctuation\\">(</span><span class=\\"token attr-name\\">limit</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    edges <span class=\\"token punctuation\\">{</span>\\n      node <span class=\\"token punctuation\\">{</span>\\n        _id\\n        title\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>page-query</span><span class=\\"token punctuation\\">></span></span></pre>\\n<p>You don\'t need to know GraphQL or Vue to get started with Gridsome - It\'s a great way to get introduced to both.</p>\\n<p>The GraphQL layer and all the data can be explored in a local GraphQL playground. The playground is usually located at <code class=\\"language-text\\">https://localhost:8080/___explore</code> when a Gridsome development project is running.</p>\\n<h4 id=\\"perfect-scores-on-google-lighthouse---automagically-\\"><a href=\\"#perfect-scores-on-google-lighthouse---automagically-\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Perfect scores on Google Lighthouse - automagically 💚</h4>\\n<p>One of the main goals of Gridsome is to make a framework that let you build websites that are optimized \\"out-of-the-box.\\" It follows the <a href=\\"https://developers.google.com/web/fundamentals/performance/prpl-pattern/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">PRPL-pattern by Google.</a> You don\'t need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:</p>\\n<ul>\\n<li>Image compressing &#x26; lazy-loading ⚡️ </li>\\n<li>CSS &#x26; JS minification ⚡️ </li>\\n<li>Code-splitting ⚡️ </li>\\n<li>HTML compressing ⚡️ </li>\\n<li>Critical CSS (Plugin) ⚡️ </li>\\n<li>Full PWA &#x26; Offline-support (plugin) ⚡️  </li>\\n</ul>\\n<h4 id=\\"a-better-way-to-build-websites\\"><a href=\\"#a-better-way-to-build-websites\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>A better way to build websites</h4>\\n<p>Gridsome is built for the JAMstack workflow - a new way to build websites that gives you better performance, higher security, cheaper hosting, and a better developer experience. Generate prerendered (static) pages at build time for SEO-purpose and add powerful dynamic functionality with APIs and Vue.js.</p>\\n<p>We believe the SSGs / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You feel almost \\"dirty\\" when going back to a traditional WordPress / CMS setup. </p>\\n<p>Try running the new Chrome Lighthouse (Audit tab in Developer tools) on a WordPress site - It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don\'t even need caching plugins. Website optimization is taken care of at build time.</p>\\n<p>This is what we think is very exciting and is why we are building Gridsome. It is the <strong>perfect SPA &#x26; PWA front-end solution</strong> for any headless CMS or content APIs.</p>\\n<h4 id=\\"whats-next\\"><a href=\\"#whats-next\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Whats next</h4>\\n<p>In the next couple of months we\'re going to continue to improve the docs, create tutorials, add more source &#x26; transformer plugins and fix bugs. </p>\\n<h4 id=\\"contribute-to-gridsome\\"><a href=\\"#contribute-to-gridsome\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Contribute to Gridsome</h4>\\n<p>We\'re currently just two brothers working on this, so any contribution is very welcome. We\'re passionate about building a faster web and make website building fun again.</p>\\n<p>You can also support us by giving <a href=\\"https://github.com/gridsome/gridsome/stargazers\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">a GitHub star ★</a> and spread the word :)</p>\\n"}},{"node":{"title":"Markdown test file","path":"/markdown-test-file","date":"6. February 2019","timeToRead":6,"description":"Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it\'s been marked up with tags or formatting instructions.","coverImage":null,"content":"<p>Markdown is intended to be as easy-to-read and easy-to-write as is feasible.Readability, however, is emphasized above all else. A Markdown-formatted\\ndocument should be publishable as-is, as plain text, without looking\\nlike it\'s been marked up with tags or formatting instructions.</p>\\n<p>While Markdown\'s syntax has been influenced by several existing text-to-HTML\\nfilters -- including <a href=\\"http://docutils.sourceforge.net/mirror/setext.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Setext</a>, <a href=\\"http://www.aaronsw.com/2002/atx/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">atx</a>, <a href=\\"http://textism.com/tools/textile/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Textile</a>, <a href=\\"http://docutils.sourceforge.net/rst.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">reStructuredText</a>,\\n<a href=\\"http://www.triptico.com/software/grutatxt.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Grutatext</a>, and <a href=\\"http://ettext.taint.org/doc/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">EtText</a> -- the single biggest source of\\ninspiration for Markdown\'s syntax is the format of plain text email.</p>\\n<h2 id=\\"block-elements\\"><a href=\\"#block-elements\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Block Elements</h2>\\n<h3 id=\\"paragraphs-and-line-breaks\\"><a href=\\"#paragraphs-and-line-breaks\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Paragraphs and Line Breaks</h3>\\n<p>A paragraph is simply one or more consecutive lines of text, separated\\nby one or more blank lines. (A blank line is any line that looks like a\\nblank line -- a line containing nothing but spaces or tabs is considered\\nblank.) Normal paragraphs should not be indented with spaces or tabs.</p>\\n<p>The implication of the \\"one or more consecutive lines of text\\" rule is\\nthat Markdown supports \\"hard-wrapped\\" text paragraphs. This differs\\nsignificantly from most other text-to-HTML formatters (including Movable\\nType\'s \\"Convert Line Breaks\\" option) which translate every line break\\ncharacter in a paragraph into a <code class=\\"language-text\\">&lt;br /&gt;</code> tag.</p>\\n<p>When you <em>do</em> want to insert a <code class=\\"language-text\\">&lt;br /&gt;</code> break tag using Markdown, you\\nend a line with two or more spaces, then type return.</p>\\n<h3 id=\\"headers\\"><a href=\\"#headers\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Headers</h3>\\n<p>Markdown supports two styles of headers, [Setext][1] and [atx][2].</p>\\n<p>Optionally, you may \\"close\\" atx-style headers. This is purely\\ncosmetic -- you can use this if you think it looks better. The\\nclosing hashes don\'t even need to match the number of hashes\\nused to open the header. (The number of opening hashes\\ndetermines the header level.)</p>\\n<h3 id=\\"images\\"><a href=\\"#images\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Images</h3>\\n<p>Images are added with <code class=\\"language-text\\">![Image Alt](./images/image.jpg)</code></p>\\n<p><img class=\\"g-image g-image--lazy g-image--loading\\" src=\\"data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 2560 1704\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-2\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-2)\' width=\'2560\' height=\'1704\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABwECAwUABAYI/8QAMRAAAQMCAwcCAwkAAAAAAAAAAQACAwQRBQYhEhMiMUGRoVFhcYGxFiMyQkNScsHh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIEAAMF/8QAJhEAAgEDAgQHAAAAAAAAAAAAAAECAwQSESETQVGRIiQxQlKBof/aAAwDAQACEQMRAD8A8%2bmMkpzYXHorWOjLjyW/T4YXW0KqaRItSgbTOPRTNpHHoV1lNgrnW4T2VpTZdc63D4W8PNhxm/RHCNoXH8pUzMPeehRKp8qvcBZnhWVPk57v0/CZSh1ElTqdAYUuHuBHCVZQ0LjbQonQZLfp90ey2m5SMYuYz2XaNenHmTTo1HyBPEZIBeWnpx6XlsrWnnqmxtdHh0JvyO2dVxMON1EJvC4Md%2b5rRfusnxqsmFqipneD0dIforXC3%2bJGp3i9wQY8VxGIgihpAPc/6p34/i7C1zm01O1pvpZo%2bd0Oo8bkihMdM1sV/wAT%2bb3fM8h7BNmxmqqGbNRO6VtrWfZ31RwtlvgK6l89nUCzhOe8Qjm3b2YTVG%2bjNrZd4K6Nudsba3gwKiab8yXnTuvPrqtr28YGnL1U9Pibo5WubUVMY5bTH6/UJHRtm9XBfozq3qWiqPsmGzMGdMxV9KKemp4MNF7vfATtu9rk6D4KpGb83U%2byXVW9jAsRJC11x8bf2ht9oamO26xOsH89beVDUZsxLVorpJPe2nldMLWMccFp3J/PSnlxN/tHKia3UpTKSbk%2bVrhLfVQZM9rBE4kI6jus3x9QoeqcOi2rNih5ld6rN4fUppAHJKOQW3BohdspCT1KaSVGSUGwqJ//2Q==\' /%3e%3c/svg%3e\\" width=\\"2560\\" alt=\\"Image\\" data-srcset=\\"/assets/static/alexandr-podvalny-220262-unsplash.82a2fbd.4903438.jpg 480w, /assets/static/alexandr-podvalny-220262-unsplash.cbab2cf.4903438.jpg 1024w, /assets/static/alexandr-podvalny-220262-unsplash.2665e34.4903438.jpg 1920w, /assets/static/alexandr-podvalny-220262-unsplash.42db587.4903438.jpg 2560w\\" data-sizes=\\"(max-width: 2560px) 100vw, 2560px\\" data-src=\\"/assets/static/alexandr-podvalny-220262-unsplash.42db587.4903438.jpg\\"><noscript><img class=\\"g-image g-image--lazy g-image--loaded\\" src=\\"/assets/static/alexandr-podvalny-220262-unsplash.42db587.4903438.jpg\\" width=\\"2560\\" alt=\\"Image\\"></noscript></p>\\n<h3 id=\\"blockquotes\\"><a href=\\"#blockquotes\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Blockquotes</h3>\\n<p>Markdown uses email-style <code class=\\"language-text\\">&gt;</code> characters for blockquoting. If you\'re\\nfamiliar with quoting passages of text in an email message, then you\\nknow how to create a blockquote in Markdown. It looks best if you hard\\nwrap the text and put a <code class=\\"language-text\\">&gt;</code> before every line:</p>\\n<blockquote>\\n<p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>\\n<p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\\nid sem consectetuer libero luctus adipiscing.</p>\\n</blockquote>\\n<p>Markdown allows you to be lazy and only put the <code class=\\"language-text\\">&gt;</code> before the first\\nline of a hard-wrapped paragraph:</p>\\n<blockquote>\\n<p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>\\n<p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\\nid sem consectetuer libero luctus adipiscing.</p>\\n</blockquote>\\n<p>Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by\\nadding additional levels of <code class=\\"language-text\\">&gt;</code>:</p>\\n<blockquote>\\n<p>This is the first level of quoting.</p>\\n<blockquote>\\n<p>This is nested blockquote.</p>\\n</blockquote>\\n<p>Back to the first level.</p>\\n</blockquote>\\n<p>Blockquotes can contain other Markdown elements, including headers, lists,\\nand code blocks:</p>\\n<blockquote>\\n<h2 id=\\"this-is-a-header\\"><a href=\\"#this-is-a-header\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>This is a header.</h2>\\n<ol>\\n<li>This is the first list item.</li>\\n<li>This is the second list item.</li>\\n</ol>\\n<p>Here\'s some example code:</p>\\n<pre class=\\"language-text\\">return shell_exec(&quot;echo $input | $markdown_script&quot;);</pre>\\n</blockquote>\\n<p>Any decent text editor should make email-style quoting easy. For\\nexample, with BBEdit, you can make a selection and choose Increase\\nQuote Level from the Text menu.</p>\\n<h3 id=\\"lists\\"><a href=\\"#lists\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Lists</h3>\\n<p>Markdown supports ordered (numbered) and unordered (bulleted) lists.</p>\\n<p>Unordered lists use asterisks, pluses, and hyphens -- interchangably\\n-- as list markers:</p>\\n<ul>\\n<li>Red</li>\\n<li>Green</li>\\n<li>Blue</li>\\n</ul>\\n<p>is equivalent to:</p>\\n<ul>\\n<li>Red</li>\\n<li>Green</li>\\n<li>Blue</li>\\n</ul>\\n<p>and:</p>\\n<ul>\\n<li>Red</li>\\n<li>Green</li>\\n<li>Blue</li>\\n</ul>\\n<p>Ordered lists use numbers followed by periods:</p>\\n<ol>\\n<li>Bird</li>\\n<li>McHale</li>\\n<li>Parish</li>\\n</ol>\\n<p>It\'s important to note that the actual numbers you use to mark the\\nlist have no effect on the HTML output Markdown produces. The HTML\\nMarkdown produces from the above list is:</p>\\n<p>If you instead wrote the list in Markdown like this:</p>\\n<ol>\\n<li>Bird</li>\\n<li>McHale</li>\\n<li>Parish</li>\\n</ol>\\n<p>or even:</p>\\n<ol start=\\"3\\">\\n<li>Bird</li>\\n<li>McHale</li>\\n<li>Parish</li>\\n</ol>\\n<p>you\'d get the exact same HTML output. The point is, if you want to,\\nyou can use ordinal numbers in your ordered Markdown lists, so that\\nthe numbers in your source match the numbers in your published HTML.\\nBut if you want to be lazy, you don\'t have to.</p>\\n<p>To make lists look nice, you can wrap items with hanging indents:</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\\nviverra nec, fringilla in, laoreet vitae, risus.</li>\\n<li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\\nSuspendisse id sem consectetuer libero luctus adipiscing.</li>\\n</ul>\\n<p>But if you want to be lazy, you don\'t have to:</p>\\n<ul>\\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\\nviverra nec, fringilla in, laoreet vitae, risus.</li>\\n<li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\\nSuspendisse id sem consectetuer libero luctus adipiscing.</li>\\n</ul>\\n<p>List items may consist of multiple paragraphs. Each subsequent\\nparagraph in a list item must be indented by either 4 spaces\\nor one tab:</p>\\n<ol>\\n<li>\\n<p>This is a list item with two paragraphs. Lorem ipsum dolor\\nsit amet, consectetuer adipiscing elit. Aliquam hendrerit\\nmi posuere lectus.</p>\\n<p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet\\nvitae, risus. Donec sit amet nisl. Aliquam semper ipsum\\nsit amet velit.</p>\\n</li>\\n<li>Suspendisse id sem consectetuer libero luctus adipiscing.</li>\\n</ol>\\n<p>It looks nice if you indent every line of the subsequent\\nparagraphs, but here again, Markdown will allow you to be\\nlazy:</p>\\n<ul>\\n<li>\\n<p>This is a list item with two paragraphs.</p>\\n<pre class=\\"language-text\\">This is the second paragraph in the list item. You&#39;re</pre>\\n<p>only required to indent the first line. Lorem ipsum dolor\\nsit amet, consectetuer adipiscing elit.</p>\\n</li>\\n<li>Another item in the same list.</li>\\n</ul>\\n<p>To put a blockquote within a list item, the blockquote\'s <code class=\\"language-text\\">&gt;</code>\\ndelimiters need to be indented:</p>\\n<ul>\\n<li>\\n<p>A list item with a blockquote:</p>\\n<blockquote>\\n<p>This is a blockquote\\ninside a list item.</p>\\n</blockquote>\\n</li>\\n</ul>\\n<p>To put a code block within a list item, the code block needs\\nto be indented <em>twice</em> -- 8 spaces or two tabs:</p>\\n<ul>\\n<li>\\n<p>A list item with a code block:</p>\\n<pre class=\\"language-text\\">&lt;code goes here&gt;</pre>\\n</li>\\n</ul>\\n<h3 id=\\"code-blocks\\"><a href=\\"#code-blocks\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Code Blocks</h3>\\n<p>Pre-formatted code blocks are used for writing about programming or\\nmarkup source code. Rather than forming normal paragraphs, the lines\\nof a code block are interpreted literally. Markdown wraps a code block\\nin both <code class=\\"language-text\\">&lt;pre&gt;</code> and <code class=\\"language-text\\">&lt;code&gt;</code> tags.</p>\\n<p>To produce a code block in Markdown, simply indent every line of the\\nblock by at least 4 spaces or 1 tab.</p>\\n<p>This is a normal paragraph:</p>\\n<pre class=\\"language-text\\">This is a code block.</pre>\\n<p>Here is an example of AppleScript:</p>\\n<pre class=\\"language-text\\">tell application &quot;Foo&quot;\\n    beep\\nend tell</pre>\\n<p>A code block continues until it reaches a line that is not indented\\n(or the end of the article).</p>\\n<p>Within a code block, ampersands (<code class=\\"language-text\\">&amp;</code>) and angle brackets (<code class=\\"language-text\\">&lt;</code> and <code class=\\"language-text\\">&gt;</code>)\\nare automatically converted into HTML entities. This makes it very\\neasy to include example HTML source code using Markdown -- just paste\\nit and indent it, and Markdown will handle the hassle of encoding the\\nampersands and angle brackets. For example, this:</p>\\n<pre class=\\"language-text\\">&lt;div class=&quot;footer&quot;&gt;\\n    &amp;copy; 2004 Foo Corporation\\n&lt;/div&gt;</pre>\\n<p>Regular Markdown syntax is not processed within code blocks. E.g.,\\nasterisks are just literal asterisks within a code block. This means\\nit\'s also easy to use Markdown to write about Markdown\'s own syntax.</p>\\n<pre class=\\"language-text\\">tell application &quot;Foo&quot;\\n    beep\\nend tell</pre>\\n<h2 id=\\"span-elements\\"><a href=\\"#span-elements\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Span Elements</h2>\\n<h3 id=\\"links\\"><a href=\\"#links\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Links</h3>\\n<p>Markdown supports two style of links: <em>inline</em> and <em>reference</em>.</p>\\n<p>In both styles, the link text is delimited by [square brackets].</p>\\n<p>To create an inline link, use a set of regular parentheses immediately\\nafter the link text\'s closing square bracket. Inside the parentheses,\\nput the URL where you want the link to point, along with an <em>optional</em>\\ntitle for the link, surrounded in quotes. For example:</p>\\n<p>This is <a href=\\"http://example.com/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">an example</a> inline link.</p>\\n<p><a href=\\"http://example.net/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">This link</a> has no title attribute.</p>\\n<h3 id=\\"emphasis\\"><a href=\\"#emphasis\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Emphasis</h3>\\n<p>Markdown treats asterisks (<code class=\\"language-text\\">*</code>) and underscores (<code class=\\"language-text\\">_</code>) as indicators of\\nemphasis. Text wrapped with one <code class=\\"language-text\\">*</code> or <code class=\\"language-text\\">_</code> will be wrapped with an\\nHTML <code class=\\"language-text\\">&lt;em&gt;</code> tag; double <code class=\\"language-text\\">*</code>\'s or <code class=\\"language-text\\">_</code>\'s will be wrapped with an HTML\\n<code class=\\"language-text\\">&lt;strong&gt;</code> tag. E.g., this input:</p>\\n<p><em>single asterisks</em></p>\\n<p><em>single underscores</em></p>\\n<p><strong>double asterisks</strong></p>\\n<p><strong>double underscores</strong></p>\\n<h3 id=\\"code\\"><a href=\\"#code\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Code</h3>\\n<p>To indicate a span of code, wrap it with backtick quotes (<code class=\\"language-text\\">`</code>).\\nUnlike a pre-formatted code block, a code span indicates code within a\\nnormal paragraph. For example:</p>\\n<p>Use the <code class=\\"language-text\\">printf()</code> function.</p>\\n"}},{"node":{"title":"A post with a cover image","path":"/a-post-with-a-cover-image","date":"7. January 2019","timeToRead":1,"description":"Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it\'s been marked up with tags or formatting instructions.","coverImage":{"type":"image","mimeType":"image/jpeg","src":"/assets/static/alexandr-podvalny-220262-unsplash.07cc2b7.4903438.jpg","size":{"width":860,"height":573},"sizes":"(max-width: 860px) 100vw, 860px","srcset":["/assets/static/alexandr-podvalny-220262-unsplash.a67b0b2.4903438.jpg 480w","/assets/static/alexandr-podvalny-220262-unsplash.07cc2b7.4903438.jpg 860w"],"dataUri":"data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 860 573\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-3\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'10\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-3)\' width=\'860\' height=\'573\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABwECAwUABAYI/8QAMRAAAQMCAwcCAwkAAAAAAAAAAQACAwQRBQYhEhMiMUGRoVFhcYGxFiMyQkNScsHh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIEAAMF/8QAJhEAAgEDAgQHAAAAAAAAAAAAAAECAwQSESETQVGRIiQxQlKBof/aAAwDAQACEQMRAD8A8%2bmMkpzYXHorWOjLjyW/T4YXW0KqaRItSgbTOPRTNpHHoV1lNgrnW4T2VpTZdc63D4W8PNhxm/RHCNoXH8pUzMPeehRKp8qvcBZnhWVPk57v0/CZSh1ElTqdAYUuHuBHCVZQ0LjbQonQZLfp90ey2m5SMYuYz2XaNenHmTTo1HyBPEZIBeWnpx6XlsrWnnqmxtdHh0JvyO2dVxMON1EJvC4Md%2b5rRfusnxqsmFqipneD0dIforXC3%2bJGp3i9wQY8VxGIgihpAPc/6p34/i7C1zm01O1pvpZo%2bd0Oo8bkihMdM1sV/wAT%2bb3fM8h7BNmxmqqGbNRO6VtrWfZ31RwtlvgK6l89nUCzhOe8Qjm3b2YTVG%2bjNrZd4K6Nudsba3gwKiab8yXnTuvPrqtr28YGnL1U9Pibo5WubUVMY5bTH6/UJHRtm9XBfozq3qWiqPsmGzMGdMxV9KKemp4MNF7vfATtu9rk6D4KpGb83U%2byXVW9jAsRJC11x8bf2ht9oamO26xOsH89beVDUZsxLVorpJPe2nldMLWMccFp3J/PSnlxN/tHKia3UpTKSbk%2bVrhLfVQZM9rBE4kI6jus3x9QoeqcOi2rNih5ld6rN4fUppAHJKOQW3BohdspCT1KaSVGSUGwqJ//2Q==\' /%3e%3c/svg%3e"},"content":"<p>Readability, however, is emphasized above all else. A Markdown-formatted\\ndocument should be publishable as-is, as plain text, without looking\\nlike it\'s been marked up with tags or formatting instructions. </p>\\n<p>While Markdown\'s syntax has been influenced by several existing text-to-HTML filters -- including <a href=\\"http://docutils.sourceforge.net/mirror/setext.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Setext</a>, <a href=\\"http://www.aaronsw.com/2002/atx/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">atx</a>, <a href=\\"http://textism.com/tools/textile/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Textile</a>, <a href=\\"http://docutils.sourceforge.net/rst.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">reStructuredText</a>,\\n<a href=\\"http://www.triptico.com/software/grutatxt.html\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Grutatext</a>, and <a href=\\"http://ettext.taint.org/doc/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">EtText</a> -- the single biggest source of\\ninspiration for Markdown\'s syntax is the format of plain text email.</p>\\n"}}]}}}}')}}]);