const params = new URLSearchParams(window.location.search);
const restauranteId = params.get('id');

const restaurantes = {
  "coco-bambu": {
    nome: "Coco Bambu",
    nota: "4.9",
    descricao: `Marisqueira com pratos generosos e ambiente elegante. Ideal para ocasiões especiais e jantares em grupo.
Oferece pratos fartos, com destaque para frutos do mar e moquecas. Ambiente sofisticado com atendimento de qualidade.
Possui espaço kids, carta de vinhos e áreas climatizadas.`,
    imagem: "img/coco-bambu.jpg",
    endereco: "Av. Gov. Agamenon Magalhães, 2100 - Derby, Recife - PE"
  },
  "chica-pitanga": {
    nome: "Chica Pitanga",
    nota: "4.8",
    descricao: `Sabores regionais em ambiente acolhedor. Um dos self-services mais tradicionais de Boa Viagem.
Grande variedade de pratos nordestinos e contemporâneos com ótimo custo-benefício.`,
    imagem: "img/chica-pitanga.jpg",
    endereco: "R. Petrolina, 19 - Boa Viagem, Recife - PE"
  },
  "sal-e-brasa": {
    nome: "Sal e Brasa",
    nota: "4.9",
    descricao: `Rodízio de carnes premium e ótimo buffet de saladas, massas e sobremesas.
Ambiente espaçoso e ideal para eventos em família. Atendimento ágil e cortes nobres.`,
    imagem: "img/sal-e-brasa.jpg",
    endereco: "Av. Eng. Domingos Ferreira, 1500 - Boa Viagem, Recife - PE"
  },
  "bode-do-no": {
    nome: "Bode do Nô",
    nota: "4.7",
    descricao: `Comida nordestina autêntica com aquele toque caseiro. Destaque para pratos com carne de bode, sarapatel e feijão verde.
Ambiente simples e muito acolhedor.`,
    imagem: "img/bode-do-no.jpg",
    endereco: "Av. Norte Miguel Arraes de Alencar, 5895 - Recife - PE"
  },
  "restaurante-leite": {
    nome: "Restaurante Leite",
    nota: "4.6",
    descricao: `O clássico de Recife, tradição e pratos refinados. Fundado em 1882, é o restaurante mais antigo do Brasil em atividade.
Foco em culinária portuguesa com ambiente elegante.`,
    imagem: "img/restaurante-leite.jpg",
    endereco: "Praça Joaquim Nabuco, 147 - Santo Antônio, Recife - PE"
  },
  "casa-da-parrilla": {
    nome: "Casa da Parrilla",
    nota: "4.5",
    descricao: `Churrasco argentino com cortes selecionados e acompanhamentos especiais.
Ambiente rústico e sofisticado, ideal para apreciadores de carne.`,
    imagem: "img/casa-da-parrilla.jpg",
    endereco: "R. Amazonas, 200 - Espinheiro, Recife - PE"
  },
  "geracao-burguer": {
    nome: "Geração Burguer",
    nota: "4.4",
    descricao: `Hambúrgueres artesanais e milkshakes incríveis em um ambiente retrô.
Cardápio variado com opções para todos os gostos, incluindo vegetarianos.`,
    imagem: "img/geracao-burguer.avif",
    endereco: "Av. Abdias de Carvalho, 500 - Madalena, Recife - PE"
  },
  "la-brasa": {
    nome: "La Brasa",
    nota: "4.5",
    descricao: `Steakhouse com cortes maturados e ambiente sofisticado.
Atendimento de alto padrão e carta de vinhos selecionada.`,
    imagem: "img/la-brasa.webp",
    endereco: "R. Amélia, 455 - Graças, Recife - PE"
  },
  "mafalda-hamburgueria": {
    nome: "Mafalda Hamburgueria",
    nota: "4.3",
    descricao: `Receitas criativas e sabores surpreendentes. Destaque para os molhos artesanais e burgers com nomes divertidos.
Ambiente jovem e descontraído.`,
    imagem: "img/mafalda-hamburgueria.png",
    endereco: "R. Cap. Rebelinho, 230 - Pina, Recife - PE"
  },
  "magalhaes-pizza": {
    nome: "Magalhães Pizza",
    nota: "4.4",
    descricao: `Pizzas finas e crocantes com ingredientes premium. Ideal para famílias e casais.
Massas artesanais e bom atendimento.`,
    imagem: "img/magalhaes-pizza.webp",
    endereco: "R. do Futuro, 322 - Aflitos, Recife - PE"
  },
  "lupi-pizzeria": {
    nome: "Lupi Pizzeria",
    nota: "4.5",
    descricao: `Tradição italiana com forno a lenha e massa leve. Sabores autênticos e ambiente moderno.
Destaque para a pizza de burrata e o tiramisù.`,
    imagem: "img/lupi-pizzeria.jpg",
    endereco: "R. Conselheiro Portela, 458 - Espinheiro, Recife - PE"
  },
  "1121-forneria": {
    nome: "1121 Forneria",
    nota: "4.4",
    descricao: `Forneria contemporânea com pães artesanais quentinhos e pizzas de fermentação natural.
Ambiente charmoso e ideal para encontros românticos.`,
    imagem: "img/1121-forneria.jpg",
    endereco: "Av. Rui Barbosa, 1121 - Graças, Recife - PE"
  }
};

const dados = restaurantes[restauranteId];

if (dados) {
  document.getElementById("restaurante-nome").textContent = dados.nome;
  document.getElementById("restaurante-nota").textContent = "⭐ " + dados.nota;
  document.getElementById("restaurante-descricao").textContent = dados.descricao;
  document.getElementById("restaurante-imagem").src = dados.imagem;
  document.getElementById("restaurante-endereco").textContent = dados.endereco;
} else {
  document.body.innerHTML = "<h2>Restaurante não encontrado 😢</h2>";
}
