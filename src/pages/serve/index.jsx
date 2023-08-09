import {Component} from "react";
import {View, ScrollView, Text, Image} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index'
import IMG1 from '../images/img.png'
import IMG2 from '../images/img_1.png'
import IMG3 from '../images/img_2.png'

export default class Index extends Component {

  constructor() {
    super();
    this.state={
      br: '\n',
      productList:[]
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }
  render() {
    const scrollContainerStyle = {
      padding: '5px', // 设置左右空隙的大小
    };
    const scrollStyle = {
      height: '900px'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'backgroundColor': 'rgb(241,241,241)',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    }
    const vStyleB = {
      height: '150px',
      'backgroundColor': 'rgb(241,241,241)',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    }
    const vStyleC = {
      height: '150px',
      'backgroundColor': 'rgb(241,241,241)',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    }
    const vStyleD = {
      height: '150px',
      'backgroundColor': 'rgb(241,241,241)',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    }
    return (
      <View className='index'>
        <View style={scrollContainerStyle}>
        <ScrollView
          className='scrollview'
          scrollY
          enableFlex={true}
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View className='banjia' style={vStyleA}>
            <View style={{flex:7}}>
              <Text>搬家公司的服务流程</Text>
              <Text>{this.state.br}</Text>
              <Text style='fontSize:14px'>1.电话咨询或网上咨询:可以与我们专业的话务员,专人接待客户电话咨询，初步了解客户配送日期、搬...</Text>
            </View>
            <View style={{flex:3}}>
              {/*<Image source={require('../image/img.png')} style={{ width: '90px', height: '90px'}} resizeMode="contain" />*/}
              <image src={IMG1} style={{width: '90px', height: '90px'}}></image>
            </View>
          </View>
          <View style={{ height: '5px' }}></View>

          <View className='baojie' style={vStyleB}>
            <View style={{flex:7}}>
              <Text>严格的开荒保洁流程</Text>
             <Text>{this.state.br}</Text>
              <Text style='fontSize:14px'>一、将装修后残留的装修垃圾清除出去，以免有清理不到的卫生死角。</Text>
            </View>
            <View style={{flex:3}}>
              <image src={IMG2} style={{width: '90px', height: '90px'}}></image>
            </View>
          </View>
          <View style={{ height: '5px' }}></View>

          <View className='yuying' style={vStyleC}>
            <View style={{flex:7}}>
            <Text>金牌育婴师工作流程详解</Text>
            <Text>{this.state.br}</Text>
            <Text style='fontSize:14px'>育婴师一天的工作流程:6:00育婴师先从起床洗漱下，给奶瓶等物品消下毒。6:30~7:00宝宝醒了，清理...</Text>
          </View>
            <View style={{flex:3}}>
              <image src={IMG3} style={{width: '90px', height: '90px'}}></image>
            </View>
          </View>

          <View style={{ height: '5px' }}></View>
          <View style={vStyleD}>家政公司擦玻璃标准流程</View>

        </ScrollView>
        </View>
        <TabBar current={2}></TabBar>
      </View>
    )
  }


}
