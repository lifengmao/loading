var imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835190880&di=78c05ca8ad5380b77c375978778734be&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F398213.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835190879&di=3cf7091b12ddb722ac27b5d663c2273a&imgtype=0&src=http%3A%2F%2Fdl.bizhi.sogou.com%2Fimages%2F2012%2F01%2F19%2F211614.png',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835224253&di=2ad9b0648101ea36bb9c39484613d997&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D928730363%2C1881984966%26fm%3D214%26gp%3D0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835239421&di=93c206d35d399dd9acba7b18d9f4a9e0&imgtype=jpg&src=http%3A%2F%2Ft1.niutuku.com%2F190%2F1312%2F0831%2F0831-niutuku.com-14128.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835190877&di=5af760a2a1fcd4d48e0476e52d9b553e&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F2825%2F2825-15025.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835267562&di=330b95678386aa46942da7619d263f32&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D222657899%2C697475959%26fm%3D214%26gp%3D0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835190875&di=93f11a957b0f8382639ae67583feb182&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F0653%2F0653-2522.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508835280432&di=0737afdf3b25f746d1b8b44e2cd8beb6&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F2053%2Fntk-2053-8423.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508834490537&di=a2670fab9cb209d1183c2e3441fcef83&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F760050.jpg'
];

var index = 0,
    len = imgs.length,
    $progress = $('.progress');

    $.preload(imgs, {
      each:function(count) {
        $progress.html(Math.round((count + 1) / len * 100) + '%');
      },
      all:function() {
        $('.loading').fadeOut();
        document.title = '1/' + len;
      }
    })
    $('.btn').on('click',function() {
      if($(this).data('control') === 'prev') {
        //上一张
        index =  Math.max(--index,0);
      }else {
        //下一张
        index = Math.min(len - 1, ++index);
      }
      document.title = (index + 1) + '/' + len;
      $('#img').attr('src',imgs[index]);
    });
