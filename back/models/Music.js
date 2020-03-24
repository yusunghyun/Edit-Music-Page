module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Music', {
    title: {
      type: Sequelize.STRING,
      unique: true
    },
    artist: {
      type: Sequelize.STRING,
    },
    filepath: {
      type: Sequelize.STRING,
    },
    track: {
      type: Sequelize.STRING,
    },
    album: {
      type: Sequelize.STRING,
    },
    filename: {
      type: Sequelize.STRING,
    },

  },{
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })}