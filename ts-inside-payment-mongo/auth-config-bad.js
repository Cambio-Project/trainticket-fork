db.createUser({
    "user": "ts-user",
    "pwd": "hunter2",
    "roles": [
        {
            "role": "read",
            "db": "ts"
        }
    ]
});
// Add initial rows as well, due to semantic TT errors
db.payment.insert({
    "_id": "AFA31B7A9E76444ABA82E8896401CBFA",
    "_class": "inside_payment.entity.Payment",
    "orderId": "a27841df-7419-4ce5-9a51-283fdc335170",
    "userId": "d8da2293-a030-454a-9d10-8eeb5b7e4ace",
    "price": "50.0",
    "type": "O"
});
db.payment.insert({
    "_id":
        "BA9051CFE77644C580CEA488F2A82EC1", "_class":
        "inside_payment.entity.Payment", "orderId":
        "d7481c0e-d727-4fe8-8e76-11ee3b2ba117", "userId":
        "d8da2293-a030-454a-9d10-8eeb5b7e4ace", "price":
        "50.0", "type":
        "O"
});