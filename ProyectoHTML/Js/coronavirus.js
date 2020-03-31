$("#go").on("click", (e)=>{
    $.ajax({
        url:"https://coronavirus-19-api.herokuapp.com/all",
        data:{
            zipcode: 97201
        },
        success: function(result) {
           console.log(result)
            $(".main").html`Casos ${result.cases}, Muertes ${result.deaths}`;
        }
    });
});