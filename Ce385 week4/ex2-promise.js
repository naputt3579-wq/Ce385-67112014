const students = [
    {
        id: "6501",
        name: "คีน",
        major: "CE",
        score: 75
    },
    {
        id: "6502",
        name: "ฟิล์ม",
        major: "IT",
        score: 82
    },
    {
        id: "6503",
        name: "ฟลุ๊ค",
        major: "CE",
        score: 90
    },
    {
        id: "6504",
        name: "แจ๊บ",
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

const fetchStudentByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        fetchStudentById(id, (error, student) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(student);
        });
    });
};

const toGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "C+";
    if (score >= 60) return "C";
    if (score >= 55) return "D+";
    if (score >= 50) return "D";
    return "F";
};

fetchStudentByIdAsync("6501")
    .then((student) => {
    return {
            name: student.name,
            grade: toGrade(student.score)
        };
    })
    .then((student) => {
        return `นักศึกษา ${student.name} ได้เกรด ${student.grade}`;
    })
    .then((report) => {
        console.log("กรณีที่ 1:", report);
    })
    .catch((error) => {
        console.log("กรณีที่ 1: Error:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 1: จบการทำงาน");
    });

fetchStudentByIdAsync("9999")
    .then((student) => {
        return {
            name: student.name,
            grade: toGrade(student.score)
        };
    })
    .then((student) => {
        return `นักศึกษา ${student.name} ได้เกรด ${student.grade}`;
    })
    .then((report) => {
        console.log("กรณีที่ 2:", report);
    })
    .catch((error) => {
        console.log("กรณีที่ 2: Error:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 2: จบการทำงาน");
    });

fetchStudentByIdAsync(42)
    .then((student) => {
        return {
            name: student.name,
            grade: toGrade(student.score)
        };
    })
    .then((student) => {
        return `นักศึกษา ${student.name} ได้เกรด ${student.grade}`;
    })
    .then((report) => {
        console.log("กรณีที่ 3:", report);
    })
    .catch((error) => {
        console.log("กรณีที่ 3: Error:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 3: จบการทำงาน");
    });

const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            });
        });
    };
};

const fetchStudentPromisified = promisify(fetchStudentById);

fetchStudentPromisified("6502")
    .then((student) => {
        console.log("Promisify:", student);
    })
    .catch((error) => {
        console.log("Promisify Error:", error.message);
    });