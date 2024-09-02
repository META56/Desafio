function checkStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value, 10) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value, 10) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value, 10) || 0;
    
    const total = sticker1 + sticker2 + sticker3;
    const message = document.getElementById('message');
    
    if (total <= 10) {
        message.textContent = `Llevas ${total} stickers`;
        message.style.color = 'red'; // Asegúrate de que el color esté configurado aquí
    } else {
        message.textContent = 'Llevas demasiados stickers';
        message.style.color = 'red'; // Asegúrate de que el color esté configurado aquí
    }
}