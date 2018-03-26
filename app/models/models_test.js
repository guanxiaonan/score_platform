'use strict';

import Knex from 'knex';
import validate from 'validate';
import md5 from 'md5';


import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class ModelTest{
  // //用户登录
  static async save_cschengji(ctx, next) {
    // 判断数据输入
    let new_data = ctx;
    console.log("new_data=======",new_data);

  //   //判断用户名和密码是否为空;
  //   if(new_data.username !== '') {    //判断用户名是否为空
  //     if(new_data.password !== '') {  //判断密码是否为空
  //       let login_data = {};
  //
  //       //判断用户是否已被锁定
  //       let user_data = await knex('users_score')
  //                   .select('password')
  //                   .where('username', new_data.username);
  //         // console.log("============run=============");
  //         console.log("数据库取密码",user_data);
  //       if(user_data.length == 0){
  //         console.log("用户名错误");
  //         return 'usernameIsWrong';
  //       }
  //
  //       login_data.username = new_data.username;
  //       login_data.password =new_data.password;
  //       let result = await knex('users_score')
  //                         .where({'username': login_data.username,
  //                                 'password': login_data.password
  //                                 });
  //           console.log("数据库取出的结果：",result);
  //       if(result.length > 0) {
  //         return 'success';
  //       } else {
  //         return 'passwordIsWrong';
  //       }
  //
  //     } else {
  //       return 'passwordIsNull';
  //     }
  //   } else {
  //     // console.log("run==================");
  //     return 'usernameIsNull';
  //   }
  }


}
