

jQuery(document).ready(function(){

        "use strict";
        $('slider-carousel').carouFredSel({
            responsive:true,
            width:'100%',
            circular:true,
            scroll:{
                items:1,
                duration:300,
                pauseOnHover:true
            },
            auto:true,
            items:
            {
                visible:{
                    min:1,
                    max:1
                },
                pagination:{
                    container:".sliderpage",
                    pageAnchorBuilder: false
                }
            }
        })
    })