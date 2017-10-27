var $btn = $('#face-btn'),
    $panel = $('.panel');

var imgs = [];

for (var i = 0 ; i < 132; i++) {
  imgs[i] = 'face/QQ/' + (i + 1) +'.gif';
}

var len = imgs.length;

$btn.on('click',function(e) {
  e.stopPropagation();
  $panel.show();

  $.preload(imgs,{
    all:function() {
      var html = '';
      html += '<ul class="list">';

      for (var i = 0; i < len; i++) {
        html += '<li><img src="'+imgs[i]+'" alt=""></li>';
      }

      html += '</ul>';

      $panel.html(html);
    }
  });
})

$(document).on('click', function() {
  $panel.hide();
});
