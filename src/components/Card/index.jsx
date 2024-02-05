import "./styles.css";

import hp1 from "../../assets/HpPedra.jpg";

/*const filmes = [
  {
    imagem: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irCC5iDhP4UJmoD1kK.jpg",
    titulo: "O Rei Leão",
    descricao:
      "Simba é um jovem leão que está destinado a se tornar o rei da selva. No entanto, seu tio Scar tem outros planos e o mata para tomar o trono. Simba precisa aprender a usar seu poder para derrotar Scar e restaurar o equilíbrio na selva.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/7WsyChQLEft00nH1vQsRQp8x60m.jpg",
    titulo: "Vingadores: Ultimato",
    descricao:
      "Após os eventos de Vingadores: Guerra Infinita, os Vingadores restantes se unem para tentar reverter o estrago feito por Thanos e trazer de volta os heróis que foram perdidos.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/d2NHh4EEzU5GDnE0yeq18XDk83b.jpg",
    titulo: "O Hobbit: A Desolação de Smaug",
    descricao:
      "Bilbo Bolseiro e os anões continuam sua jornada para recuperar o Reino Perdido de Erebor do dragão Smaug. No caminho, eles enfrentam novos perigos e desafios.",
  },
  {
    imagem:
      "https://image.tmdb.org/t/p/w500/r28955620972735415252432318722731508874.jpg",
    titulo: "Piratas do Caribe: A Maldição do Pérola Negra",
    descricao:
      "O capitão Jack Sparrow e sua tripulação pirata embarcam em uma busca pelo Pérola Negra, um navio lendário que foi roubado pelo capitão Barbossa.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/q6Y9i8q9y070sV47n5Q31zH186L.jpg",
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    descricao:
      "Frodo Bolseiro e seus companheiros continuam sua jornada para destruir o Um Anel e derrotar o Lorde das Trevas Sauron.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/8uO0gCMiWP6a9rV75yC210q97QX.jpg",
    titulo: "A Viagem de Chihiro",
    descricao:
      "Chihiro Ogino, uma menina de 10 anos, se muda para uma nova cidade com seus pais. No caminho, eles param em um parque de diversões abandonado. Chihiro entra no parque e seus pais são transformados em porcos por Yubaba, a bruxa que administra o parque. Chihiro precisa trabalhar para Yubaba para encontrar uma maneira de libertar seus pais e voltar para o mundo humano.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/2bXqIWnD3cV2ZAo9y89417y8x0L.jpg",
    titulo: "Toy Story",
    descricao:
      "Um grupo de brinquedos ganha vida quando seu dono, Andy, não está por perto. Woody, o boneco de cowboy líder do grupo, precisa lidar com a chegada de Buzz Lightyear, um novo boneco espacial que se torna o brinquedo favorito de Andy.",
  },
  {
    imagem: "https://image.tmdb.org/t/p/w500/f89U3S8q8Y78y8Y3v1u5rV7845L.jpg",
    titulo: "Harry Potter e a Pedra Filosofal",
    descricao:
      "Harry Potter, um menino de 11 anos, descobre que é um bruxo e é levado para a Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz novos amigos, aprende sobre magia e enfrenta o bruxo das trevas Voldemort.",
  },
];*/



const Card = () => {
  return (
    <>
      <div className="card">
        <article>
          <figure>
            <img src={hp1} alt="" />
            <h3>Nome</h3>
            <span className="desconto">-30%</span>
            <h3>preço</h3>
          </figure>
        </article>
      </div>
    </>
  );
};

export default Card;
