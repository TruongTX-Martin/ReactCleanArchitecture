import moment from "moment";
export default class Utils {
  static capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  static getGTMTimeZone() {
    const time = moment().toString();
    return `${time.substring(time.length - 8, time.length - 2)}`;
  }

  static getDateFormat(input) {
    return moment.unix(input)
      .local()
      .format("D MMM YYYY");
  }

  static getDateFormat_vn(input) {
    return moment.unix(input)
      .local()
      .format("D-MM-YY");
  }

  static getDateFormat_vn_hr(input) {
    return moment.unix(input)
      .local()
      .format("HH:mm D/MM/YY");
  }

  static getDatePoll(input) {
    return new Date(input * 1000);
  }

  static rawDate() {
    return moment(new Date()).format("DD/MM/YYYY").split("/").join('');
  }

  static getTimeStamp(date, start) {
    var dating = moment(date).format('YYYY/MM/DD');
    var newDate = new Date(dating);
    if (!start) {
      newDate.setHours(23, 59, 59, 999);
    } else {
      newDate.setHours(0, 0, 0, 0);
    }
    return moment(newDate).format("X");
  }
}
