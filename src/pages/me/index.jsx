import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'
import TabBar from '../common/Index'
import {Component} from "react";
import { AtAvatar } from 'taro-ui'

export default class Index  extends Component{

  constructor() {
    super();
  }

render(){
  return (
    <View className='index'>

      <View className='index11'>
        <View className='top'>


            <AtAvatar circle image='https://rbaigctool-1307270943.cos.ap-beijing.myqcloud.com/2023-08-08/16-10-d81ee6cd-fc2b-47f2-a576-4eee87d2bb9389d6b5bd-f9d1-4ea9-9dae-b059bbc53073.png'></AtAvatar>
            <AtListItem title='欢迎回来~~~' note='马上注册，使用更多功能' className='atitle'/>

        </View>
        <View className='main'>

          <AtListItem title='我的今日预约' note='您今天没有预约哦~'  className='atitle1' />
          <AtListItem
            title='我的所有预约'

            arrow='right'
            iconInfo={{ size: 17, color: 'black', value: 'list', }}
          />
          <AtListItem
            title='修改我的个人资料'

            arrow='right'
            className='Alist'
            iconInfo={{ size: 17, color: 'black', value: 'calendar', }}
          />
          <AtListItem
            title='关于我们'

            arrow='right'
            className='Alist'
            iconInfo={{ size: 17, color: 'black', value: 'user', }}
          />
          <AtListItem
            title='联系作者了解更多详情'

            arrow='right'
            className='Alist'
            iconInfo={{ size: 17, color: 'black', value: 'phone', }}
          />
          <AtListItem
            title='系统后台管理'
            extraText='(可试用)'
            arrow='right'
            className='Alist1'

            iconInfo={{ size: 17, color: 'black', value: 'settings', }}
          />

        </View>
      </View>



      <TabBar current={4}></TabBar>

    </View>
  )
}

}
