const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/uploads/portrait')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

router.post('/file',upload.array("files"),(req,res)=>{
    const files = req.files;
    if(Array.isArray(files) && files.length > 0){
        res.json(files)
    }else{
        throw new Error("File upload unsuccessfull");
    }
})



// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './assets/clients/' + req.header('handlingCompanyId') + '/company/' + req.header('companyId') + '/registration');
//     },
//
//     filename: function(req, file, cb) {
//         let extension;
//         if (file.mimetype == 'image/jpg') {
//             extension = '.jpg';
//         } else if (file.mimetype == 'image/jpeg') {
//             extension = '.jpeg';
//         } else if (file.mimetype == 'image/png') {
//             extension = '.png';
//         }
//         let fileName = new Date().toISOString().replace(/:/g, '-') + extension;
//         cb(null, fileName);
//     }
// });

// var storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './assets/uploads/portrait');
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname);
//     }
// });
//
// // var upload = multer({ storage : storage }).array('fileData',5);
// var upload = multer({storage,storage});

// router.post('/upload/photo',function(req,res){
//     upload(req,res,function(err) {
//         console.log(req.body);
//         console.log(req.files);
//         if(err) {
//             return res.end("Error uploading file.");
//         }
//         res.end("File is uploaded");
//     });
// });
//
// router.post('/upload/photo', upload.single('file'),(req,res,next)=> {
//     const file = req.body;
//     console.log(file)
//     if(!file){
//         const error = new Error('Please Upload File');
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send(file);
// })
//
// router.get('/getFiles',function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });
//

module.exports = router;
