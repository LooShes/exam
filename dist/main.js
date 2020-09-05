// const fetchInput = function () {
//     let input = $("#input").val()
//     console.log(input)

    $.get(`/recipes/:cheese`, function(team) {
            console.log(team)
    }) 
