const buttons = document.querySelectorAll('.quiz-btn');
const msg = document.getElementById('quiz-msg');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent === "Brasília"){
            msg.textContent = "✅ Certo!";
            msg.style.color = "#a1c4fd";
        } else {
            msg.textContent = "❌ Errado!";
            msg.style.color = "#ff6b6b";
        }
    });
});
