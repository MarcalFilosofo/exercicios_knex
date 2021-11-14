let database = require('./database');

// INSERT
// let dados = [
//     {
//         nome: 'Minecraft Dungeons',
//         preco: 70.00,
//     }, {
//         nome: 'Minecraft Dungeons 2',
//         preco: 80.00,
//     }, {
//         nome: 'Minecraft Dungeons 3',
//         preco: 90.00,
//     }, {
//         nome: 'Minecraft Dungeons 4',
//         preco: 100.00,
//     }, {
//         nome: 'Minecraft Dungeons 5',
//         preco: 110.00,
//     }, {
//         nome: 'Minecraft Dungeons 6',
//         preco: 120.00,
//     }
// ]

// let query = database.insert(dados).into('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// console.log(query.toQuery());

// SELECT
// database.select('*').from('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// WHERE
// database.select('nome')
//             .where('id', '>', 6)
//                 .orWhere('id', '=', 1)
//                     .from('games')
//                         .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//DELETE
// database.delete().from('games').where('id', '>', 6).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//UPDATE
// database.where({ id: 5}).update({ nome: 'Truco' }).table('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//Order by
database.select('*').from('games').orderBy('preco', 'desc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// SELECT all games and order by price in ascending order
database.select('*').from('games').orderBy('preco').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Delete all games where the price will be taller than 25 and order by price in descending order
database.delete().from('games').where('preco', '>', 25).orderBy('preco', 'desc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Select all games where the id is pair and order by name in ascending order
database.select('*').from('games').where('id', '%', 2).orderBy('nome').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Map the relation between games and developers, select the developer's name and all games that they made
database.select('developers.nome', 'games.nome').from('games').innerJoin('developers', 'games.id_developer', 'developers.id').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Pegue a quantidade de anuidades pagas a vista pelos profissionais e ordene pela quantidade de anuidades pagas
// database.select(
//     'professionals.nome', 'professionals.id', 'professionals.idade', 'professionals.salario', 'professionals.anuidade_paga_vista'
//     ).from('professionals').innerJoin('anuidades', 'professionals.id', 'anuidades.id_profissional').then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });
//Conte as anuidades pagas a vista pelos profissionais e ordene pela quantidade de anuidades pagas
// database.select('profissional.name', 'profissional.id_profissional').from('profissional').leftJoin('anuidades', 'profissional.id', 'anuidades.id_profissional').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//Pegue os desenvolvedore e seus jogos onde o preço é maior que 50
database.select('developers.nome', 'games.nome').from('games').innerJoin('developers', 'games.id_developer', 'developers.id').where('games.preco', '>', 50).then(data => {   
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Pegue a lista dos desenvolvedores que ainda não tem jogos
database.select('developers.nome', 'developers.id').from('developers').leftJoin('games', 'developers.id', 'games.id_developer').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Pegue a lista dos estudios com mais de 10 desenvolvedores e os jogos que eles desenvolvem que tem o preço maior que 50
database.select('studios.nome', 'games.nome').from('games').innerJoin('studios', 'games.id_studio', 'studios.id').where('games.preco', '>', 50).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Selecione todos os podcasts com mais de 2 milhoes de inscritos que fazem mais de 100 mil views por mes, ordene por numero de inscritos
database.select('podcasts.nome', 'podcasts.inscritos', 'podcasts.views').from('podcasts').where('podcasts.inscritos', '>', 2000000).where('podcasts.views', '>', 1000000).orderBy('podcasts.inscritos', 'desc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Pegue a lista de inscritos que estão inscritos no flow podcast e podpah
database.select('podcasts.nome', 'podcasts.inscritos', 'podcasts.views').from('podcasts').where('podcasts.inscritos', '>', 2000000).where('podcasts.views', '>', 1000000).orderBy('podcasts.inscritos', 'desc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Pegue a lista dos Estados do Brasil com mais de 5 milhoes de habitantes e o Rio de Janeiro
database.select('estados.nome', 'estados.habitantes').from('estados').where('estados.habitantes', '>', 5000000).where('estados.nome', '=', 'Rio de Janeiro').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Pegue a lista dos Estados do Brasil com mais de 5 milhoes de habitantes e o Rio de Janeiro, não pegue brasilia
database.select('estados.nome', 'estados.habitantes').from('estados').where('estados.habitantes', '>', 5000000).where('estados.nome', '!=', 'Brasilia').where('estados.nome', '=', 'Rio de Janeiro').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});