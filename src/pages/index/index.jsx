import { View, Text , Swiper, SwiperItem } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index';
import { AtGrid } from "taro-ui"


export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>三体家政服务小程序</Text>
      <AtGrid mode='rect' data={
        [
          {
            image: 'http://43.139.94.243/icon/sort.png',
            value: '小黑板',

          },
          {
            image: 'http://43.139.94.243/icon/cart.png',
            value: '服务介绍'
          },
          {
            image: 'http://43.139.94.243/icon/sort.png',
            value: '保洁清洗'
          },
          {
            image: 'http://43.139.94.243/icon/sort.png',
            value: '保姆月嫂'
          },
          {
            image: 'http://43.139.94.243/icon/sort.png',
            value: '家庭维修'
          },
          {
            image: 'http://43.139.94.243/icon/sort.png',
            value: '搬家安装'
          }
        ]
      }
      />

      <TabBar current={0}></TabBar>


    </View>


  )
}
