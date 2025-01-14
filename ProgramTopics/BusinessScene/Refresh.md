# 刷新与加载

## 下拉刷新

实现下拉刷新主要分为三步：

1. 监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；
2. 监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；
3. 监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置。
```html

<main>
    <p class="refreshText"></p>
    <ul id="refreshContainer">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        ...
    </ul>
</main>
```
```javascript

(function(window) {
    var _element = document.getElementById('refreshContainer'),
      _refreshText = document.querySelector('.refreshText'),
      _startPos = 0,
      _transitionHeight = 0;

    _element.addEventListener('touchstart', function(e) {
        console.log('初始位置：', e.touches[0].pageY);
        _startPos = e.touches[0].pageY;
        _element.style.position = 'relative';
        _element.style.transition = 'transform 0s';
    }, false);

    _element.addEventListener('touchmove', function(e) {
        console.log('当前位置：', e.touches[0].pageY);
        _transitionHeight = e.touches[0].pageY - _startPos;

        if (_transitionHeight > 0 && _transitionHeight < 60) {
            _refreshText.innerText = '下拉刷新';
            _element.style.transform = 'translateY('+_transitionHeight+'px)';

            if (_transitionHeight > 55) {
              _refreshText.innerText = '释放更新';
            }
        }                
    }, false);

    _element.addEventListener('touchend', function(e) {
        _element.style.transition = 'transform 0.5s ease 1s';
        _element.style.transform = 'translateY(0px)';
        _refreshText.innerText = '更新中...';

        // todo...

    }, false);
})(window);
```
在下拉到松手的过程中，经历了三个状态：

1. 当前手势滑动位置与初始位置差值大于零时，提示正在进行下拉刷新操作；
1. 下拉到一定值时，显示松手释放后的操作提示；
1. 下拉到达设定最大值松手时，执行回调，提示正在进行更新操作。

## 上拉加载

上拉加载更多数据是在页面滚动时触发的动作，一般是页面滚动到底部时触发，也可以选择在滚动到一定位置的时候触发。

以滚动到页面底部为例。实现原理是分别获得当前滚动条的scrollTop值、当前可视范围的高度值clientHeight以及文档的总高度scrollHeight。当scrollTop和clientHeight的值之和大于等于scrollHeight时，触发callback。

```html

<main>
    <ul id="refreshContainer">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        ...
    </ul>
    <p class="refreshText"></p>
</main>

```
```js
(function(window) {
    // 获取当前滚动条的位置 
    function getScrollTop() { 
        var scrollTop = 0; 
        if (document.documentElement && document.documentElement.scrollTop) { 
            scrollTop = document.documentElement.scrollTop; 
        } else if (document.body) { 
            scrollTop = document.body.scrollTop; 
        } 
        return scrollTop; 
    } 

    // 获取当前可视范围的高度 
    function getClientHeight() { 
        var clientHeight = 0; 
        if (document.body.clientHeight && document.documentElement.clientHeight) { 
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
        } 
        else { 
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
        } 
        return clientHeight; 
    } 

    // 获取文档完整的高度 
    function getScrollHeight() { 
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
    }

    var _text = document.querySelector('.refreshText'),
      _container = document.getElementById('refreshContainer');

    // 节流函数
    var throttle = function(method, context){
      clearTimeout(method.tId);
      method.tId = setTimeout(function(){
        method.call(context);
      }, 300);
    }

    function fetchData() {
        setTimeout(function() {
            _container.insertAdjacentHTML('beforeend', '<li>new add...</li>');
        }, 1000);
    }

    window.onscroll = function() {
      if (getScrollTop() + getClientHeight() == getScrollHeight()) {
          _text.innerText = '加载中...';
          throttle(fetchData);
      }
    };

})(window);
```
页面绑定onscroll事件时加入了节流函数，其作用就是忽略滚动条300毫秒内的连续多次触发。