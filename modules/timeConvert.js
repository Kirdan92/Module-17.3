

function timeConvert(uptime){
    var hours = (uptime / 3600).toFixed(0);
    var minutes = Math.floor((uptime % 3600) / 60);
    var seconds = (uptime - minutes) % 60
    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

exports.convert = timeConvert;