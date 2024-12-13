//O que o twitter tem?

const miniTwitter = {
    users:[
        {username:'Gabbie'}
    ],

    posts:[
        { owner:'Gabbie', 
          content: 'Hello World'
        }
    ]
};

//CREATE
function criarPost(dados) {
    miniTwitter.posts.push({
    owner:dados.owner,
    content:dados.content
});
}

criarPost({owner:'Gabbie', content: 'Segundo Tweet'});

console.log(miniTwitter.posts) [ {owner: 'Gabbie', }]
