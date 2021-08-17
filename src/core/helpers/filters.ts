import moment from "moment-timezone";
const filters = {
  price(input: number) {
    if (isNaN(input)) {
      return "-";
    }
    return '$' + input.toFixed(2);
  },
  toFloor(number, scale = 8) {
    if (new Number(number) == 0) {
      return 0;
    }
    const __str = number + "";
    if (__str.indexOf('e') > -1 || __str.indexOf('E') > -1) {
      const __num = new Number(number).toFixed(scale + 1),
        __str = __num + "";
      return __str.substring(0, __str.length - 1);
    } else if (__str.indexOf(".") > -1) {
      if (scale == 0) {
        return __str.substring(0, __str.indexOf("."));
      }
      return __str.substring(0, __str.indexOf(".") + scale + 1);
    } else {
      return __str;
    }
  },
  timeFormat(tick) {
    return moment(tick).tz(this.getTimezone4K()).format("HH:mm:ss");
  },
  dateFormat(tick) {
    return moment(tick).format("YYYY-MM-DD HH:mm:ss");
  },
  toFixed(number, scale) {
    return new Number(number).toFixed(scale);
  },
  toPercent(point) {
    let str = Number(point * 100).toFixed(1);
    str += "%";
    return str;
  },

  getTimezone4K(){
    const curlang = "en_US"; //777this.$store.getters.lang;
    if(curlang=="en_US"){
      return "America/Los_Angeles";
    }
    if(curlang=="ja_JP"){
      return "Asia/Tokyo";
    }
    if(curlang=="ko_KR"){
      return "Asia/Seoul";
    }
    if(curlang=="de_DE"){
      return "Europe/Berlin";
    }
    if(curlang=="fr_FR"){
      return "Europe/Paris";
    }
    if(curlang=="it_IT"){
      return "Europe/Rome";
    }
    if(curlang=="es_ES"){
      return "Europe/Madrid";
    }
    if(curlang=="zh_HK"){
      return "Asia/Hong_Kong";
    }
    if(curlang=="zh_CN"){
      return "Asia/Shanghai";
    }
    return curlang;
  },
}
export default filters;