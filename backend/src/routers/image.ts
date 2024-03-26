import { router, publicProcedure } from '../trpc.js';
import { z } from 'zod';
import cloudinary from 'cloudinary';



const uploadImage = async (image: string ) => {
  // Use the uploaded file's name as the asset's public ID and 
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    // Upload the image
    const result = await cloudinary.v2.uploader.upload(image, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

export const imageRouter = router({
  upload: publicProcedure
    .input(z.object({ link: z.string() }))
    .mutation(req => {
      const { link } = req.input;
      uploadImage(link);
    }),
});