window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/;
    var regmes = /^\d{6}$/
    var regname = /^[\u4e00-\u9fa5a-zA-Z_]{2,14}$/;
    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var mes = document.querySelector('#mes');
    var uname = document.querySelector('#uname')
    var pass = document.querySelector('#pass');
    var rightpass = document.querySelector('#rightpass');
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(mes, regmes);
    regexp(uname, regname);
    regexp(pass, regpass);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 格式正确';
            } else {
                this.nextElementSibling.className = 'errow';
                this.nextElementSibling.innerHTML = '<i class="errow_icon"></i> 格式不正确，请重新输入';
            }
        }
    }
    rightpass.onblur = function() {
        if (rightpass.value == pass.value && rightpass.value != '') {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
        } else {
            this.nextElementSibling.className = 'errow';
            this.nextElementSibling.innerHTML = '<i class="errow_icon"></i> 两次输入的密码不符，请重新输入';
        }
    }
}