const livros = [
    {
titulo: "Dom Casmurro",
autor: "Machado de Assis",
paginas: 256
    },
    {
titulo: "O Cortico",
autor: "Aluisio Azevedo",
paginas: 304
    },
    {
titulo: "Iracema",
autor: "Jose de Alencar"
    }
];


function descreverLivro({titulo, autor, paginas = 0}) {
    console.log(
`"${titulo}", de ${autor}, tem ${paginas} paginas.`
    );
}


livros.map(descreverLivro);