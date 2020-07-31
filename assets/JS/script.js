//Para que la función buscarPokemon() funcione también al apretar la tecla enter(13).
$(document).on('keypress', e => {
    if(e.which == 13) {
        buscarPokemon();
    }
});

const buscarPokemon = () => {
    let busqueda = $("#Buscador").val();
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;

    //importar ajax
    $.ajax({
        url: urlAPI,
        success: result => {
            let pokemon = "";
            pokemon = {
                nombre: result.name,
                id: result.id,
                tipo : result.types[0].type.name,
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
                            <img src=${pokemon.imgFront} alt="" />
                            <img src=${pokemon.imgBack} alt="" />
                        </div>
                        <p>Id pokedex: #${pokemon.id}</p>
                        <p>Tipo: ${pokemon.tipo}</p>
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
                        { y: pokemon.defensa , label: "Defensa" },
                        { y: pokemon.hp, label: "HP" },
                        { y: pokemon.velocidad, label: "Velocidad" },
                        { y: pokemon.ataqueEspecial , label: "Ataque especial" },
                        { y: pokemon.defensaEspecial , label: "Defensa especial" }
                    ]
                }]
            });
            chart.render();

        busqueda = "";
        }
    });
}