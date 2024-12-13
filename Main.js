//O que o twitter tem?

const miniTwitter = {
    users:[
        {username:'Gabbie'}
    ],

    posts:[
        { 
            id:1 ,
            owner:'Gabbie', 
          content: 'Hello World'
        }
    ]
};

//CREATE
function criarPost(dados) {
    
    miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner:dados.owner,
    content:dados.content
});
}

criarPost({owner:'Gabbie', content: 'Segundo Tweet'});

console.log(miniTwitter.posts)

//read
function pegaPost(){
    return miniTwitter.posts
}
console.log(pegaPoast())

//update
function AtualizaContentPost(id,novoConteudo){
    pegaPost().find((post)=> {

        
    })
}

AtualizaContentPost('novo content')