import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input, Label } from '@tarojs/components'

import './layout.scss'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Layout {
  props: IProps;
}

class Layout extends Component {

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
    return (
      <View className='layout'>

      </View>
    )
  }
}

export default Layout as ComponentClass<PageOwnProps, PageState>
