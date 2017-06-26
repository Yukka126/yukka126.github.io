// new WOW().init();

$(function (){

    // sticky header

    $(".page-header").each(function(){

        var $window = $(window),
            $header = $(this),
            // ヘッダーのデフォルト位置を取得
            // offset()メソッドはjQuery要素のドキュメント上の位置を取得するメソッド
            // $header.offset().leftはヘッダーの左からの距離
            // $header.offset().topはヘッダーの上からの距離
            headerOffsetTop = $header.offset().top;
        //ウィンドウのスクロールのイベントを監視
        //ウィンドウがスクロールするごとに処理を実行する 
        $window.on("scroll", function(){
            // ウィンドウのスクロール量をチェックし、
            // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            // そうでなければ削除
            if($window.scrollTop() > headerOffsetTop){
                $header.addClass("sticky");
            } else{
                $header.removeClass("sticky");
            }
        });
        // ウィンドウのスクロールイベントを発生させる
        // ヘッダーの初期位置を調整するため
        $window.trigger("scroll");
    });

    // sp-menu

    $('.menu-button-sp').on('click',function(){
        $('.menu-list-box').fadeToggle();
    });

    $('.menu-list-box').on('click',function(){
         $('.menu-list-box').fadeToggle(500);
    });

    // photo-change

    $(".photo-item").hover(function(){
        $(this).children("p").stop().fadeToggle();
    });

    // slideshow
    // $('#slick').on('init', function(){
    //   $('.slick-container').addClass('initialized');
    // });


    $('#slider').slick({
      slidesToShow: 2, //画面上に何個表示させるか
      slidesToScroll: 1, //何個ずつスクロールさせるか
      autoplay: true, //自動再生させるか
      autoplaySpeed: 4000, //自動再生の間隔
      dots:  true, //下のドットは表示させるか
      arrows:  false, //左右のナビゲーションは表示させるか
      infinite: true, //ループさせるかどうか
      centerMode: true, //表示中のスライドをセンターに配置するか
      responsive: [ //レスポンシブの設定
      {
        breakpoint: 1024, //ブレークポイント1の値
          settings: { //ブレークポイント1のオプション
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
      },
      {
        breakpoint: 768, //ブレークポイント2の値
          settings: { //ブレークポイント2のオプション
            slidesToShow: 2,
            slidesToScroll: 2
          }
      },
      {
        breakpoint: 400, //ブレークポイント3の値
          settings: { //ブレークポイント3のオプション
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }]
    });

    $('.button').prevAll().hide();
    $('.button').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).text('閉じる').addClass('close');
        } else {
            $(this).prevAll().slideUp();
            $(this).text('次の10件を表示').removeClass('close');
        }
    });    


});

