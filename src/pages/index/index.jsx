import { View, Text , Image,Swiper, SwiperItem } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index';
import {AtGrid, AtIcon} from "taro-ui"
import index from "@tarojs/react";
import pic4 from "../../pages/images/Furniture_Moving_Services.jpg";

export default function Index() {



  return (
    <View className='index'>
      <Text>三体家政服务小程序</Text>
      <View>
        <Image style='width: 100%;height: 210px;background: #fff;' src={pic4}></Image>
      </View>

      <AtGrid mode='rect' columnNum={3} data={
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
            value: '搬家安装',
          }
        ]
      }
              onClick={console.log('jjj')}
      />

      <TabBar current={0}></TabBar>


    </View>


  )
}
