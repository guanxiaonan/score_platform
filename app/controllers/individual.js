'use strict';

import Individual from '../models/individual';

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//diary
exports.diary =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/diary', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//factoryjiankong
exports.factoryjiankong =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/factoryjiankong', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//overview
exports.overview =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/overview', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//productdata
exports.productdata =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/productdata', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//data_scheduling
exports.data_scheduling =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/data_scheduling', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}