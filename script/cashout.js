
document.getElementById("cashout-btn").addEventListener("click", function() {
    //1-get the agent number & validate
    //2-get the amount, validate, convert to number
    //3-get the current balance, validate, convert to number
    //4-calculate new balance
    //5-get the pin and verify
    //5-1 true:: show an alert

    const agentNumber = getValueFromInput("cashout-number");
    const cashAmount = getValueFromInput("cashout-amount");
    const pin = getValueFromInput("cashout-pin");
    const balance = getBalance();
    
    if (agentNumber.length != 11) {
        alert("Invalid agent number!");
        return;
    } 
    if (agentNumber === "01234567890" && pin === '1234') {
        const newBalance = balance - Number(cashAmount);
        if (newBalance < 0 || cashAmount == 0) {
            alert("Invalid Amount!");
        } else {
            setBalance(newBalance);
            alert("Transaction is Successful!");
            const history = document.getElementById("history-card");
            const newHistory = document.createElement("div")
            newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-200">
                    Cashout money success from ${agentNumber} and amount is: ${cashAmount} ${new Date()}. 
                    Total amount is: ${newBalance}
                </div>
            `;
            history.append(newHistory);
        }
    } else {
        alert("Invalid Transaction!");
        return;
    }
})

