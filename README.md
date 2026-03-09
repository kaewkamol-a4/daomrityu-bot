# 🌑 ดาวมฤตยู — Line Bot Setup Guide

## ขั้นตอนการติดตั้ง

### Step 1: ติดตั้ง Dependencies
```bash
npm install
```

### Step 2: ใส่ค่า Config ใน index.js
เปิดไฟล์ `index.js` แล้วแก้ไขส่วน CONFIG:
```javascript
const CONFIG = {
  CHANNEL_ACCESS_TOKEN: 'ใส่ token จาก Line Developers',
  CHANNEL_SECRET:       'ใส่ secret จาก Line Developers',
  SHOP_LINK:            'ลิงก์ Line MyShop ของคุณ',
  WALLPAPER_DRIVE_LINK: 'ลิงก์ Google Drive',
};
```

### Step 3: หา Channel Access Token
1. ไปที่ https://developers.line.biz/
2. เลือก Provider → Channel (ดาวมฤตยู)
3. แท็บ "Messaging API"
4. เลื่อนลงหา "Channel access token" → กด Issue
5. Copy มาใส่ใน CONFIG

### Step 4: Deploy ขึ้น Server

**ฟรี — ใช้ Render.com:**
1. สร้างบัญชีที่ https://render.com
2. กด "New Web Service"
3. เชื่อมกับ GitHub (upload โค้ดขึ้น GitHub ก่อน)
4. Start Command: `node index.js`
5. Copy URL ที่ได้ เช่น `https://daomrityu-bot.onrender.com`

### Step 5: ตั้ง Webhook ใน Line Developers
1. ไปที่ Line Developers Console
2. Messaging API → Webhook settings
3. Webhook URL: `https://daomrityu-bot.onrender.com/webhook`
4. เปิด "Use webhook" → ON
5. กด Verify ✅

---

## สิ่งที่ Bot ทำได้ตอนนี้

| ลูกค้าพิมพ์ | Bot ตอบ |
|------------|---------|
| ราศีเมษ (หรือราศีอื่น) | คำทำนายประจำสัปดาห์ |
| ดวง / ดูดวง | เมนูเลือกราศี |
| วอลเปเปอร์ | ลิงก์ MyShop + ราคา |
| สั่ง / ซื้อ | วิธีโอนเงินและราคา |
| ฟรี | วิธีรับวอลเปเปอร์ฟรี |
| ส่งรูป (สลิป) | ยืนยันรับสลิปแล้ว |
| แอดเพื่อนใหม่ | Welcome Message |

---

## อัปเดตคำทำนายทุกสัปดาห์

แก้ไขส่วน `HOROSCOPE` ใน index.js แล้ว deploy ใหม่
ใช้เวลาไม่เกิน 15 นาที/สัปดาห์

---

## ต้องการเพิ่มในอนาคต
- [ ] ตรวจสลิปอัตโนมัติ (SCB/KBank API)
- [ ] ส่งไฟล์วอลเปเปอร์อัตโนมัติหลังยืนยันการชำระ
- [ ] Broadcast ดวงประจำสัปดาห์ทุกวันจันทร์
- [ ] เก็บข้อมูลราศีของลูกค้าแต่ละคน
