module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Music', {
    musicname: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    }
  },{
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })}