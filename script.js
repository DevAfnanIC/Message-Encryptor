function caesarCipher(str, key) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            let offset = char === char.toLowerCase() ? 97 : 65;
            result += String.fromCharCode(((code - offset + key) % 26 + 26) % 26 + offset);
        } else {
            result += char;
        }
    }
    return result;
}

function encryptMessage() {
    const message = document.getElementById("message").value;
    const key = parseInt(document.getElementById("key").value) || 0;
    if (key >= 1 && key <= 25) {
        const encryptedMessage = caesarCipher(message, key);
        document.getElementById("result").textContent = encryptedMessage;
    } else {
        alert("Please enter a valid key (1-25).");
    }
}

function decryptMessage() {
    const message = document.getElementById("message").value;
    const key = parseInt(document.getElementById("key").value) || 0;
    if (key >= 1 && key <= 25) {
        const decryptedMessage = caesarCipher(message, -key);
        document.getElementById("result").textContent = decryptedMessage;
    } else {
        alert("Please enter a valid key (1-25).");
    }
            }
