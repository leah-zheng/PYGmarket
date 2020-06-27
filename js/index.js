window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrowl = focus.querySelector('.arrow-left');
    var arrowr = focus.querySelector('.arrow-right');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function() {
            arrowr.click();
        }, 2000)
    })

    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);

        // 排他
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth)
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first)
    var num = 0;
    var circle = 0;
    var flag = true;
    if (flag) {
        flag = false;
        arrowr.addEventListener('click', function() {
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();

        })
    }
    arrowl.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();

    })

    function circleChange() {

        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var timer = setInterval(function() {
        arrowr.click();
    }, 2000)


})
$(function() {
    var toolTop = $(".recommend").offset().top;

    function toolScroll() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    toolScroll()

    var flag = true;
    $(window).scroll(function() {
        toolScroll();
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() > $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }

    })

    $(".fixedtool li").on("click", function() {
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").animate({
            scrollTop: current
        })
        $(this).addClass("current").siblings().removeClass();
    })





})