const axios = require('axios');
const fs = require('fs');

const TOKEN = '8PKXOjypD/oRS+/f10ACau7b73cMdsiTnwLvJb9wcBhGVxCbaET2QQ76wPHwOe6srl6KA4S8Xc1jjOnuRQEzjXxmYpB3rx2xGNTNaLcBcyW3Wlr/x9sRQjJS7HkFT/7YbtFGMuAHENHPHYTWDitksQdB04t89/1O/w1cDnyilFU=';
const headers = { Authorization: 'Bearer ' + TOKEN };

async function run() {
    const menu = await axios.post(
        'https://api.line.me/v2/bot/richmenu',
        {
            size: { width: 1200, height: 810 },
            selected: true,
            name: 'Daomrityu Rich Menu',
            chatBarText: '🌑 เมนูดาวมฤตยู',
            areas: [
                { bounds: { x: 0, y: 90, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีเมษ' } },
                { bounds: { x: 300, y: 90, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีพฤษภ' } },
                { bounds: { x: 600, y: 90, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีเมถุน' } },
                { bounds: { x: 900, y: 90, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีกรกฎ' } },
                { bounds: { x: 0, y: 330, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีสิงห์' } },
                { bounds: { x: 300, y: 330, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีกันย์' } },
                { bounds: { x: 600, y: 330, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีตุลย์' } },
                { bounds: { x: 900, y: 330, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีพิจิก' } },
                { bounds: { x: 0, y: 570, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีธนู' } },
                { bounds: { x: 300, y: 570, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีมังกร' } },
                { bounds: { x: 600, y: 570, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีกุมภ์' } },
                { bounds: { x: 900, y: 570, width: 300, height: 240 }, action: { type: 'message', text: 'ราศีมีน' } },
            ]
        },
        { headers: { ...headers, 'Content-Type': 'application/json' } }
    );

    const id = menu.data.richMenuId;
    console.log('✅ สร้าง Rich Menu ID:', id);

    await axios.post(
        'https://api-data.line.me/v2/bot/richmenu/' + id + '/content',
        fs.readFileSync('./RichMenu.png'),
        { headers: { ...headers, 'Content-Type': 'image/png' } }
    );
    console.log('✅ อัปโหลดรูปสำเร็จ');

    await axios.post(
        'https://api.line.me/v2/bot/user/all/richmenu/' + id,
        {},
        { headers }
    );
    console.log('🎉 Rich Menu พร้อมแล้ว!');
}

run().catch(e => console.error(e.response?.data || e.message));