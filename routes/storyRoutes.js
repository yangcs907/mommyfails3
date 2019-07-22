const express = require('express');
const router = express.Router();

const Story = require('../models/Story.js');

router.get('/test', (req, res) => {
  res.json({ msg: "Works!" })
});
// POST /story/post
router.post('/submit', (req, res) => {
  const newStory = new Story({
    name: req.body.name,
    email: req.body.email,
    bio: req.body.bio,
    childAge: req.body.childAge,
    location: req.body.location,
    occupation: req.body.occupation,
    storyTitle: req.body.storyTitle,
    story: req.body.story,
    lessons: req.body.lessons
  });
  newStory.save()
    .then(story => res.json(story))
    .catch(err => res.json(err));
});

module.exports = router;
