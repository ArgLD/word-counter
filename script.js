
const button = document.getElementById("countButton");

const frequencia = () => {
    if (textInput.value.length < 1) {
        alert("Insira seu texto!");
    }
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z']+/g, "");
    // document.getElementById("lettersDiv").textContent = "";

    const letterCounts = {};  


    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
    }
    
    let wordsText = document.getElementById("textInput").value;
    wordsText = wordsText.toLowerCase();
    wordsText = wordsText.replace(/[^a-z'\s]+/g, ""); // \s espaço, td que não for de a-z e espaço e substitui por string vazia.
    if (textInput.value.length > 1) wordsText = wordsText.split(/\s/);
    
    // document.getElementById("wordsDiv").textContent = "";
    const wordsCounts = {};

    for (let i = 0; i < wordsText.length; i++) {
        let currentWords = wordsText[i];

        if (wordsCounts[currentWords] === undefined) {
            wordsCounts[currentWords] = 1;
        } else {            
            wordsCounts[currentWords]++;
        }
    }

    for (let word in wordsCounts) {
        const spanWord = document.createElement("span");
        const textContentWord = `"${word}": ${wordsCounts[word]}, `;
        spanWord.innerText = textContentWord;
        const words = document.getElementById("wordsDiv");
        words.appendChild(spanWord);
    }

}

button.addEventListener("click", frequencia)