const { Router } = require('express');
const router = Router();

router.get('/tasks', (req, res) => {
    res.send('Returning a list of task')
})

router.get('/tasks/:Taskid', (req, res) => {
    const { Taskid } = req.params;
    res.send('Returning a singletask')
})

router.post('/tasks', (req, res) => {
    res.send('Creating a task')
})

router.delete('/tasks', (req, res) => {
    res.send('Deleating a task')
})

router.put('/tasks', (req, res) => {
    res.send('Updating a task')
})


module.exports = router;