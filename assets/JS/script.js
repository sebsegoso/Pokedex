//Para que la función buscarPokemon() funcione también al apretar la tecla enter(13).
$(document).on('keypress', e => {
    if (e.which == 13) {
        buscarPokemon();
    }
});

$("#Boton").click(e =>{
    buscarPokemon();
})

const buscarPokemon = () => {
    let busqueda = $("#Buscador").val();
    let busquedaMin = busqueda.toLowerCase();
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${busquedaMin}`;

    $("header").css("background-color" , "rgba(237, 242, 244, .3")

    //importar ajax
    $.ajax({
        url: urlAPI,
        success: result => {
            let pokemon = "";
            pokemon = {
                nombre: result.name,
                id: result.id,
                peso: result.weight,
                altura: result.height,
                tipo: result.types[0].type.name,
                ataque: result.stats[1].base_stat,
                defensa: result.stats[2].base_stat,
                hp: result.stats[0].base_stat,
                velocidad: result.stats[5].base_stat,
                ataqueEspecial: result.stats[3].base_stat,
                defensaEspecial: result.stats[4].base_stat,
                imgFront: result.sprites.front_default,
                imgBack: result.sprites.back_default
            };

            //Traduciendo el tipo de pokemon
            if (pokemon.tipo == "electric") {
                pokemon.tipo = "Eléctrico"
            }
            else if (pokemon.tipo == "normal") {
                pokemon.tipo = "Normal"
            }
            else if (pokemon.tipo == "fighting") {
                pokemon.tipo = "Luchador"
            }
            else if (pokemon.tipo == "flying") {
                pokemon.tipo = "Volador"
            }
            else if (pokemon.tipo == "poison") {
                pokemon.tipo = "Venenoso"
            }
            else if (pokemon.tipo == "ground") {
                pokemon.tipo = "Tierra"
            }
            else if (pokemon.tipo == "rock") {
                pokemon.tipo = "Roca"
            }
            else if (pokemon.tipo == "bug") {
                pokemon.tipo = "Bicho"
            }
            else if (pokemon.tipo == "ghost") {
                pokemon.tipo = "Fantasma"
            }
            else if (pokemon.tipo == "steel") {
                pokemon.tipo = "Acero"
            }
            else if (pokemon.tipo == "fire") {
                pokemon.tipo = "Fuego"
            }
            else if (pokemon.tipo == "water") {
                pokemon.tipo = "Agua"
            }
            else if (pokemon.tipo == "psychic") {
                pokemon.tipo = "Psíquico"
            }
            else if (pokemon.tipo == "ice") {
                pokemon.tipo = "Hielo"
            }
            else if (pokemon.tipo == "dragon") {
                pokemon.tipo = "Dragón"
            }
            else if (pokemon.tipo == "dark") {
                pokemon.tipo = "Oscuro"
            }
            else if (pokemon.tipo == "fairy") {
                pokemon.tipo = "Hada"
            }
            else if (pokemon.tipo == "unknown") {
                pokemon.tipo = "Desconocido"
            }
            else if (pokemon.tipo == "grass") {
                pokemon.tipo = "Planta"
            }
            else if (pokemon.tipo == "shadow") {
                pokemon.tipo = "Sombra"
            };


            $("#Info").empty(); //Para vaciar el div contenedor y mostrar sólo 1 pokemon en pantalla

            //Agregando info al documento
            $("#Info").prepend(`
            <div class="row">
            <h2 class="nombre col-12">${pokemon.nombre.toUpperCase()} #${pokemon.id}</h2>
                <div class="info-wrapper col-12 col-lg-4">
                    <div class="info-pokemon">
                        <div class="info-pokemon__images">
                            <img class="pokeimg" src=${pokemon.imgFront} alt="" />
                            <img class="pokeimg" src=${pokemon.imgBack} alt="" />
                        </div>
                        <p>Id pokedex: #${pokemon.id}</p>
                        <p>Tipo: <span class="tipo">${pokemon.tipo}</span></p>
                        <p>Peso: ${pokemon.peso / 10}Kg | Altura: ${pokemon.altura / 10}m</p>
                    </div>
                </div>
                <div class="info-wrapper col-12 col-lg-3">
                    <div class="info-pokemon estadisticas">
                        <h3>Estadísticas</h3>
                        <p>Ataque: ${pokemon.ataque}</p>
                        <p>Defensa: ${pokemon.defensa}</p>
                        <p>Hit points: ${pokemon.hp}</p>
                        <p>Velocidad: ${pokemon.velocidad}</p>
                        <p>Ataque Especial: ${pokemon.ataqueEspecial}</p>
                        <p>Defensa Especial: ${pokemon.defensaEspecial}</p>
                    </div>
                </div>
                <div class="info-wrapper col-12 col-lg-5">
                    <div class="info-pokemon grafico">
                    <div id="chartContainer" style="height: 320px; width: 100%;"></div>
                    </div>
                </div>
                </div>
                <hr />`).fadeIn(3000);

            //Cambiando bg color según tipo de pokemon
            if (pokemon.tipo == "Eléctrico") {
                $(".info-pokemon__images").css("background-color", "#F8D030")
                $("body").css("background-color", "#F8D030")
                $(".tipo").css("color", "#F8D030")
            }
            else if (pokemon.tipo == "Normal") {
                $(".info-pokemon__images").css("background-color", "#A8A090")
                $("body").css("background-color", "#A8A090")
                $(".tipo").css("color", "#A8A090")
            }
            else if (pokemon.tipo == "Luchador") {
                $(".info-pokemon__images").css("background-color", "#A05038")
                $("body").css("background-color", "#A05038")
                $(".tipo").css("color", "#A05038")
            }
            else if (pokemon.tipo == "Volador") {
                $(".info-pokemon__images").css("background-color", "#98A8F0")
                $("body").css("background-color", "#98A8F0")
                $(".tipo").css("color", "#98A8F0")
            }
            else if (pokemon.tipo == "Venenoso") {
                $(".info-pokemon__images").css("background-color", "#B058A0")
                $("body").css("background-color", "#B058A0")
                $(".tipo").css("color", "#B058A0")
            }
            else if (pokemon.tipo == "Tierra") {
                $(".info-pokemon__images").css("background-color", "#E9D6A4")
                $("body").css("background-color", "#E9D6A4")
                $(".tipo").css("color", "#E9D6A4")
            }
            else if (pokemon.tipo == "Roca") {
                $(".info-pokemon__images").css("background-color", "#B8A058")
                $("body").css("background-color", "#B8A058")
                $(".tipo").css("color", "#B8A058")
            }
            else if (pokemon.tipo == "Bicho") {
                $(".info-pokemon__images").css("background-color", "#A8B820")
                $("body").css("background-color", "#A8B820")
                $(".tipo").css("color", "#A8B820")
            }
            else if (pokemon.tipo == "Fantasma") {
                $(".info-pokemon__images").css("background-color", "#6060B0")
                $("body").css("background-color", "#6060B0")
                $(".tipo").css("color", "#6060B0")
            }
            else if (pokemon.tipo == "Acero") {
                $(".info-pokemon__images").css("background-color", "#A8A8C0")
                $("body").css("background-color", "#A8A8C0")
                $(".tipo").css("color", "#A8A8C0")
            }
            else if (pokemon.tipo == "Fuego") {
                $(".info-pokemon__images").css("background-color", "#F05030")
                $("body").css("background-color", "#F05030")
                $(".tipo").css("color", "#F05030")
            }
            else if (pokemon.tipo == "Agua") {
                $(".info-pokemon__images").css("background-color", "#3899F8")
                $("body").css("background-color", "#3899F8")
                $(".tipo").css("color", "#3899F8")
            }
            else if (pokemon.tipo == "Psíquico") {
                $(".info-pokemon__images").css("background-color", "#F870A0")
                $("body").css("background-color", "#F870A0")
                $(".tipo").css("color", "#F870A0")
            }
            else if (pokemon.tipo == "Hielo") {
                $(".info-pokemon__images").css("background-color", "#58C8E0")
                $("body").css("background-color", "#58C8E0")
                $(".tipo").css("color", "#58C8E0")
            }
            else if (pokemon.tipo == "Dragón") {
                $(".info-pokemon__images").css("background-color", "#7860E0")
                $("body").css("background-color", "#7860E0")
                $(".tipo").css("color", "#7860E0")
            }
            else if (pokemon.tipo == "Oscuro") {
                $(".info-pokemon__images").css("background-color", "#000")
                $("body").css("background-color", "#000")
                $(".tipo").css("color", "#000")
            }
            else if (pokemon.tipo == "Hada") {
                $(".info-pokemon__images").css("background-color", "#E79FE7")
                $("body").css("background-color", "#E79FE7")
                $(".tipo").css("color", "#E79FE7")
            }
            else if (pokemon.tipo == "Planta") {
                $(".info-pokemon__images").css("background-color", "#78C850")
                $("body").css("background-color", "#78C850")
                $(".tipo").css("color", "#78C850")
            }
            else if (pokemon.tipo == "Sombra") {
                $(".info-pokemon__images").css("background-color", "#424242")
                $("body").css("background-color", "#424242")
                $(".tipo").css("color", "#424242")
            };

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                data: [{
                    type: "doughnut",
                    startAngle: 60,
                    innerRadius: 80,
                    indexLabelFontSize: 17,
                    indexLabel: "{label}: {y}",
                    toolTipContent: "<b>{label}:</b> {y}",
                    dataPoints: [
                        { y: pokemon.ataque, label: "Ataque" },
                        { y: pokemon.defensa, label: "Defensa" },
                        { y: pokemon.hp, label: "HP" },
                        { y: pokemon.velocidad, label: "Velocidad" },
                        { y: pokemon.ataqueEspecial, label: "Ataque especial" },
                        { y: pokemon.defensaEspecial, label: "Defensa especial" }
                    ]
                }]
            });
            chart.render();

            busqueda = $("#Buscador").val("");
        }
    });
};