$(function() {
    var no = $('<div class="no"></div>').hide(),
    body = $("body");

    body.append(no);

    $("#preso").bind("showoff:loaded", function(event) {
        $(".content").bind("showoff:next", function(event) {
            var slide = $(currentSlide).find(".content");
            no.hide();
            if(slide.hasClass("antipattern")) {
                if(!slide.data("overlaid")) {
                    no.show();
                    slide.data("overlaid", true);
                    event.preventDefault();
                } else {
                    slide.data("overlaid", false);
                }
            }
        });
    });
});
