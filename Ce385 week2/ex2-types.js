const text = "สวัสดี";
const number = 20;
const isStudent = true;
let notAssigned;
const emptyValue = null;
const subjects = ["JavaScript", "HTML", "CSS"];

console.log(`ค่า : ${text} | ชนิด : ${typeof text}`);
console.log(`ค่า : ${number} | ชนิด : ${typeof number}`);
console.log(`ค่า : ${isStudent} | ชนิด : ${typeof isStudent}`);
console.log(`ค่า : ${notAssigned} | ชนิด : ${typeof notAssigned}`);
console.log(`ค่า : ${emptyValue} | ชนิด : ${typeof emptyValue}`);
console.log(`ค่า : ${subjects} | ชนิด : ${typeof subjects}`);


console.log(`typeof null ได้ผลว่า : ${typeof null}`);
console.log(`typeof null ถูกต้องตามความเป็นจริงหรือไม่ : ${typeof null === "object" ? "ไม่ถูกต้อง" : "ถูกต้อง"}`);

console.log(`ตัวแปรที่ยังไม่กำหนดค่า มีชนิดเป็น : ${typeof notAssigned}`);

const nanValue = Number("abc");
console.log(`typeof NaN ได้ผลว่า : ${typeof nanValue}`);
console.log(`NaN จริงหรือไม่ : ${Number.isNaN(nanValue)}`);

// ส่วนที่ 3: การแปลงชนิดข้อมูล
const inputAge = "20";
const inputScore = "85.5";

const ageNumber = Number(inputAge);
const scoreNumber = Number(inputScore);

console.log(`อายุหลังแปลงและบวก 5 : ${ageNumber + 5}`);
console.log(`คะแนน : ${scoreNumber.toFixed(1)}`);

console.log(`inputAge === 20 : ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 : ${Number(inputAge) === 20}`);