document.addEventListener("DOMContentLoaded", function(){
    const cache = [];

    document.querySelectorAll("#pic img").forEach(function(img){
        cache.push({
            element: img, text: (img.alt+" "+img.dataset.tag).trim().toLowerCase()
        });
    });
    function filter(){
        const q = this.value.trim().toLowerCase()
        cache.forEach(function(img){
            let index = 0;
            if(q){
                index = img.text.indexOf(q);
            }
            img.element.style.display = index == -1 ? 'none' : ' ';
        });
    }
    document.getElementById("filter-search").addEventListener("keyup",filter);
});