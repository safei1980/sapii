function tampilwaktu(text)
{

var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

  var suffix = "WIT";
  if (hours >= 12) {
  suffix = "WIB";
  hours = hours - 12;
  }
  if (hours == 0) {
  hours = 12;
  }

  if (minutes < 10)
  minutes = "0" + minutes

  document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>")

}