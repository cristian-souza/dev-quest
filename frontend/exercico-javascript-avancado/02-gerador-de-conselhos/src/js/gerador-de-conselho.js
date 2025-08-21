const adviceId = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-description')
const adviceButton = document.querySelector('.advice-update')

window.onload = () => {
    getAdvice();
}

adviceButton.addEventListener("click", getAdvice);

async function getAdvice() {
    
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const advice = data.slip
     adviceText.innerHTML = `"${advice.advice}"`
     adviceId.innerHTML = `Advice #${advice.id}`
}

