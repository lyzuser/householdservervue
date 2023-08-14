import {View, Text, Image, Input} from '@tarojs/components'
import { AtIcon, AtTag,AtButton } from 'taro-ui'
import './submit.scss'
import {Component} from "react";
import Taro from "@tarojs/taro";

export default class Submit extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      br:'\n',
      name:'',
      phoneNum:'',
    }
  }
  nameInputChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  phoneNumInputChange = (e) => {
    this.setState({
      phoneNum: e.target.value
    });
  }
  changeTime(){
    Taro.reLaunch({
      url: '/pages/nannyinfo/index',
    })
  }

  render() {
    return (
      <View className='submit'>
        <View className='firstText'>
          <View className='Text'>催乳师预约</View>
          <View className='Time' onClick={this.changeTime}>
            <AtIcon value='calendar' size='20' color='black'></AtIcon>
            <Text style='font-size:15px;'>2023年8月15日 09:00~21:30</Text>
            <AtTag circle>更改时段</AtTag>
          </View>
        </View>

        <View className='secondText'>
          <View className='informationText'>请您填写资料，带*号为必填项</View>
          <View className='input'>
            *姓名：
            <Input
            onInput={this.nameInputChange}
            type='text'
            placeholder='请填入您的姓名'
            value={this.state.name}
          />
          </View>

          <View className='input' style='border-top: 1px solid #F3F3F3;'>
            *手机：
            <Input
            onInput={this.phoneNumInputChange}
            type='text'
            placeholder='请填入您的手机号'
            value={this.state.phoneNum}
          />
          </View>
        </View>
        <AtButton type='primary'>提交</AtButton>
      </View>
    )
  }
}
