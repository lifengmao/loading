var imgs = [
  'http://45.34.137.202:8080/comicdata/12307/1/0.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/1.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/2.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/3.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/4.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/5.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/6.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/7.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/8.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/9.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/10.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/11.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/12.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/13.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/14.jpg',
  'http://45.34.137.202:8080/comicdata/12307/1/15.jpg'
];
var len = imgs.length,
    count = 0,
    index = 0;

//有序预加载

function load() {
  var imgObj = new Image();

  $(imgObj).on('load error',function(){
    if(count >= len){
      //图片加载完毕
    }else {
      //继续加载
      load();
    }
    count ++;
  });
  imgObj.src = imgs[count];
}

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
})
load();
