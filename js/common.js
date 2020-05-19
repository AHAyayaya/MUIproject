var globalUrl = 'http://daolu.laijv.com/'
var appUrl = 'http://daolu.laijv.com/H55F20730.wgt'

console.log(111)

mui.init({
	swipeBack: true
});

// localStorage.removeItem('authKey');
// localStorage.removeItem('sessionId');
var authKey = localStorage.getItem('authKey'); //获取authKey
var sessionId = localStorage.getItem('sessionId'); //获取sessionId
if (authKey == "" || authKey == null || sessionId == null || sessionId == "") {
	setTimeout(function() {
		mui.openWindow({
			url: '../login/login.html'
		});
	}, 500)

}
				// $.ajax({
				// 	url: globalUrl + 'admin/record/islogin',
				// 	type: 'post',
				// 	dataType: 'json',
				// 	headers: { //设置http头参数
				// 		"authKey": authKey,
				// 		"sessionId": sessionId,
				// 	},
				// 	data: {},
				// 	success(res) {
				// 		if (res.code == 200) {
				
				
				// 		} else {
				// 			mui.toast(res.error);
				// 			setTimeout(function() {
				// 				mui.openWindow({
				// 					url: '../login/login.html'
				// 				});
				// 			}, 1500)
				// 		}
				// 	},
				// 	error(err) {
				// 		mui.toast('网络请求失败，请重试');
				// 	}
				// });














