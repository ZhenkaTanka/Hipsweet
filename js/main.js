//TABS

(function(){
    var link = $(".tabs__item-link");
    
    link.on("click", function(event){
        event.preventDefault();
        var itemTitle = $(this).closest(".tabs__item");
        var itemNum = itemTitle.index();
        var container = itemTitle.closest(".tabs");
        var content = container.find(".tabs__content-item");
        
        itemTitle.addClass("our-team__cook-item_active").siblings().removeClass("our-team__cook-item_active");
        
        content.eq(itemNum).addClass("tabs__content-item_active").siblings().removeClass("tabs__content-item_active");
    });
})();

//AKKORDEON

(function(){
    var title = $(".faq__question");
    var content = $(this).find(".faq__block-answer");
    
    title.on("click", function(even){
        title.closest(".faq__item").find(".faq__question").removeClass("faq__question_active");
        $(this).toggleClass("faq__question_active");
        
        title.closest(".faq__item").find(".faq__block-answer").removeClass("faq__block-answer_active");
        $(this).closest(".faq__item").find(".faq__block-answer").toggleClass("faq__block-answer_active");
    });
})();

//SLIDER