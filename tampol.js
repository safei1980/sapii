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
 document.write(dayarray[day] + ", " + daym + " /" + montharray[month] + " /" + year);
}
