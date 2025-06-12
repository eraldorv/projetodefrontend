       const params = new URLSearchParams(window.location.search);
        const restauranteId = params.get('id');
      
        const restaurantes = {
          "coco-bambu": {
  nome: "Coco Bambu",
  nota: "4.9",
  descricao:
    `Maior restaurante da rede no Brasil, inaugurado em outubro de 2023 no bairro do Derby, 
    Recife. São 6.000 m² em seis andares, com capacidade inicial para 450 lugares (expansão para até 600), 
    espaço kids para 100 crianças, varanda pet‑friendly para 25 pessoas, bar temático esportivo, 
    adega com 1.000 garrafas e carta de mais de 100 rótulos de vinho. O investimento foi de R$ 45 milhões, 
    gerando 200 empregos e incluindo salões de eventos para até 80 pessoas.`,
  imagem: "img/coco-bambu.webp"
    },
          "chica-pitanga": {
            nome: "Chica Pitanga",
            nota: "",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
         "chica-pitanga": {
    nome: "Chica Pitanga",
    nota: "4.8",
    descricao: "Sabores regionais em ambiente acolhedor...",
    imagem: "img/chica-pitanga.jpg"
  },
  "sal-e-brasa": {
    nome: "Sal e Brasa",
    nota: "4.9",
    descricao: "Rodízio de carnes premium e ótimo buffet de saladas...",
    imagem: "img/sal-e-brasa.jpg"
  },
  "bode-do-no": {
    nome: "Bode do Nô",
    nota: "4.7",
    descricao: "Comida nordestina autêntica com aquele toque caseiro...",
    imagem: "img/bode-do-no.jpg"
  },
  "restaurante-leite": {
    nome: "Restaurante Leite",
    nota: "4.6",
    descricao: "O clássico de Recife, tradição e pratos refinados...",
    imagem: "img/restaurante-leite.jpg"
  },
  "casa-da-parrilla": {
    nome: "Casa da Parrilla",
    nota: "4.5",
    descricao: "Churrasco argentino com cortes selecionados...",
    imagem: "img/casa-da-parrilla.jpg"
  },
  "geracao-burguer": {
    nome: "Geração Burguer",
    nota: "4.4",
    descricao: "Hambúrgueres artesanais e milkshakes incríveis...",
    imagem: "img/geracao-burguer.avif"
  },
  "la-brasa": {
    nome: "La Brasa",
    nota: "4.5",
    descricao: "Steakhouse com cortes maturados e ambiente sofisticado...",
    imagem: "img/la-brasa.webp"
  },
  "mafalda-hamburgueria": {
    nome: "Mafalda Hamburgueria",
    nota: "4.3",
    descricao: "Receitas criativas e sabores surpreendentes...",
    imagem: "img/mafalda-hamburgueria.png"
  },
  "magalhaes-pizza": {
    nome: "Magalhães Pizza",
    nota: "4.4",
    descricao: "Pizzas finas e crocantes com ingredientes premium...",
    imagem: "img/magalhaes-pizza.webp"
  },
  "lupi-pizzeria": {
    nome: "Lupi Pizzeria",
    nota: "4.5",
    descricao: "Tradição italiana com forno a lenha e massa leve...",
    imagem: "img/lupi-pizzeria.jpg"
  },
  "1121-forneria": {
    nome: "1121 Forneria",
    nota: "4.4",
    descricao: "Forneria contemporânea com pães artesanais quentinhos...",
    imagem: "img/1121-forneria.jpg"
  },
        };

        const dados = restaurantes[restauranteId];
        if (dados) {
          document.getElementById("restaurante-nome").textContent = dados.nome;
          document.getElementById("restaurante-nota").textContent = "⭐ " + dados.nota;
          document.getElementById("restaurante-descricao").textContent = dados.descricao;
          document.getElementById("restaurante-imagem").src = dados.imagem;
        } else {
          // caso o restaurante não seja encontrado
          document.body.innerHTML = "<h2>Restaurante não encontrado 😢</h2>";
        }
