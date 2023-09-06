// Definindo uma função construtora chamada Calculadora
function Calculadora () {
  // Captura o elemento HTML com a classe "display" e o armazena na propriedade "display"
  this.display = document.querySelector('.display');

  // Método para inicializar a calculadora
  this.inicia = () => {
    this.capturaClicks();
    this.capturaEnter(); 
  }

  // Método para capturar o evento da tecla "Enter"
  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  }

  // Método para capturar eventos de clique nos botões da calculadora
  this.capturaClicks = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear(); 
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };

  // Método para realizar o cálculo da expressão no display
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) { // Se o resultado for inválido (por exemplo, divisão por zero)
        alert('Conta inválida');
        return;
      }

      this.display.value = conta; // Exibe o resultado no display
    } catch(e) {
      alert('Conta inválida'); // Tratamento de erros (exceções)
      return;
    }
  }

  // Método para adicionar números ou operadores ao display
  this.addNumDisplay = el => {
    this.display.value += el.innerText; // Adiciona o conteúdo do botão ao display
    this.display.focus(); // Coloca o foco de volta no display
  };

  // Método para limpar o display
  this.clear = () => this.display.value = '';

  // Método para apagar o último caractere do display
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

// Cria uma instância da calculadora
const calculadora = new Calculadora();

// Inicializa a calculadora
calculadora.inicia();
