// Update with your config settings.
//Saving URL here 
//https://github.com/Bryce-Soghigian/webapi-i-guided.git
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hubs.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
