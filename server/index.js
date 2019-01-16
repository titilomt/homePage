const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // error first callback
    cb(null, `${__dirname}/public/files/`);
  },
  filename: (req, file, cb) => {
    // error first callback
    console.log(file)
    cb(null, `${file.originalname}`)
  }
});

const uploader = multer({ storage });

const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));

app.post('/upload', uploader.single('file'), 
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.post('/upload2', uploader.array(), (req, res, next) => {
  let uploadFile = req.files
  console.log(uploadFile);
  uploadFile.mv(
      `${__dirname}/public/files/${file.n}`,
      function (err) {
        if (err) {
          return res.status(500).send(err)
        }
  
        res.json({
          file: `public/${req.files.file.name}`,
        })
      },
    )
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});