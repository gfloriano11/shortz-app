const User  = require('../modules/users/userModel');
const Video = require('../modules/video/videoModel');

User.hasMany(Video,   { foreignKey: 'userId' });
Video.belongsTo(User, { foreignKey: 'userId' });