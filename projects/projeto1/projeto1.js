const btn = document.getElementById('ctaBtn');
const msg = document.getElementById('msg');

btn.addEventListener('click', () => {
    msg.textContent = "🎉 Você clicou e fez acontecer!";
});
