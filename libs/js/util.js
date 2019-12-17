var util = {}
util.extend = function (sourceObj, disObj) {
    for (var k in disObj) {
        if (k === 'type') {
            disObj[k] = disObj[k].toUpperCase()
        }
        sourceObj[k] = disObj[k]
    }
}
util.ajax = function (options) {
    // 默认参数
    var opt = {
        url: '',
        type: 'GET',
        data: {},
        success: function () {},
        error: function () {}
    }
    util.extend(opt, options)
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    var data = opt.data,
        url = opt.url,
        type = opt.type,
        dataArr = [];
    for (var k in data) {
        dataArr.push(`${k}=${data[k]}`)
    }
    if (type === 'GET') {
        url = url + '?' + dataArr.join('&');
        xhr.open(type, url.replace(/\?$/g, ''), true)
        xhr.send();
    }
    if (type === 'POST') {
        xhr.open(type, url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(dataArr.join('&'))
    }
    // 接收异步响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                var res;
                if (opt.success && opt.success instanceof Function) {
                    res = xhr.responseText;
                    if (typeof res === 'string') {
                        res = JSON.parse(res)
                        opt.success.call(xhr, res)
                    }
                }
            } else {
                if (opt.error && opt.error instanceof Function) {
                    opt.error.call(xhr, res);
                }
            }
        }
    }
}