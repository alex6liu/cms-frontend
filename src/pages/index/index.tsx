import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input, Label } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

import axios from 'axios';
import api from '../../../utils/api';

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {
  username: String,
  password: String,
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    username: '',
    password: '',
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login() {
    Taro.navigateTo({
      url: '/pages/welcome/welcome'
    })
  }

  gotoSignup() {
    Taro.navigateTo({
      url: '/pages/signup/signup'
    })
  }

  handleInput(type, e) {
    if (type === 'username') {
      this.setState({
        username: e.detail.value
      })
    }
    if (type === 'password') {
      this.setState({
        password: e.detail.value
      })
    }
  }

  render () {
    return (
      <View className='index'>
        <View className='login-container'>
          <View className='input-container'>
            <Label for='username' >用户名</Label>
            <Input type='text' id='username' name='username' value={this.state.username} onInput={this.handleInput.bind(this, 'username')}/>
          </View>
          <View className='input-container'>
            <Label for='password' >密码</Label>
            <Input type='text' id='password' password name='password' value={this.state.password} onInput={this.handleInput.bind(this, 'password')}/>
          </View>
          <Button onClick={this.login} className='login'>登录</Button>
          <Text className='no-account'>还没有账号?<Text onClick={this.gotoSignup}>点此注册</Text></Text>
        </View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
