console.log($)
console.log('working')

let url = 'https://docs.google.com/spreadsheets/d/1ixqFlM630A-B5PjTOZnzpYaLlByty8JerBWjGrzChvU/edit#gid=0'

let id = '1ixqFlM630A-B5PjTOZnzpYaLlByty8JerBWjGrzChvU'

let source = `https://spreadsheets.google.com/feeds/list/1ixqFlM630A-B5PjTOZnzpYaLlByty8JerBWjGrzChvU/od6/public/values?alt=json`

fetch(source)
    .then( response => response.json() )
    .then( data => {
    console.log('data', data)
    let projects = data.feed.entry.map( project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            url: project.gsx$url.$t
        }
    })
    app(projects)
})

function app(projects) {
    console.log('app-projects', projects)
    const myProjects = () => {
        for (let i = 0; i < projects.length; i ++) {
            let $a = $('<a>').attr('href', projects[i].url).text('Link');
            let $img = $('<img>').attr('class', 'projects').attr('src', projects[i].image);
            let $h4 = $('<h4>').attr('class', 'title').text(projects[i].title);
            let $div = $('<div>').attr('class', 'ItemContainer').append($h4).append($img).append($a)
            $('.MyWork').append($div);
        }
    }
    myProjects();

    $('.ItemContainer').css({'width': '300px', 'height': '400px', 
    'margin-bottom': '50px', 'border-radius': '5%', 'text-align': 'center', 'background': '#bcb7b7'});

    $('.projects').css({'width': '100%', 'height': '80%', 'object-fit': 'cover', 'margin': '0 auto'});

    $('.MyWork').css({'display': 'flex', 'flex-wrap': 'wrap', 'justify-content': 'space-around', 
    'align-content': 'space-between', 'position': 'relative', 'z-index': '1'})

    $('h4').css({'margin-bottom': '10px', 'font-family': 'Cormorant Garamond, sans-serif', 'letter-spacing': '.3px'})
   
}

