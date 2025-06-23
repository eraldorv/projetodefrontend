const params = new URLSearchParams(window.location.search);
const restauranteId = params.get('id');

const restaurantes = {
  "coco-bambu": {
    nome: "Coco Bambu",
    nota: "4.9",
    descricao: `Marisqueira com pratos generosos e ambiente elegante. Ideal para ocasiões especiais e jantares em grupo.
Oferece pratos fartos, com destaque para frutos do mar e moquecas. Ambiente sofisticado com atendimento de qualidade.
Possui espaço kids, carta de vinhos e áreas climatizadas.`,
   imagemicone: "img/restaurantes/Coco Bambu/cocobambu.png", 
    imagem1: "img/restaurantes/Coco Bambu/cocobambu1.png",
    imagem2: "img/restaurantes/Coco Bambu/cocobambu2.png",
    endereco: "Av. Gov. Agamenon Magalhães, 2132 - Derby, Recife - PE, 52010-075"
  },
  "chica-pitanga": {
    nome: "Chica Pitanga",
    nota: "4.8",
    descricao: `Sabores regionais em ambiente acolhedor. Um dos self-services mais tradicionais de Boa Viagem.
Grande variedade de pratos nordestinos e contemporâneos com ótimo custo-benefício.`,
    imagemicone: "img/restaurantes/Chica Pitanga/chicapitanga.png", 
    imagem1: "img/restaurantes/Chica Pitanga/chicapitanga1.png",
    imagem2: "img/restaurantes/Chica Pitanga/chicapitanga2.png",
    endereco: "R. Petrolina, 19 - Boa Viagem, Recife - PE, 51021-250"
  },
  "sal-e-brasa": {
    nome: "Sal e Brasa",
    nota: "4.9",
    descricao: `Rodízio de carnes premium e ótimo buffet de saladas, massas e sobremesas.
Ambiente espaçoso e ideal para eventos em família. Atendimento ágil e cortes nobres.`,
    imagemicone: "img/restaurantes/Sal e Brasa/sal e brasa.png", 
    imagem1: "img/restaurantes/Sal e Brasa/salebrasa1.png",
    imagem2: "img/restaurantes/Sal e Brasa/salebrasa2.png",
    endereco: "Av. Pres. Dutra, 451 - Ibura, Recife - PE, 51200-235"
  },
  "bode-do-no": {
    nome: "Bode do Nô",
    nota: "4.7",
    descricao: `Comida nordestina autêntica com aquele toque caseiro. Destaque para pratos com carne de bode, sarapatel e feijão verde.
Ambiente simples e muito acolhedor.`,
    imagemicone: "img/restaurantes/Bode do Nô/bode do no.png", 
    imagem1: "img/restaurantes/Bode do Nô/bodedono1.png",
    imagem2: "img/restaurantes/Bode do Nô/bodedono2.png",
    endereco: "Rua Dr. João Guilherme Pontes Sobrinho, 245 - Boa Viagem, Recife - PE, 51021-090"
  },
  "restaurante-leite": {
    nome: "Restaurante Leite",
    nota: "4.6",
    descricao: `O clássico de Recife, tradição e pratos refinados. Fundado em 1882, é o restaurante mais antigo do Brasil em atividade.
Foco em culinária portuguesa com ambiente elegante.`,
    imagemicone: "img/restaurantes/Restaurante Leite/restaurante leite.jpg", 
    imagem1: "img/restaurantes/Restaurante Leite/restauranteleite1.png",
    imagem2: "img/restaurantes/Restaurante Leite/restauranteleite2.png",
    endereco: "Praça Joaquim Nabuco, 147 - Santo Antônio, Recife - PE, 50010-480"
  },
  "casa-da-parrilla": {
    nome: "Casa da Parrilla",
    nota: "4.5",
    descricao: `Churrasco argentino com cortes selecionados e acompanhamentos especiais.
Ambiente rústico e sofisticado, ideal para apreciadores de carne.`,
    imagemicone: "img/restaurantes/Casa da Parrilla/casa da parrilla.jpg", 
    imagem1: "img/restaurantes/Casa da Parrilla/casadaparrilla1.png",
    imagem2: "img/restaurantes/Casa da Parrilla/casadaparrilla2.png",
    endereco: "Estr. de Belém, n672 - Encruzilhada, Recife - PE, 52031-000"
  },
  "geracao-burguer": {
    nome: "Geração Burguer",
    nota: "4.4",
    descricao: `Hambúrgueres artesanais e milkshakes incríveis em um ambiente retrô.
Cardápio variado com opções para todos os gostos, incluindo vegetarianos.`,
    imagemicone: "img/restaurantes/Geração Burguer/geraçao burguer.png", 
    imagem1: "img/restaurantes/Geração Burguer/geraçaoburguer1.png",
    imagem2: "img/restaurantes/Geração Burguer/geraçaoburguer2.png",
    endereco: "Km 9.8, 8986, Estr. de Aldeia - Vera Cruz, Camaragibe - PE, 54786-013"
  },
  "la-brasa": {
    nome: "La Brasa",
    nota: "4.5",
    descricao: `Steakhouse com cortes maturados e ambiente sofisticado.
Atendimento de alto padrão e carta de vinhos selecionada.`,
    imagemicone: "img/restaurantes/La Brasa/la brasa.png", 
    imagem1: "img/restaurantes/La Brasa/labrasa1.png",
    imagem2: "img/restaurantes/La Brasa/labrasa2.png",
    endereco: "R. Santo Elías, 49 - Espinheiro, Recife - PE, 52020-095"
  },
  "mafalda-hamburgueria": {
    nome: "Mafalda Hamburgueria",
    nota: "4.3",
    descricao: `Receitas criativas e sabores surpreendentes. Destaque para os molhos artesanais e burgers com nomes divertidos.
Ambiente jovem e descontraído.`,
    imagemicone: "img/restaurantes/Mafalda Hamburgueria/mafalda hamburgueria.png", 
    imagem1: "img/restaurantes/Mafalda Hamburgueria/mafaldahamburgueria1.PNG",
    imagem2: "img/restaurantes/Mafalda Hamburgueria/mafaldahamburgueria2.PNG",
    endereco: "Estr. Real do Poço, 97 - Poço da Panela, Recife - PE, 52061-200"
  },
  "magalhaes-pizza": {
    nome: "Magalhães Pizza",
    nota: "4.4",
    descricao: `Pizzas finas e crocantes com ingredientes premium. Ideal para famílias e casais.
Massas artesanais e bom atendimento.`,
    imagemicone: "img/restaurantes/Magalhães Pizza/magalhaes pizza.png", 
    imagem1: "img/restaurantes/Magalhães Pizza/magalhaespizza1.png",
    imagem2: "img/restaurantes/Magalhães Pizza/magalhaespizza2.png",
    endereco: "R. Fernando Ferrari, 59 - Ipsep, Recife - PE, 51190-170"
  },
  "lupi-pizzeria": {
    nome: "Lupi Pizzeria",
    nota: "4.5",
    descricao: `Tradição italiana com forno a lenha e massa leve. Sabores autênticos e ambiente moderno.
Destaque para a pizza de burrata e o tiramisù.`,
    imagemicone: "img/restaurantes/Lupi Pizzeria/lupi pizzeria.jpg", 
    imagem1: "img/restaurantes/Lupi Pizzeria/lupipizzeria1.png",
    imagem2: "img/restaurantes/Lupi Pizzeria/lupipizzeria2.png",
    endereco: "R. José Domingues da Silva, 238 - Boa Viagem, Recife - PE, 51030-070"
  },
  "1121-forneria": {
    nome: "1121 Forneria",
    nota: "4.4",
    descricao: `Forneria contemporânea com pães artesanais quentinhos e pizzas de fermentação natural.
Ambiente charmoso e ideal para encontros românticos.`,
    imagemicone: "img/restaurantes/1121 Forneria/1121forneria.png", 
    imagem1: "img/restaurantes/1121 Forneria/1121forneria1.png",
    imagem2: "img/restaurantes/1121 Forneria/1121forneria2.png",
    endereco: "Av. Conselheiro Aguiar, 323 - Boa Viagem, Recife - PE, 51110-131"
  },
  "hamburgrill": {
    nome: "Hamburgrill",
    nota: "4.2",
    descricao: `Hamburgueria com vibe rock’n’roll e decoração alternativa.
Serve burgers grelhados suculentos, molhos artesanais e porções.
Localizada em Poço da Panela, ambiente descolado.`,
    imagemicone: "img/restaurantes/Hamburgrill/hamburgrill.png",
    imagem1: "img/restaurantes/Hamburgrill/hamburgrill1.png",
    imagem2: "img/restaurantes/Hamburgrill/hamburgrill2.png",
    endereco: "Av. Eng. Domingos Ferreira, 1000 - Pina, Recife - PE, 51011-050" 
  },
  "laca-burguer": {
    nome: "Laça Burguer",
    nota: "4.1",
    descricao: `Hambúrgueres artesanais com ingredientes frescos e molhos especiais.
Ambiente jovem e familiar, ideal para lanche e almoço descontraído.
Unidade Boa Viagem na Av. Domingos Ferreira.`,
    imagemicone: "img/restaurantes/Laca Burguer/laça burguer.png",
    imagem1: "img/restaurantes/Laca Burguer/laçaburguer1.png",
    imagem2: "img/restaurantes/Laca Burguer/laçaburguer2.png",
    endereco: "Av. Eng. Domingos Ferreira, 3742 - Boa Viagem, Recife - PE, 51030-020" 
  },
  "232-burguer": {
    nome: "232 Burguer",
    nota: "4.3",
    descricao: `Hamburgueria urbana com receitas exclusivas e smash burgers.
Oferece combos, delivery e retirada no local.
Instalada na Torre, próximo ao centro histórico.`,
    imagemicone: "img/restaurantes/232 Burguer/232 burguer.png",
    imagem1: "img/restaurantes/232 Burguer/232burguer1.png",
    imagem2: "img/restaurantes/232 Burguer/232burguer2.png",
    endereco: "R. Ascendino Neves, 29 - Torre, Recife - PE, 50710-070" 
  },
  "visca-burguer": {
    nome: "Visca Burguer",
    nota: "4.0",
    descricao: `Hamburgueria temática inspirada na cultura espanhola.
Serve burgers saborosos e petiscos em ambiente descontraído.
Localizada em Boa Viagem, ambiente informal.`,
    imagemicone: "img/restaurantes/Visca Burguer/visca burguer.png",
    imagem1: "img/restaurantes/Visca Burguer/viscaburguer1.png",
    imagem2: "img/restaurantes/Visca Burguer/viscaburguer2.png",
    endereco: "Av. Visc. de Jequitinhonha, 535 - Boa Viagem, Recife - PE, 51021-190" 
  },
  "404-hamburguer": {
    nome: "404 Hamburgueria",
    nota: "4.2",
    descricao: `Hambúrgueres criativos com nomes de humor e combinações únicas.
Ambiente casual, ideal para grupos e jovens.
Localizado em Tamarineira, perto da Ferreira Costa.`,
    imagemicone: "img/restaurantes/404 Hamburguer/404 hamburgueria.png",
    imagem1: "img/restaurantes/404 Hamburguer/404hamburgueria1.png",
    imagem2: "img/restaurantes/404 Hamburguer/404hamburgueria2.png",
    endereco: "R. Silveira Líra, 102 - Tamarineira, Recife - PE, 52051-010" 
  },
  "nave-burger": {
    nome: "Nave Burger",
    nota: "4.3",
    descricao: `Hamburgueria com temática espacial e ambiente divertido.
Especializada em smash burgers premium e combos criativos.
Unidade na Torre, bem avaliada pelos locais.`,
    imagemicone: "img/restaurantes/Nave Burger/nave burger.png",
    imagem1: "img/restaurantes/Nave Burger/nave burger1.png",
    imagem2: "img/restaurantes/Nave Burger/nave burger2.jpg",
    endereco: "R. da Hora, 855 - Espinheiro, Recife - PE, 52020-010" 
  },
  "barteco": {
    nome: "Barteco",
    nota: "4.5",
    descricao: `Bar animado com petiscos variados e drinks especiais.
Ambiente descontraído, ideal para happy hour com amigos.
Fica em Iputinga, na Rua do Bom Pastor.`,
    imagemicone: "img/restaurantes/Barteco/barteco.jpg",
    imagem1: "img/restaurantes/Barteco/barteco1.png",
    imagem2: "img/restaurantes/Barteco/barteco2.png",
    endereco: "R. Bom Pastor, 366 - Iputinga, Recife - PE, 50670-260" 
  },
  "jockey-365-bar": {
    nome: "Jockey 365 Bar",
    nota: "4.6",
    descricao: `Bar e restaurante com chopp gelado e petiscos clássicos.
Ambiente acolhedor com happy hour diário.
Localizado no Prado, próximo ao Hipódromo.`,
    imagemicone: "img/restaurantes/Jockey 365 Bar/jockey 365 bar.jpg",
    imagem1: "img/restaurantes/Jockey 365 Bar/jockey 365 bar1.jpg",
    imagem2: "img/restaurantes/Jockey 365 Bar/jockey 365 bar2.jpg",
    endereco: "R. Carlos Gomes, 640 - Prado, Recife - PE, 50720-110" 
  },
  "bar-do-cuscuz-recife": {
    nome: "Bar do Cuscuz Recife",
    nota: "4.7",
    descricao: `Bar rústico com foco em culinária nordestina e cuscuz típico.
Ambiente familiar e acolhedor com pratos regionais.
Localizado em Boa Viagem, ótimo para refeições leves.`,
    imagemicone: "img/restaurantes/Bar do Cuscuz Recife/bar do cuscuz.png",
    imagem1: "img/restaurantes/Bar do Cuscuz Recife/bar do cuscuz recife1.png",
    imagem2: "img/restaurantes/Bar do Cuscuz Recife/bar do cuscuz recife2.png",
    endereco: "Av. Fernando Simões Barbosa, 170 - Boa Viagem, Recife - PE, 51020-390"
  },
  "barchef-boteco": {
    nome: "Barchef Boteco",
    nota: "4.4",
    descricao: `Boteco moderno com petiscos gourmet e drinks criativos.
Ambiente charmoso, perfeito para happy hour.
Fica na Av. Conselheiro Aguiar, em Boa Viagem.`,
    imagemicone: "img/restaurantes/Barchef Boteco/barchef boteco.png",
    imagem1: "img/restaurantes/Barchef Boteco/barchef boteco1.png",
    imagem2: "img/restaurantes/Barchef Boteco/barchef boteco2.png",
    endereco: "Av. Conselheiro Aguiar, 2814 - Boa Viagem, Recife - PE, 51020-020" 
  },
  "boteco-ibiza": {
    nome: "Boteco Ibiza",
    nota: "4.3",
    descricao: `Bar vibrante com temática espanhola e ambiente animado.
Oferece tapas, petiscos e drinks refrescantes.
Localizado no Jardim São Paulo, clima descontraído.`,
    imagemicone: "img/restaurantes/Boteco Ibiza/boteco ibiza.jpg",
    imagem1: "img/restaurantes/Boteco Ibiza/botecoibiza1.jpg",
    imagem2: "img/restaurantes/Boteco Ibiza/botecoibiza2.png",
    endereco: "R. Alfredo Rolim, 91 - Jardim São Paulo, Recife - PE, 50781-750" 
  },
  "boteco-365": {
    nome: "Boteco 365",
    nota: "4.2",
    descricao: `Boteco eclético com petiscos variados e bebidas.
Ambiente acolhedor ideal para encontros informais.
Funciona o dia todo, situado na Madalena.`,
    imagemicone: "img/restaurantes/Boteco 365/boteco 365.png",
    imagem1: "img/restaurantes/Boteco 365/boteco 3651.png",
    imagem2: "img/restaurantes/Boteco 365/boteco 3652.png",
    endereco: "R. Benfica, 505 - Madalena, Recife - PE, 50720-001" 
  },
  "tatu-bola-recife": {
    nome: "Tatu Bola Recife",
    nota: "4.6",
    descricao: `Bar rústico-chic com decoração temática e música ao vivo.
Famoso por drinks elaborados e petiscos criativos.
Localizado de frente ao mar, no Pina.`,
    imagemicone: "img/restaurantes/Tatu Bola Recife/tatu bola recife.png",
    imagem1: "img/restaurantes/Tatu Bola Recife/tatu bola recife1.png",
    imagem2: "img/restaurantes/Tatu Bola Recife/tatu bola recife2.png",
    endereco: "Av. Herculano Bandeira, 21 - Pina, Recife - PE, 51011-000" 
  },
  "maverick-garage": {
    nome: "Maverick Garage",
    nota: "4.0",
    descricao: `Bar temático de carros e rock’n’roll com vibe alternativa.
Serve hambúrgueres e cervejas artesanais geladas.
Localizado nos Aflitos, ponto alternativo e cultural.`,
    imagemicone: "img/restaurantes/Maverick Garage/maverick garage.png",
    imagem1: "img/restaurantes/Maverick Garage/maverick garage1.png",
    imagem2: "img/restaurantes/Maverick Garage/maverick garage2.png",
    endereco: "Rua Manuel de Carvalho, 481 - Aflitos, Recife - PE, 52050-370" 
  },
  "all-bar": {
    nome: "All Bar",
    nota: "4.1",
    descricao: `Bar versátil com petiscos, pratos e drinks variados.
Ambiente acolhedor, ideal para diferentes ocasiões.
Localizado no Espinheiro, clima charmoso e descontraído.`,
    imagemicone: "img/restaurantes/All Bar/all bar.png",
    imagem1: "img/restaurantes/All Bar/all bar1.png",
    imagem2: "img/restaurantes/All Bar/all bar2.png",
    endereco: "R. Barão de Itamaracá, 10 - Espinheiro, Recife - PE, 52020-070" 
  },
  "beerdock": {
    nome: "Beerdock",
    nota: "4.5",
    descricao: `Hub de cervejas artesanais com grande variedade de rótulos.
Acompanha petiscos pensados para harmonização.
Unidades em Boa Viagem e Casa Forte.`,
    imagemicone: "img/restaurantes/Beerdock/beerdock.png",
    imagem1: "img/restaurantes/Beerdock/beerdock1.png",
    imagem2: "img/restaurantes/Beerdock/beerdock2.png",
    endereco: "Rua Professor Eduardo Wanderley Filho, 242 - Boa Viagem, Recife - PE, 51020-170" 
  },
    "spazio-burguer-recife": {
    nome: "Spazio Burger Recife",
    nota: "4.3",
    descricao: `Hambúrgueres artesanais gourmet num ambiente moderno e acolhedor.
Combinações sofisticadas com ingredientes selecionados.
Unidade Torre próxima ao Colégio Santa Maria.`,
    imagemicone: "img/restaurantes/Spazio Burguer Recife/spazio burger recife.jpg",
    imagem1: "img/restaurantes/Spazio Burguer Recife/spazioburger1.png",
    imagem2: "img/restaurantes/Spazio Burguer Recife/spazioburger1.png",
    endereco: "R. Padre Bernadino Pessoa, 374 - Loja 1 - Boa Viagem, Recife - PE, 52051-270" 
  },
  "caldinho-do-nenem": {
    nome: "Caldinho do Neném",
    nota: "4.7",
    descricao: `Clássico recifense famoso por caldinhos variados saborosos.
Ambiente simples e acolhedor, ótimo com uma cervejinha.
Localizado no Pina, referência local gastronômica.`,
    imagemicone: "img/restaurantes/Caldinho do Neném/caldinho do nenem.jpg",
    imagem1: "img/restaurantes/Caldinho do Neném/caldinhodonenem1.png",
    imagem2: "img/restaurantes/Caldinho do Neném/caldinhodonenem2.png",
    endereco: "R. Nogueira de Souza, 375 - Pina, Recife - PE, 51110-110" 
  },
  "parada-obrigatoria": {
    nome: "Parada Obrigatória",
    nota: "4.0",
    descricao: `Restaurante de comida caseira em ambiente acolhedor.
Perfeito para refeições rápidas com toque familiar.
Unidade Graças bem localizada e aconchegante.`,
    imagemicone: "img/restaurantes/Parada Obrigatoria/parada obrigatoria.png",
    imagem1: "img/restaurantes/Parada Obrigatoria/parada obrigatoria1.jpg",
    imagem2: "img/restaurantes/Parada Obrigatoria/parada obrigatoria2.jpg",
    endereco: "R. Cardeal Arcoverde, 315 - Graças, Recife - PE, 52011-240" 
  },
  "yokocho-izakaya": {
    nome: "Yokocho Izakaya",
    nota: "4.8",
    descricao: `Izakaya com petiscos e pratos japoneses autênticos.
Drinks típicos do Japão num ambiente acolhedor e temático.
Localizado na Torre, estilo “beco japonês” acolhedor.`,
    imagemicone: "img/restaurantes/Yokocho Izakaya/yokocho izakaya.png",
    imagem1: "img/restaurantes/Yokocho Izakaya/yokochoizakaya1.png",
    imagem2: "img/restaurantes/Yokocho Izakaya/yokochoizakaya2.png",
    endereco: "R. Padre Anchieta, 291 - Torre, Recife - PE, 50710-430" 
  }
};

console.log("ID do restaurante na URL:", restauranteId);

const dados = restaurantes[restauranteId];

if (dados) {
  document.getElementById("restaurante-nome").textContent = dados.nome.toUpperCase();
  document.getElementById("restaurante-nota").textContent = "⭐ " + dados.nota;
  document.getElementById("restaurante-descricao").textContent = dados.descricao;

  document.getElementById("restaurante-imagemicone").src = dados.imagemicone;
  document.getElementById("restaurante-imagem1").src = dados.imagem1;
  document.getElementById("restaurante-imagem2").src = dados.imagem2;

  const enderecoLink = document.getElementById("restaurante-endereco");
  enderecoLink.textContent = dados.endereco;
  enderecoLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dados.endereco)}`;
}