import {View, Image ,ScrollView} from '@tarojs/components'
import './index.scss'
import TabBar from '../common/Index'
import {AtIcon} from "taro-ui";
import {Component} from "react";
import Taro from "@tarojs/taro";

export default class Index extends Component  {
    constructor() {
      super(...arguments);
      this.state={

      }
    }
  toAppointmentDetails(){
    Taro.reLaunch({
      url: '/pages/appointmentDetails/index',
    })
  }
    onScrollToUpper() {}
    // or 使用箭头函数
    // onScrollToUpper = () => {}
    onScroll(e){
      console.log(e.detail)
    }

  render(){
    const scrollTop = 0
    const Threshold = 20
    return (

      <View className='moveInstall'>
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
          <View className='big-box'>

            <View className='box' onClick={this.toAppointmentDetails.bind(this)}>
              <View className='goods-pic'>
              <Image  src={require("../images/Furniture_Moving_Services.jpg")}></Image>
              </View>
              <View className='content-box' >
                <View className='content-title'>家具搬家服务</View>
                <View className='content'>1、送货安装流程
                  出发前要同顾客联系，确定住址及送货时间。
                  1)从货车上卸下产品后要背负式或肩抗式搬运上楼。
                  2)到顾客门口放下后敲门或按门铃。敲门每次敲3下，每次敲门或摁门铃的时间间隔1-3分钟。
                  3)顾客开门后，送货安装人员必须介绍自己:我是**家居的送货员***。
                  4)进入顾客房间时穿戴鞋套，不可不穿戴鞋套就直接进入。建议给安装人员配置鞋套。</View>
                <View className='content-time'><AtIcon value='clock' size='12' color='grep'></AtIcon>24天可预约</View>
              </View>
            </View>

            <View className='box'>
              <View className='goods-pic'>
              <Image  src={require("../images/Family _Moving_Services.jpg")}></Image>
              </View>
              <View className='content-box' >
                <View className='content-title'>家庭搬家服务</View>
                <View className='content'>1.专业的客服人员为您的搬家服务估价
                  2.由专业的搬家顾问为您上门测量记录所需要打包收纳和搬运的物品尺寸，以便在搬家时给您带来合适尺寸的收纳和打包工具
                  3.在搬家顾问给您测量需要搬迁打包的物品后为您参考合适的搬家套餐</View>
                <View className='content-time'><AtIcon value='clock' size='12' color='grep'></AtIcon>24天可预约</View>
              </View>
            </View>

          </View>
        </ScrollView>
        <TabBar current={6}></TabBar>
      </View>
    )
  }
}
