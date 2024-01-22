db.createUser(
    {
        user: "flamurroot",
        pwd: "test123root",
        roles: [
            {
                role: "readWrite",
                db: "todo"
            }
        ]
    }
);