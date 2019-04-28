import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input, Label } from '@tarojs/components'

import './signup.scss'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {
  username: String,
  password: String,
  password2: String,
  checkcode: String,
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Signup {
  props: IProps;
}

class Signup extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: '注册',
  }

  state = {
    username: '',
    password: '',
    password2: '',
    checkcode: '',
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  signup() {

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
    if (type === 'password2') {
      this.setState({
        password2: e.detail.value
      })
    }
    if (type === 'checkcode') {
      this.setState({
        checkcode: e.detail.value
      })
    }
  }

  render () {
    console.log(this.state.password);
    return (
      <View className='signup'>
        <View className='login-container'>
          <View className='input-container'>
            <Label for='username'>用户名</Label>
            <Input type='text' id='username' name='username' value={this.state.username} onInput={this.handleInput.bind(this, 'username')}/>
          </View>
          <View className='input-container'>
            <Label for='password'>密码</Label>
            <Input type='text' id='password' name='password' password value={this.state.password} onInput={this.handleInput.bind(this, 'password')}/>
          </View>
          <View className='input-container'>
            <Label for='password2'>再次输入密码</Label>
            <Input type='text' id='password2' name='password2' password value={this.state.password2} onInput={this.handleInput.bind(this, 'password2')}/>
          </View>
          <View className='input-container'>
            <Label for='checkcode'>验证码</Label>
            <Input type='text' id='checkcode' name='checkcode' value={this.state.checkcode} onInput={this.handleInput.bind(this, 'checkcode')}/>
          </View>
          <Button onClick={this.signup} className='signup'>注册</Button>
        </View>
      </View>
    )
  }
}

export default Signup as ComponentClass<PageOwnProps, PageState>
