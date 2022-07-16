export function buildMsgByQuotation(quotation) {
    let msg = [
        `🎂 Tamaño: ${quotation.size.title} `,
        `🎂 Bizcocho: ${quotation.bizcuit.title}`,
        `🎂 Cobertura: ${quotation.cover.title}`,
        `🎂 Rellenos: ${getFilledToString(quotation.filled)}`,
        `👤 Cliente: \r\n\r\n ${getUserFormater(quotation.user)}`
    ]
    return window.encodeURIComponent(msg.join(" \r\n\r\n")); 
}

function getFilledToString(filled) {
    return filled.map(data => data.title).join(', ')
}

function getUserFormater(user) {
    let userformat = [
        `Nombre: ${user.name}`,
        `Número: ${user.phone}`,
        `Comentarios: ${user.comments}`,
    ]

    if (user.delivery) {
        userformat.splice(2, 0, `Delivery: ${user.address}`)
    }

    return userformat.map(user => `\r ` + user).join(`\r\n\r\n`);
}