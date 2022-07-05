

import { Knex } from 'knex';


interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client:"postgres",
    connection: async () => {
        return {
          host : 'localhost',
          port : 5432,
          user : 'postgres',
          password : "1",
          database : 'bookgram',
          
        };
      },
    debug:true,
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bookgram',
      user: 'postgres',
      password: '1',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'bookGram',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'bookgram',
      user: 'username',
      password: '1',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'bookGram',
    },
  },
};

export default configs;