// 更新路径参数
export function updateUrlParam(url: string, data: object) {
  url = url || ''
  data = data || {}
  const arr = url.split('?')
  let result = ''
  if (arr.length == 1) {
    for (const i in data) {
      if (result == '') {
        result += i + '=' + data[i]
      } else {
        result += '&' + i + '=' + data[i]
      }
    }
    return arr[0] + '?' + result
  } else {
    const valuelist = arr[1].split('&')
    let json = {}
    for (let i = 0; i < valuelist.length; i++) {
      const keyvalue = valuelist[i].split('=')
      json[keyvalue[0]] = keyvalue[1]
    }
    json = this.extend(json, data)
    for (const i in json) {
      if (result == '') {
        result += i + '=' + json[i]
      } else {
        result += '&' + i + '=' + json[i]
      }
    }
    return arr[0] + '?' + result
  }
}

