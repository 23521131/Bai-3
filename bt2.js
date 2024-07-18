const arr = [12, 23, 9, 26, 1];
const sum = arr.reduce((total, curr) => total + curr, 0);
const tb = sum / arr.length;
console.log("Tong: ", sum);
console.log("Trung binh cong: ", tb);