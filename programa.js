document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelectorAll(".botao");
  let btnEspe = document.querySelectorAll(".especial");
  let tela = document.querySelector('#result');

  let trray = [];

  let bole = true;

  btn.forEach(botao => {
    botao.addEventListener("click", (event) => {
      let index = Array.from(btn).indexOf(event.currentTarget);
      if(tela.value == `` && index == 11){
        return;
      }
      let strin = btn[index].value; // Pega o texto do botão

      for(let i = 0; i < 100; i++){
        if(trray[i] == strin && strin == "."){
          return;
        }
      }

      tela.value += `${strin}`;
      bole = true;
      trray.push(strin);
    });
  });

  btnEspe.forEach(botao => {
    botao.addEventListener("click", (event) => {      
      let index = Array.from(btnEspe).indexOf(event.currentTarget);

      if(index != 0 && index != 1 && index != 7){
        if(tela.value == "" && (index == 2 || index == 3 || index == 4)){
          alert("Erro");
          return;
        }

        let strin = btnEspe[index].value; // Pega o texto do botão

        if(trray[trray.length - 1] == strin){
          return;
        }

        tela.value += `${strin}`;
        trray.push(strin);
        console.log(trray);

      }else if(index == 0){
        tela.value = ``;
        bole = true;
      }else if(index == 1){
        tela.value = tela.value.slice(0, -1);
      }
      if(index == 7 && tela.value == ``){
        alert("erro");
      }else if(index == 7){
        tela.value = eval(tela.value);
      }
    });
  });

});