const hideMenuPanel = document.querySelector(".panel-hider")
const showAddressPanel = document.querySelector(".address-panel")
const titleChange = document.querySelector("#title-change")
const openOrderModal = document.querySelectorAll("[data-open]")
const closeOrderModal = document.querySelectorAll("[data-close]")
const isVisible = "is-visible"
const pizzaSize = document.getElementsByName('psize')

function getValues(){
  const psizeGetter = document.getElementsByName("psize")
  const extrasGetter= document.getElementsByName("extra")
  let size, extra;
  
  psizeGetter.forEach(element => {
    if(element.checked) size = element.value
  });
  extrasGetter.forEach(element => {
    if(element.checked) extra = element.value
  });
  const order = {
    size: size,
    extra: extra
  }
  localStorage.setItem("orderValues", size,extra)
}

function panelChange(){
    getValues()
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

function setModalValues(){
  const order = localStorage.getItem("orderValues")
  const pizzaSize = document.getElementById("psize-value")
  const orderExtras = document.getElementById("order-extra-input")
  pizzaSize.innerText = order
  orderExtras.innerText = order
}
