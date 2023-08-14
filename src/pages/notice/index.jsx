import {View, Text, ScrollView, SwiperItem, Swiper} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '../common/Index';
import {Component} from "react";
import { AtIcon } from 'taro-ui'

import MIKE from '../images/mike.jpg'
import IMG1 from '../images/notice_img_1.jpg'
import IMG2 from '../images/notice_img_2.jpg'
import IMG3 from '../images/notice_img_3.jpg'
export default class Index extends Component  {

  onScroll(e){
    console.log(e.detail)
  }
  constructor() {
    super();
    this.state={
      productList:[]
    }
  }
  onScrollToUpper() {}
  ToNannyInfo(){
    Taro.reLaunch({
      url: '/pages/bookinginfo/index',
    })
  }
  render(){
    const scrollContainerStyle = {
    };
    const scrollStyle = {
      height: '900px'
    }
    const scrollTop = 0
    const Threshold = 20
    return (
      <View className='index'>
        <ScrollView
          className='scrollview'
          scrollY
          enableFlex='true'
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View className='big-box'  onClick={this.ToNannyInfo.bind(this)}>
            <View className='box'>
              <View className='content-title'>春节大扫除 明德家政来帮您</View>
              <View className='content-box' >
                <image className='goods-pic' src={IMG1}></image>
                <View className='content'>2021年已悄然离去，我们迎来了崭新的2016年。春节临近，家里经过一年的积累需要彻底地打扫一遍，但清洁起来却并不容易。如果您还在为如何高效快速而又彻底地清洁家居的每个角落而发愁，那就让明德家政来帮您！
                  家政公司为各位业主及客户提供春节前卫生保洁及玻璃清洁，家居保养，窗帘清洗等服务项目，推出统一报名，统一打扫活动。活动具体如下：

                  1、凡预约时间在2016年1月11日至2016年1月15日的业主或客户均可享受原价格8折优惠；
                  2、凡预约时间在2016年1月16日至2016年1月29日的业主或客户按正常价格；
                  3、预约时间在2016年1月29日以后的业主或客户价格上浮30%
                  注：已办理VIP会员的客户不再享受8折优惠</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
            <View className='box'>
              <View className='content-title'>家政会员卡大酬宾！</View>
              <View className='content-box' >
                <image className='goods-pic' src={IMG2}></image>
                <View className='content'>为家庭、单位、企业等提供适合的家政服务人员，包括保姆、月嫂、育婴早教、保洁、家政咨询、精准扶贫吕梁山护工岗前实训及就业等。

                  保洁项目，有日常保洁4块/平米、开荒、深度保洁8块/平米。

                  家政服务项目，操持家务、护理老人、护理孕妇、产后新生儿、保育婴幼儿、护理病人等家务家政服务工作。</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
            <View className='box'>
              <View className='content-title'>公司积极开展庆“三八”妇女节活动</View>
              <View className='content-box' >
                <image className='goods-pic' src={IMG3}></image>
                <View className='content'>一年一度春风暖，如诗如画三月天。为提升妇女职业素养、扩展思维交际圈、丰富生活圈、拓宽就业渠道，值此“三八”国际妇女节之际，公司积极开展庆“三八”妇女节活动！

                  珍缘家政联合开滦集团工会在万顺书场开展欢庆“三八”国际妇女节活动，丰富职工文化生活，宣讲惠民政策、家政服务项目，同时进行家庭整理收纳技能培训。</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
            <View className='box'>
              <View className='content-title'>服务公司开展爱心送温暖活动</View>
              <View className='content-box' >
                <image className='goods-pic' src={MIKE}></image>
                <View className='content'>当天，宝鸡万兴家政服务公司的十余名专业服务人员先后帮助敬老院进行了擦玻璃、清洗墙壁、打扫楼道，帮老人按摩、整理生活用品，陪老人聊天、理发等义务活动，传递了温情友爱的精神，体现了企业的爱心与责任。受到了敬老院老人们的称赞。

                  在工作人员打扫完房间后，一位老人高兴地说道“真不愧是专业的，没多长时间，屋里就窗明几净了。每年来我们敬老院做义务服务的人很多，有学生还有社会上的志愿者，家政公司来献爱心、做公益还是首次，真是太感谢了。”

                  据介绍，位于我县百合花园环城南路36号的宝鸡万兴家政服务有限公司是一家集保洁服务、家政服务、专业月嫂、专业厨嫂、家庭护理、等一体的综合性家政服务公司。公司成立两年来共安置员工246名，贫困户20多名，在为社会提供了就业岗位的同时为婴幼儿和老人开展了专业的服务，受到了社会的好评与肯定。</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
            <View className='box'>
              <View className='content-title'>家政服务中心简介</View>
              <View className='content-box' >
                <image className='goods-pic' src={MIKE}></image>
                <View className='content'>家政服务中心，是本县第一家集居室保洁，月嫂保姆，室内空气检测治理，电路、电器维修，厨具清洗，搬家等综合型家庭服务有限公司。公司成立至今，已为本县539户家庭提供保洁服务，68户家庭搬家服务，136户家庭及公司室内环境治理，为85位准妈妈提供月嫂服务，并受到客户们一致好评。

                  做家庭服务，我们是认真的！





                  公司地址：大城县交通局对面</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
            <View className='box'>
              <View className='content-title'>家政公司春节期间工作安排通知</View>
              <View className='content-box' >
                <image className='goods-pic' src={MIKE}></image>
                <View className='content'>尊敬的新老顾客：

                  您好，首先感谢大家对冠县阳光大姐家政公司多年以来的支持与关注，春节将至，为更好的落实我们的服务，根据公司安排春节放假时间为1月31日至2月5日，2月6日正常营业。因放假给您带来的不便请谅解！

                  放假期间业务联系电话：

                  汽车站店前台咨询电话：5231838

                  星湖湾店前台咨询电话：5232838

                  新年来临之际，冠县阳光大姐家政公司全体员工谨祝您新春愉快、阖家欢乐！</View>
              </View>
              <View className='content-time'><AtIcon size='12' color='grep'></AtIcon>2022-03-14</View>
            </View>
          </View>
        </ScrollView>
        <TabBar current={1}></TabBar>
      </View>

    )
  }
}
