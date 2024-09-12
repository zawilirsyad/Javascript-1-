// Input nilai UN siswa
const mtk = 98;
const bahasaIndonesia = 90;
const bahasaInggris = 80;
const ipa = 90;

if (
    mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined ||
    mtk < 0 || mtk > 100 ||
    bahasaIndonesia < 0 || bahasaIndonesia > 100 ||
    bahasaInggris < 0 || bahasaInggris > 100 ||
    ipa < 0 || ipa > 100
) {
    console.log("Semua nilai harus diisi dan berada dalam rentang 0-100.");
} else {
    // Menghitung rata-rata nilai UN siswa
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

    // Menentukan grade UN siswa
    let grade;
    if (rataRata >= 90 && rataRata <= 100) {
        grade = 'A';
    } else if (rataRata >= 80 && rataRata < 90) {
        grade = 'B';
    } else if (rataRata >= 70 && rataRata < 80) {
        grade = 'C';
    } else if (rataRata >= 60 && rataRata < 70) {
        grade = 'D';
    } else if (rataRata >= 0 && rataRata < 60) {
        grade = 'E';
    }

    // Output nilai UN siswa
    console.log(`Rata-rata = ${rataRata}`);
    console.log(`Grade = ${grade}`);
}
