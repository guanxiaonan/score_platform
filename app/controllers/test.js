'use strict';

import ModelTest from '../models/models_test';

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

  //成绩分析跳转界面
  exports.score_analysis = async function(ctx, next){
      await ctx.render('pages/test/score_analysis', {   //默认后缀名为html
       title: '成绩分析首页',
       user: ctx.session.user
     })
    }
    //成绩原始各项评分跳转界面
    exports.score_yuanshi = async function(ctx, next){
        await ctx.render('pages/test/score_yuanshi', {   //默认后缀名为html
         title: '成绩分析首页',
         user: ctx.session.user
       })
      }

    //成绩最终评分跳转界面
    exports.score_zuizhong = async function(ctx, next){
        await ctx.render('pages/test/score_zuizhong', {   //默认后缀名为html
         title: '成绩分析首页',
         user: ctx.session.user
       })
      }

    //test_dangan
    exports.test_dangan = async function(ctx, next){
        await ctx.render('pages/test/dangan', {   //默认后缀名为html
         title: '学生档案',
         user: ctx.session.user
       })
      }
    //test_chengji
    exports.test_chengji = async function(ctx, next){
        await ctx.render('pages/test/chushichengji', {   //默认后缀名为html
         title: '学生初试成绩',
         user: ctx.session.user
       })
      }
  //xianshi_score
  exports.xianshi_score = async function(ctx, next){
      await ctx.render('pages/test/chakanchengji', {   //默认后缀名为html
       title: '学生初试成绩',
       user: ctx.session.user
     })
    }
    //xianshi_dangan
    exports.xianshi_dangan = async function(ctx, next){
        await ctx.render('pages/test/chakandangan', {   //默认后缀名为html
         title: '学生档案',
         user: ctx.session.user
       })
      }
    //初试成绩提交
    exports.cschengji_tijiao = async function(ctx,next){
      let cschengji_data = ctx.request.body;
      console.log("初始成绩",cschengji_data);
      //将初始成绩保存到数据库中
      let result_cs = ModelTest.save_cschengji(cschengji_data);
      await ctx.render('pages/test/chushichengji', {   //默认后缀名为html
       title: '学生初始成绩',
       user: ctx.session.user
     })
    }
