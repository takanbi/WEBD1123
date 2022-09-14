let drink = "Energy Drinks";
let lyrics = "";
let cans = 99;
let paragraph = document.getElementById("container2");

// while (cans > 0) {
//     lyrics = lyrics + cans + " cans of "
//     + drink + " on the wall <br>";
//     lyrics = lyrics + cans + " cans of "
//     + drink + "<br>";
//     lyrics = lyrics + "Take one down, pass it around,<br>";
//     if(cans > 1) {
//         lyrics = lyrics + (cans - 1) + " cans of "
//         + drink + "on the wall <br>";
//     }
//     else {
//         lyrics = lyrics + "No more cans of"
//       + drink + "on the wall <br>";
//     }
//     cans = cans - 1;    
// }
while (cans > 0) {
    lyrics = lyrics + cans + " cans of "
    + drink + " on the wall ";
    lyrics = lyrics + cans + " cans of "
    + drink + "";
    lyrics = lyrics + ", Take one down, pass it around,<br>";
    if(cans > 1) {
        lyrics = lyrics + (cans - 1) + " cans of "
        + drink + " on the wall ";
    }
    else {
        lyrics = lyrics + "No more cans of"
      + drink + "on the wall ";
    }
    cans = cans - 1;    
}
paragraph.innerHTML = lyrics;
console.log(lyrics);