(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('body').toggleClass('siteBar_showing');
    $('.menuShadow').toggleClass('show');
    $('.siteBar-btn').toggleClass('showing');
  }); 




  // Font controll
  function FontSizeControll () { 

    // Common function for Actions
    function FontAction(actionType,tagElement) {
      var fontSize = parseFloat(window.getComputedStyle(tagElement, null).getPropertyValue('font-size'));
      var lineHeight = parseFloat(window.getComputedStyle(tagElement, null).getPropertyValue('line-height'));
      if (actionType === "increase") {
        tagElement.style.fontSize = (fontSize+1)+"px"
        tagElement.style.lineHeight = (lineHeight+1)+"px"
      }else if (actionType === "decrease") {
        tagElement.style.fontSize = (fontSize-1) +"px"
        tagElement.style.lineHeight = (lineHeight-1) +"px"
      }

    }

    // whole page font controll
    const MainBtns = document.querySelectorAll('.fixed_btn_increments div button');
    if (MainBtns.length > 0) {
      MainBtns.forEach(btn => {
        btn.addEventListener('click', () => {

          let all_a = document.querySelectorAll('a')
          let all_button = document.querySelectorAll('button')
          let all_h1 = document.querySelectorAll('h1')
          let all_h2 = document.querySelectorAll('h2')
          let all_h3 = document.querySelectorAll('h3')
          let all_h4 = document.querySelectorAll('h4')
          let all_h5 = document.querySelectorAll('h5')
          let all_h6 = document.querySelectorAll('h6')
          let all_p = document.querySelectorAll('p')
          let all_span = document.querySelectorAll('span')
          let all_input = document.querySelectorAll('input')
          let all_textarea = document.querySelectorAll('textarea')
          let all_select = document.querySelectorAll('select')
          let all_label = document.querySelectorAll('label')
          let all_small = document.querySelectorAll('small')
          let all_b = document.querySelectorAll('b')


          const allTags = [all_a,all_button,all_h1,all_h2,all_h3,all_h4,all_h5,all_h6,all_p,all_span,all_input,all_textarea,all_select,all_label,all_small,all_b]

          allTags.forEach(tags => {
            tags.forEach(singleTag => { 
              // increase font size
              if (btn.dataset.type == "increament") {
                FontAction('increase', singleTag)

              }// decrease font size
              else if (btn.dataset.type == "decreament") {
                FontAction('decrease', singleTag) 
              }
            })
          })

 


        })
      })
    }


    // single block font controll
    const ForBlockBtns = document.querySelectorAll('.medicin-infos-top div button');
    if (ForBlockBtns.length > 0) {
      ForBlockBtns.forEach(btn => {
        btn.addEventListener('click', () => {
 
          let innerFlexTxts = document.querySelectorAll('.innerFlexTxt')
          innerFlexTxts.forEach(texts => {
            // increase font size
            if (btn.dataset.type == "increament") {
              FontAction('increase', texts)
  
            }// decrease font size
            else if (btn.dataset.type == "decreament") {
              FontAction('decrease', texts) 
            }
          })
 

        })
      })
 

    }

  }
  FontSizeControll ()



  


  $('.searchbox img').click(()=>{
    $('.searchbox').toggleClass('showsearch');
  })
    
  // All Speaches
  $(".allspeaches").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    rtl: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });

    
  // All Articales
  $(".all-articales").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    rtl: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // Gallery
  $(".gallery-items").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    rtl: true,
    stagePadding: 100,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        stagePadding: 20,
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  
  // nice select
  if (document.querySelectorAll("select").length > 0) {
    $('select').niceSelect();
  }

  // Popup
  $(".varea a,.popupVideoShow").on('click', function(e) {
    e.preventDefault();
    const target = e.target
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
    
    var url= target.href+'?autoplay=1'; 
     
    $("#video-popup-iframe").attr('src', url);
    
    $("#video-popup-iframe").on('load', function() {
      $("#video-popup-container").show();
    });
  });
  
  $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $("#video-popup-iframe").attr('src', '');
  });





 
})(jQuery);
