const express = require('express');

<<<<<<< HEAD
app.use(fileUpload());

app.post('/images', (req,res) =>{
    if(req.files==null){
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
=======
const app = express();
const {PythonShell} = require('python-shell');

const PORT = 3000;
const IMAGES_PATH = "C:\\Users\\Huy\\Documents\\Code\\trash-ai\\backend-nodejs\\output\\out.jpg";

app.get("/", (req, res, next) => {
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        pythonPath: 'D:/miniconda3/envs/imageai/python',
        args: []
    };

    PythonShell.run('model.py', options, function (err, result) {
        if (err) throw err;
        console.log(result.toString());
        res.sendFile(IMAGES_PATH);
        //res.send(result.toString());
    });
>>>>>>> 1bb09d00b0893d45ecf80f6186664d6c565495a9
});

app.listen(PORT, () => {
    console.log('Running server on port %d...', PORT);
})