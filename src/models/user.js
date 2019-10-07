'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    guid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    loggedtime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    phone: {
      type: DataTypes.STRING(18),
      validate: {
          isUnique(value, next) {
            user.find({
              where: { phone: value },
              attributes: ['guid']
            }).done((user) => {
              if (user)
                return next('Phone address already in use!');

              next();
            });
          }
      },
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    timestamps: true
  });

  user.associate = function() {
    // associations can be defined here
  };

  return user;
};