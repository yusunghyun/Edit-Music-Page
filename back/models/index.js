const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Op = Sequelize.Op


let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {operatorsAliases:Sequelize.Op},
  );

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User=require('./User.js')(sequelize,Sequelize);

module.exports = db;
