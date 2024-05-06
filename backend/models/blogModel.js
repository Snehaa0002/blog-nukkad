const { model,Schema, Types } = require('../connection');

const mySchema = new Schema({
    user :{ type : Types.ObjectId, ref: 'user'},
    title : { type: String, unique: true },
    cover : String,
    description: String,
    content: String,
    createdAt: { type : Date,default: Date.now }
});

module.exports = model('blog', mySchema);
    