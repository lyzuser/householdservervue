import {Component} from "react";
import {View, ScrollView, Text, Image} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index'
import IMG1 from '../images/img.png'
import {AtIcon} from "taro-ui";

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
    };
    const scrollStyle = {
      height: '900px'
    }
    const scrollTop = 0
    const Threshold = 20

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
            <View className='big-box'>
              <View className='box'>
                <View className='content-title'>搬家公司的服务流程</View>
                <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14 服务介绍</View>
                <View className='content-box' >
                  <View className='content'>1.电话咨询或网上咨询：可以与我们专业的话务员,专人接待客户电话咨询，初步了解客户配送日期、搬运路线、所在楼层等基本信息以及是否有贵重物品等，经过电话的了解我们会选择最佳的方案来处理以及告知注意事项。
                    <Text>{this.state.br}</Text>
                    <Text>{this.state.br}</Text>
                    2. 签定搬迁合同：蚂蚁搬家公司会派专业的人员去现场评估后可马上协商签定搬迁合同。
                    <Text>{this.state.br}</Text>
                    <Text>{this.state.br}</Text>
                    3. 准时派车：当一切准备完毕后，蚂蚁搬家公司会根据相应合同上的内容，安排相应车组前往提供服务。
                    <Text>{this.state.br}</Text>
                    <Text>{this.state.br}</Text>
                    4.安装服务：按客户物品种类规格类别分类，轻拿轻放，顺序搬运并在抵达新居后按客户指定位置放置。
                    <Text>{this.state.br}</Text>
                    <Text>{this.state.br}</Text>
                    5. 满意付费：蚂蚁搬家公司提供服务完毕后，与客户确认货物完好无损后，签字确认，并收取尾款及应收搬家费用。
                    <Text>{this.state.br}</Text>
                    <Text>{this.state.br}</Text>
                    6、电话跟踪客户配送后的效果反馈：搬家服务后，蚂蚁搬家公司会通过电话对客户进行一个回访，了解您的对本次服务意见及满意度，您的评价将是我们提高服务质量的基础。</View>

                </View>

              </View>

            </View>

          </ScrollView>
        </View>
        <TabBar current={2}></TabBar>
      </View>
    )
  }


}
