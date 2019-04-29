import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input, Label } from '@tarojs/components'

import './tab.scss'

type PageStateProps = {
  // titles: Array<String>,
}

type PageDispatchProps = {

}

type PageOwnProps = {
  titles: Array<String>,
}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Tab {
  props: IProps;
}

class Tab extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: '欢迎',
  }

  state = {

  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { titles } = this.props;

    return (
      <View className='tap'>
        {
          titles.map(item => (
            <View className='title'>{item}</View>
          ))
        }
      </View>
    )
  }
}

export default Tab as ComponentClass<PageOwnProps, PageState>
