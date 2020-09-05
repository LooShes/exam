
$("img").on("click", function() {
    let firstIngredient = $(this).closest("polaroid").nextSibling("p").find("span").text()
    alert(firstIngredient)
})

const fetchIngredient = function () {
    let input = $("#input").val()
    console.log(input)

    $.get(`/recipes/${input}`, function(receipes) {
            console.log(receipes)
            renderer.render(receipes)
    }) 
}