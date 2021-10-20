$(document).ready(function() {
	$('.accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('600');
		$(".accordion-content").not($(this).next()).slideUp('600');
	});
	$('.accordion-toggle').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$(document).ready(function(){
	$(".timeCs1").click(function(){
		$(".timeCs1").removeClass("active-time1");
		$(this).addClass("active-time1");
			});
});

$(document).ready(function(){
	$(".timeCs2").click(function(){
		$(".timeCs2").removeClass("active-time2");
		$(this).addClass("active-time2");
			});
});

$(document).ready(function(){
	$(".timeCs3").click(function(){
		$(".timeCs3").removeClass("active-time3");
		$(this).addClass("active-time3");
			});
});

$(document).ready(function(){
	$(".timeCs4").click(function(){
		$(".timeCs4").removeClass("active-time4");
		$(this).addClass("active-time4");
			});
});


$(document).ready(function(){
  $(document).on('click','.card1', function(e){
    $(".cardBtn01").show();
    $(".bestPriceShow1").show();
    $(".bestPrice1").hide();
    $(this).addClass("card01")
    $(this).removeClass("card1");
  });
  $(document).on('click','.card01', function(e){
    $(".cardBtn01").hide();
    $(".bestPriceShow1").hide();
    $(".bestPrice1").show();
    $(this).addClass("card1")
    $(this).removeClass("card01");
  });
});

$(document).ready(function(){
  $(document).on('click','.card2', function(e){
    $(".cardBtn02").show();
    $(".bestPriceShow2").show();
    $(".bestPrice2").hide();
    $(this).addClass("card02")
    $(this).removeClass("card2");
  });
  $(document).on('click','.card02', function(e){
    $(".cardBtn02").hide();
    $(".bestPriceShow2").hide();
    $(".bestPrice2").show();
    $(this).addClass("card2")
    $(this).removeClass("card02");
  });
});

$(document).ready(function(){
  $(document).on('click','.card3', function(e){
    $(".cardBtn03").show();
    $(".bestPriceShow3").show();
    $(".bestPrice3").hide();
    $(this).addClass("card03")
    $(this).removeClass("card3");
  });
  $(document).on('click','.card03', function(e){
    $(".cardBtn03").hide();
    $(".bestPriceShow3").hide();
    $(".bestPrice3").show();
    $(this).addClass("card3")
    $(this).removeClass("card03");
  });
});

$(document).ready(function(){
  $(document).on('click','.card4', function(e){
    $(".cardBtn04").show();
    $(".bestPriceShow4").show();
    $(".bestPrice4").hide();
    $(this).addClass("card04")
    $(this).removeClass("card4");
  });
  $(document).on('click','.card04', function(e){
    $(".cardBtn04").hide();
    $(".bestPriceShow4").hide();
    $(".bestPrice4").show();
    $(this).addClass("card4")
    $(this).removeClass("card04");
  });
});



$(document).ready(function(){
  $(".btn-ava").click(function(){
    $(".conHideCard").show();
  })
})


$(document).ready(function(){
  $(document).on('click','.liSeeMore', function(e){
    $(".liHide1").show();
    $(".liUp").show();
    $(".liDown").hide();
    $(this).text("See Less");
    $(this).addClass("liSeeMore1")
    $(this).removeClass("liSeeMore");
  });
  $(document).on('click','.liSeeMore1', function(e){
    $(".liHide1").hide();
    $(this).text("See More");
    $(".liUp").hide();
    $(".liDown").show();
    $(this).addClass("liSeeMore")
    $(this).removeClass("liSeeMore1");
  });
});

$(document).ready(function(){
  $(document).on('click','.liSeeMore2', function(e){
    $(".liHide2").show();
    $(".liUp2").show();
    $(".liDown2").hide();
    $(this).text("See Less");
    $(this).addClass("liSeeMore3")
    $(this).removeClass("liSeeMor2");
  });
  $(document).on('click','.liSeeMore3', function(e){
    $(".liHide2").hide();
    $(this).text("See More");
    $(".liUp2").hide();
    $(".liDown2").show();
    $(this).addClass("liSeeMore2")
    $(this).removeClass("liSeeMore3");
  });
});



$(document).ready(function(){
  $(document).on('click','.itineraryList1', function(e){
    $(".itiShow1").show();
    
    $(this).addClass("itineraryList01")
    $(this).removeClass("itineraryList1");
  });
  $(document).on('click','.itineraryList01', function(e){
    $(".itiShow1").hide();

    $(this).addClass("itineraryList1")
    $(this).removeClass("itineraryList01");
  });
});


$(document).ready(function(){
  $(document).on('click','.itineraryList2', function(e){
    $(".itiShow2").show();
    
    $(this).addClass("itineraryList02")
    $(this).removeClass("itineraryList2");
  });
  $(document).on('click','.itineraryList02', function(e){
    $(".itiShow2").hide();

    $(this).addClass("itineraryList2")
    $(this).removeClass("itineraryList02");
  });
});


$(document).ready(function(){
  $(document).on('click','.itineraryList3', function(e){
    $(".itiShow3").show();
    
    $(this).addClass("itineraryList03")
    $(this).removeClass("itineraryList3");
  });
  $(document).on('click','.itineraryList03', function(e){
    $(".itiShow3").hide();

    $(this).addClass("itineraryList3")
    $(this).removeClass("itineraryList03");
  });
});



$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
$(function() {
  // vars for clients list carousel
  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 220); // 140px width for each client item 
  $clientcarousel.css('width', clientwidth);

  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function() {
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#clients');

  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clients-list li:last').after($first);
      });
    }
  }
});

