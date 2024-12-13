//Banco de dados em CONST

//readPost: mostrar post
//criarPost: cria um Post
//apagaPost
//atualizaContentPost

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
function readPost(){
    return miniTwitter.posts
}

//update se me der o id correto eu atualizo
function AtualizaContentPost(id,novoConteudo){
  const postQueVaiSerAtualizado =  readPost().find((post)=> {
        return post.id === id;

    })
    console.log(readPost())
}

AtualizaContentPost(1,'novo content')

//delete Cria uma lista sem o Post do id dado

function apagaPost(id) {
    const  ListaPostsAtualizada = readPost().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = ListaPostsAtualizada;
}
apagaPost(1)