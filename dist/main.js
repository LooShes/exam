
const renderer = renderData()

const fetchReceipeInput = function () {
    let input = $("#receipe-input").val()
    renderer(input)
}
