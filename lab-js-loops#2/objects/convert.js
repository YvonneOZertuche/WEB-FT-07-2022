

data = `
{
    "id": 757,
    "uid": "33806b73-8613-4d0b-b41b-fb447411c9c6",
    "plan": "Free Trial",
    "status": "Idle",
    "payment_method": "Apple Pay",
    "subscription_term": "Biennal",
    "payment_term": "Monthly"
    }
`
let obj = JSON.parse(data)

console.log(obj);