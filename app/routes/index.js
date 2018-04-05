'use strict';

import Router from 'koa-router';

import User from '../controllers/user';
import Individual from '../controllers/individual';
import Test from '../controllers/test';
import Official from '../controllers/official';

const router = new Router();

router
//get路径
  .get('/', User.index)                 //主页面
  // .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .get('/main_test', Test.main_test)   //查看原始的学生成绩
  .get('/score_analysis',Test.score_analysis)  //成绩分析界面
  .get('/score_yuanshi',Test.score_yuanshi)  //成绩分析界面
  .get('/score_zuizhong',Test.score_zuizhong)  //成绩分析界面
  .get('/testwangye',Official.testwangye)  //测试新的bootstrap模板
  .get('/record',Test.record)//查看学生档案
  .get('/fts_show',Test.fts_show)//显示学生成绩
  .get('/record_show',Test.record_show)//显示学生档案
  .get('/first_test_score',Test.first_test_score)//提交学生初试成绩
  .get('/fts_show_chakan',Test.fts_show_chakan)//查看学生初试成绩
  .get('/score_final_show',Test.score_final_show)//查看学生最终评分
  .get('/ability_examination',Test.ability_examination)//查看总体评估
  //post路径
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  .post('/fts_tijiao', Test.fts_tijiao) //初试成绩提交
  .post('/record_tijiao',Test.record_tijiao)  //学生档案提交
export default router;
