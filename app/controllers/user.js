'use strict';

import User from '../models/user';

//main
exports.index = async function(ctx, next){
  //点击'Project name'， 回到主页，同时删除缓存session
  delete ctx.session.user;
  await ctx.render('index', {   //默认后缀名为html
   title: 'scorePlatform',
   info:''
 })
}

// exports.showLogin = async function(ctx, next) {
//   await ctx.render('pages/user/login', {
//     title: '用户登录',
//     info: ''
//   });
// }

exports.showRegister = async function(ctx, next) {
  await ctx.render('pages/user/register', {
    title: '用户注册',
    info: ''
  });
}

//login
exports.login = async function(ctx, next){
  // console.log("============run=============");
  let user_data = ctx.request.body;
  // console.log("user_data===",user_data);
  //存储数据到数据库
  let result = await User.insert(user_data);
  console.log(result);
  //当用户名为空时
  if(result === 'usernameIsNull') {
   await ctx.render('index', {
      title: 'scorePlatform',
      info: '用户名不能为空，请重新输入'
    })
  }
  //当用户名错误时
  if(result === 'usernameIsWrong') {
   await ctx.render('index', {
      title: 'scorePlatform',
      info: '用户名错误，请重新输入'
    })
  }
  //当用密码为空时
  if(result === 'passwordIsNull') {
    await ctx.render('index', {
      title: 'scorePlatform',
      info: '密码不能为空，请重新输入'
    })
  }

  //密码错误
  if(result === 'passwordIsWrong') {
    await ctx.render('index', {    //注意必须加 await
      title: 'scorePlatform',
      info: '密码错误，请重新输入'
    })
  }

  //console.log(result);

  //验证成功
  if(result === 'success') {
    ctx.session.user = user_data.username;

      await ctx.redirect('/main_test');
  }

}

//register
exports.register = async function(ctx, next) {
  let user_data = ctx.request.body;

  //存储数据到数据库
  let result = await User.register(user_data);

  if(result === 'usernameIsExist') {

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '用户名已经存在，请更换用户名注册'
    });
  } else if(result === 'usernameIsNull') {       //当用户名为空时

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '用户名不能为空，请重新输入'
    });
  } else if(result === 'passwordIsNull') { //当用密码为空时

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '密码不能为空，请重新输入'
    });
  } else if(result === 'success') {         //注册成功

    await ctx.redirect('/login', {
      title: '用户登录',
      info: ''
    })
  } else {
    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '请重新注册'
    });
  }
}


//logout
exports.logout = async function(ctx, next) {
  //用户退出登录，删除session，回到主页面
  delete ctx.session.user;
  ctx.redirect('/');
}
