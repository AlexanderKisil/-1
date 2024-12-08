// Массив предсказаний
const predictions = [
    "Скоро вас ждёт важное событие.",
    "Слушайте своё сердце — оно подскажет верный путь.",
    "Новые возможности откроются перед вами.",
    "Остерегайтесь необдуманных решений.",
    "Сегодня удача будет на вашей стороне.",
    "Скоро вы встретите важного человека в своей жизни."
];

// Генерация карт
const cardContainer = document.querySelector('.card-container');
for (let i = 1; i <= 5; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `Карта ${i}`;
    card.addEventListener('click', revealPrediction);
    cardContainer.appendChild(card);
}

// Функция для показа предсказания
function revealPrediction() {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    document.getElementById('prediction-text').textContent = randomPrediction;
    document.querySelector('.card-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

// Кнопка "Попробовать снова"
document.getElementById('try-again').addEventListener('click', () => {
    document.querySelector('.card-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
});
