//Para que la función buscarPokemon() funcione también al apretar la tecla enter(13).
$(document).on('keypress', e => {
    if(e.which == 13) {
        buscarPokemon();
    }
});

const buscarPokemon = () => {
    let busqueda = $("#Buscador").val();
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;


    $.ajax({
        url: urlAPI,
        success: result => {
            let pokemon = "";
            pokemon = {
                nombre: result.name,
                id: result.id,
                //Tipo = result.types.type.name ,
                ataque: result.stats[1].base_stat,
                defensa: result.stats[2].base_stat,
                hp: result.stats[0].base_stat,
                velocidad: result.stats[5].base_stat,
                ataqueEspecial: result.stats[3].base_stat,
                defensaEspecial: result.stats[4].base_stat,
                imgFront: result.sprites.front_default,
                imgBack: result.sprites.back_default
            };


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
                <hr />`);

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                data: [{
                    type: "doughnut",
                    startAngle: 60,
                    innerRadius: 80,
                    indexLabelFontSize: 17,
                    indexLabel: "{label} - {y}",
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
        }
    });
}