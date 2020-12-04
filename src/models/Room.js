const { Model } = require('sequelize')
const crypto = require('crypto')
const format = require('biguint-format')

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { History } = models

      Room.hasMany(History, {
        foreignKey: 'roomId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }

    static createRoom = () => {
      const id = format(crypto.randomBytes(2), 'dec')

      return this.create({
        id,
        roomName: id,
      })
    }
  }
  Room.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
<<<<<<< HEAD
      player1Id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      player2Id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      player1Choice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      player2Choice: {
        type: DataTypes.STRING,
        allowNull: true
      },
      result: {
        type: DataTypes.STRING,
        allowNull: true
=======
      roomName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
>>>>>>> 0476036... add History model
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'Room',
      tableName: 'Room',
    }
  )
  return Room
}
