const { model,Schema, Types } = require('../connection');

const mySchema = new Schema({
    title : { type : String, required: true},
    description : { type: String },
    cover : String,
    prize : String,
    endDate : Date,
    winner : {type : Types.ObjectId, ref : 'user'},
    resultDeclared: {type : Boolean, default: false},
    createdAt: { type : Date,default: Date.now }
});

module.exports = model('competition', mySchema);
    