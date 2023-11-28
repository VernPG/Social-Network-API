const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:thoughtId
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thoughts/:thoughtId/reactions

  router.route('/:thoughtId/reactions').post(createReaction);

  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
