import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '../common/Index'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>这是服务介绍</Text>
      <TabBar current={2}></TabBar>
    </View>
  )
}
