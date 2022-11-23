module.exports = {
  server: {
    port: 3000,
    api_version: process.env.API_VERSION || "v1",
    stripe_key:
      "sk_test_51M4BSlETbyJ91Wc8PgHdSewpb28lLp8p4tumelWmjumWlephRMHiw9CmPAKK7Ri1eb8rXLK4Qj6sBiJlNAENCFON00l62x8lCf",
  },

  mysql: {
    database: process.env.MYSQL_DATABASE || "myplatz",
    username: process.env.MYSQL_USERNAME || "root",
    password: process.env.MYSQL_PASSWORD || "",
    host: process.env.MYSQL_HOST || "localhost",
    dialect: "mysql",
  },

  token:{
    SEED:"secrect",
    expiration:"24h"
  }
};
