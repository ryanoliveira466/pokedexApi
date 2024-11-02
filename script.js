const imgPokemon = document.querySelector("#imgPokemon")
const nomePokemon = document.querySelector("#nomePokemon")
const numeroPokemon = document.querySelector("#numeroPokemon")
const inputText = document.querySelector("#inputText")
const form = document.querySelector(".form-busca")
const buttonA = document.querySelector("#btnAnterior")
const buttonP = document.querySelector("#btnProximo")
const typePoke = document.querySelector("#typePokemon")



document.getElementById("inputTextoPokemon").addEventListener("input", function () {
    showPokemon(document.getElementById("inputTextoPokemon").value.trim().toLowerCase()) // TRATATIVA DE ERRO COM A STRING

})


document.getElementById("legacyButton").addEventListener('click', function () {

    document.getElementById("legacyButton").style.animation =  `0.2s pulse`

    document.getElementById("legacyButton").addEventListener("animationend", function() {
        document.getElementById("legacyButton").style.animation = ''; // Reset animation
    }, { once: true });
     
    document.getElementById("audioLegacy").play()
    document.getElementById("soundWave").style.display = "flex"
    
    

    document.getElementById("audioLegacy").addEventListener('loadedmetadata', () => {
       document.getElementById("audioLegacy").duration // Logs the total duration in seconds
    });

     

    setTimeout(function(){
        document.getElementById("soundWave").style.display = "none"
    },  document.getElementById("audioLegacy").duration * 1000)


})







document.getElementById("latestButton").addEventListener('click', function () {

    document.getElementById("latestButton").style.animation = '0.2s pulse'

    document.getElementById("latestButton").addEventListener("animationend", function() {
        document.getElementById("latestButton").style.animation = ''; // Reset animation
    }, { once: true });

    document.getElementById("audioLatest").play()
    document.getElementById("soundWave").style.display = "flex"
 
     

    document.getElementById("audioLatest").addEventListener('loadedmetadata', () => {

        document.getElementById("audioLatest").duration // Logs the total duration in seconds
        
 
    });


 
    setTimeout(function(){
        document.getElementById("soundWave").style.display = "none"
    }, document.getElementById("audioLatest").duration * 1000)

    
    
})







const fetchPokemon = async (pokemon) => {



    try {

        const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await APIresponse.json();
        return data;

    } catch (error) {

    }



}

const showPokemon = async (pokemon) => {


    const datapokemon = await fetchPokemon(pokemon);

    try {

        // REMOVE A MENSAGEM INICIAL DO PIKACHU REMOVENDO AS IMAGENS

        document.getElementById('imgPokedex').removeChild(document.getElementById('pokemonHelloMessageOrError'))
        document.getElementById('imgPokedex').removeChild(document.getElementById('pokemonSprite'))

        // REMOVE A MENSAGEM INICIAL DO PIKACHU REMOVENDO AS IMAGENS




        // REMOVE E ADICIONA NOVOS SPRITES TODA VEZ QUE O USUÁRIO ATIVA O INPUT

        let newMessage = document.createElement("img")
        newMessage.id = `pokemonHelloMessageOrError`
        newMessage.style.width = "100px"
        newMessage.style.height = "100px"
        newMessage.style.display = 'none'
        document.getElementById('imgPokedex').appendChild(newMessage)

        let newSprite = document.createElement("img")
        newSprite.id = `pokemonSprite`
        newSprite.style.width = "226px"
        newSprite.style.height = "226px"
        document.getElementById('imgPokedex').appendChild(newSprite)

        document.getElementById('pokemonSprite').src = datapokemon.sprites.front_default

        // REMOVE E ADICIONA NOVOS SPRITES TODA VEZ QUE O USUÁRIO ATIVA O INPUT








        //TYPE




        if (datapokemon.types.length === 2) {
            for (var i = 0; i - datapokemon.types.length; i++) {
                document.getElementById(`type${i + 1}`).src = `img/type/${datapokemon.types[i].type.name}IC_SV.png`
                document.getElementById(`type${i + 1}`).style.height = "20px"
            }
        }

        else {
            document.getElementById(`type1`).src = `img/type/${datapokemon.types[0].type.name}IC_SV.png`
            document.getElementById(`type1`).style.height = "20px"
            document.getElementById(`type2`).src = `img/pixel-question-mark-icon-clipart-260nw-1898394949-Photoroom.png`
            document.getElementById(`type2`).style.height = "60px"
        }

        //TYPE






        //NAME/WEIGHT/HEIGHT







        //WEIGHT TREATMENT

        let pokemonWeight = datapokemon.weight
        let arrayPokemonWeight = []
        pokemonWeight = pokemonWeight.toString()


        if (pokemonWeight.length > 1) {

            for (var i = 0; i < pokemonWeight.length; i++) {
                arrayPokemonWeight.push(pokemonWeight[i])
            }

            arrayPokemonWeight.splice((pokemonWeight.length - 1), 0, ".")
            pokemonWeight = ""

            for (var i = 0; i < arrayPokemonWeight.length; i++) {

                pokemonWeight += arrayPokemonWeight[i]

            }


        }

        else if (pokemonWeight.length == 1) {


            for (var i = 0; i < pokemonWeight.length; i++) {
                arrayPokemonWeight.push(pokemonWeight[i])
            }

            arrayPokemonWeight.splice((pokemonWeight.length - 1), 0, ".")
            arrayPokemonWeight.splice((pokemonWeight.length - 1), 0, "0")
            pokemonWeight = ""

            for (var i = 0; i < arrayPokemonWeight.length; i++) {

                pokemonWeight += arrayPokemonWeight[i]

            }


        }

        pokemonWeight = parseFloat(pokemonWeight) * 2.205
        pokemonWeight = parseFloat(pokemonWeight).toFixed(2)


        //WEIGHT TREATMENT







        //HEIGHT TREATMENT

        let pokemonHeight = datapokemon.height
        let arrayPokemonHeight = []
        pokemonHeight = pokemonHeight.toString()


        if (pokemonHeight.length > 1) {

            for (var i = 0; i < pokemonHeight.length; i++) {
                arrayPokemonHeight.push(pokemonHeight[i])
            }

            arrayPokemonHeight.splice((pokemonHeight.length - 1), 0, ".")
            pokemonHeight = ""

            for (var i = 0; i < arrayPokemonHeight.length; i++) {

                pokemonHeight += arrayPokemonHeight[i]

            }


        }

        else if (pokemonHeight.length == 1) {


            for (var i = 0; i < pokemonHeight.length; i++) {
                arrayPokemonHeight.push(pokemonHeight[i])
            }

            arrayPokemonHeight.splice((pokemonHeight.length - 1), 0, ".")
            arrayPokemonHeight.splice((pokemonHeight.length - 1), 0, "0")
            pokemonHeight = ""

            for (var i = 0; i < arrayPokemonHeight.length; i++) {

                pokemonHeight += arrayPokemonHeight[i]

            }


        }

        pokemonHeight = parseFloat(pokemonHeight) * 3.2808
        pokemonHeight = parseFloat(pokemonHeight).toFixed(2)


        //HEIGHT TREATMENT



        document.getElementById(`pokemonName`).innerText = datapokemon.forms[0].name
        document.getElementById(`pokemonWeight`).innerText = `${pokemonWeight}lbs`
        document.getElementById(`pokemonHeight`).innerText = `${pokemonHeight}ft`



        //NAME/WEIGHT/HEIGHT






        //AUDIO
   
        document.getElementById("audioLatestSource").src = `${datapokemon.cries.latest}`
        document.getElementById("audioLegacySource").src = `${datapokemon.cries.legacy}`

        console.log(document.getElementById("audioLatestSource").src)
        console.log(document.getElementById("audioLegacySource").src)

        document.getElementById("audioLatest").load();
        document.getElementById("audioLegacy").load();

              
        //AUDIO










    } catch (error) {

        // MODIFICA AS IMAGENS JÁ EXISTENTES PARA SE CASO NÃO ENCONTRAR REGISTROS NA API

        document.getElementById('pokemonHelloMessageOrError').style.display = 'flex'
        document.getElementById('pokemonHelloMessageOrError').src = `img/icone-de-dialogo-de-pixel-art_735839-143-Photoroom.png`
        document.getElementById('pokemonSprite').src = `img/pokeballErrorMessage-Photoroom.png`
        document.getElementById('pokemonSprite').style.width = "276px"

        // MODIFICA AS IMAGENS JÁ EXISTENTES PARA SE CASO NÃO ENCONTRAR REGISTROS NA API



        //TYPE NOT FOUND

        document.getElementById(`type1`).src = `img/pixel-question-mark-icon-clipart-260nw-1898394949-Photoroom.png`
        document.getElementById(`type1`).style.height = "45px"
        document.getElementById(`type2`).src = `img/pixel-question-mark-icon-clipart-260nw-1898394949-Photoroom.png`
        document.getElementById(`type2`).style.height = "45px"

        //TYPE NOT FOUND



        //NAME/WEIGHT/HEIGHT NULL

        document.getElementById(`pokemonName`).innerText = `Undefined`
        document.getElementById(`pokemonWeight`).innerText = `Undefined`
        document.getElementById(`pokemonHeight`).innerText = `Undefined`

        //NAMENAME/WEIGHT/HEIGHT

    }









 
}

 
//QUANDO O USUARIO DA SCROOL EM CIMA DA IMAGEM, A IMAGEM MUDA A SUA OPACIDADE DEPENDENDO DO DELTAY

// let initialData = { myNumber: 0 };
// sessionStorage.setItem('myData', JSON.stringify(initialData));




// document.getElementById('teste').addEventListener('wheel', function(event){

//     var y = event.deltaY;
//     let reference = 0
//     let storedData = JSON.parse(sessionStorage.getItem('myData'));
//     if(y > reference){ 

//         if(storedData.myNumber >= 1){
//             storedData.myNumber = 1
//             sessionStorage.setItem('myData', JSON.stringify(storedData)); 
//         }

//         else{
//             storedData.myNumber += 0.1;   
//             document.getElementById('teste').style.opacity = `${storedData.myNumber}`;  
            
//             sessionStorage.setItem('myData', JSON.stringify(storedData)); 

//         }
        
        
        
//     }

//     else if(y < reference){

//         if(storedData.myNumber <= 0){
//             storedData.myNumber = 0
//             sessionStorage.setItem('myData', JSON.stringify(storedData)); 
//         }

//         else{
//             storedData.myNumber -= 0.1;   
//             document.getElementById('teste').style.opacity = `${storedData.myNumber}`;  
            
//             sessionStorage.setItem('myData', JSON.stringify(storedData));

//         }
     
//     }

 
// })



//QUANDO O USUARIO DA SCROOL EM CIMA DA IMAGEM, A IMAGEM MUDA A SUA OPACIDADE DEPENDENDO DO DELTAY



document.getElementById('divTextImg').addEventListener('wheel', function(event){

    document.getElementById('pikachuContentDiv').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText').style.animation = '3s slideInRight ease-out forwards'

    document.getElementById("contentText").addEventListener("animationend", function() {
       
    }, { once: true });
})


document.getElementById('divTextImg').addEventListener('touchstart', function(event){

    document.getElementById('pikachuContentDiv').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText').style.animation = '3s slideInRight ease-out forwards'

    document.getElementById("contentText").addEventListener("animationend", function() {
       
    }, { once: true });
})



















document.getElementById('divTextImg2').addEventListener('wheel', function(event){

    document.getElementById('pikachuContentDiv2').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv2").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv2").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText2').style.animation = '3s slideInLeft ease-out forwards'

    document.getElementById("contentText2").addEventListener("animationend", function() {
       
    }, { once: true });
})



document.getElementById('divTextImg2').addEventListener('touchstart', function(event){

    document.getElementById('pikachuContentDiv2').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv2").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv2").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText2').style.animation = '3s slideInLeft ease-out forwards'

    document.getElementById("contentText2").addEventListener("animationend", function() {
       
    }, { once: true });
})

















document.getElementById('divTextImg3').addEventListener('wheel', function(event){

    document.getElementById('pikachuContentDiv3').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv3").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv3").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText3').style.animation = '3s slideInRight ease-out forwards'

    document.getElementById("contentText3").addEventListener("animationend", function() {
       
    }, { once: true });
})



document.getElementById('divTextImg3').addEventListener('touchstart', function(event){

    document.getElementById('pikachuContentDiv3').style.animation = '1s fadeIn ease-in'

    document.getElementById("pikachuContentDiv3").addEventListener("animationend", function() {
        document.getElementById("pikachuContentDiv3").style.opacity = '1'; // Reset animation
    }, { once: true });





    document.getElementById('contentText3').style.animation = '3s slideInRight ease-out forwards'

    document.getElementById("contentText3").addEventListener("animationend", function() {
       
    }, { once: true });
})








