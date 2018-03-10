var posts=[{title:"Pointers in C",url:"/blog/2018/03/05/cpp-pointers/",date:"05 March, 2018 15:23 IST",categories:["C++"],tags:["Pointers"],excerpt:"A pointer is a variable which contains the address of a variable.",content:'A pointer is a variable which contains the address of a variable.   Introduction  1 2 3 int x = 1; printf("  Value of x: %d\n", x); printf("Address of x: %p\n", &amp;x);     Output    Value of x: 1  Address of x: 200   1 2 3 4 5 6 int x = 1; int *p = &amp;x; printf("  Value of x: %d\n", x); printf("Address of x: %p\n", &amp;x); printf("  Value of p: %d\n", *p); printf("Address of p: %p\n", p);     Output    Value of x: 1  Address of x: 200    Value of p: 1  Address of p: 200'},{title:"Test - Launching my new jekyll theme on website",url:"/blog/2018/02/24/test-reboot-lanyon/",date:"24 February, 2018 05:23 IST",categories:["Website"],tags:["HTML5","CSS3"],excerpt:"Recently, I’ve been working on a jekyll theme which has the look and feel of the lanyon theme and is suitable for any screen type. Also, I wanted the theme to be easily maintainable for adding new features. This has resulted in this new jekyll theme. The core idealogy of this website’s theme has been derived from the lanyon theme.",content:'Recently, I’ve been working on a jekyll theme which has the look and feel of the lanyon theme and is suitable for any screen type. Also, I wanted the theme to be easily maintainable for adding new features. This has resulted in this new jekyll theme. The core idealogy of this website’s theme has been derived from the lanyon theme.  The theme is open-sourced under MIT License.  Instructions to use     Fork the repository from the following link   Update the _config.yml file present in the source folder   Features  Some of the main features available on this theme:    Formatting text in markdown   Code highlighting using prism.js   Input code from file   $LaTeX$ integration   Adding figures   Utility classes like info, danger, success and warning   Menus            Sidebar       Navigation bar           FontAwesome icons for navigation menu items   Blog posts            Sticky table of contents for the blog posts       Estimated time to read the post as well last modified date for the post       Sharing modules (facebook, gplus, twitter, linkedin etc.,) for all posts       Search box for searching through posts based on key works       Option for scrolling long posts           Google Analytics for tracking   Markdown markup  With the use of markdown, it is easy to generate the web-page content without worrying about HTML     Bold   Italics   Sample link   Code highlighting  This is a test code written in C++ highlighted using monokai theme of prism.js.  1 2 3 4 5 6 7 8 9 10 11 12 13 /* Multiline   * comment   */  // Single line comment  #include &lt;cstdio&gt;  int main(int argc, char **argv) {     printf("Hello World highlight\n");     return 0; }  $ sudo apt-get install vim-gnome   $LaTeX$  LaTeX markup of Pythogoras theorem    Utility Classes  Currently four utility classes are suported in theme: info, danger, success and warning.  Several styled blockquotes     Information block  First line      Danger block  First line      Success block  First line      Warning block  First line   Several styled text     Information text     Danger text     Success text     Warning text   Menu  There are two types of menu’s available in this theme.  Sidebar  For convinience on mobile devices, there is a sidebar which can be toggled on/off by clicking on the hamburger icon (). The functional behaviour of the sidebar has been used from codinfox.  Navbar  For large screen devices, one can use the navigation bar present at the top of the screen for accessing various links. The navigation bar also highlights the current active page in the menu.'},{title:"CSS Components in Reload Lanyon",url:"/blog/2018/02/23/css-components/",date:"23 February, 2018 10:23 IST",categories:["Website"],tags:["HTML5","CSS3"],excerpt:"In this blog, we present various css options available in this theme",content:"In this blog, we present various css options available in this theme   HTML Elements  Tables                 Heading 1       Heading 2       Heading 3                       Text 1       Text 2       Text 3                 Text 1       Text 2       Text 3                 Text 1       Text 2       Text 3                 Text 1       Text 2       Text 3           Buttons  Click me  Components  Chip                Date:  25-01-2018        Card       Title          Content        Utility Classes  Currently four utility classes are suported in theme: info, danger, success and warning.  Styled blockquotes     Information block  First line      Danger block  First line      Success block  First line      Warning block  First line   Styled text     Information text     Danger text     Success text     Warning text   Panel     Heading   Content   Footer"},{title:"Launching my new jekyll theme on website",url:"/blog/2018/02/12/reboot-lanyon/",date:"12 February, 2018 15:23 IST",categories:["Website"],tags:["HTML5","CSS3"],excerpt:"Recently, I’ve been working on a jekyll theme which has the look and feel of the lanyon theme and is suitable for any screen type. Also, I wanted the theme to be easily maintainable for adding new features. This has resulted in this new jekyll theme. The core idealogy of this website’s theme has been derived from the lanyon theme.",content:'Recently, I’ve been working on a jekyll theme which has the look and feel of the lanyon theme and is suitable for any screen type. Also, I wanted the theme to be easily maintainable for adding new features. This has resulted in this new jekyll theme. The core idealogy of this website’s theme has been derived from the lanyon theme.  The theme is open-sourced under MIT License.  Instructions to use     Fork the repository from the following link   Update the _config.yml file present in the source folder   Features  Some of the main features available on this theme:    Formatting text in markdown   Code highlighting using prism.js   Input code from file   $LaTeX$ integration   Adding figures   Utility classes like info, danger, success and warning   Menus            Sidebar       Navigation bar           FontAwesome icons for navigation menu items   Blog posts            Sticky table of contents for the blog posts       Estimated time to read the post as well last modified date for the post       Sharing modules (facebook, gplus, twitter, linkedin etc.,) for all posts       Search box for searching through posts based on key works       Option for scrolling long posts           Google Analytics for tracking   Markdown markup  With the use of markdown, it is easy to generate the web-page content without worrying about HTML     Bold   Italics   Sample link   Code highlighting  This is a test code written in C++ highlighted using monokai theme using rouge highlighter.  1 2 3 4 5 6 7 8 9 10 11 12 13 /* Multiline   * comment   */  // Single line comment  #include &lt;cstdio&gt;  int main(int argc, char **argv) {     printf("Hello World highlight\n");     return 0; }  $ sudo apt-get install vim-gnome  400: Invalid request    $LaTeX$  LaTeX markup of Pythogoras theorem    Utility Classes  Currently four utility classes are suported in theme: info, danger, success and warning.  Several styled blockquotes     Information block  First line      Danger block  First line      Success block  First line      Warning block  First line   Several styled text     Information text     Danger text     Success text     Warning text   Menu  There are two types of menu’s available in this theme.  Sidebar  For convinience on mobile devices, there is a sidebar which can be toggled on/off by clicking on the hamburger icon (). The functional behaviour of the sidebar has been used from codinfox.  Navbar  For large screen devices, one can use the navigation bar present at the top of the screen for accessing various links. The navigation bar also highlights the current active page in the menu.'}];
var baseurl="/reboot-lanyon",idx=lunr(function(){for(var e in this.field("title"),this.field("excerpt"),this.field("categories"),this.field("tags"),this.field("date"),this.field("content"),this.ref("id"),this.pipeline.remove(lunr.trimmer),posts)this.add({title:posts[e].title,excerpt:posts[e].excerpt,categories:posts[e].categories,tags:posts[e].tags,date:posts[e].date,content:posts[e].content,id:e})});let search_input=document.getElementById("blog-search"),result_output=document.getElementById("blog-results"),query=search_input.value.toLowerCase(),result_text="";result_output.innerHTML=result_text,search_input.addEventListener("keyup",function(){let e=search_input.value.toLowerCase(),t=idx.search(e);result_output.innerHTML="";let s="";for(s=0==t.length?'<p>No results found for the "'+e+'"</p>':""==e?"":"<p>"+t.length+" Result(s) found</p>",index=0;index<t.length;index++){t[index].ref;let e=posts[t[index].ref].title,i=posts[t[index].ref].url,r=posts[t[index].ref].date,l=(new Date(r).toDateString(),posts[t[index].ref].excerpt);s+='<div class="blog-item">',s+='<h2 class="blog-title"><a href="'+baseurl+i+'">',s+=e+"</a></h2>",s+='<article class="blog-excerpt">'+l+"</article>",s+="</div>",s+="</div>"}result_output.innerHTML=s});