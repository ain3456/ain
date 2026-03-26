document.addEventListener("DOMContentLoaded",function(){
    const tagged = {};

    document.querySelectorAll("#pic img").forEach(function(img){
        const tags = img.dataset.tag;
        if(tags){
            tags.split(",").forEach(function(tagname){
                if(tagged[tagname] == null){
                    tagged[tagname] = [];
                }
                tagged[tagname].push(img);
            });
        }
    });

    document.querySelectorAll("#all a").forEach(function(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll("#button li").forEach(function(li){
                li.classList.remove("active");
            });
            this.classList.add("active");
            document.querySelectorAll("#pic img").forEach(function(img){
                img.style.display = "";
            });
        });
    });

    document.querySelectorAll("#button li").forEach(function(li){
        li.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll("#all a").forEach(function(a){
                a.classList.remove("active");
            });
            const tagname = this.textContent.trim();
            this.classList.add("active");
            document.querySelectorAll("#button li").forEach(function(siblings){
                if(siblings !== this )siblings.classList.remove("active");
            });
            document.querySelectorAll("#pic img").forEach(function(img){
                img.style.display = "none";
            });

            if(tagged[tagname]){
                tagged[tagname].forEach(function(img){
                    img.style.display = "";
                });
            }
        });
    });
});