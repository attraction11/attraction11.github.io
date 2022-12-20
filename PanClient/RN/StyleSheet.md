# StyleSheet

## RN 中的样式与 CSS 的区别

StyleSheet 是 RN 中用来声明样式的语法

-   RN 中的样式，没有继承性（子组件不能继承父组件的样式）
    -   CSS：Cascading Style Sheet（级联样式表）
    -   SS：Style Sheet（样式表）
-   样式名称使用小驼峰式命名
    -   例如：CSS 中的 font-size，在 RN 中写成 fontSize
-   所有尺寸都是没有单位
    -   例如：width: 100 这是因为 RN 中尺寸只有一个单位，dp（ 一种基于屏幕密度的抽象单位，默认省略。详情查看 PixelRatio

```js
import { PixelRatio } from 'react-native';
const dp2px = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = (px) => PixelRatio.roundToNearestPixel(px);
// 按照下面的方式可实现 px 与 dp 之间的转换（比如 100px*200px 的 View）
<View
    style={{ width: px2dp(100), height: px2dp(200), backgroundColor: 'red' }}
/>;
```

-   RN 中有些样式名的写法与 CSS 不同。例如：marginVertical

## RN 样式的声明方式
