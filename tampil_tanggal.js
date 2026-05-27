function tampiltanggal(text)
{
	var dayarray = new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
	var montharray = new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");

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

     document.write(dayarray[day] + ", " + daym + " " + montharray[month] + " " + year);<span>
document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>")</spa>
}