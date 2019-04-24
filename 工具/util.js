// return type number|string|undefined|null|regrex|error|array|object|boolean|function
function getType (t) {
  let _t = typeof t
  switch (_t) {
    case 'object':
      if (t instanceof Array) {
        return 'array'
      } else if (t instanceof Error) {
        return 'error'
      } else if (t instanceof RegExp) {
        return 'regrex'
      } else if (t === null) {
        return 'null'
      }
    default:
      return _t
  }
}

function getTypeNew (t) {
  let str = Object.prototype.toString.call(t)
  let endIndex = str.indexOf(' ')
  return str.replace(/[\[|\]]/g, '').slice(endIndex).toLowerCase()
}

/********************/

