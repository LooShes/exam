

// class Renderer {
//     constructor(title, video, img) {
//         this.title = title,
//         this.video = video,
//         this.img = img

//     }

//     render(data) {
//         $(`#receipe`).empty().append(newHTML)
//         const source = $('#template').html()
//         const template = Handlebars.compile(source)
//         let newHTML = template(this)
//         $('#receipes').append(newHTML)
    
//     }

//     fetchData(){
//         $.get(`receipes/${input}`, function (receipeData) {
//             //console.log(receipeData)
//             this.title = receipeData.title
//             this.video = receipeData.href
//             this.img = receipeData.thumbnail
//             fetchData(this.render())
//     })
//     }
// }

