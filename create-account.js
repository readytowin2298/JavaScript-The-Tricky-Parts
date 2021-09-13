function createAccount(pin, amount) {
    let balance = amount || 0;
    return {
        checkBalance : function(code){
            return code === pin ? `$${balance}` : "Invalid PIN."
        },
        deposit : function(code, amt){
            if(code !== pin) return "Invalid PIN."
            balance += amt;
            return `Succesfully deposited $${amt}. Current balance: $${balance}.`;
        },
        withdraw : function(code, amt){
            if(code !== pin) return "Invalid PIN."
            if(amt > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            balance -= amt;
            return `Succesfully withdrew $${amt}. Current balance: $${balance}.`
        },
        changePin : function(code, newPin){
            if(code !== pin) return "Invalid PIN."
            pin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
