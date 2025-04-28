const db = require('./models');

// Dữ liệu mẫu gồm 10 từ vựng
const sampleData = [
  { eng_word: 'hello', vie_meaning: 'xin chào' },
  { eng_word: 'goodbye', vie_meaning: 'tạm biệt' },
  { eng_word: 'thank you', vie_meaning: 'cảm ơn' },
  { eng_word: 'please', vie_meaning: 'làm ơn' },
  { eng_word: 'sorry', vie_meaning: 'xin lỗi' },
  { eng_word: 'computer', vie_meaning: 'máy tính' },
  { eng_word: 'programming', vie_meaning: 'lập trình' },
  { eng_word: 'database', vie_meaning: 'cơ sở dữ liệu' },
  { eng_word: 'developer', vie_meaning: 'nhà phát triển' },
  { eng_word: 'application', vie_meaning: 'ứng dụng' },
  { eng_word: 'application', vie_meaning: 'ứng dụng' }
];

// Kết nối database và thêm dữ liệu
db.sequelize.sync()
  .then(() => {
    console.log('Database synced');
    
    return db.Vocabulary.bulkCreate(sampleData, {
      ignoreDuplicates: true // Bỏ qua nếu từ đã tồn tại
    });
  })
  .then(() => {
    console.log('Sample data added successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error adding sample data:', err);
    process.exit(1);
  });