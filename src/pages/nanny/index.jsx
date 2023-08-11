import {View, Text, ScrollView, SwiperItem, Swiper} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '../common/Index';
import {Component} from "react";
import { AtIcon } from 'taro-ui'

import MIKE from '../images/mike.jpg'
export default class Index extends Component  {

  onScroll(e){
    console.log(e.detail)
  }
  constructor() {
    super();
    this.state={
      productList:[]
    }
  }
  onScrollToUpper() {}
  ToNannyInfo(){
    Taro.reLaunch({
      url: '/pages/bookinginfo/index',
    })
  }
  render(){
    const scrollTop = 0
    const Threshold = 20
    return (
      <View className='index'>
        <ScrollView
          className='scrollview'
          scrollY
          enableFlex='true'
          scrollWithAnimation
          scrollTop={scrollTop}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View className='big-box'  onClick={this.ToNannyInfo.bind(this)}>
            <View className='box'>
              <image className='goods-pic' src={MIKE}></image>
              <View className='content-box' >
                <View className='content-title'>催乳师预约</View>
                <View className='content'>催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越多宝妈的哺乳问题显现出来。</View>
                <View className='content-time'><AtIcon value='clock' size='12' color='grep'></AtIcon>34天可预约</View>
              </View>
            </View>
            <View className='box'>
              <image className='goods-pic' src={MIKE}></image>
              <View className='content-box' >
                <View className='content-title'>催乳师预约</View>
                <View className='content'>催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越多宝妈的哺乳问题显现出来。</View>
                <View className='content-time'>34天</View>
              </View>
            </View>
            <View className='box'>
              <image className='goods-pic' src={MIKE}></image>
              <View className='content-box' >
                <View className='content-title'>催乳师预约</View>
                <View className='content'>催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越多宝妈的哺乳问题显现出来。</View>
                <View className='content-time'>34天</View>
              </View>
            </View>
            <View className='box'>
              <image className='goods-pic' src={MIKE}></image>
              <View className='content-box' >
                <View className='content-title'>催乳师预约</View>
                <View className='content'>催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越多宝妈的哺乳问题显现出来。</View>
                <View className='content-time'>34天</View>
              </View>
            </View>
            <View className='box'>
              <image className='goods-pic' src={MIKE}></image>
              <View className='content-box' >
                <View className='content-title'>催乳师预约</View>
                <View className='content'>催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越多宝妈的哺乳问题显现出来。</View>
                <View className='content-time'>34天</View>
              </View>
            </View>
          </View>
        </ScrollView>
        <TabBar current={0}></TabBar>
      </View>

    )
  }
}
