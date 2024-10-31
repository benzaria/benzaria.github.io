
async function decode(key, iv,  file) {
    // testing function
    console.log('decoding...')
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const enc_str = await response.text();
        let dec_str = enc_str;
        if (key != '') {
            dec_str = atob(enc_str);
        }
        json_data = JSON.parse(dec_str);
    } catch (error) {
        console.error('Error decoding or parsing JSON:', error);
    }
}

async function encode(key, iv, file) {
    // function in progress
    console.log('encoding...')
}

module.exports = { decode, encode }