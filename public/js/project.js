var projects=[{title:"Project 01",url:"/projects/project-01/",date:"true",categories:["Cat 01"],tags:["Tag 01","Tag 02","Tag 03"],brief:"Brief description of project 01",content:"First Heading  Second heading  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},{title:"Project 02",url:"/projects/project-02/",date:"true",categories:["Cat 03"],tags:["Tag 01","Tag 03"],brief:"Brief description of project 02 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",content:""},{title:"Project 03",url:"/projects/project-03/",date:"true",categories:["Cat 01","Cat 02"],tags:["Tag 02","Tag 03"],brief:"Brief description of project 03",content:""}];
var idx=lunr(function(){for(var e in this.field("title"),this.field("brief"),this.field("categories"),this.field("tags"),this.field("date"),this.field("content"),this.ref("id"),this.pipeline.remove(lunr.trimmer),projects)this.add({title:projects[e].title,brief:projects[e].brief,categories:projects[e].categories,tags:projects[e].tags,date:projects[e].date,content:projects[e].content,id:e})});let search_input=document.getElementById("project-search"),result_output=document.getElementById("project-results"),query=search_input.value.toLowerCase(),result_text="";result_output.innerHTML=result_text,search_input.addEventListener("keyup",function(){let e=search_input.value.toLowerCase(),t=idx.search(e);result_output.innerHTML="";let r="";for(r=0==t.length?'<p>No results found for the "'+e+'"</p>':""==e?"":"<p>"+t.length+" Result(s) found</p>",index=0;index<t.length;index++){t[index].ref;let e=projects[t[index].ref].title,i="/reboot-lanyon",s=projects[t[index].ref].url,o=projects[t[index].ref].date,n=(new Date(o).toDateString(),projects[t[index].ref].brief);r+='<div class="blog-item">',console.log("URL: "+s),console.log("Base URL: "+i),r+='<h2 class="blog-title"><a href="'+i+s+'">',r+=e+"</a></h2>",r+='<article class="blog-excerpt">'+n+"</article>",r+="</div>",r+="</div>"}result_output.innerHTML=r});