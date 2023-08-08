import {Component} from 'react';
import {Text, View} from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
import Taro from "@tarojs/taro";

export default class Index extends Component{
  /**
   * 渲染界面
   * @returns{JSX.Element}
   * default：默认导出没有名字
   * const指定名字
   */
  handleClick(current){
    if (current === 0){
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    }else if(current === 1){
      Taro.reLaunch({
        url: '/pages/notice/index'
      })
    }else if(current === 2){
      Taro.reLaunch({
        url: '/pages/serve/index'
      })
    }else if(current === 4){
      Taro.reLaunch({
        url: '/pages/me/index'

      })
    }
    else if(current === 3){
      Taro.reLaunch({
        url: '/pages/booking/index'

      })
    }else if(current === 5){
      Taro.reLaunch({
        url: '/pages/nanny/index'

      })
    }else if(current === 6){
      Taro.reLaunch({
        url: '/pages/moveInstall/index'

      })
    }

  }
  render() {
    let BASE_URL='http://43.139.94.243';
    return (
      <View className='index'>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', image: `${BASE_URL}/icon/index.png`, selectedImage: `http://43.139.94.243/icon/index0.png`, text: 'new' },
            { title: '小黑板', image: `http://43.139.94.243/icon/sort.png`,selectedImage:`http://43.139.94.243/icon/sort0.png`},
            { title: '服务介绍', image: `http://43.139.94.243/icon/cart.png`, selectedImage:`http://43.139.94.243/icon/cart0.png`,text: '100', max: 99 },
            { title: '预约日历', image: `http://43.139.94.243/icon/sort.png`,selectedImage:`http://43.139.94.243/icon/sort0.png`},
            { title: '我的', image: `http://43.139.94.243/icon/sort.png`,selectedImage:`http://43.139.94.243/icon/sort0.png`},
            { title: '保姆月嫂', image: `http://43.139.94.243/icon/sort.png`,selectedImage:`http://43.139.94.243/icon/sort0.png`},
            { title: '搬家安装', image: `http://43.139.94.243/icon/sort.png`,selectedImage:`http://43.139.94.243/icon/sort0.png`},
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.current}
        />
      </View>
    )
  }

}
