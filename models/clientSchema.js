const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const client = new Schema({

    password: {
        type: String,
        max: 1024,
        default: ""
    },
  
    email: {
        type: String,
         
          trim: true,

    },
    username: {
        type: String,
         


    },

}, {timestamps: true})

client.statics.login = async function(email, password) {
    const client = await this.findOne({ email });
    if (client) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return client;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};


module.exports = mongoose.model('client', client)





