const axios = require('axios');
const fs = require('fs');

async function fetchDataWithCookie() {
  try {
    const url = 'https://appd4lj3xrn4286.h5.xiaoeknow.com/evaluation_wechat/error_question/get_all_question'; // 替换为你要拉取的接口URL
    const cookie = 'sensorsdata2015jssdkcross=%7B%22%24device_id%22%3A%2218bd376201f18b2-017f4b5f5be2ef8-2610214e-329160-18bd376202026b4%22%7D; sa_jssdk_2015_appd4lj3xrn4286_h5_xiaoeknow_com=%7B%22distinct_id%22%3A%22u_64b901045c2d2_xszdD9OyFn%22%2C%22first_id%22%3A%2218bd376201f18b2-017f4b5f5be2ef8-2610214e-329160-18bd376202026b4%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%7D; logintime=1700059879; shop_version_type=4; ko_token=44a0b6279953b93c3a3492ee87d4bbdb; dataUpJssdkCookie={"wxver":"8.0.43","net":"WIFI","sid":""}; sajssdk_2015_new_user_appd4lj3xrn4286_h5_xiaoeknow_com=1; xenbyfpfUnhLsdkZbX=0; xiaoe_loading_show=1'; // 替换为你的cookie值

    const response = await axios.post(url, {
      headers: {
        Cookie: cookie,
        origin: "https://appd4lj3xrn4286.h5.xiaoeknow.com",
        referer:"https://appd4lj3xrn4286.h5.xiaoeknow.com/p/t/v1/exam/h5_evaluation/errbook/detail/104513197?tab=1&source_id=wb_64eefd9d85036_zURJ29se",
        host: "appd4lj3xrn4286.h5.xiaoeknow.com",
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*",
        "x-requested-with": "XMLHttpRequest",
        "sec-fetch-site": "same-origin",
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "accept-encoding": "gzip",
        "sec-fetch-mode": "cors",
        "content-length": 102,
        "sec-fetch-dest": "empty",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2c) NetType/WIFI Language/zh_CN"
      },
    });
    console.log(response.data); // 输出接口返回的数据
    fs.writeFile('data.txt', response.data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('数据已写入到data.txt文件');
    });
  } catch (error) {
    console.error(error);
  }
}

fetchDataWithCookie();