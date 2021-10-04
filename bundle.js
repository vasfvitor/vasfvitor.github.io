today = new Date();
var DFIN = new Date(today.getFullYear(), 10, 05);
if (today.getMonth() == 06 && today.getDate() > 05) {
  DFIN.setFullYear(DFIN.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
var fifi = Math.ceil((DFIN.getTime() - today.getTime()) / (one_day))
console.log (fifi);


document.getElementById("mauticform_input_bzfli06fbig_fifidata").value = fifi;

console.log (document.getElementById("mauticform_input_bzfli06fbig_fifidata").value);


