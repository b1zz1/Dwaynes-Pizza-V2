const hideMenuPanel = document.querySelector(".panel-hider")
const showAddressPanel = document.querySelector(".address-panel")
const titleChange = document.querySelector("#title-change")
const openOrderModal = document.querySelectorAll("[data-open]")
const closeOrderModal = document.querySelectorAll("[data-close]")
const isVisible = "is-visible"
const pizzaSize = document.getElementsByName('psize')
const displayPizzaSize = document.querySelector("#psize-input")

function panelChange(){
    hideMenuPanel.style.display = 'none'; //esconder o painel de pedido
    showAddressPanel.style.display = 'block'; //mostrar o painel de endereço
    titleChange.innerHTML = "ENDEREÇO"; //mudar o título da página de 'pedido para 'endereço'
}

for(const el of openOrderModal){
    el.addEventListener("click", function(){
        const modalID = this.dataset.open
        document.getElementById(modalID).classList.add(isVisible)
    })

}
//fecha o modal pelo botão X
for (const el of closeOrderModal) {
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }

  function pizzaSizeDisplay(){
    for(i = 0; i < pizzaSize.length; i++) {
      if (pizzaSize[i].checked) {
          displayPizzaSize.innerHTML = pizzaSize[i].value;
      }
    }
}