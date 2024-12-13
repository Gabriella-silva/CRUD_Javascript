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
function pegaPosts(){
    return miniTwitter.posts
}
console.log(pegaPoasts())

//update
function AtualizaContentPost(id,novoConteudo){
  const postQueVaiSerAtualizado =  pegaPosts().find((post)=> {
        return post.id === id;

    })
    console.log(pegaPosts())
}

AtualizaContentPost(1,'novo content')

//delete

function apagaPost(id) {
    const  ListaPostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = ListaPostsAtualizada;
}
apagaPost(1)