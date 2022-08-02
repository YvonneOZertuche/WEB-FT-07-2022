let data = JSON.parse(`
[
    {
    "id": 7121,
    "uid": "76711bb0-677b-4a25-bb19-b6cad8f63770",
    "plan": "Gold",
    "status": "Idle",
    "payment_method": "Bitcoins",
    "subscription_term": "Biennal",
    "payment_term": "Full subscription"
    },
    {
    "id": 7516,
    "uid": "ea927594-bb27-4d20-9758-92db39fc200f",
    "plan": "Student",
    "status": "Idle",
    "payment_method": "WeChat Pay",
    "subscription_term": "Lifetime",
    "payment_term": "Full subscription"
    },
    {
    "id": 7111,
    "uid": "e058c9b1-dba3-444d-8374-d67a2a9d01d2",
    "plan": "Basic",
    "status": "Active",
    "payment_method": "Money transfer",
    "subscription_term": "Lifetime",
    "payment_term": "Monthly"
    },
    {
    "id": 6573,
    "uid": "b698057c-3917-4d16-849d-ffc566d072e5",
    "plan": "Professional",
    "status": "Pending",
    "payment_method": "Cash",
    "subscription_term": "Annual",
    "payment_term": "Monthly"
    },
    {
    "id": 8302,
    "uid": "500758bb-8a96-4edd-86df-5b4bb79f63dd",
    "plan": "Business",
    "status": "Blocked",
    "payment_method": "Paypal",
    "subscription_term": "Biennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 4387,
    "uid": "27108959-ce5a-4bb2-b2e9-064e15d44e79",
    "plan": "Bronze",
    "status": "Active",
    "payment_method": "Paypal",
    "subscription_term": "Annual",
    "payment_term": "Monthly"
    },
    {
    "id": 2525,
    "uid": "9a80a5d0-afad-4b4b-9a3c-bee4de4a2717",
    "plan": "Free Trial",
    "status": "Idle",
    "payment_method": "Paypal",
    "subscription_term": "Biennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 819,
    "uid": "33a04763-6a96-4d6b-a132-0d0664869e74",
    "plan": "Starter",
    "status": "Blocked",
    "payment_method": "Cheque",
    "subscription_term": "Annual",
    "payment_term": "Annual"
    },
    {
    "id": 1539,
    "uid": "2713e44d-a77c-4e00-9053-6919651c6c56",
    "plan": "Starter",
    "status": "Active",
    "payment_method": "Paypal",
    "subscription_term": "Biennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 241,
    "uid": "70c4a9a8-a6f2-4870-b26b-bfcdc7708044",
    "plan": "Starter",
    "status": "Blocked",
    "payment_method": "Bitcoins",
    "subscription_term": "Weekly",
    "payment_term": "Annual"
    },
    {
    "id": 2301,
    "uid": "a30af0d9-3de9-42d0-811b-cef531a4e4f5",
    "plan": "Premium",
    "status": "Idle",
    "payment_method": "Cash",
    "subscription_term": "Triennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 4050,
    "uid": "78f61f19-b55b-466d-87c6-f17d2c6f4796",
    "plan": "Bronze",
    "status": "Blocked",
    "payment_method": "Money transfer",
    "subscription_term": "Biennal",
    "payment_term": "Monthly"
    },
    {
    "id": 4069,
    "uid": "4b772e22-c498-4817-be39-1b2983889d7f",
    "plan": "Bronze",
    "status": "Blocked",
    "payment_method": "Money transfer",
    "subscription_term": "Triennal",
    "payment_term": "Monthly"
    },
    {
    "id": 4432,
    "uid": "33be1183-cb61-4d15-92ab-1ec58f59568f",
    "plan": "Diamond",
    "status": "Pending",
    "payment_method": "Cheque",
    "subscription_term": "Quinquennal",
    "payment_term": "Full subscription"
    },
    {
    "id": 6253,
    "uid": "988028f6-e13a-4210-8071-19105404b461",
    "plan": "Gold",
    "status": "Pending",
    "payment_method": "Google Pay",
    "subscription_term": "Daily",
    "payment_term": "Payment in advance"
    },
    {
    "id": 9886,
    "uid": "d30db65b-ffa3-4bb2-87da-eb01a1296a33",
    "plan": "Essential",
    "status": "Active",
    "payment_method": "Bitcoins",
    "subscription_term": "Biennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 1187,
    "uid": "d243cf44-026c-4b2f-8753-c517e254e285",
    "plan": "Starter",
    "status": "Blocked",
    "payment_method": "Cheque",
    "subscription_term": "Weekly",
    "payment_term": "Full subscription"
    },
    {
    "id": 2509,
    "uid": "fcaedd92-be94-4ca4-8216-96f44fbb5b64",
    "plan": "Diamond",
    "status": "Blocked",
    "payment_method": "Visa checkout",
    "subscription_term": "Quinquennal",
    "payment_term": "Annual"
    },
    {
    "id": 3270,
    "uid": "0bd67ef4-11b6-4257-8eb8-ab3f1b53a2fa",
    "plan": "Gold",
    "status": "Active",
    "payment_method": "Credit card",
    "subscription_term": "Daily",
    "payment_term": "Annual"
    },
    {
    "id": 1576,
    "uid": "8bb7b06c-b3dc-4ede-b974-63249ae59022",
    "plan": "Gold",
    "status": "Pending",
    "payment_method": "Alipay",
    "subscription_term": "Weekly",
    "payment_term": "Annual"
    },
    {
    "id": 524,
    "uid": "74bd85f4-7438-4970-b5cc-c73196c0dbbc",
    "plan": "Starter",
    "status": "Pending",
    "payment_method": "Money transfer",
    "subscription_term": "Monthly",
    "payment_term": "Full subscription"
    },
    {
    "id": 9424,
    "uid": "07e4e3d5-e558-4a9e-afde-54ec12070c7f",
    "plan": "Diamond",
    "status": "Active",
    "payment_method": "Cash",
    "subscription_term": "Daily",
    "payment_term": "Annual"
    },
    {
    "id": 4773,
    "uid": "2f81d026-38a1-4b49-b49a-0ed04f32e1b5",
    "plan": "Platinum",
    "status": "Active",
    "payment_method": "Paypal",
    "subscription_term": "Triennal",
    "payment_term": "Payment in advance"
    },
    {
    "id": 1554,
    "uid": "cb7432ac-8352-471a-9701-0e1eecdcbcbc",
    "plan": "Standard",
    "status": "Blocked",
    "payment_method": "Alipay",
    "subscription_term": "Weekly",
    "payment_term": "Annual"
    },
    {
    "id": 8235,
    "uid": "3a3dada6-99dc-4722-b696-3fc98943de3f",
    "plan": "Essential",
    "status": "Blocked",
    "payment_method": "Google Pay",
    "subscription_term": "Weekly",
    "payment_term": "Payment in advance"
    }
    ]
`)

module.exports = data;