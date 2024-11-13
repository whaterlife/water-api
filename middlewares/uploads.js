import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({ dest: 'upload/' });

export const plumberIconUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/water-api/plumber/*'
    }),
    preservePath: true
});


export const reportPhotoUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/water-api/report/*'
    }),
    preservePath: true
});



export const leakformPhotoUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/water-api/leakform/*'
    }),
    preservePath: true
});
