const express = require('express');
const Student = require('../models/Student');
const router = express.Router();


// ✅ CREATE student
router.post('/add', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json(err.message);
  }
});


// ✅ READ all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


// ✅ READ single student
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});


// ✅ UPDATE student
router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
});


// ✅ DELETE student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;
