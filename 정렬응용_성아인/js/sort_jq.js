$(function(){
    $('select').on("change",function(){
        const a = $(this).val();
        const $list = $("ul>li");
        const strname = a;

        slideTarget(strname.substr(4,1));
        function slideTarget(n){
            let detail;
            if (n == "0"){
                location.reload(true);

            }else if(n == "1"){
                detail = $list.sort((a,b) => {
                    const dateA = new Date($(a).find("span.date").text());
                    const dateB = new Date($(b).find("span.date").text());

                    return dateB - dateA;
                });
            }else if(n == "2"){
                detail = $list.sort((a,b) => {
                    const priceA = parseInt($(a).find("span.price").text().replace(/[^0-9]/g,''));
                    const priceB = parseInt($(b).find("span.price").text().replace(/[^0-9]/g,''));

                    return priceB - priceA;
                });
            }else{
                detail = $list.sort((a,b) => {
                    const priceA = parseInt($(a).find("span.price").text().replace(/[^0-9]/g,''));
                    const priceB = parseInt($(b).find("span.price").text().replace(/[^0-9]/g,''));
                    
                    return priceA - priceB;
                });
            } $("#content ul").html($(detail));
        }
    });
});