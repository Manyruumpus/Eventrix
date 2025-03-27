import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.mimetype.split('/')[1])
    }
  })
  
export const upload = multer({ storage: storage })

// const upload = multer({ 
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, path.join(process.cwd(), "public", "temp"));
//         },
//         filename: (req, file, cb) => {
//             const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
//             cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//         },
//     }),
//     fileFilter: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//             return cb(new Error("Only images are allowed"));
//         }
//         cb(null, true);
//     },
//     limits: { fileSize: 1024 * 1024 * 2 },
// });

// export { upload };
