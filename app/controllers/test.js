'use strict';

import ModelTest from '../models/models_test';
import Knex from 'knex';
import validate from 'validate';
import configs from '../configs/index';

const knex = Knex(configs.knexConfig);
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
         user: ctx.session.user,
         fslist:[]
       })
      }

    //跳转到档案页面
    exports.record = async function(ctx, next){
        await ctx.render('pages/test/record', {   //默认后缀名为html
         title: '学生档案',
         user: ctx.session.user
       })
      }
    //学生初始成绩
    exports.first_test_score = async function(ctx, next){
        await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
         title: '学生初试成绩',
         user: ctx.session.user,
         info: ''
       })
      }
  //xianshi_score
  exports.fts_show = async function(ctx, next){
      await ctx.render('pages/test/fts_show', {   //默认后缀名为html
       title: '学生初试成绩',
       user: ctx.session.user,
       ftslist:[]
     })
    }
    //record_show
    exports.record_show = async function(ctx, next){
        await ctx.render('pages/test/record_show', {   //默认后缀名为html
         title: '学生档案',
         user: ctx.session.user
       })
      }
    //初试成绩提交
    exports.fts_tijiao = async function(ctx,next){
      let cschengji_data = ctx.request.body;
      console.log("初始成绩",cschengji_data);
      //将初始成绩保存到数据库中
      let result_cs = ModelTest.save_cschengji(cschengji_data);
      console.log("返回值",result_cs);
      if(result_cs ==='success'){
        console.log("运行成功=======run========");
        await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
         title: '学生初始成绩',
         user: ctx.session.user,
         info: "输入成功"
       })
     }else if(result_cs ==='nameIsNull'){
         console.log("缺少用户名=======run========");
         await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
          title: '学生初始成绩',
          user: ctx.session.user,
          info: "缺少姓名"
        })
      }else if(result_cs ==="englishIsNull"){
          await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
           title: '学生初始成绩',
           user: ctx.session.user,
           info: "缺少英语成绩"
         })
       }else if(result_cs ==="politicalIsNull"){
            await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
            title: '学生初始成绩',
            user: ctx.session.user,
            info: "缺少政治成绩"
          })
        }else if(result_cs ==="zhuanyeIsNull"){
            await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
             title: '学生初始成绩',
             user: ctx.session.user,
             info: "缺少专业成绩"
           })
        }else if(result_cs ==="mathIsNull"){
            await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
             title: '学生初始成绩',
             user: ctx.session.user,
             info: "缺少数学成绩"
           })
        }else {
          await ctx.render('pages/test/first_test_score', {   //默认后缀名为html
           title: '学生初始成绩',
           user: ctx.session.user,
           info: "重新输入"
         })
        }
    }
    //学生档案提交
    exports.record_tijiao = async function(ctx,next){
      //获取提交过来的数据
      let recordtj_data = ctx.request.body;
      console.log(recordtj_data);
      await ctx.redirect('/record');
    }
    //显示学生初始成绩
    exports.fts_show_chakan = async function(ctx, next){
      //从数据库中获取数据
      let fts_data = await knex.column('name','english','political','zhuanye','math','total_score').select().from('cschengji');
      // console.log(fts_data);
      ctx.body = fts_data;
        await ctx.render('pages/test/fts_show', {   //默认后缀名为html
         title: '学生档案',
         user: ctx.session.user,
         ftslist:fts_data
       })
      }

      //获取最终评分的成绩
      exports.score_final_show = async function(ctx, next){
        //从数据库中获取数据
        let final_score_data = await knex.column('fsid','initialID','name','sex','score').select().from('final_score');
          await ctx.render('pages/test/score_zuizhong', {   //默认后缀名为html
           title: '学生档案',
           user: ctx.session.user,
           fslist:final_score_data
         })
        }

        //获取能力考察界面
        exports.ability_examination = async function(ctx, next){
          //从数据库中获取数据
          // let final_score_data = await knex.column('fsid','initialID','name','sex','score').select().from('final_score');
            await ctx.render('pages/test/ability_examination', {   //默认后缀名为html
             title: '能力考察',
             user: ctx.session.user

           })
          }
