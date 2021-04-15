const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');

    const percent = (activeCircles.length - 1) / (circles.length - 1) * 100;

    progress.style.width = `${percent}%`;

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === 4;
}

next.addEventListener('click', () => {
    const circlesLength = circles.length;
    currentActive = currentActive > circlesLength ? circlesLength : currentActive + 1;

    update();
})

prev.addEventListener('click', () => {
    currentActive = currentActive < 1 ? 1 : currentActive - 1;

    update()
})