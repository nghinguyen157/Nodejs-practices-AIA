const User = require('../model/user');

exports.getAllUser = async () => {
    return await User.find({});
  };
   
exports.createUser = async (userReq) => {
    const user = new User(userReq);
    return await user.save();
};

exports.getUserById = async (id) => {
return await User.findById(id);
};

exports.updateUser = async (id, user) => {
  console.log(user)
  let res = await User.findByIdAndUpdate(id, user, {
    returnOriginal: false
  }); // check
  console.log(res);
  return res;
};

exports.deleteUser = async (id) => {
return await User.findByIdAndDelete(id);
};

