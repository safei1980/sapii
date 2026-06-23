function tampol(text)
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
	
        
	now = new Date();
if (now.getTimezoneOffset() == 0) (a=now.getTime() + ( 7 *60*60*1000))
else (a=now.getTime());
now.setTime(a);
	document.write(dayarray[day] + ", " + daym + " " + montharray[month] + " " + year);
document.write("" + ((now.getHours() < 10) ? "0" : "") + now.getHours() + ":" + ((now.getMinutes() < 10)? "0" : "") + now.getMinutes() + (" WIB "))
}
	//-->

}

