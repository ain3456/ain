document.addEventListener("DOMContentLoaded", function(){
    const select = document.querySelector("select");
    const ul = document.querySelector("#content ul");

    select.addEventListener("change", function(){
        const ab = this.value;
        const lis = Array.from(document.querySelectorAll("#content ul > li"));

            const strName = ab;
            slideTarget(strName.substr(4,1));

            function slideTarget(n){
            let details;
            if(n === "0"){

                location.reload(ture);
            }else if (n === "1"){

                details = lis.sort(function(a,b){
                    const dateA = new Date($(a).find("span.date").text());
                    const dateB = new Date($(b).find("span.date").text());
                    return dateB - dateA;
                });
            }else if (n === "2"){

                details = lis.sort((a,b) => {
                    const priceA = parseInt($(a).find("span.price").text().replace(/[^0-9]/g, ''));
                    const priceB = parseInt($(b).find("span.price").text().replace(/[^0-9]/g, ''));
                    return priceB - priceA;
                });
            }else {

                details = lis.sort((a,b) => {
                    const priceA = parseInt($(a).find("span.price").text().replace(/[^0-9]/g, ''));
                    const priceB = parseInt($(b).find("span.price").text().replace(/[^0-9]/g, ''));
                    return priceA - priceB;
            });
            }

        if (details){
            ul.innerHTML = "";
            details.forEach(function(li){
                ul.appendChild(li);
            });
        }
    }
        });
    });