import Process from '../models/Process.js';

// @desc    Get all processes
// @route   GET /api/processes
// @access  Public
const getProcesses = async (req, res) => {
  const processes = await Process.find({});
  res.json(processes);
};

// @desc    Get process by ID
// @route   GET /api/processes/:id
// @access  Public
const getProcessById = async (req, res) => {
  const process = await Process.findById(req.params.id);

  if (process) {
    res.json(process);
  } else {
    res.status(404);
    throw new Error('Process not found');
  }
};

// @desc    Create a process
// @route   POST /api/processes
// @access  Private/Admin
const createProcess = async (req, res) => {
  const { title, description, icon, stepNumber, processType } = req.body;

  const process = await Process.create({
    title,
    description,
    icon,
    stepNumber,
    processType
  });

  if (process) {
    res.status(201).json(process);
  } else {
    res.status(400);
    throw new Error('Invalid process data');
  }
};

// @desc    Update a process
// @route   PUT /api/processes/:id
// @access  Private/Admin
const updateProcess = async (req, res) => {
  const { title, description, icon, stepNumber, processType } = req.body;

  const process = await Process.findById(req.params.id);

  if (process) {
    process.title = title || process.title;
    process.description = description || process.description;
    process.icon = icon || process.icon;
    process.stepNumber = stepNumber || process.stepNumber;
    process.processType = processType || process.processType;

    const updatedProcess = await process.save();
    res.json(updatedProcess);
  } else {
    res.status(404);
    throw new Error('Process not found');
  }
};

// @desc    Delete a process
// @route   DELETE /api/processes/:id
// @access  Private/Admin
const deleteProcess = async (req, res) => {
  const process = await Process.findById(req.params.id);

  if (process) {
    await process.deleteOne();
    res.json({ message: 'Process removed' });
  } else {
    res.status(404);
    throw new Error('Process not found');
  }
};

export {
  getProcesses,
  getProcessById,
  createProcess,
  updateProcess,
  deleteProcess
};