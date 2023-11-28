const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:studentId
router.route('/:id').get(getUserById).put.apply(updateUser).delete(deleteUser);

// /api/Users/:studentId/friends
router.route('/:userId/friends').post(addFriend);

// /api/Users/:studentId/friends/:FriendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
