import { View, Text , Image,Swiper, SwiperItem } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index';
import {AtGrid, AtIcon} from "taro-ui"
import index from "@tarojs/react";
import pic4 from "../../pages/images/Furniture_Moving_Services.jpg";
import {Component} from "react";

export default class Index extends Component {


  constructor() {
    super();
    this.state={
      current:0
    }
  }
  handleClick(item){
    console.log(item.index)
    if(item.index==3){
      Taro.reLaunch({
        url: '/pages/nanny/index'
      })
    }else if(item.index==5){
      Taro.reLaunch({
        url: '/pages/moveInstall/index'
      })
    }else if(item.index==2){
      Taro.reLaunch({
        url: '/pages/cleaning/index'
      })
    }else if(item.index==4){
      Taro.reLaunch({
        url: '/pages/homerepair/index'
      })
    }else if(item.index==1){
      Taro.reLaunch({
        url: '/pages/serve/index'
      })
    }else if(item.index==0){
      Taro.reLaunch({
        url: '/pages/notice/index'
      })
    }

  }
render(){
  return (
    <View className='index'>
      <Text>三体家政服务小程序</Text>
      <View>
        <Image style='width: 100%;height: 210px;background: #fff;' src={pic4}></Image>
      </View>

      <AtGrid mode='rect' columnNum={3}
              onClick={this.handleClick.bind(this)}
              data={
        [
          {
            index:0,
            image: 'http://43.139.94.243/icon/sort.png',
            value: '小黑板',

          },
          {

            index:1,
            image: 'http://43.139.94.243/icon/cart.png',
            value: '服务介绍'

          },
          {
            index:2,
            image: 'http://43.139.94.243/icon/sort.png',
            value: '保洁清洗'

          },
          {
            index: 3,
            image: 'http://43.139.94.243/icon/sort.png',
            value: '保姆月嫂'
          },
          {
            index:4,
            image: 'http://43.139.94.243/icon/sort.png',
            value: '家庭维修'
          },
          {
            index:5,
            image: 'http://43.139.94.243/icon/sort.png',
            value: '搬家安装',
          }
        ]
      }

      />

      <TabBar current={0}></TabBar>


    </View>


  )
}

}
