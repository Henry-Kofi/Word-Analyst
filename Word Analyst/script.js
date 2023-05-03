//calling html elements
const textAreaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');
const dataEl = document.querySelector('data');

const inputHandler = ()=>{
    // validation
    if (textAreaEl.value.includes('<script>')){
        alert(`You can't use script in your text`);
        textAreaEl.value = textAreaEl.value.replace('<script>','');
    }

    //determine new numbers
    
    //words
    let numberOfWords = textAreaEl.value.split(' ').length;
    if(textAreaEl.value.length === 0){
        numberOfWords = 0;
    }

    //characters
    const numberOfCharacters =  textAreaEl.value.length;

    //twitter
    const twitterCharsLeft = 280 - numberOfCharacters;

    //facebook
    const facebookCharsLeft = 2200 - numberOfCharacters;


    //add visuall indicator 
    if(twitterCharsLeft < 0){
        twitterNumberEl.classList.add('stat__number--limit');
    }else{
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if(facebookCharsLeft < 0){
        facebookNumberEl.classList.add('stat__number--limit');
    }else{
        facebookNumberEl.classList.remove('stat__number--list')
    }

    // if(numberOfWords = 0){
    //     wordsNumberEl.textContent = 0;
    // }

    //set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharsLeft;
    facebookNumberEl.textContent = facebookCharsLeft;
    wordsNumberEl.textContent = numberOfWords;

}



//adding listeners when text is input or deleted 
textAreaEl.addEventListener('input',inputHandler);