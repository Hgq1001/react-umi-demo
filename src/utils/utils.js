/**
 * @Author:hgq
 * @Describe:
 */

/**
 *  获取时间--时分秒 14:00:00
 * @param timeStamp
 * @returns {string}
 */
export function getTime(timeStamp = new Date().getTime()) {
  let date = new Date(timeStamp);
  return (date.getHours() + ':' + (date.getMinutes()) + ':' + date.getSeconds())
    .replace(/([\-\: ])(\d{1})(?!\d)/g, '$10$2');
}

/**
 * 获取日期--年月日  2019-06-01
 * @param timeStamp
 * @returns {string}
 */
export function getDate(timeStamp = new Date().getTime()) {
  let date = new Date(timeStamp);
  return (date.getFullYear() + ':' + (date.getMonth() + 1) + ':' + date.getDate())
    .replace(/([\-\: ])(\d{1})(?!\d)/g, '$10$2');
}

/**
 * 拷贝数组
 * @param arr 数组
 * @returns {Array}
 */
export function deepCopyArray(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      out[i] = deepCopyArray(arr[i]);
    } else if (arr[i] instanceof Object) {
      out[i] = JSON.parse(JSON.stringify(arr[i]));
    } else {
      out[i] = arr[i];
    }
  }
  return out;
}

/**
 * 获取一个区间内的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {string}
 */
export function getRandomFrom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

/**
 * 获取字符串字节数（汉字算两个字符，字母数字算一个）
 * @param str 字符串
 * @returns {number}
 */
export function getByteLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let a = str.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}

/**
 * 遍历对象obj，把key和value作为参数，调用fn函数
 * @param obj 传入的对象
 * @param fn  需要执行的函数
 */
export const forEachObject = (obj, fn) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //以key和value作为参数调用fn函数
      fn(key, obj[key]);
    }
  }
};

/**
 * Array.every的高阶函数，遍历数组(for ... of)，并执行fn函数，当有一个fn()返回false时，every返回false
 * @param array 传入的数组
 * @param fn 需要执行的函数，必须返回boolean
 * @returns {boolean}
 */
export const every = (array, fn) => {
  let result = true;
  for (const value of array) result = result && fn(value);
  return result;
};

/**
 * Array.some的高阶函数，遍历数组(for ... of)，并执行fn函数，当有一个fn()返回true时，every返回true
 * @param array 传入的数组
 * @param fn 需要执行的函数，必须返回boolean
 * @returns {boolean}
 */
export const some = (array, fn) => {
  let result = false;
  for (const value of array) result = result || fn(value);
  return result;
};

/**
 * Array.sort的高阶函数，根据比较数据的某个property进行排序
 * @param property 进行比较的property
 * @returns {function(*, *): number}
 */
export const sortBy = (property) => {
  return (a, b) => {
    return (a[property] < b[property]) ? -1 : (a[property > b[property]]) ? 1 : 0;
  };
};

/**
 * Array.map 方法
 * @param array 数组
 * @param fn 回调函数，
 * @returns {Array}
 */
export const map = (array, fn) => {
  let results = [];
  for (const value of array) {
    results.push(fn(value));
  }
  return results;
};

/**
 * Array.filter 方法
 * @param array 数组
 * @param fn 回调函数 返回boolean
 * @returns {Array}
 */
export const filter = (array, fn) => {
  let results = [];
  for (const value of array) {
    fn(value) && results.push(value);
  }
  return results;
};

/**
 * 多维数组变为1维数组
 * @param array 数组
 * @returns {*[]}
 */
export const flatten = (array) => {
  return [].concat(...array.map(x => Array.isArray(x) ? flatten(x) : x));
};

/**
 * Array.reduce
 * @param array 数组
 * @param fn 回调函数
 * @param initialValue 累加器的初始值
 * @returns {*}
 */

export const reduce = (array, fn, initialValue) => {
  let accumlator;
  if (initialValue !== undefined) {
    accumlator = initialValue;
  } else {
    accumlator = array[0];
  }

  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumlator = fn(accumlator, array[i]);
    }
  } else {
    for (const value of array) {
      accumlator = fn(accumlator, value);
    }
  }

  return accumlator;
};

/**
 * 让某个函数只执行一次，如支付请求，
 * @param fn 执行的函数
 * @returns {function(): undefined}
 */
export const once = (fn) => {
  let done = false;
  return function() {
    return done ? undefined : (done = true, fn.apply(this, arguments));
  };
};


/**
 * 缓存函数，新建空对象，如果对象中存在某个值，返回对应的值，
 * 否则，使用新的输入作为key，fn的结果作为value，存入对象中，提高效率
 * 例子：提高阶乘函数的效率
 * @param fn  执行的函数
 * @returns {function(*=): *}
 */
export const memoized = (fn) => {
  const lookUpTable = {};
  return (arg) => lookUpTable[arg] || (lookUpTable[arg] = fn(arg));
};


/**
 * 防抖和节流
 * 相同:在不影响客户体验的前提下,将频繁的回调函数,进行次数缩减.避免大量计算导致的页面卡顿.
 * 不同:防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次.
 */


/**
 * 防抖（窗口的resize、scroll，输入框内容校验）---当持续触发事件时，debounce 会合并事件且不会去触发事件，当一定时间内没有触发再这个事件时，才真正去触发事件
 * 常见应用：输入框内容校验；按钮点击（收藏，点赞）
 * @param fn  需要执行的函数
 * @param delay  延迟执行的时间
 * @param immediate true 表立即执行，false 表非立即执行
 * @returns {Function}
 */
export const debounce = (fn, delay, immediate) => {
  let timeout = null;
  return function() {
    let context = this;
    let args = arguments;
    if (!timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
      if (callNow) fn.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
};

/**
 * 节流：当持续触发事件时，在规定时间段内只能调用一次回调函数。如果在规定时间内又触发了该事件，则什么也不做,也不会重置定时器.
 * 时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应 (该版才是最符合实际工作需求)
 * @param fun
 * @param delay
 * @returns {Function}
 */
export const throttle = (fun, delay = 500) => {
  let timer = null;
  let previous = 0;
  return function(args) {
    let now = Date.now();
    let remaining = delay - (now - previous); //距离规定时间,还剩多少时间
    let that = this;
    let _args = args;
    clearTimeout(timer);  //清除之前设置的定时器
    if (remaining <= 0) {
      fun.apply(that, _args);
      previous = Date.now();
    } else {
      timer = setTimeout(function() {
        fun.apply(that, _args);
      }, remaining); //因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
    }
  };
};

/**
 * 柯里化函数
 * @param fn 传入的函数
 * @returns {curriedFn}
 */
export const curry = (fn) => {
  /*检验fn是否是函数，如果不是，则抛出异常*/
  if (typeof fn !== 'function') {
    throw Error('No Function Provided');
  }

  return function curriedFn(...args) {
    /*检查通过args传入的参数长度是否小于函数参数列表的长度，如果小于，则使用apply函数递归调用curriedFn*/
    if (args.length < fn.length) {
      return function() {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};

/**
 * 组合与管道---把每个函数的输出作为输入传给另一个函数
 * 组合：右侧的函数最先执行，把输出作为下一个函数的输入，
 * 管道：左侧的函数最先执行，把输出作为下一个函数的输入
 * @param fns 传入的函数
 * @returns {function(*=): *}
 */
// export const compose = (...fns) => (value) => reduce(fns.reverse(), (acc, fn) => fn(acc), value);
export const piep = (...fns) => (value) => reduce(fns, (acc, fn) => fn(acc), value);

export const compose = (...fns) => {
  if (fns.length === 0) {
    return arg => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (...args) => a(b(...args)));
};

