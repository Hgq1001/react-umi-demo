/**
 * @Author:hgq
 * @Describe:
 */

/**
 *
 * @param timeStamp
 * @returns {string}
 */
export function getTime(timeStamp = new Date().getTime()) {
  let date = new Date(timeStamp);
  return (date.getHours() + ':' + (date.getMinutes()) + ':' + date.getSeconds())
    .replace(/([\-\: ])(\d{1})(?!\d)/g, '$10$2');
}

export function getDate(timeStamp = new Date().getTime()) {
  let date = new Date(timeStamp);
  return (date.getFullYear() + ':' + (date.getMonth() + 1) + ':' + date.getDate())
    .replace(/([\-\: ])(\d{1})(?!\d)/g, '$10$2');
}

/**
 *
 * @param obj 数组
 * @returns {Array}
 */
export function deepCopyArray(obj) {
  let out = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] instanceof Array) {
      out[i] = deepCopyArray(obj[i]);
    } else if (obj[i] instanceof Object) {
      out[i] = JSON.parse(JSON.stringify(obj[i]));
    } else {
      out[i] = obj[i];
    }
  }
  return out;
}
