// searchinput
// searchbtn
const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4f13bfa7a3msh440151c4e46cc6dp1b4d99jsna9c92b01327c',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response )=> {
            console.log(response)
            heading.innerHTML = response.word ;
            definition.innerHTML = response.definition;

        })
        .catch(err =>console.error(err))


}

searchbtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    dictionary(searchinput.value);
})