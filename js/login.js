/**
 * Created by m1324 on 2018/3/30.
 */
$(function(){
    //获取手机号
  $('.login_c').click(function(){
      var mobile = $("[name = 'mobile']").val();
      var mobileReg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if(mobileReg.test(mobile) === false){
          layer.open({
              content: '<span>请输入真实有效的手机号</span>'
              ,btn: ['确定',],
              skin:'my-skin'
              ,yes: function(index){
                  layer.close(index);
              }
          });
          return;
      }
      $.ajax({
          url:"http://192.168.1.103:8089/yuesao/login",
          type:"POST",
          dataType:"json",
          data:{mobile:mobile},
          success:function(data){
                //console.log(data);
              if(data.code == "USR000"){
                  layer.open({
                      content: '<span>登录成功</span>'
                      ,btn: ['确定',],
                      skin:'my-skin'
                      ,yes: function(index){
                          layer.close(index);
                          window.location.href = "state.html";
                      }
                  });
                  return;
              }else{
                  layer.open({
                      content: '<span>登录失败</span>'
                      ,btn: ['确定',],
                      skin:'my-skin'
                      ,yes: function(index){
                          layer.close(index);
                      }
                  });
                  return;
              }
          }
      })
  })






})

