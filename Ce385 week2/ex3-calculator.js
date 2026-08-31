const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

const workshopFullScore = 60;
const workshopWeight = 20;

const fullScore = 100;
const targetScore = 80;

const workshopScore = (workshopRaw / workshopFullScore) * workshopWeight;


const totalScore = workshopScore + attendance + project + midterm + final;


const percentage = (totalScore / fullScore) * 100;


const remainingScore = targetScore - totalScore;


console.log(`===== สรุปคะแนน CE385 =====
Workshop : ${workshopScore.toFixed(2)} คะแนน
Attendance : ${attendance.toFixed(2)} คะแนน
Project : ${project.toFixed(2)} คะแนน
Midterm : ${midterm.toFixed(2)} คะแนน
Final : ${final.toFixed(2)} คะแนน
----------------------------
คะแนนรวม : ${totalScore.toFixed(2)} คะแนน
คิดเป็น : ${percentage.toFixed(2)}%
ขาดอีก : ${remainingScore.toFixed(2)} คะแนน
============================`);