/**
 * @Author:hgq
 * @Date: 2019/6/14
 * @Describe: 数组方法封装
 */

/**
 * Array.map 方法
 * @param array 数组
 * @param fn 回调函数，
 * @returns {Array}
 */
const map = (array, fn) => {
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
const filter = (array, fn) => {
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
const flatten = (array) => {
  return [].concat(...array.map(x => Array.isArray(x) ? flatten(x) : x));
};

/**
 * Array.reduce
 * @param array 数组
 * @param fn 回调函数
 * @param initialValue 累加器的初始值
 * @returns {*}
 */
const reduce = (array, fn, initialValue) => {
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
 * zip 合并2个数组
 * @param leftArray 数组
 * @param rightArray 数组
 * @param fn 回调函数
 * @returns {Array}
 */
const zip = (leftArray, rightArray, fn) => {
  let index, results = [];
  for (index = 0; index < Math.min(leftArray.length, rightArray.length); index++) {
    results.push(fn(leftArray[index], rightArray[index]));
  }
  return results;
};

const arrayUtils = {
  map,
  filter,
  flatten,
  reduce,
  zip,
};


export default arrayUtils;
