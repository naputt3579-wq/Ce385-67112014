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

const reportSequential = async () => {
    const start = Date.now();

    console.log("=== Sequential ===");

    for (const id of ["6501", "6502", "6503"]) {
        const student = await fetchStudentByIdAsync(id);

        console.log(
            `${student.name} ได้เกรด ${toGrade(student.score)}`
        );
    }

    const elapsed = Date.now() - start;

    console.log(`ใช้เวลา ${elapsed} ms`);
};

const reportParallel = async () => {
    const start = Date.now();

    console.log("=== Parallel ===");

    const ids = ["6501", "6502", "6503"];

    const results = await Promise.all(
        ids.map((id) => fetchStudentByIdAsync(id))
    );

    results.map((student) => {
        console.log(
            `${student.name} ได้เกรด ${toGrade(student.score)}`
        );
    });

    const elapsed = Date.now() - start;

    console.log(`ใช้เวลา ${elapsed} ms`);
};

const safeReport = async (id) => {
    try {
        const student = await fetchStudentByIdAsync(id);

        console.log(
            `พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`
        );
    } catch (error) {
        console.log("ตรวจไม่พบ:", error.message);
    } finally {
        console.log(`-- จบการตรวจสอบ <${id}> --`);
    }
};

const main = async () => {
    await reportSequential();

    await reportParallel();

    await safeReport("6501");

    await safeReport("9999");

    /*
    คำตอบท้ายไฟล์ ข้อที่ 3

    1.เหมือนประมาณว่า callback ทำงานทีหลัง
    ทำให้ try catch อาจทำเสร็จก่อน จะไม่สามารถจับ error ที่เกิดขึ้นใน callback ได้
    แต่ถ้าเป็น await จะรอ promise ทำงานให้เสร็จก่อน ถ้าpromise เกิด reject 
    จะส่ง error ไปที่ catch ของ try catch ได้เลยครับ
    สรุปคือ await จะทำให้ try catch จับ error จาก promise ได้ง่ายกว่า callback

    2.ถ้าลืม await หน้า Promise.all จะยังไม่ได้ผลลัพธ์ที่ได้จาก Promise
     แต่จะได้ Promise กลับมาแทน
    ถ้าเกิดเอา Promise ไปใช้ต่อเหมือนเป็นข้อมูลนักศึกษา
    จะไม่สามารถเข้าถึงข้อมูลที่ต้องการได้ เพราะข้อมูลยังทำงานไม่เสร็จ
    ต้องใช้ await เพื่อรอให้ Promise.all ทำงานเสร็จก่อน
    แล้วถึงจะนำผลลัพธ์ไปใช้ต่อได้
  */
};

main().catch((error) => {
    console.log("Main Error:", error.message);
});