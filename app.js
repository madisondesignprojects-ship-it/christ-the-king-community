(() => {
  "use strict";
  const origin = "https://www.christthekingcc.org";
  const media = origin + "/uploads/2/7/2/4/27244805/";
  const churchPhoto = media + "8357774.jpg";
  const interiorPhoto = media + "2972573.jpg";
  const detailPhoto = media + "5351218.jpg";
  const mpactPhoto = media + "mpactgirlsclubs_orig.jpg";
  const rangerPhoto = media + "rangerkids200x135.png";
  const youtube = "https://www.youtube.com/@christthekingcommunitychur8648/streams";
  const maps = "https://www.google.com/maps/dir/?api=1&destination=401+West+Main+Street%2C+Stoughton%2C+WI+53589";
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
  const img = (src, alt, extra = "") => '<img src="' + src + '" alt="' + esc(alt) + '" loading="lazy" ' + extra + '>';
  const link = (url, label, cls = "text-link") => '<a class="' + cls + '" href="' + url + '">' + label + '</a>';
  const btn = (url, label, cls = "button button-primary") => '<a class="' + cls + '" href="' + url + '">' + label + '</a>';
  const originalPdf = name => media + name;

  function home() {
    return `
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">A congregation in Stoughton, Wisconsin</span>
          <h1>Rooted in history.<br>Growing in faith.</h1>
          <p>Christ the King Community Church is an independent nondenominational Christian church with a story that began in Stoughton in 1991.</p>
          <div class="actions">${btn("/contact.html#visit", "Plan a Visit ↗")}${btn("/sermon-videos.html", "Watch Messages →", "button button-outline")}</div>
        </div>
        <div class="hero-media">${img(churchPhoto, "Historic red-brick Christ the King Community Church building in Stoughton", 'fetchpriority="high"')}<span class="hero-caption">401 West Main Street · Stoughton, Wisconsin</span></div>
      </section>
      <section class="quick-links"><div class="container quick-grid">
        <a class="quick-link" href="/contact.html#visit"><span class="quick-icon" aria-hidden="true">⌖</span><span><strong>Find the Church</strong><small>401 West Main Street, Stoughton</small></span></a>
        <a class="quick-link" href="/sermon-videos.html"><span class="quick-icon" aria-hidden="true">▷</span><span><strong>Watch Online</strong><small>Livestreams and recorded messages</small></span></a>
        <a class="quick-link" href="/contact.html"><span class="quick-icon" aria-hidden="true">↗</span><span><strong>Connect With Us</strong><small>Call the church or get directions</small></span></a>
      </div></section>
      <section class="section"><div class="container split-layout">
        <div class="image-frame">${img(interiorPhoto, "Interior of the historic church building")}</div>
        <div class="split-copy"><span class="eyebrow">Welcome</span><h2>A church in the heart of Stoughton.</h2>
          <p>Christ the King Community Church began when several Stoughton-area families wanted to start a church in their community. The congregation held its first Sunday morning service on September 9, 1991, and later made its home in the historic former Methodist church on West Main Street.</p>
          <p>Today, the building's history and the congregation's ongoing life meet at the corner of Main and Prairie.</p>
          ${link("/about.html", "Learn about the church <span>→</span>")}
        </div>
      </div></section>
      <section class="section section-cream"><div class="container">
        <div class="section-heading"><div><span class="eyebrow">Find your place</span><h2>Explore our ministries.</h2></div><p>Discover the ministries featured on the church's website. Contact the church to confirm current schedules and participation details.</p></div>
        <div class="ministry-grid">
          <article class="ministry-card"><div class="ministry-image">${img(mpactPhoto, "MPact Girls ministry photograph")}</div><div class="ministry-content"><span class="eyebrow">Ministry</span><h3>MPact Girls</h3><p>A girls' club ministry with participation information and forms available from the church.</p>${link("/mpact-girls.html", "Explore MPact <span>→</span>")}</div></article>
          <article class="ministry-card"><div class="ministry-image">${img(rangerPhoto, "Royal Rangers Ranger Kids ministry graphic")}</div><div class="ministry-content"><span class="eyebrow">Mentorship</span><h3>Royal Rangers</h3><p>A mentoring program for boys and young men, focused on developing leaders.</p>${link("/royal-rangers.html", "Explore Rangers <span>→</span>")}</div></article>
          <article class="ministry-card"><div class="ministry-image">${img(detailPhoto, "Detail of the church's historic interior")}</div><div class="ministry-content"><span class="eyebrow">Children &amp; Families</span><h3>Power Hour</h3><p>Learn about the program directly from the church and confirm its current details.</p>${link("/power-hour.html", "Learn more <span>→</span>")}</div></article>
        </div>
      </div></section>
      <section class="message-band"><div class="message-image">${img(detailPhoto, "Historic architectural details inside the church", 'alt="Historic architectural details inside the church"')}</div><div class="message-copy"><span class="eyebrow">Messages &amp; teaching</span><h2>Stay connected to the teaching.</h2><p>Church services are livestreamed through YouTube, with recordings available on the church's channel. Stick Figure Theology is a teaching resource with Pastor Jason.</p><div class="actions">${btn("/sermon-videos.html", "Sermon Videos ↗")}${btn("/stick-figure-theology.html", "Stick Figure Theology →", "button button-outline")}</div></div></section>
      <section class="section"><div class="container history-layout"><div class="history-copy"><span class="eyebrow">A place with a past</span><h2>More than a century of history in this building.</h2><p>Construction on the former Methodist church began in 1904, and the building was dedicated on Easter Sunday 1905. The congregation purchased it in 1991 and has worked to retain its original character while adding modern conveniences.</p>${link("/building.html", "Explore the building <span>→</span>")}<br>${link("/history.html", "Read the church history <span>→</span>")}</div><div class="history-image">${img(churchPhoto, "Historic brick exterior of Christ the King Community Church")}<div class="history-badge"><b>1904–05</b><span>Building history</span></div></div></div></section>
      <section class="section section-cream compact"><div class="container"><div class="section-heading"><div><span class="eyebrow">Stay informed</span><h2>Upcoming events.</h2></div><p>For reliable, current dates, check the church calendar or contact the church.</p></div><div class="event-panel"><div><h3>Looking for what's happening?</h3><p>Current events were not available to verify during this redesign. No dates or events have been invented.</p></div><div class="actions">${btn("/calendar.html", "Church Calendar")}${btn("/contact.html", "Contact the Church", "small-pill")}</div></div></div></section>
      <section class="section"><div class="container"><div class="visit-panel"><div><span class="eyebrow">Plan your visit</span><h2>We’re here in Stoughton.</h2><p>Find the church at 401 West Main Street. Contact us to confirm current worship times and any details you need before visiting.</p></div><div class="visit-details"><div><strong>Visit</strong><span>401 West Main Street<br>Stoughton, WI 53589</span></div><div><strong>Call</strong><span><a href="tel:+16088770303" style="color:inherit">(608) 877-0303</a></span></div><div>${btn(maps, "Get Directions ↗", "button button-outline")}</div></div></div></div></section>`;
  }

  const pages = {
    "/about.html": {
      title:"Welcome to Christ the King",
      desc:"Learn about our church, our people, and the story rooted in this Stoughton community.",
      body:`<p>Christ the King Community Church is an independent nondenominational Christian church in Stoughton, Wisconsin, affiliated with the Fellowship of Christian Assemblies. Our congregation began gathering in 1991 and continues to meet in the historic former Methodist church at Main and Prairie.</p><p>Explore the pages below to learn about our leadership, history, building, pastors, and statement of faith.</p><div class="ministry-list"><a class="ministry-row" href="/leadership--spouses.html"><strong>Leadership &amp; Spouses</strong><p>Meet the leadership team and outside elders.</p></a><a class="ministry-row" href="/history.html"><strong>Our History</strong><p>Read about the congregation's beginnings in Stoughton.</p></a><a class="ministry-row" href="/building.html"><strong>The Building</strong><p>Discover the story of our historic church home.</p></a><a class="ministry-row" href="/statement-of-faith.html"><strong>Statement of Faith</strong><p>Read the beliefs that guide our church.</p></a></div>`
    },
    "/leadership--spouses.html": {
      title:"Leadership & Spouses", desc:"The people serving Christ the King Community Church.",
      body:`<h2>Christ the King's leadership team</h2><p>The church's original page describes a leadership team made up of active members, alongside outside elders involved in their own ministries. The leadership team and outside elders have shared Sunday messages during the year.</p><p>Christ the King is independent and nondenominational and belongs to the Fellowship of Christian Assemblies. Please contact the church to confirm the current leadership roster and roles.</p><h2>Philip and Sherry Hinkle</h2><p>The original biography says Phil and Sherry have been at Christ the King almost since the City Church plant in 1991. Phil is described as lead elder, worship leader, and Royal Ranger Commander. Sherry sings on the worship team and coordinates MPact Girls. They have been faithful members of CTK and have been serving Jesus for 50 years.</p><h2>Outside Elders</h2><h3>Chuck Porta</h3><p>The original church biography describes Chuck's full-time ministry beginning in 1975, including church pastoring, itinerant ministry, prophetic ministry, and oversight work with churches. He founded Ram's Horn Ministries, which sponsored events to edify, exhort, and encourage the church. His challenge to the church is: “Be a voice, not an echo.”</p><h3>John</h3><p>The original biography identifies John as an outside elder who was serving as lead pastor at New Hope Assembly of God in Cornell, Wisconsin, and notes his interest in Royal Rangers, the outdoors, motorcycles, and Faith Riders Motorcycle Ministry. Confirm current details and his full name with the church before updating this biography.</p><h3>Pastor Bruce Dailey</h3><p>The original biography describes Bruce's work as a pastor and Royal Rangers leader, with ministry experience across senior pastoring, children's and youth ministry, church planting, Teen Challenge, and chaplaincy. Confirm his current roles with the church.</p><div class="notice">Several leadership biographies may refer to historical roles. This redesign retains their substance but flags current titles for confirmation.</div>`
    },
    "/history.html": {
      title:"Our History", desc:"The story of a congregation that began in Stoughton in 1991.",
      body:`<p>Several Stoughton-area families were attending Madison Gospel Tabernacle, now City Church, in the late 1980s and wanted to start a church in Stoughton. With the support of Madison Gospel Tabernacle's pastors, Warren Heckman and Ron Dobie, Christ the King Community Church came to life.</p><div class="timeline"><div class="timeline-item"><strong>Late 1980s</strong><p>Stoughton-area families began planning a local congregation with support from Madison Gospel Tabernacle.</p></div><div class="timeline-item"><strong>September 9, 1991</strong><p>Christ the King's first Sunday morning service was held.</p></div><div class="timeline-item"><strong>December 1991</strong><p>The congregation purchased the former United Methodist Church building after initially renting it for offices and meetings.</p></div><div class="timeline-item"><strong>13 months later</strong><p>The church's historical account says the 30-year mortgage was paid off.</p></div><div class="timeline-item"><strong>December 2016</strong><p>Pastor Ron and Julie Dobie retired after serving Christ the King and Stoughton for 25 years.</p></div></div>${img(churchPhoto,"Historic exterior of Christ the King Community Church","class=\"article-photo\"")}<p>Pastor Jason and Rebecca continued to be part of the Stoughton community. The church remains at the corner of Main and Prairie—visible, accessible, and willing to serve.</p>`
    },
    "/building.html": {
      title:"A historic home for the church", desc:"A building with more than a century of history at Main and Prairie.",
      body:`${img(churchPhoto,"Historic red-brick exterior of Christ the King Community Church","class=\"article-photo\"")}<p>Work on the Methodist Church began in 1904, and the building was dedicated on Easter Sunday 1905. The cost of the facility was $9,000. The Methodists occupied the building until 1991, when their new building was completed. Christ the King rented the building for office space and meetings until making an official offer to purchase it in December 1991.</p><p>Since the purchase, the congregation has completed extensive remodeling, updating, and redecorating. The original church account says Pastor Ron used II Chronicles 24:13(b) to direct the renovation work: “They rebuilt the temple of God according to its original design and reinforced it.” With that as a guide, the congregation worked to recover original features by removing paneling, suspended ceilings, and fluorescent lighting while adding modern facilities and utilities.</p><p>Improvements included hot water in the restrooms, air conditioning throughout the building, and an AV system that allows people to listen to the sermon while in the nursery.</p><div class="article-image-grid">${img(interiorPhoto,"Interior of the church building")}${img(detailPhoto,"Architectural detail inside the church")}</div>`
    },
    "/pastors.html": {
      title:"Pastor Jason Miller", desc:"Meet the lead pastor of Christ the King Community Church.",
      body:`<h2>Serving the Stoughton community</h2><p>Pastor Jason Miller has lived in Stoughton, Wisconsin, most of his life. Rebecca, who was raised in Germantown, and Jason were married in 2003. In his original first-person biography, Jason shared that finding a church felt important from the beginning of their relationship. Christ the King felt like a family and encouraged him to grow in faith and in his relationship with his family and God. Their son Erich was born in 2006.</p><p>In 2008 Jason felt called to become more involved in the church and pursue a closer relationship with Jesus. He began working in the AV department and expanded his experience in church ministry. He earned an Associate Degree in Biblical Studies through Christian Life College and continued taking classes toward a bachelor's degree. Since first coming to Christ the King, he has served in many roles, from janitor to Youth Pastor.</p><p>Jason's biography says he wants to give everybody a chance to serve and contribute in their local church as much as they desire.</p><div class="callout"><h2>Galatians 5:13–14 (NIV)</h2><p>“You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. For the entire law is fulfilled in keeping this one command: ‘Love your neighbor as yourself.’”</p></div>`
    },
    "/statement-of-faith.html": {
      title:"Statement of Faith", desc:"The beliefs and scripture references published by Christ the King Community Church.",
      body:`<p>At Christ the King we believe:</p>
      <div class="faith-item"><p>The Bible to be the only inspired, infallible, and authoritative Word of God.</p><small>John 16:13; II Timothy 3:15–17; II Peter 1:21; I Thessalonians 2:13</small></div>
      <div class="faith-item"><p>That there is one God, eternally existent in three persons: Father, Son and Holy Spirit.</p><small>Deut. 6:4; Isaiah 43:10–11; Matt. 28:18; Luke 3:22; John 14:16</small></div>
      <div class="faith-item"><p>In the deity of our Lord Jesus Christ.</p><small>John 1:1, 14, 20:28–29; Philippians 2:6–11; Isaiah 9:6; Col. 2:9</small></div>
      <div class="faith-item"><p>His virgin birth.</p><small>Matthew 1:18; Luke 1:34–35; Isaiah 7:14</small></div>
      <div class="faith-item"><p>His sinless life.</p><small>II Cor. 5:21; Heb. 4:15, 7:26–27; I John 3:5; I Peter 2:22</small></div>
      <div class="faith-item"><p>His miracles.</p><small>Matthew 4:23; Luke 6:17–19; John 3:2</small></div>
      <div class="faith-item"><p>His vicarious and atoning death through His shed blood.</p><small>Colossians 1:14, 20; Romans 5:8–9; Ephesians 1:7</small></div>
      <div class="faith-item"><p>His bodily resurrection.</p><small>I Corinthians 15:3–4; Luke 24:4–7, 36–48; Revelation 1:17–18</small></div>
      <div class="faith-item"><p>His ascension to the right hand of the Father.</p><small>Acts 2:23; 5:30–31; I Peter 3:22</small></div>
      <div class="faith-item"><p>His personal return in power and in glory.</p><small>Acts 1:11; Philippians 2:9–11; I Thessalonians 1:10; 4:13–18; John 14:1–3</small></div>
      <div class="faith-item"><p>That justification by faith in the atonement of Jesus Christ and regeneration by the Holy Spirit are absolutely essential for the salvation of lost and sinful man.</p><small>Romans 3:24–25; John 3:3–7; I John 5:11–13; Ephesians 2:1–16; Revelation 5:9; Acts 4:23; I Corinthians 6:11</small></div>
      <div class="faith-item"><p>That the prime agency for the work of God's Kingdom is the local church functioning under the sovereignty of our Lord Jesus Christ. To the church have been entrusted the ordinances of Believer's Baptism and the Lord's Supper.</p><small>Acts 2:41–47, 16:4–5; Matthew 16:18; 28:18–20; Ephesians 1:22–23; I Corinthians 12:1; I Corinthians 11:23–26</small></div>
      <div class="faith-item"><p>In the present ministry of the Holy Spirit, which includes the baptism in the Holy Spirit as a distinct experience from regeneration; His indwelling whereby the Christian is enabled to live a godly life; and His supernatural gifting and empowering of the church for its work, life and worship.</p><small>Luke 24:49; Acts 1:4–8, 2:1–4, 10:44–46; I Corinthians 12, 14</small></div>
      <div class="faith-item"><p>In a lifestyle and practice of ethical conduct and integrity consistent with the character of Jesus Christ and biblical standards.</p><small>Romans 12:1–2; 1 Corinthians 6:9–10; Galatians 5:19–21; Ephesians 4:13–32; 1 Timothy 3:1–13; Titus 1:5–11; 2:11–13; 3:9–11; 1 Peter 1:13–16</small></div>
      <div class="faith-item"><p>In the return of Jesus Christ, to consummate His Kingdom in the resurrection of both the saved and the lost; those who are saved unto the resurrection of life, and those who are lost unto the resurrection of damnation.</p><small>John 5:28–29; Mark 14:62; II Thessalonians 1:2–10; Revelation 1:5–7; Revelation 20:4–5, 11–12</small></div>
      <div class="faith-item"><p>In the spiritual unity of believers in our Lord Jesus Christ.</p><small>John 17:11, 21–23; Romans 12:4–5; Ephesians 4:11–16</small></div>`
    },
    "/sermon-videos.html": {
      title:"Sermon Videos", desc:"Watch messages and follow the church's YouTube livestreams.",
      body:`<h2>Watch and stay connected</h2><p>The church's original website says services are livestreamed through YouTube and recordings can be viewed on the church's YouTube channel. Visit the channel for current livestreams and recordings.</p><a class="video-link" href="${youtube}" target="_blank" rel="noopener"><span class="play-icon" aria-hidden="true">▶</span><span><strong>Christ the King on YouTube</strong><small>Open livestreams and sermon recordings ↗</small></span></a><p>Subscribe to the channel to be notified when the church goes live. Only church-published content is linked here; no sermon titles or dates have been fabricated.</p>`
    },
    "/stick-figure-theology.html": {
      title:"Stick Figure Theology", desc:"A teaching resource with Pastor Jason to help make foundational theology easier to understand.",
      body:`<h2>Stick Figure Theology Podcast</h2><p>Join Pastor Jason as he dives into basic theology in the Stick Figure Theology podcast to help you understand your walk with God better.</p><a class="video-link" href="${youtube}" target="_blank" rel="noopener"><span class="play-icon" aria-hidden="true">▶</span><span><strong>Explore church teaching videos</strong><small>Visit the church's YouTube channel ↗</small></span></a><p>If a separate Stick Figure Theology archive or podcast feed is available, it can be connected here once the church confirms the current destination.</p>`
    },
    "/upcoming-events.html": {
      title:"Upcoming Events", desc:"Find current church gatherings and announcements.",
      body:`<div class="callout"><h2>Stay up to date</h2><p>The original events page did not expose a reliable current list of events. Rather than display invented dates or gatherings, check the church calendar or contact the church directly.</p><div class="inline-links">${btn("/calendar.html","View Church Calendar")}${btn("/contact.html","Contact the Church","small-pill")}</div></div>`
    },
    "/calendar.html": {
      title:"Church Calendar", desc:"Find current dates and gatherings through church-published information.",
      body:`<h2>Church calendar</h2><p>The current calendar embed or destination could not be verified from the public page content. The page is retained, but a functioning calendar feed or external calendar URL needs to be confirmed by the church.</p><div class="notice">Calendar integration needs confirmation. No events or calendar feed have been fabricated.</div>${btn("/contact.html","Ask about upcoming dates")}`
    },
    "/contact.html": {
      title:"Connect with Christ the King", desc:"Find the church, ask a question, and get in touch with the congregation.",
      body:`<div id="visit"></div><h2>Come find us</h2><p>Christ the King Community Church is located at 401 West Main Street in Stoughton, Wisconsin, at the corner of Main and Prairie.</p><div class="fact-list"><div class="fact"><strong>Address</strong><p>401 West Main Street<br>Stoughton, WI 53589</p></div><div class="fact"><strong>Telephone</strong><p><a href="tel:+16088770303">(608) 877-0303</a></p></div></div><div class="inline-links">${btn(maps,"Get Directions ↗")}${btn("tel:+16088770303","Call the Church","small-pill")}${btn(youtube,"Watch on YouTube ↗","small-pill")}</div><iframe class="map-frame" title="Map showing Christ the King Community Church in Stoughton, Wisconsin" src="https://maps.google.com/maps?q=401%20West%20Main%20Street%2C%20Stoughton%2C%20WI%2053589&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="notice">The available official page content does not clearly establish the current worship schedule. Please contact the church to confirm service times before visiting.</div>`
    },
    "/mpact-girls.html": {
      title:"MPact Girls", desc:"A ministry for girls at Christ the King Community Church.",
      body:`${img(mpactPhoto,"MPact Girls ministry photograph","class=\"article-photo\"")}<p>The original website lists MPact Girls Club meetings on Wednesday nights from 6:30 to 8:00 PM and says the program follows the school calendar, taking holidays when there is a school holiday. Confirm the current schedule with the church before attending.</p><p>The ministry also asks for help providing snacks for the girls each week. Contact the church to confirm the current snack sign-up process.</p><h2>Participation forms</h2><p>The original page provides the following forms for families interested in participation. Each link points to the file hosted by the church.</p><div class="downloads"><a class="download-link" href="${originalPdf("rr_and_mpact_participation.pdf")}" target="_blank" rel="noopener"><strong>Participation Form</strong><span>PDF ↗</span></a><a class="download-link" href="${originalPdf("photo_use.pdf")}" target="_blank" rel="noopener"><strong>Photo Use Form</strong><span>PDF ↗</span></a><a class="download-link" href="${originalPdf("mpact_med_form.pdf")}" target="_blank" rel="noopener"><strong>Medical Form</strong><span>PDF ↗</span></a></div><div class="inline-links">${btn("https://www.youtube.com/embed/KCYckDiOYeY","MPact video ↗","small-pill")}${btn("/contact.html","Ask about MPact Girls","small-pill")}</div>`
    },
    "/power-hour.html": {
      title:"Power Hour", desc:"Learn more about Power Hour at Christ the King Community Church.",
      body:`<p>The existing Power Hour page did not expose a substantive description or schedule in the public content available to this redesign. Rather than guess at the program's format or age group, contact the church for current information.</p><div class="callout"><h2>Interested in Power Hour?</h2><p>Reach out to ask about the current program, meeting schedule, and who it serves.</p>${btn("/contact.html","Contact the Church")}</div>`
    },
    "/royal-rangers.html": {
      title:"Royal Rangers", desc:"A mentoring program for boys and young men at Christ the King.",
      body:`${img(rangerPhoto,"Royal Rangers Ranger Kids graphic","class=\"article-photo\"")}<p>Royal Rangers is a mentoring program for boys and young men. The original website describes its aim as developing leaders for society, the church, and future Royal Rangers leadership.</p><h2>Age groups listed on the original site</h2><div class="ministry-list"><div class="ministry-row"><strong>Ranger Kids</strong><p>Grades K–2</p></div><div class="ministry-row"><strong>Discovery Rangers</strong><p>Grades 3–5</p></div><div class="ministry-row"><strong>Adventure Rangers</strong><p>Grades 6–8</p></div><div class="ministry-row"><strong>Expedition Rangers</strong><p>Grades 9–12</p></div></div><p>Current schedules and group information should be confirmed with the church. The ministry also asks for help providing snacks.</p><h2>Participation forms</h2><div class="downloads"><a class="download-link" href="${originalPdf("rr_and_mpact_participation.pdf")}" target="_blank" rel="noopener"><strong>Participation Form</strong><span>PDF ↗</span></a><a class="download-link" href="${originalPdf("photo_use.pdf")}" target="_blank" rel="noopener"><strong>Photo Use Form</strong><span>PDF ↗</span></a><a class="download-link" href="${originalPdf("med_form.pdf")}" target="_blank" rel="noopener"><strong>Medical Form</strong><span>PDF ↗</span></a></div>`
    },
    "/httpfriendscarenetdaneorg.html": {
      title:"Ministries & Community", desc:"Existing ministry and community resources associated with Christ the King.",
      body:`<h2>Ministries and community</h2><p>The original Ministries page includes an external resource associated with Friends of Care Net Dane County. Confirm the original destination and whether it is still current before changing or removing it.</p><a class="small-pill" href="https://www.christthekingcc.org/httpfriendscarenetdaneorg.html" target="_blank" rel="noopener">View the original ministry page ↗</a><p>Contact the church to learn about current community resources and opportunities to participate.</p>${btn("/contact.html","Contact the Church")}`
    }
  };

  const sidebar = `<aside class="sidebar"><h3>Explore Christ the King</h3><div class="side-links"><a href="/about.html">About the Church</a><a href="/leadership--spouses.html">Leadership &amp; Spouses</a><a href="/history.html">Our History</a><a href="/building.html">The Building</a><a href="/pastors.html">Pastors</a><a href="/statement-of-faith.html">Statement of Faith</a><a href="/sermon-videos.html">Sermon Videos</a><a href="/stick-figure-theology.html">Stick Figure Theology</a><a href="/mpact-girls.html">MPact Girls</a><a href="/power-hour.html">Power Hour</a><a href="/royal-rangers.html">Royal Rangers</a><a href="/upcoming-events.html">Upcoming Events</a><a href="/calendar.html">Calendar</a><a href="/contact.html">Contact &amp; Directions</a></div><div class="side-address"><strong>Visit the church</strong><br>401 West Main Street<br>Stoughton, WI 53589<br><a href="tel:+16088770303">(608) 877-0303</a></div></aside>`;

  function renderPage() {
    const rawPath = decodeURI(location.pathname || "/");
    const path = rawPath.replace(/\/$/, "") || "/";
    const page = pages[path];
    const app = $("#app");
    if (path === "/" || path === "/index.html") {
      document.title = "Christ the King Community Church | Stoughton, Wisconsin";
      app.innerHTML = home();
      $('meta[name="description"]')?.setAttribute("content", "Christ the King Community Church in Stoughton, Wisconsin. Explore our history, ministries, sermons, beliefs, and ways to connect.");
      return;
    }
    if (!page) {
      document.title = "Page Not Found | Christ the King Community Church";
      app.innerHTML = '<section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a> / Page Not Found</div><span class="eyebrow">Christ the King Community Church</span><h1>Page not found</h1><p>The page may have moved. Use the links below to find what you need.</p></div></section><section class="content-section"><div class="container"><p>We could not find that page.</p><a class="button button-primary" href="/">Return home</a></div></section>';
      return;
    }
    document.title = page.title + " | Christ the King Community Church";
    $('meta[name="description"]')?.setAttribute("content", page.desc);
    app.innerHTML = '<section class="page-hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a> &nbsp; / &nbsp; ' + esc(page.title) + '</div><span class="eyebrow">Christ the King Community Church</span><h1>' + esc(page.title) + '</h1><p>' + esc(page.desc) + '</p></div></section><section class="content-section"><div class="container content-layout"><article class="article">' + page.body + '</article>' + sidebar + '</div></section>';
  }

  const toggle = $(".menu-toggle");
  const nav = $("#primary-navigation");
  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.innerHTML = isOpen ? '<span style="transform:translateY(6px) rotate(45deg)"></span><span style="opacity:0"></span><span style="transform:translateY(-6px) rotate(-45deg)"></span>' : "<span></span><span></span><span></span>";
  });
  document.querySelectorAll(".nav-group > button").forEach(button => {
    button.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1080px)").matches) {
        const group = button.closest(".nav-group");
        const open = group.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
      }
    });
  });
  document.addEventListener("click", event => {
    if (window.matchMedia("(max-width: 1080px)").matches && !event.target.closest(".site-header")) {
      nav?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) toggle.innerHTML = "<span></span><span></span><span></span>";
    }
  });
  $("#copyright-year").textContent = String(new Date().getFullYear());
  renderPage();
})();