
//Header da requisição
var settings = {
    "url": "http://localhost:8081/clientes",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": " <aqui voce coloca o token> "
    },
  };
  
//Mostrando a requisição na tela
function consultarApi() {
    $.ajax(settings).done(function (response) {

   //    $("#conteudo").text(response);
    var respGrid =  JSON.stringify(response)
    $("#conteudo").text(respGrid);

       console.log(response)

    });

}

$("#botao").click(consultarApi);

