// Encryption process
function encryptMsg() {
    const message = document.getElementById('message').value;
    const key = parseInt(document.getElementById('key').value);
    if (!key || key < 1 || key > 25) {
        alert("Please enter a key between 1 and 25.");
        return;
    }

    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            const code = message.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            char = String.fromCharCode(((code - base + key) % 26) + base);
        }
        result += char;
    }

    document.getElementById('result').value = result;
}

// Decryption process
function decryptMessage() {
    const message = document.getElementById('result').value;
    const key = parseInt(document.getElementById('key').value);
    if (!key || key < 1 || key > 25) {
        alert("Please enter a key between 1 and 25.");
        return;
    }

    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            const code = message.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            char = String.fromCharCode(((code - base - key + 26) % 26) + base);
        }
        result += char;
    }

    document.getElementById('result').value = result;
}

document.getElementById('encryptBtn').addEventListener('click', encryptMessage);
document.getElementById('decryptBtn').addEventListener('click', decryptMessage);