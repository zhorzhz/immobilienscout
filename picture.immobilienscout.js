// picture code
console.log("DEBUG: started")
var imgs = document.getElementsByTagName("img")
var link = document.createElement("a");
        link.id=1;
        link.download = "test";
        link.href = imgs[0].src;
        document.body.appendChild(link)
        link.click();
window.close()
console.log("DEBUG:Loaded")
