/*
* @Author: atkjest | http://atkjest.me
* @Date:   2016-03-16 16:46:10
* @Last Modified by:   atkjest
* @Last Modified time: 2016-03-17 21:30:05
*/

var myDataRef = new Firebase('<%- theme.firebase_url%>');

// 明细由当前页面的url表示，将反斜线替换成下划线，并将中文decode出来
var current_url = decodeURI(window.location.pathname.replace(new RegExp('\\/|\\.', 'g'),"_"));
// 获取总数，并将总访问量展示在页面上  
// 主要显示在关于我和建站日志页面
myDataRef.child("attend-favour").on("value", function(data) {
  var current_counter = data.val();
  if( $("#attend-favour").length > 0  && current_counter > 1 ){
      $("#attend-favour").html(
   	   	"<i class=\"fa fa-thumbs-up\"></i>&nbsp;<font style='color:black'>"+ current_counter +"</font>&nbsp;赞"
       );
  };
});
// 获取明细，并将明细也展示在页面上
// 显示在每篇文章的页面上
myDataRef.child("attend-favour-page/"+current_url).on("value", function(data){
	var current_counter = data.val();
	if($("#attend-favour-page").length > 0 && current_counter > 1){
		$("#attend-favour-page").html(
			"<i class=\"fa fa-thumbs-up\"></i>&nbsp;<font style='color:black'>"+ current_counter +"</font>&nbsp;赞"
		);
	}
});

// 总数+1
$("#attend-favour").click(function () {
	myDataRef.child("attend-favour").transaction(function (current_counter) {
	  return (current_counter || 0) + 1;
	});
})
// 分页面+1
$("#attend-favour-page").click(function () {
	myDataRef.child("attend-favour-page/"+current_url).transaction(function (current_counter) {
	  return (current_counter || 0) + 1;
	});
	myDataRef.child("attend-favour").transaction(function (current_counter) {
	  return (current_counter || 0) + 1;
	});
})

