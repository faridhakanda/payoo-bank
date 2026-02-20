function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getValueFromText(id) {
    const text = document.getElementById(id);
    const value = text.innerText;
    return value;
}

function getBalance() {
    const balance = document.getElementById("balance");
    const value = balance.innerText;
    return Number(value);
}

function setBalance(value) {
    const balance = document.getElementById("balance");
    balance.innerText = value;
}

function returnID(id) {
    const selectedId = document.getElementById(id);
    return selectedId;
}

function showOnly(id) {
    //const addMoney = document.getElementById("addmoney");
    //const cashOut = document.getElementById("cashout");
    const addMoney = returnID('addmoney');
    const cashOut = returnID('cashout');
    const transferMoney = returnID('transfermoney');
    const getBonus = returnID('getbonus');
    const payBill = returnID('paybill');
    const transaction = returnID('transaction');

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transaction.classList.add("hidden");

    
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
}