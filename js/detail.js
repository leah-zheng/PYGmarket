window.addEventListener('load', function() {


    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var preview_img = document.querySelector('.preview_img');
    var bigimg = big.querySelector('.bigImg');

    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        var bigMax = bigimg.offsetWidth - big.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else
        if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 大图片移动距离 = 遮挡层移动距离 / 大图片最大移动距离 * 遮挡层最大移动距离
        bigX = maskX / maskMax * bigMax;
        bigY = maskY / maskMax * bigMax;
        bigimg.style.left = -bigX + 'px';
        bigimg.style.top = -bigY + 'px';



    })



    // var lis = document.querySelector('.detail_tab_list').querySelectorAll('li');
    // var items = document.querySelectorAll('.item');



    // // detail_tab_list
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].setAttribute('data-index', i);
    //     lis[i].onclick = function() {

    //         for (var i = 0; i < lis.length; i++) {
    //             lis[i].className = '';
    //         }
    //         this.className = 'current';
    //         var index = this.getAttribute('data-index');

    //         for (var i = 0; i < lis.length; i++) {
    //             items[i].style.display = 'none';
    //         }
    //         items[index].style.display = 'block';

    //     }
    // }

    // detail_tab_list jQuery
    $(function() {
        $(".detail_tab_list li").click(function() {
            var index = $(this).index();

            $(this).addClass("current").siblings().removeClass("current");
            $(".detail_tab_con .item").eq(index).show().siblings().hide();

        });
    })
})