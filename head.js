function date_time(id)
{
now = new Date();
if (now.getTimezoneOffset() == 0) (a=now.getTime() + ( 7 *60*60*1000))
else (a=now.getTime());
now.setTime(a);
var tahun= now.getFullYear ()
var hari= now.getDay ()
var bulan= now.getMonth ()
var tanggal= now.getDate ()
var hariarray=new Array("Minggu","Senin",
"Selasa","Rabu","Kamis","Jum'at","Sabtu")
var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember")
document.write(hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun)
 
var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

  var suffix = "WIB";
  if (hours >= 12) {
  suffix = "WIT";
  hours = hours - 12;
  }
  if (hours == 0) {
  hours = 12;
  }

  if (minutes < 10)
  minutes = "0" + minutes

  document.write("" + hours + ":" + minutes + " " + suffix + "")

}
