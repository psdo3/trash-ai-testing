const express = require('express');
const fileUpload = require('express-fileupload')
const {PythonShell} = require('python-shell');
const app = express();
const PORT = 5000;

app.use(express.static(__dirname + '/public'));
app.use(fileUpload());
app.post('/images', (req,res) =>{
    if (req.files == null) {
        return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/images/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName: file.name, filePath: `/images/${file.name}`});
    })

    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        pythonPath: 'D:/miniconda3/envs/imageai/python',
        args: [file.name]
    };

    PythonShell.run('model.py', options, function (err, result) {
        if (err) throw err;
        console.log(result.toString());
        //res.sendFile(`${__dirname}/public/output/${file.name}`);
        //res.send(result.toString());
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})