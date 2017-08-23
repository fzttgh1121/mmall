webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

//var $ = require('jquery');
//$('body').html("this is jquery2~~");
// require('../common.js');
__webpack_require__(7);

var _user = __webpack_require__(8);
_user.login({
		'username':'zs',
		'password':'111111'
	}
	);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _mm = __webpack_require__(9);

var _user = {
	//登录
	'login':function(user){
		_mm.request({
			url:_mm.getServerUrl("user/login.php"),
			data:user
		});
	}
};

module.exports = _user;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var config = {
	serverUrl : 'http://192.168.1.254/mmall_back_01/'
}
var _mm = {
	//网络请求
	request:function(param){
		$.ajax({
			url:param.url || '',
			data:param.data || {},
			success:param.success || function(){alert("suc")},
			error:param.error || function(){alert("err")}
		});
	},
	//获得服务器资源路径
	getServerUrl:function(url){
		return config.serverUrl+url;
	}
};

module.exports = _mm;

/***/ })
],[5]);