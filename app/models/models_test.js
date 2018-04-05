'use strict';

import Knex from 'knex';
import validate from 'validate';

import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class ModelTest{
  //初试成绩输入
  static async save_cschengji(ctx, next) {
    // 判断数据输入
    let new_data = ctx;
    console.log("new_data=======",new_data);
    //判断用户名和密码是否为空;
    if(new_data.name !== '') {    //判断用户名是否为空
      if(new_data.english !== '') {  //判断密码是否为空
          if(new_data.political !== ''){
            if(new_data.zhuanye !== ''){
               if(new_data.math !== ''){
                 let result_cs = await knex('cschengji')
                                     .insert(new_data);
                      console.log("数据库返回",result_cs);
                      console.log(result_cs.length);
                  if(result_cs.length > 0){
                    return 'success';
                  }else{
                    return 'wrong';
                  }
              }else {
                return 'mathIsNull';
              }
            }else {
              return 'zhuanyeIsNull';
            }
          }else {
            return 'politicalIsNull';
          }
      } else {
        return 'englishIsNull';
      }
    } else {
      return 'nameIsNull';
    }
  }




}//ModelTest
