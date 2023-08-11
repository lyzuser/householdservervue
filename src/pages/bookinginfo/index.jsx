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
      <View className='big-box'>
        <View className='title'>
          催乳师预约
        </View>
        <AtTabs
          animated={false}
          current={this.state.current}
          tabList={[
            { title: '预约须知' },
            { title: '可预约时段' },
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='box'>
              催乳师，俗称是催奶师或者是揉奶师、是指运用人体经络穴位、中医按摩推拿手法、
              心理梳理跟营养调理等等相关知识，解决产妇产后少乳、无乳、乳房胀痛、乳汁淤积
              、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务与乳房美体的专
              业人员。催乳通常以中医调理为根本，结合民间流传的食疗之法，帮助产妇泌乳。进
              入现代社会，人们生活习惯的改变及社会环境的变迁阻碍了母乳喂养的实施，越来越
              多宝妈的哺乳问题显现出来。
            </View>
            <Image
              className='Pic01'
              src={require('../images/mike.jpg')}
              mode='widthFix' />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <AtTabs
              className='attabs'
              current={this.state.current2}
              scroll
              height='100%'
              tabDirection='vertical'
              tabList={[
                { title: '2023-08-09' },
                { title: '2023-08-10' },
                { title: '2023-08-11' },

              ]}
              onClick={this.handleClick2.bind(this)}>
              <AtTabsPane scroll tabDirection='vertical' current={this.state.current2} index={0}>
                <View className='time-tag'>
                      <AtButton onClick={this.handleClick3.bind(this)}
                                type='primary'
                                className='Button'
                      >
                        09:00~21:30<Text>{this.state.br}(0/50)</Text>
                      </AtButton>
                  <AtButton onClick={this.handleClick3.bind(this)}
                            type='primary'
                            className='Button'
                  >
                    09:00~21:30<Text>{this.state.br}(0/50)</Text>
                  </AtButton>
                  <AtButton onClick={this.handleClick3.bind(this)}
                            type='primary'
                            className='Button'
                  >
                    09:00~21:30<Text>{this.state.br}(0/50)</Text>
                  </AtButton>
                </View>
              </AtTabsPane>
            </AtTabs>
          </AtTabsPane>
        </AtTabs>
        <TabBar current={3}></TabBar>
      </View>
    )
  }
}
