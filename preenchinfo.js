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
          "sal-e-brasa": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "bode-do-no": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "restaurante-leite": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "casa-da-parrilla": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "geracao-burguer": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "la-brasa": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "mafalda-hamburgueria": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "magalhaes-pizza": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "lupi-pizzeria": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
          },
          "1121-forneria": {
            nome: "AQUI JAZ O NOME DO RESTAURANTE...",
            nota: "ESSA E A NOTA DO RESTAURANTE",
            descricao: "ESSA E A DESCRIÇÃO DO RESTAURANTE...",
            imagem: "https://media.tenor.com/p19XPWcukM4AAAAM/lancer-deltarune.gif"
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
