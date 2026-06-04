function tampiltanggal()
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
	
        document.write(dayarray[day] + ", " + daym + " " + montharray[month] + " " + year);
}
