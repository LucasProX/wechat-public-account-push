/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd9bd66d7c6da88a1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9be42542f13044bd9fb27871fc4669b7',

  PROVINCE: '湖南',
  CITY: '长沙',
  
  PROVINCE2: '陕西',
  CITY2: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '超级女明星',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAX9v53JaSryN9ohA4VgJshvoAZI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DtMZIDuHgGT3FOVjN-_T6RQGgtwkQU2w0In5XqkAswc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '乖乖', year: '2006', date: '08-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '笨蛋', year: '1998', date: '10-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'meet_day', date: '2022-04-30' },
        // 恋爱纪念日
        { keyword: 'love_day', date: '2022-07-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

