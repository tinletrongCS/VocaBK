module.exports = (sequelize, DataTypes) => {
  const Vocabulary = sequelize.define('Vocabulary', {
    // Từ tiếng Anh
    eng_word: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    // Nghĩa tiếng Việt 
    vie_meaning: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'vocabulary', 
    timestamps: false, 
  });

  return Vocabulary;
};

