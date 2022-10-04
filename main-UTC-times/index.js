import moment from "moment-timezone";
console.log(moment.tz(new Date().toUTCString(), "America/New_York").format())
