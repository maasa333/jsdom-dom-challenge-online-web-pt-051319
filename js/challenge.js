document.addEventListener('DOMContentLoaded', (e) => {

    // counter
    let counterEl = document.querySelector('#counter');
    let seconds = 0;
    let counter = setInterval(increaseCounter, 1000);
    function increaseCounter() {
        seconds += 1;
        counterEl.textContent = seconds;
    }

    // minus seconds
    let minusButton = document.querySelector('#minus').addEventListener('click', (e) => {
        counterEl.textContent = seconds -= 1;
    })

    // plus seconds
    let plusButton = document.querySelector('#plus').addEventListener('click', (e) => {
        counterEl.textContent = seconds += 1;
    })    

    // like seconds
    let likedSeconds = []

    let heartButton = document.querySelector('#heart').addEventListener('click', (e) => {     
        let likeList = document.createElement('li');
        let currentCount = counterEl.textContent;
        let number = likedSeconds.find((currentNumber) => {
            return currentNumber === currentCount;
        })
        if (number === undefined) {
            likes = 1;
            likedSeconds.push(currentCount);
            likeList.id = `id${currentCount}`;
            document.querySelector('.likes').appendChild(likeList);
            likeList.textContent = `Number ${currentCount} got ${likes} like!`;
        } else {
            likes += 1;
            likedNumber = document.querySelector(`li#id${currentCount}`);
            likes++;
            likedNumber.textContent = `Number ${currentCount} got ${likes} likes!`;
        }
    })

    // pause seconds
    let pauseButton = document.querySelector('#pause')
    
    pauseButton.addEventListener('click', (e) => {
        currentCount = counterEl.textContent;

        if (pauseButton.innerText === "pause") {
            clearInterval(counter);
            document.getElementById('minus').disabled = true;
            document.getElementById('plus').disabled = true;
            document.getElementById('heart').disabled = true;
            pauseButton.textContent = "resume";
        } else {
            document.getElementById('minus').disabled = false;
            document.getElementById('plus').disabled = false;
            document.getElementById('heart').disabled = false;
            pauseButton.textContent = "pause";
            counter = setInterval(increaseCounter, 1000);
        }
    })

    // comments
    let comments = document.querySelector('.comments');
    let form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let commentBox = document.querySelector('#comment-input');
        let comment = commentBox.value;
        let commentEl = document.createElement('p');

        commentEl.innerText = comment;
        comments.appendChild(commentEl);
        commentBox.value = ""
    })
})