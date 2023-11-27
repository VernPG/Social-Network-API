const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
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

// /api/Users/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/Users/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
