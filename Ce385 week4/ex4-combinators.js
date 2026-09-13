const wait = (ms, value, willFail = false) =>
    new Promise((resolve, reject) => {
        setTimeout(() => willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value), ms);
    });


const checkstudentinfo = async () => {
    try {
        const result = await Promise.all([
            wait(300, "โปรไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ", true)
        ]);

        console.log("หน้าแรก:", result);
    } catch (error) {
        console.log("หน้าแรกเปิดไม่ได้:", error.message);
    }
};


const checkNotifications = async () => {
    const result = await Promise.allSettled([
        wait(300, "อีเมล"),
        wait(500, "SMS", true),
        wait(400, "แอป")
    ]);

    console.log("รายงานผลทุกช่องทาง:");

    result.forEach((item) => {
        if (item.status === "fulfilled") {
            console.log("สำเร็จ:", item.value);
        } else {
            console.log("ล้มเหลว:", item.reason.message);
        }
    });
};


const  = async () => {
    try {
        const result = await Promise.any([
            wait(300, "mirror-A", true),
            wait(600, "mirror-B")
        ]);

        console.log("ได้ข้อมูลจาก:", result);
    } catch (error) {
        console.log("ไม่มี mirror ไหนสำเร็จ");
    }
};


const timeoutPromise = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("หมดเวลา"));
        }, ms);
    });
};


const checkstudentsdatabase = async () => {
    try {
        const result = await Promise.race([
            wait(1200, "ฐานข้อมูล"),
            timeoutPromise(800)
        ]);

        console.log("ข้อมูลจาก:", result);
    } catch (error) {
        console.log("เกิน 800ms:", error.message);
        console.log("ใช้แคชแทน");
    }
};


const main = async () => {
    console.log("=== สถานการณ์ที่ 1 ===");
    await checkstudentinfo();

    console.log("\n=== สถานการณ์ที่ 2 ===");
    await checkNotifications();

    console.log("\n=== สถานการณ์ที่ 3 ===");
    await checkStudyServer();

    console.log("\n=== สถานการณ์ที่ 4 ===");
    await checkstudentsdatabase();

    
};

main().catch((error) => {
    console.log("Main Error:", error.message);
});