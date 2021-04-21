db.createUser({
    "user": "ts-user",
    "pwd": "hunter2",
    "roles": [
        {
            "role": "readWrite",
            "db": "ts"
        }
    ]
});