const students = [
    {
        id: "67112001",
        name: "สมชาย",
        major: "CE",
        score: 75,
        contact: {
            email: "somchai@example.com",
            phone: "0811111111"
        }
    },
    {
        id: "67112002",
        name: "สมหญิง",
        major: "IT",
        score: 82,
        contact: {
            email: "somying@example.com",
            phone: "0822222222"
        }
    },
    {
        id: "67112003",
        name: "วิชัย",
        major: "CE",
        score: 45,
        contact: {
            email: "wichai@example.com",
            phone: "0833333333"
        }
    },
    {
        id: "67112004",
        name: "สุดา",
        major: "IT",
        score: 68,
        contact: {
            email: "suda@example.com",
            phone: "0844444444"
        }
    },
    {
        id: "67112005",
        name: "กิตติ",
        major: "CE",
        score: 55,
        contact: {
            email: "kitti@example.com",
            phone: "0855555555"
        }
    },
    {
        id: "67112006",
        name: "นิดา",
        major: "IT",
        score: 90,
        contact: {
            email: "nida@example.com",
            phone: "0866666666"
        }
    }
];


const findById = (students, id) => {
    return students.find((student) => student.id === id);
};

const findByMajor = (students, major) => {
    return students.filter((student) => student.major === major);
};

const hasFailingStudent = (students) => {
    return students.some((student) => student.score < 50);
};


const getEmail = (students, id) => {
    const student = findById(students, id);

    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};


console.log("ค้นหา ID 67112003:");
console.log(findById(students, "67112003"));

console.log("นักศึกษา CE:");
console.table(findByMajor(students, "CE"));

console.log("มีนักศึกษาสอบตกหรือไม่:");
console.log(hasFailingStudent(students));

console.log("Email ของ ID 67112002:");
console.log(getEmail(students, "67112002"));


console.log("ค้นหา ID 9999:");
console.log(findById(students, "9999"));

console.log("Email ของ ID 9999:");
console.log(getEmail(students, "9999"));


const studentsWithNoContact = [
    ...students,
    {
        id: "67112007",
        name: "มานะ",
        major: "CE",
        score: 70
    }
];

console.log("Email ของนักศึกษาที่ไม่มี contact:");
console.log(getEmail(studentsWithNoContact, "67112007"));