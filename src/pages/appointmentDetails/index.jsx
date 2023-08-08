import { View, Text ,Image} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from "../common/index";
import {AtButton, AtCard, AtTabs, AtTabsPane} from "taro-ui";
import {Component} from "react";

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      br: '\n',
      current: 0,
      current2: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  handleClick2 (value) {
    this.setState({
      current2: value
    })
  }
  handleClick3 (value) {
  //   Taro.reLaunch({
  //     url: '/pages/installDetail/index',
  // })
  }

  render() {
    return (
    <View className='homeInstall'>
      <View className='at-article__h1'>
        家具安装服务
      </View>
      <AtTabs
        animated={false}
        current={this.state.current}
        tabList={[
          { title: '预约通知' },
          { title: '可预约时段' },
        ]}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View className='at-article__p'>
            1、送货安装流程<Text>{this.state.br}</Text>
            出发前要同顾客联系，确定住址及送货时间。<Text>{this.state.br}</Text>
            1)从货车上卸下产品后要背负式或肩抗式搬运上楼。<Text>{this.state.br}</Text>
            2)到顾客门口放下后敲门或按门铃。敲门每次敲3下，每次敲门或摁门铃的时间间隔1-3分钟。<Text>{this.state.br}</Text>
            3)顾客开门后，送货安装人员必须介绍自己:我是**家居的送货员***。<Text>{this.state.br}</Text>
            4)进入顾客房间时穿戴鞋套，不可不穿戴鞋套就直接进入。建议给安装人员配置鞋套。<Text>{this.state.br}</Text>
            5)进门后询问需要放在哪个房间，确认安装的空间是否合适安装。空间不够时要与顾客协商在客厅安装好后再放进房间。<Text>{this.state.br}</Text>
            6)打开包装后，必须依次将配件和部件拿出并安放好<Text>{this.state.br}</Text>
            7)将桌面平铺在地面的纸箱板上拼对好后，再进行安装。<Text>{this.state.br}</Text>
            8)安装完毕后，征询顾客放置的位置和使用者的身高，调节到顾客试用觉得适合的高度并安放好。<Text>{this.state.br}</Text>
            9)在安装完毕后，必须清洁产品全部部位。<Text>{this.state.br}</Text>
            10)在安放好后，必须对产品的使用功能和使用注意的事项完整的讲解一遍。<Text>{this.state.br}</Text>
            11)在安装完毕后，必须清洁顾客房间的地面。包装材料产生的塑料泡沫颗粒不便清洁，可以用胶带粘起并丢弃。<Text>{this.state.br}</Text>
            12)待清洁完毕，请顾客填写《送货安装服务反馈表》后再离开。<Text>{this.state.br}</Text>
          </View>
          <Image
            className='at-article__img'
            src={require('../images/Furniture_Moving_Services.jpg')}
            mode='widthFix' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <AtTabs
            current={this.state.current2}
            scroll
            height='200px'
            tabDirection='vertical'
            tabList={[
              { title: '标签页1' },
              { title: '标签页2' },
              { title: '标签页3' },
            ]}
            onClick={this.handleClick2.bind(this)}>
            <AtTabsPane tabDirection='vertical' current={this.state.current2} index={0}>
              <AtCard
                title='2023年8月20日（周日）'
              >
                <AtButton onClick={this.handleClick3.bind(this)}>09:00~21:30</AtButton>
              </AtCard>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current2} index={1}>
              <AtCard
                title='2023年8月21日（周一）'
              >
                <AtButton onClick={this.handleClick3.bind(this)}>09:00~21:30</AtButton>
              </AtCard>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current2} index={2}>
              <AtCard
                title='2023年8月22日（周二）'
              >
                <AtButton onClick={this.handleClick3.bind(this)}>09:00~21:30</AtButton>
              </AtCard>
            </AtTabsPane>
          </AtTabs>
        </AtTabsPane>
      </AtTabs>
      <TabBar current={3}></TabBar>
    </View>
  )
    }
}
