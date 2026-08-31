const USERNAME = "admin";
const PASSWORD = "ce385pass";

function login(inputUser, inputPass, role, isActive, age) {
    if (inputUser !== USERNAME || inputPass !== PASSWORD) {
        return "401 : ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }

    if (isActive === false) {
        return "403 : บัญชีนี้ถูกระงับการใช้งาน";
    }

    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }

    if (role === "อาจารย์") {
        return "200 : เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    }

    if (role === "นักศึกษา") {
        return "200 : เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
    }

    return "ไม่พบสิทธิ์การใช้งาน";
}

console.log(login("admin", "ce385pass", "อาจารย์", true, 35));
console.log(login("admin", "ce385pass", "นักศึกษา", true, 20));
console.log(login("admin", "wrongpass", "นักศึกษา", true, 20));
console.log(login("user", "ce385pass", "นักศึกษา", true, 20));
console.log(login("admin", "ce385pass", "นักศึกษา", false, 20));
console.log(login("admin", "ce385pass", "นักศึกษา", true, 17));

/*
คำถามท้ายข้อ

1. ทำไมต้องตรวจ username/password ก่อนตรวจ role

เพราะผู้ใช้ต้องยืนยันตัวตนก่อน
ถ้ายังไม่ผ่านการยืนยันตัวตน ระบบจะไม่ควรเปิดเผยข้อมูลเกี่ยวกับ role
หรือรายละเอียดภายในอื่น ๆ ของระบบ

2. ถ้าย้ายการตรวจ "อายุไม่ถึงเกณฑ์" ขึ้นไปเป็นข้อแรก จะเกิดปัญหาอะไร

ผู้ที่ยังไม่ได้พิสูจน์ตัวตนอาจได้รับข้อมูลจากระบบ
เช่น รู้ได้ว่าบัญชีนี้มีอายุต่ำกว่า 18 ปีหรือไม่
ซึ่งเป็นการเปิดเผยข้อมูลโดยไม่จำเป็นและอาจกระทบด้านความปลอดภัย
*/