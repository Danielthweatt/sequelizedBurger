module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: true,
        updatedAt: false
    });
    return Burger;
};