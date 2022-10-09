const hideMenuPanel = document.querySelector(".panel-hider")
const showAddressPanel = document.querySelector(".address-panel")
const titleChange = document.querySelector("#title-change")

function panelChange(){
    hideMenuPanel.style.display = 'none'; //esconder o painel de pedido
    showAddressPanel.style.display = 'block'; //mostrar o painel de endereço
    titleChange.innerHTML = "ENDEREÇO";
}