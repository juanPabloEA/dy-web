export function sendMessage(phone, message) {
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`)
    }