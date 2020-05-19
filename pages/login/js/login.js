mui.init({
	beforeback: function() {
		return false;
	}
});
//mui.back=function(){return false;}
mui.plusReady(function () {
// 关闭侧滑返回功能
    var page = ["../forgetpwd/forgetpwd.html","../register/register-phone.html"];
    var arr = document.getElementsByClassName("login-btn");
    for(var i=0; i<arr.length; i++ ){
        !function(i){
            arr[i].addEventListener("tap",function(){
                mui.openWindow({
                    url: page[i],
                    id: page[i],
                })
            })
        }(i);
    }
})



