---
outline: deep
---

# 组件和 API

## 简介

在 React Native 项目中，所有展示的界面，都可以看做是一个组件（Component），只是功能和逻辑
上的复杂程度不同。

## 原生组件

在 Android 开发中是使用 Kotlin 或 Java 来编写视图；在 iOS 开发中是使用 Swift 或 Objective-C 来编写
视图。在 React Native 中，则使用 React 组件通过 JavaScript 来调用这些视图。在运行时，React
Native 为这些组件创建相应的 Android 和 iOS 视图。由于 React Native 组件就是对原生视图的封装，

-   因此使用 React Native 编写的应用外观、感觉和性能与其他任何原生应用一样。我们将这些平台支持的
    组件称为原生组件。
    ![image](./images/image16.png)

> React Native 允许您为 Android 和 iOS 构建自己的 Native Components（原生组件）。

## 核心组件

React Native 还包括一组基本的，随时可用的原生组件，您可以使用它们来构建您的应用程序。这些是
React Native 的 核心组件。（来自 react-native 的组件叫核心组件）
![image](./images/image17.png)

## 第三方组件

不在 react-native 中的，需要单独安装，然后才能使用的组件

## 自定义组件

一般指，具有特定功能的，由工程师自己写的，在项目中需要重复使用的组件。

## 常用组件

#### View

相当于 HTML 中的 div，用来展示内容

#### SafeAreaView

用法与 View 一致，只是 SafeAreaView 可以避开 刘海（挖空屏幕）  
![image](./images/image18.png)

#### Text

用来展示文本信息（RN 中所有的文本，必须包含在 Text 标签中）

```js
    import { Text } from 'react-native'
    <Text>文本内容</Text>
    <Text
        style={[styles.newsItemHeader]} // 样式
        numberOfLines={2} // 文本显示的行数
        ellipsizeMode="tail" // 从文本的末尾进行截断
        onPress={() => alert('点击')}
        onLongPress={() => alert('长按点击')}
    > 文本内容 </Text>
```

![image](./images/image19.png)

#### Button

不能使用 style 属性

```js
import { Button } from 'react-native';
<Button onPress={onPressLearnMore} title='Learn More' color='#841584' />;
```

#### Alert

提示窗口(三个按钮)

```js
Alert.alert('更新提醒', '发现新版本，是否现在更新', [
    {
        text: '稍后再说',
        onPress: () => console.log('Ask me later pressed'),
    },
    {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    },
    { text: '确认', onPress: () => console.log('OK Pressed') },
]);
```

![image](./images/image20.png)

#### Switch

开关按钮，类似 HTML 中的 CheckBox

```js
import { Switch } from 'react-native';
<Switch
    trackColor={{ false: '#999', true: '#666' }} // 背景色
    thumbColor={this.state.hideStatusBar ? 'red' : 'white'} // 前景色
    ios_backgroundColor='#3e3e3e'
    value={this.state.hideStatusBar}
    onValueChange={this.toggleStatusBar} // 开关处理函数
/>;
```

#### StatusBar

状态栏位于手机的顶部，一般用来显示网络信号，时间，电量等信息。在 RN 可以通过 StatusBar 来控制状态栏

```js
import { StatusBar } from 'react-native';
<StatusBar
    backgroundColor='blue' // 设置背景色，仅在 Android 下有效
    animated={false}
    hidden={this.state.hideStatusBar} // 是否隐藏 StatusBar
/>;
```

#### ActivityIndicator

活动指示器

```js
import { ActivityIndicator } from 'react-native'
<ActivityIndicator size="large" color="#0000ff" />
<ActivityIndicator size="small" color="#00ff00" />
<ActivityIndicator size={70} color="#00d0ff" />
<ActivityIndicator size={100} color="red" />
```

Android VS iOS 下的效果（使用数字来声明大小，仅在 Android 下有效。）
![image](./images/image21.png)

#### Image

用来展示图片。图片路径有三种情况

```js
- <Image style={styles.slideItem} source={require("../../images/1.jpg")} /> // 不支持地址变量拼接
<Image
    style={styles.mediumLogo}
    source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
    }}
/>;
<Image
    style={styles.logo}
    source={{
        uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRF
        WHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYud
        DQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJ
        RU5ErkJggg==',
    }}
/>
```

#### TextInput

RN 中的 TextInput 支持多种表单类型，例如：普通输入框，密码框，文本域等。不同类型的表单是通过不同的属性来实现的。

```js
export default class index extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };
    }

    doLogin = () => {
        alert(this.state.username);
    };

    render() {
        return (
            <View style={[styles.container]}>
                <TextInput
                    style={[styles.input]}
                    placeholder='请输入用户名'
                    value={this.state.username}
                    onChangeText={(val) => {
                        this.setState({
                            username: val,
                        });
                    }}
                />

                <TextInput
                    style={[styles.input]}
                    placeholder='请输入密码'
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={(val) => {
                        this.setState({
                            password: val,
                        });
                    }}
                />

                <TextInput
                    style={[styles.input]}
                    placeholder='手机号'
                    keyboardType='number-pad'
                    // value={this.state.password}
                    // onChangeText={(val) => {
                    //   this.setState({
                    //     password: val
                    //   })
                    // }}
                />

                <TextInput
                    style={[styles.input]}
                    placeholder='请输入自我介绍'
                    multiline={true}
                    numberOfLines={5}
                    textAlignVertical='top'
                />

                <View style={[styles.btn]}>
                    <Button title='登陆' onPress={this.doLogin} />
                </View>
            </View>
        );
    }
}
```

#### Touchable

触碰插件一般与事件一起使用

```js
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

export default function index() {
    return (
        <View style={[styles.container]}>
            <TouchableHighlight onPress={() => console.log('触碰高亮显示')}>
                <View style={[styles.item]}>
                    <Text>触碰高亮</Text>
                </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={() => console.log('触碰透明度变化')}>
                <View style={[styles.item]}>
                    <Text>触碰透明度变化</Text>
                </View>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={() => console.log('触碰无响应')}>
                <View style={[styles.item]}>
                    <Text>触碰无响应</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
});
```

#### ScrollView

View 没有滚动功能。当内容超出可视区域后。就无法正常显示。此时，我们可以用滚动视图（ScrollView）来显示内容。

```js
    ScrollView
    style={{backgroundColor: '#dfb'}} // 指定样式
    horizontal={true} // 是否水平方向滚动。默认是垂直方向
    contentContainerStyle={{margin: 30}} // 设置内容样式
    showsVerticalScrollIndicator={false} // 是否展示垂直方向的滚动条
    showsHorizontalScrollIndicator={false} // 是否显示水平方向的滚动条
    >
    </ScrollView>
```

#### SectionList

将列表分成若干个章节，每个章节有一个标题。支持下面这些常用的功能

-   完全跨平台。
-   行组件显示或隐藏时可配置回调事件。
-   支持单独的头部组件。
-   支持单独的尾部组件。
-   支持自定义行间分隔线。
-   支持分组的头部组件。
-   支持分组的分隔线。
-   支持多种数据源结构
-   支持下拉刷新。
-   支持上拉加载

#### FlatList

用来渲染列表。具有如下特点：

-   完全跨平台
-   支持垂直（默认）和水平两个方向的列表
-   可配置显示或隐藏的回调事件
-   支持自定义 Header
-   支持自定义 Footer
-   支持自定义行与行之间的分割线
-   下拉刷新
-   上拉刷新
-   支持跳到指定行
-   支持多列显示

#### Animated

Animated 库旨在使动画变得流畅，强大并易于构建和维护。 Animated 侧重于输入和输出之间的声明性
关系，以及两者之间的可配置变换，此外还提供了简单的 start/stop 方法来控制基于时间的动画执
行。

#### WebView

WebView 相当于 RN 中的内置浏览器，我们写的 H5 的代码，可以直接在 WebView 中直接运行。该组
件之前在 RN 核心中。现在已经单独维护了。

-   安装

```js
yarn add react-native-webview
```

-   链接原生代码: React Native 模块包括 Objective-C, Swift, Java, or Kotlin 等原生代码，我们必须将其”链接“，然后，编译器才会在应用中使用。

```js
react-native link react-native-webview
react-native unlink react-native-webview // 如果需要取消链接，执行此命令
```

-   iOS 应用：如果你在 iOS 下，请在 ios/ 或 macos/ 目录下运行

```js
cd ios && pod install && cd ../
```

-   Android 应用: 如果 react-native-webview 的版本 < 6，则无需任何操作。如果 react-native-webview 的版本 >= 6，请确保 AndroidX 在项目中已启动。具体做法是在 android/gradle.properties 中添加如下两行

```js
android.useAndroidX = true;
android.enableJetifier = true;
```

> 上述链接操作完成后，我们就可以启动应用了
> iOS：yarn ios
> Android：yarn android

-   使用示例

```js
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
class MyWeb extends Component {
    render() {
        return (
            <WebView
                {/* 直接填写网址 */}
                source={{ uri: 'https://infinite.red' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
class MyInlineWeb extends Component {
    render() {
        return (
            <WebView
                {/* 直接写 HTML 代码 */}
                source={{ html: '<h1>Hello world</h1>' }}
                originWhitelist={['*']}
            />
        );
    }
}
```

#### Picker

[Picker](https://github.com/react-native-picker/picker) 相当于 HTML 中的下拉框。react-native@0.60.0 之前在 RN 核心中。现在已经单独维护了

-   安装

```js
yarn add @react-native-picker/picker
```

-   在 iOS 下，还需要执行

```js
cd ios && pod install && cd ../
```

-   安卓没有额外操作
-   使用及效果展示

```js
import { Picker } from '@react-native-picker/picker';
// (...)
state = {
    gender: 0, // 在状态中指定性别
};
// (...)
<Picker
    selectedValue={this.state.gender} // 选中的值
    style={{ height: 50, width: 100 }}
    mode={'dialog'} // mode 属性只在 Android 下有效
    onValueChange={(itemValue, itemIndex) =>
        this.setState({ gender: itemValue })
    }
>
    <Picker.Item label='保密' value='0' />
    <Picker.Item label='男' value='1' />
    <Picker.Item label='女' value='2' />
</Picker>;
```

![image](./images/image22.png)

#### Swiper

在 React Native 中，实现轮播图常用的组件是 [react-native-swiper](https://github.com/leecade/react-native-swiper)

-   安装

```js
yarn add react-native-swiper --save
```

-   使用

```js
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'reactnative';
import Swiper from 'react-native-swiper';
export default class SwiperDemo extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Swiper style={[styles.wrapper]} showsButtons={true}>
                        <Image
                            source={require('../../images/1.jpg')}
                            style={[styles.slideImage]}
                        />
                        <Image
                            source={require('../../images/2.jpg')}
                            style={[styles.slideImage]}
                        />
                        <Image
                            source={require('../../images/3.jpg')}
                            style={[styles.slideImage]}
                        />
                    </Swiper>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 200,
    },
    slideImage: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});
```

> 注意：Swiper 要放在 ScrollView 组件中，否则显示不正常
