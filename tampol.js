<!--
function tampol(id)
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
	
now = new Date();
if (now.getTimezoneOffset() == 0) (a=now.getTime() + ( 7 *60*60*1000))
else (a=now.getTime());
now.setTime(a);
document.write(dayarray[day] + ", " + daym+"/"+ montharray[month]+"/"+year);
&nbsp;&nbsp;&nbsp;&nbsp; document.write("" + ((now.getHours() < 10) ? "0" : "") + now.getHours() + ":" + ((now.getMinutes() < 10)? "0" : "") + now.getMinutes() + (" WIB "))
}
