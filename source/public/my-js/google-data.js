var data = 
{
    "name"         : "{{site.author.name}}",
    "author"       : {"@type":"Person","name":"{{site.author.name}}"},
    "@type"        : "WebSite",
    "url"          : "{{site.url}}{{site.baseurl}}{{page.url}}",
    "headline"     : "Home",
    "dateModified" : "",
    "sameAs"       : ["{{site.author.contact.twitter}}", "{{site.author.contact.facebook}}" , "{{site.author.contact.linkedin}}", "{{site.author.contact.github}}"],
    "@context"     : "http://schema.org"
}
var dateModified = document.lastModified;
data.dateModified = dateModified;
var script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName('head')[0].appendChild(script);