const students = [
    {
        id: "67112001",
        name: "สมชาย",
        major: "CE",
        score: 75
    },
    {
        id: "67112002",
        name: "สมหญิง",
        major: "IT",
        score: 82
    },
    {
        id: "67112003",
        name: "วิชัย",
        major: "CE",
        score: 45
    },
    {
        id: "67112004",
        name: "สุดา",
        major: "IT",
        score: 68
    },
    {
        id: "67112005",
        name: "กิตติ",
        major: "CE",
        score: 55
    },
    {
        id: "67112006",
        name: "นิดา",
        major: "IT",
        score: 90
    }
];


const getNames = (students) => {
    return students.map((student) => student.name);
};

const getPassedStudents = (students) => {
    return students.filter((student) => student.score >= 50);
};


const getTotalScore = (students) => {
    return students.reduce((total, student) => {
        return total + student.score;
    }, 0);
};

const getAverageScore = (students) => {
    if (students.length === 0) {
        return 0;
    }

    const total = getTotalScore(students);

    return Number((total / students.length).toFixed(2));
};


const countByGrade = (students) => {
    return students.reduce((result, student) => {
        let grade;

        if (student.score >= 80) {
            grade = "A";
        } else if (student.score >= 70) {
            grade = "B";
        } else if (student.score >= 60) {
            grade = "C";
        } else {
            grade = "F";
        }

        result[grade] = (result[grade] ?? 0) + 1;

        return result;
    }, {});
};


const getTopStudent = (students) => {
    return students.reduce((topStudent, student) => {
        if (topStudent === null || student.score > topStudent.score) {
            return student;
        }

        return topStudent;
    }, null);
};



console.log("รายชื่อนักศึกษา:");
console.log(getNames(students));

console.log("นักศึกษาที่สอบผ่าน:");
console.table(getPassedStudents(students));

console.log("คะแนนรวม:");
console.log(getTotalScore(students));

console.log("คะแนนเฉลี่ย:");
console.log(getAverageScore(students));

console.log("จำนวนคนตามเกรด:");
console.log(countByGrade(students));

console.log("นักศึกษาที่คะแนนสูงสุด:");
console.log(getTopStudent(students));


const cePassedAverage = students
    .filter((student) => student.major === "CE")
    .filter((student) => student.score >= 50)
    .map((student) => student.score)
    .reduce((total, score, index, scores) => {
        return total + score / scores.length;
    }, 0);

console.log("คะแนนเฉลี่ยของนักศึกษา CE ที่สอบผ่าน:");
console.log(Number(cePassedAverage.toFixed(2)));


const emptyStudents = [];

console.log("ทดสอบ Array ว่าง:");

console.log("Names:", getNames(emptyStudents));

console.log("Passed:", getPassedStudents(emptyStudents));

console.log("Total:", getTotalScore(emptyStudents));

console.log("Average:", getAverageScore(emptyStudents));

console.log("Grade Count:", countByGrade(emptyStudents));

console.log("Top Student:", getTopStudent(emptyStudents));