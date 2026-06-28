<!--
function tampol(text)
{
	var dayarray = new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
	var montharray = new Array("01","02","03","04","05","06","07","08","09","10","11","12");

	var kursusblog = new Date();

	var day = kursusblog.getDay();
	var month = kursusblog.getMonth();
	var daym = kursusblog.getDate();
	var year = kursusblog.getFullYear();

	if (daym < 10)
		daym = "0" + daym;

	var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

	var suffix = "WIB";
  if (hours <= 12) {
  suffix = "WIT";
  hours = hours  - 12;
  }

	if (hours == 0) {
  hours = 12;
  }
  if (minutes < 10)
  minutes = "0" + minutes
   document.write(dayarray[day] + ", " + daym + " " + montharray[month] + " " + year+"  <b>" + hours + ":" + minutes + " " + suffix + "</b>");
<!--document.write(dayarray[day] + ", " + daym+"/"+ montharray[month]+"/"+year);    document.write("" + hours + ":" + minutes + " " + suffix + "")
}

