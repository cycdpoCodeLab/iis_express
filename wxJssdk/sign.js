const
  crypto = require('crypto')
;

let
  createNonceStr = () => Math.random().toString(36).substr(2, 15)
  , createTimestamp = () => parseInt(new Date().getTime() / 1000) + ''

  , raw = (args) => {
    let
      keys = Object.keys(args)
      , newArgs = {}
      , string = ''
    ;
    keys = keys.sort();

    keys.forEach((key) => {
      newArgs[key.toLowerCase()] = args[key];
    });

    for (let k in newArgs) {
      string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    return string;
  }

  , sha1 = (str) => {
    let shasum = crypto.createHash("sha1");
    shasum.update(str);
    str = shasum.digest("hex");
    return str;
  }
;


/**
 * @synopsis 签名算法
 *
 * @param jsapi_ticket 用于签名的 jsapi_ticket
 * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
 *
 * @returns
 */
let sign = (jsapi_ticket, url) => {
  let ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  };

  let
    string = raw(ret)
  ;
  ret.signature = sha1(string);
  console.log(ret.signature);

  return ret;
};

module.exports = sign;
