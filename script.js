// 🔑 เก็บโค้ดและชื่อรูปของคุณ
// รูปแบบ: "CODE_NAME": "filename.png"
const codeDatabase = {
    "dog": "code_1.png",
    "anun": "code_2.png",
    "charno": "code_3.png",
    "auto": "code_4.png",
    "mouse": "code_5.png",
    "ped": "code_6.png",
    "bossy": "code_7.png",
    "pipo": "code_8.png",
    "rice": "code_9.png",
    "bastion": "code_10.png",
    "pedo": "code_11.png",
    "shine": "code_12.png",
    "star": "code_13.png",
    "krueye": "code_14.png",
    "sanharn": "code_15.png",
    "bonus": "code_16.png",
    "gooner": "code_21.png",
    "krutom": "code_18.png",
    "sigma": "code_19.png",
    "doctor": "code_20.png"
    "cowboy": "code_23.png"
    "sawangjit": "code_22.png"
};

function checkCode() {
    const input = document.getElementById('codeInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const resultImage = document.getElementById('resultImage');

    // ซ่อนข้อความเก่า
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    // ตรวจสอบว่าโค้ดว่างไหม
    if (!input) {
        errorDiv.classList.remove('hidden');
        return;
    }

    // ตรวจสอบโค้ด - เปลี่ยนเป็นหา object key ตรงกับการ input
    if (codeDatabase.hasOwnProperty(input)) {
        // โค้ดถูก! แสดงรูป
        const imagePath = codeDatabase[input];
        resultImage.src = imagePath;
        resultImage.alt = `Your special image for code: ${input}`;
        resultDiv.classList.remove('hidden');
        
        // Clear input
        document.getElementById('codeInput').value = '';
    } else {
        // โค้ดผิด
        errorDiv.classList.remove('hidden');
    }
}

// ฟังก์ชันบันทึกรูป (ดาวน์โหลด)
function downloadImage() {
    const image = document.getElementById('resultImage');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ให้กดเข้าได้ด้วยปุ่ม Enter
const codeInput = document.getElementById('codeInput');
if (codeInput) {
    codeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkCode();
        }
    });
}
