module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'db_realty'),
        username: env('DATABASE_USERNAME', 'developer'),
        password: env('DATABASE_PASSWORD', '8fi3Eo7l1'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
      }
    },
  },
});
