
class Renderer {
    constructor() {
    }

    render(data) {
        const source = $('#template').html()
        const template = Handlebars.compile(source)
                
        let index = Handlebars.registerHelper("inc", function(value=0, options)
        {
             let index = parseInt(value) + 1
                    return ("i"+index).toString()
        })

        let newHTML = template({receipes: data})
        $('#receipes').append(newHTML)
    }
}

let renderer = new Renderer()