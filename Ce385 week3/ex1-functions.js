const isValidScore = (score) => {
    return score >= 0 && score <= 100;
};


const toGrade = (score) => {
    if (!isValidScore(score)) {
        return "Invalid";
    }

    const grades = [
        [80, "A"],
        [75, "B+"],
        [70, "B"],
        [65, "C+"],
        [60, "C"],
        [55, "D+"],
        [50, "D"],
        [0, "F"]
    ];

    const result = grades.find(([minScore]) => score >= minScore);

    return result[1];
};


const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
    return (raw / full) * weight;
};


const calculateTotal = (workshop, attendance, project, midterm, final) => {
    return workshop + attendance + project + midterm + final;
};


const students = [
    {
        name: "นักศึกษา A",
        rawWorkshop: 48,
        attendance: 9,
        project: 17,
        midterm: 15,
        final: 24
    },
    {
        name: "นักศึกษา B",
        rawWorkshop: 42,
        attendance: 8,
        project: 15,
        midterm: 12,
        final: 20
    },
    {
        name: "นักศึกษา C",
        rawWorkshop: 30,
        attendance: 7,
        project: 12,
        midterm: 10,
        final: 15
    }
];

const results = students.map((student) => {
    const workshop = calculateWorkshopScore(student.rawWorkshop);

    const total = calculateTotal(
        workshop,
        student.attendance,
        student.project,
        student.midterm,
        student.final
    );

    return {
        name: student.name,
        workshop: workshop.toFixed(2),
        total: total.toFixed(2),
        grade: toGrade(total)
    };
});

console.table(results);


const testDefault = calculateWorkshopScore(48);
const testCustom = calculateWorkshopScore(48, 60, 20);

console.log("Default:", testDefault);
console.log("Custom:", testCustom);