import {View, Text, SwiperItem, Swiper, ScrollView} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '../common/Index'
import { AtCalendar, AtAvatar, AtIcon} from "taro-ui"
import {Component} from "react";

export default class Index extends Component{

  constructor() {
    super();
    this.state={
      reservationList:[
        {id:1, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:2, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:3, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:4, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:5, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:6, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:7, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:8, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:9, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:10, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:11, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
        {id:12, src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00091-1223.jpg", text:"防水补漏预约"},
      ]

    }
  }
  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  render() {
    const scrollTop = 0
    const Threshold = 20

    return (
      <View className='index'>
        <AtCalendar/>
        <TabBar current={3}></TabBar>
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
          {
            this.state.reservationList.map((reservation) => {
              return (
                <View className='reservation'>
                  <AtAvatar size='small' circle image={reservation.src}></AtAvatar>
                  <Text style="padding-left: 2%;">{reservation.text}</Text>
                  <View className='reservationTime'>
                    <AtIcon value='clock' size='20' color='#A69999'></AtIcon>
                    <Text className='timeText'>09:00</Text>
                  </View>
                </View>
              )
            })
          }

        </ScrollView>
      </View>


    )
  }
}

