jQuery(function(){
    jQuery( ".achangAddQA_accordion" ).accordion({
      collapsible: true,
      active: false
    });
});

jQuery(function () {
  jQuery(".achang_AddQA_questionList_question>h3").click(function (e) {
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(this).parent().find("div").slideToggle();
    jQuery(this).find("h2").removeClass("active");
  });  
});