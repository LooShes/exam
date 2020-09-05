const fetchIngredient = function () {
    let input = $("#input").val()
    console.log(input)

    $.get(`/recipes/${input}`, function(receipes) {
            console.log(receipes)
            renderer.render(receipes)
    }) 
}