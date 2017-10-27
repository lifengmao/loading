//图片预加载

(function($) {
    function Preload(imgs,options) {
      this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
      this.opts = $.extend({},Preload.DEFAULTS, options);

      if(this.opts.order === 'ordered') {
        this._ordered();
      }else {
        this._unordered();
      }

    }
    Preload.DEFAULTS = {
      order:'unordered',//无序预加载
      each:null, //每一张图片加载完毕后执行
      all:null  //所有图片加载完毕后执行
    };
    Preload.prototype._ordered = function() {
      //有序加载
      var opts = this.opts,
          imgs = this.imgs,
          len = imgs.length,
          count = 0;

          function load() {
            var imgObj = new Image();

            $(imgObj).on('load error',function(){
              opts.each && opts.each(count);
              if(count >= len){
                //图片加载完毕
                opts.all && opts.all();
              }else {
                //继续加载
                load();
              }
              count ++;
            });
            imgObj.src = imgs[count];
          }
          load();

    }
    Preload.prototype._unordered = function() {
      //无序加载
      var imgs = this.imgs,
          opts = this.opts,
          count = 0,
          len = imgs.length;

      $.each(imgs,function(i,src) {
        if(typeof src != 'string') return;

        var imgObj = new Image();
        $(imgObj).on('load error',function() {
          //$progress.html(Math.round((count + 1) / len * 100) + '%' );
          opts.each && opts.each(count);
          if(count >= len - 1) {
            //$('.loading').fadeOut();
            //document.title = '1/' + len;
            opts.all && opts.all();
          }
          count ++;
        });
        imgObj.src = src;
      });
    };

    $.extend({
      preload:function(imgs,opts) {
        new Preload(imgs,opts);
      }
    });
  })(jQuery);
