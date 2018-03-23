'use strict';

import Test from '../models/test';

//main_test
exports.main_test = async function(ctx, next){

  //判断用户是否登录
  // if(!ctx.session.user) {
  //   await ctx.render('pages/user/login', {
  //     title: '用户登录',
  //     info: ''
  //   });
  // } else {
    await ctx.render('pages/test/main', {   //默认后缀名为html
     title: '学生成绩首页',
     user: ctx.session.user
   })
  }
