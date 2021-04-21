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