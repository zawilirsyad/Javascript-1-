const printSegitiga = 6;

if (typeof printSegitiga !== "number") {
  console.log("Data harus number");
} else {
  for (let i = printSegitiga; i > 0; i--) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += j + " ";
    }
    console.log(baris.trim());
  }
}
