import {Component} from "react";
import {View, Swiper, SwiperItem, ScrollView} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index'


export default class Index extends Component {

  constructor() {
    super();
    this.state={
      productList:[]
    }
  }
  componentDidMount() {
    let _this=this
    Taro.request({
      url: 'https://www.juntaitec.cn/api/productList', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        _this.setState({
          productList:res.data.data
        })
      }
    })
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
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className='swiper-item'>
            <image src='http://43.139.94.243/images/ban1.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='http://43.139.94.243/images/ban2.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='http://43.139.94.243/images/ban3.jpg'></image>
          </SwiperItem>
        </Swiper>
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
            this.state.productList.map((product)=>{
              return(
                <View className='goods-box'>
                  <image className='goods-pic' src={product.src}></image>
                  <View className='goods-title'>{product.title}</View>
                  <View className='goods-titleTwo'>{product.secondtitle}</View>
                  <View className='row'>
                    <View className='goods-price'>{product.price}</View>
                    <View className='goods-btn'>看相似</View>
                  </View>
                </View>
              )
            })
          }

        </ScrollView>
        <TabBar current={0}></TabBar>
      </View>
    )
  }


}
