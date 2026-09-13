const students = [
    {
        id: "67110001",
        name: "ณภัทร",
        major: "CE",
        score: 75
    },
    {
        id: "67110002",
        name: "คีน",
        major: "IT",
        score: 82
    },
    {
        id: "67110003",
        name: "ฟิล์ม",
        major: "CE",
        score: 90
    },
    {
        id: "67110004",
        name: "ฟลุ๊ค",
        major: "IT",
        score: 45
    }
];

const fetchStudentById = (id, callback) => {
    if (typeof id !== "string" || id.trim() === "") {
        callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
        return;
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
        callback(new Error(`ไม่พบรหัสนักศึกษา '${id}'`));
        return;
    }

    setTimeout(() => {
        callback(null, { ...student });
    }, 300);
};
fetchStudentById("67110001", (error, student) => {
    if (error) {
        console.log("Error:", error.message);
        return;
    }

    console.log("กรณีที่ 1: พบข้อมูล");
    console.log(student);
});

fetchStudentById("99999999", (error, student) => {
    if (error) {
        console.log("กรณีที่ 2: Error:", error.message);
        return;
    }

    console.log(student);
});

fetchStudentById(42, (error, student) => {
    if (error) {
        console.log("กรณีที่ 3: Error:", error.message);
        return;
    }

    console.log(student);
});

/*
1. ถ้าลืมตรวจ error แล้วอ่าน student.name ทันที
   ถ้าเกิด error จะไม่มีข้อมูล student ทำให้อ่าน .name ไม่ได้
   และจะเกิด Error ใน callback
   คนที่เรียกใช้ callback ต้องเป็นคนตรวจสอบ error เอง

2. เพราะ return ใช้เพื่อหยุดฟังค์ชั่นทันที หลังจากเจอ error
*/