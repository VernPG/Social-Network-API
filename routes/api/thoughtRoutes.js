const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:thoughtId
// router
//   .route('/:id')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

  // /api/thoughts/:thoughtId/reactions
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

  router.route('/:thoughtId/reactions').post(createReaction);

  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
