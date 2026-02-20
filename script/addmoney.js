document.getElementById("add-money-btn").addEventListener("click", function() {
    const bankName = getValueFromInput("add-bank-name");
    const bankAccount = getValueFromInput("add-bank-account-number");
    const moneyAmount = getValueFromInput("add-money-amount");
    const pinNumber = getValueFromInput("add-bank-pin");
    
    
    const currentBalance = getBalance();



    // transaction history 
    

    if (bankName == "Select bank") {
        alert("Please select your bank name!");
        
        return;
    }
    if (bankAccount == '0123456789' && pinNumber == '1234') {
        const newBalance = currentBalance + Number(moneyAmount);
        setBalance(newBalance);
        const history = document.getElementById("history-card");
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-200">
                Add money success from ${bankAccount} and amount is: ${moneyAmount} ${new Date()}. Total amount is: ${newBalance}
            </div>
        `;
        history.append(newHistory);
    } else {
        alert("Invalid Bank Statement!");
        return;
    }
})