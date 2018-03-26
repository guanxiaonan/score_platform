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
  .get('/test_dangan',Test.test_dangan)//查看学生档案
  .get('/xianshi_score',Test.xianshi_score)//显示学生成绩
  .get('/xianshi_dangan',Test.xianshi_dangan)//显示学生档案
  .get('/test_chengji',Test.test_chengji)//查看学生初试成绩

  //post路径
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  .post('/cschengji_tijiao', Test.cschengji_tijiao) //初试成绩提交
export default router;
