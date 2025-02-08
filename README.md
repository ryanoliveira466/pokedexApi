# PokeAPI - A API de Pokémon

<img src="https://pipedream.com/s.v0/app_mvNhzR/logo/orig"  width=250>

A **PokeAPI** ([Link](https://pokeapi.co/)) é uma API pública e gratuita que oferece acesso a dados relacionados ao mundo dos Pokémon, incluindo informações sobre os jogos, personagens, habilidades, itens e muito mais. Ela fornece endpoints que permitem a consulta de dados estruturados sobre o universo Pokémon em formato JSON.

## Recursos da PokeAPI

A PokeAPI permite que você acesse uma ampla gama de informações sobre o mundo Pokémon. Alguns dos principais recursos incluem:

### Pokémon
Você pode obter dados detalhados sobre qualquer Pokémon, como:

- **Nome** e **ID**
- **Tipo** (como Água, Fogo, Elétrico)
- **Habilidades** e **Movimentos**
- **Evoluções**
- **Stats** (como Ataque, Defesa, Velocidade)

---

### Como funciona
* Você pode obter os dados através do JSON ao colocar o nome do pokemon ou seu número:

```javascript
const fetchPokemon = async (pokemon) => {



    try {

        const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await APIresponse.json();
        return data;

    } catch (error) {

    }



}
```

* E depois colocar o JSON em uma variável:

```javascript
const showPokemon = async (pokemon) => {


    const datapokemon = await fetchPokemon(pokemon);
    
    ...
    
}
```

---



[ryanoliveira466.github.io/pokedexApi](https://ryanoliveira466.github.io/pokedexApi/)

