module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        vocab: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meaning: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Posts
}