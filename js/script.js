$(function(){
 //drawerjs
 $( '.drawer' ).drawer();

//スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
// .headerクラスがついた要素の高さを取得
let header = jQuery(".header").innerHeight(); 
let speed = 300;
let id = jQuery(this).attr("href");
let target = jQuery("#" == id ? "html" : id);
// トップからの距離からヘッダー分の高さを引く
let position = jQuery(target).offset().top - header;
if ("fixed" !== jQuery(".header").css("position")) {
  position = jQuery(target).offset().top;
}
if (0 > position) {
  position = 0;
}
// その分だけ移動すればヘッダーと被りません
jQuery("html, body").animate(
{
  scrollTop: position
},
speed
);
return false;
});

//wowjs
 new WOW().init()
  
//googleform
let $form = $('#js-form')
$form.submit(function (e) { 
  $.ajax({ 
 url: $form.attr('action'), 
 data: $form.serialize(), 
 type: "POST", 
 dataType: "xml", 
 statusCode: { 
 0: function () { 
 //送信に成功したときの処理
$form.slideUp()
$('#js-success').slideDown()      
}, 
200: function () { 
//送信に失敗したときの処理
$form.slideUp()
$('#js-error').slideDown()      
} 
}
}); 
  return false; 
}); 

//formの入力確認
 let $submit = $( '#js-submit' )
 $('#js-form input, #js-form textarea').on('change', function(){
   if(
     $('#js-form input[type="text"]' ).val() !== "" &&
     $('#js-form input[type="email"]' ).val() !== "" &&
     $('#js-form input[name="entry.564157241"]' ).prop('checked') === true
   ){
     //すべて入力された時
     $submit.prop('disabled', false)
     $submit.addClass( '-active' )
   } else{
     //入力されていない時
    $submit.prop('disabled', true)
    $submit.removeClass( '-active' )
   }
 })
});
