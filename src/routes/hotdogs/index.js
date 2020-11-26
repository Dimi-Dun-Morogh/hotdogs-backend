const express = require('express');

const router = express.Router();

const {
  getAllHotdogs,
  createHotdog,
  updateHotdog,
  deleteHotdog,
} = require('../../controllers/hotdogs.controller');

// get all hotdogs
router.get('/', async (req, res) => {
  try {
    const response = await getAllHotdogs();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// create a hotdog
router.post('/', async (req, res) => {
  try {
    const response = await createHotdog(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update a hotdog
router.put('/:id', async (req, res) => {
  try {
    const response = await updateHotdog({ ...req.body, id: req.params.id });
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete a hotdog
router.delete('/:id', async (req, res) => {
  try {
    const response = await deleteHotdog(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
