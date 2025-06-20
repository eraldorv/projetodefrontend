const params = new URLSearchParams(window.location.search);
const restauranteId = params.get('id');

const restaurantes = {
  "coco-bambu": {
    nome: "Coco Bambu",
    nota: "4.9",
    descricao: `Marisqueira com pratos generosos e ambiente elegante. Ideal para ocasiões especiais e jantares em grupo.
Oferece pratos fartos, com destaque para frutos do mar e moquecas. Ambiente sofisticado com atendimento de qualidade.
Possui espaço kids, carta de vinhos e áreas climatizadas.`,
    imagemdeicone: "img/restaurantes/CocoBambu/cocobambu.png",
    imagem1: "img/restaurantes/CocoBambu/cocobambu1.png",
    imagem2: "img/restaurantes/CocoBambu/cocobambu2.png",
    endereco: "Av. Gov. Agamenon Magalhães, 2100 - Derby, Recife - PE"
  },
  "chica-pitanga": {
    nome: "Chica Pitanga",
    nota: "4.8",
    descricao: `Sabores regionais em ambiente acolhedor. Um dos self-services mais tradicionais de Boa Viagem.
Grande variedade de pratos nordestinos e contemporâneos com ótimo custo-benefício.`,
    imagemdeicone: "img/restaurantes/Chica Pitanga/chicapitanga.png",
    imagem1: "img/restaurantes/Chica Pitanga/chicapitanga1.png",
    imagem2: "img/restaurantes/Chica Pitanga/chicapitanga2.png",
    endereco: "R. Petrolina, 19 - Boa Viagem, Recife - PE"
  },
  "sal-e-brasa": {
    nome: "Sal e Brasa",
    nota: "4.9",
    descricao: `Rodízio de carnes premium e ótimo buffet de saladas, massas e sobremesas.
Ambiente espaçoso e ideal para eventos em família. Atendimento ágil e cortes nobres.`,
    imagemdeicone: "img/restaurantes/Sal e Brasa/salebrasa.png",
    imagem1: "img/restaurantes/Sal e Brasa/salebrasa1.png",
    imagem2: "img/restaurantes/Sal e Brasa/salebrasa2.png",
    endereco: "Av. Eng. Domingos Ferreira, 1500 - Boa Viagem, Recife - PE"
  },
  "bode-do-no": {
    nome: "Bode do Nô",
    nota: "4.7",
    descricao: `Comida nordestina autêntica com aquele toque caseiro. Destaque para pratos com carne de bode, sarapatel e feijão verde.
Ambiente simples e muito acolhedor.`,
    imagemdeicone: "img/restaurantes/Bode do Nô/bodedono.png",
    imagem1: "img/restaurantes/Bode do Nô/bodedono1.png",
    imagem2: "img/restaurantes/Bode do Nô/bodedono2.png",
    endereco: "Av. Norte Miguel Arraes de Alencar, 5895 - Recife - PE"
  },
  "restaurante-leite": {
    nome: "Restaurante Leite",
    nota: "4.6",
    descricao: `O clássico de Recife, tradição e pratos refinados. Fundado em 1882, é o restaurante mais antigo do Brasil em atividade.
Foco em culinária portuguesa com ambiente elegante.`,
    imagemdeicone: "img/restaurantes/Restaurante Leite/restauranteleite.png",
    imagem1: "img/restaurantes/Restaurante Leite/restauranteleite1.png",
    imagem2: "img/restaurantes/Restaurante Leite/restauranteleite2.png",
    endereco: "Praça Joaquim Nabuco, 147 - Santo Antônio, Recife - PE"
  },
  "casa-da-parrilla": {
    nome: "Casa da Parrilla",
    nota: "4.5",
    descricao: `Churrasco argentino com cortes selecionados e acompanhamentos especiais.
Ambiente rústico e sofisticado, ideal para apreciadores de carne.`,
    imagemdeicone: "img/restaurantes/Casa da Parrilla/casadaparrilla.png",
    imagem1: "img/restaurantes/Casa da Parrilla/casadaparrilla1.png",
    imagem2: "img/restaurantes/Casa da Parrilla/casadaparrilla2.png",
    endereco: "R. Amazonas, 200 - Espinheiro, Recife - PE"
  },
  "geracao-burguer": {
    nome: "Geração Burguer",
    nota: "4.4",
    descricao: `Hambúrgueres artesanais e milkshakes incríveis em um ambiente retrô.
Cardápio variado com opções para todos os gostos, incluindo vegetarianos.`,
    imagemdeicone: "img/restaurantes/Geração Burguer/geracaoburguer.png",
    imagem1: "img/restaurantes/Geração Burguer/geracaoburguer1.png",
    imagem2: "img/restaurantes/Geração Burguer/geracaoburguer2.png",
    endereco: "Av. Abdias de Carvalho, 500 - Madalena, Recife - PE"
  },
  "la-brasa": {
    nome: "La Brasa",
    nota: "4.5",
    descricao: `Steakhouse com cortes maturados e ambiente sofisticado.
Atendimento de alto padrão e carta de vinhos selecionada.`,
    imagemdeicone: "img/restaurantes/La Brasa/labrasa.png",
    imagem1: "img/restaurantes/La Brasa/labrasa1.png",
    imagem2: "img/restaurantes/La Brasa/labrasa2.png",
    endereco: "R. Amélia, 455 - Graças, Recife - PE"
  },
  "mafalda-hamburgueria": {
    nome: "Mafalda Hamburgueria",
    nota: "4.3",
    descricao: `Receitas criativas e sabores surpreendentes. Destaque para os molhos artesanais e burgers com nomes divertidos.
Ambiente jovem e descontraído.`,
    imagemdeicone: "img/restaurantes/Mafalda Hamburgueria/mafalda.png",
    imagem1: "img/restaurantes/Mafalda Hamburgueria/mafalda1.png",
    imagem2: "img/restaurantes/Mafalda Hamburgueria/mafalda2.png",
    endereco: "R. Cap. Rebelinho, 230 - Pina, Recife - PE"
  },
  "magalhaes-pizza": {
    nome: "Magalhães Pizza",
    nota: "4.4",
    descricao: `Pizzas finas e crocantes com ingredientes premium. Ideal para famílias e casais.
Massas artesanais e bom atendimento.`,
    imagemdeicone: "img/restaurantes/Magalhães Pizza/magalhaespizza.png",
    imagem1: "img/restaurantes/Magalhães Pizza/magalhaespizza1.png",
    imagem2: "img/restaurantes/Magalhães Pizza/magalhaespizza2.png",
    endereco: "R. do Futuro, 322 - Aflitos, Recife - PE"
  },
  "lupi-pizzeria": {
    nome: "Lupi Pizzeria",
    nota: "4.5",
    descricao: `Tradição italiana com forno a lenha e massa leve. Sabores autênticos e ambiente moderno.
Destaque para a pizza de burrata e o tiramisù.`,
    imagemdeicone: "img/restaurantes/Lupi Pizzeria/lupipizzeria.png",
    imagem1: "img/restaurantes/Lupi Pizzeria/lupipizzeria1.png",
    imagem2: "img/restaurantes/Lupi Pizzeria/lupipizzeria2.png",
    endereco: "R. Conselheiro Portela, 458 - Espinheiro, Recife - PE"
  },
  "1121-forneria": {
    nome: "1121 Forneria",
    nota: "4.4",
    descricao: `Forneria contemporânea com pães artesanais quentinhos e pizzas de fermentação natural.
Ambiente charmoso e ideal para encontros românticos.`,
    imagemdeicone: "img/restaurantes/1121 Forneria/1121forneria.png",
    imagem1: "img/restaurantes/1121 Forneria/1121forneria1.png",
    imagem2: "img/restaurantes/1121 Forneria/1121forneria2.png",
    endereco: "Av. Rui Barbosa, 1121 - Graças, Recife - PE"
  }
};


const dados = restaurantes[restauranteId];

if (dados) {
  document.getElementById("restaurante-nome").textContent = dados.nome;
  document.getElementById("restaurante-nota").textContent = "⭐ " + dados.nota;
  document.getElementById("restaurante-descricao").textContent = dados.descricao;
  document.getElementById("restaurante-endereco").textContent = dados.endereco;

  document.getElementById("restaurante-imagemdeicone").src = dados.imagemdeicone;
  document.getElementById("restaurante-imagem1").src = dados.imagem1;
document.getElementById("restaurante-imagem2").src = dados.imagem2;
} else {
  document.body.innerHTML = "<h2>Restaurante não encontrado 😢</h2>";
}
