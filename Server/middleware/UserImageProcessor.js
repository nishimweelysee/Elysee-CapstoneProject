import sharp from 'sharp'

const ImageProcessor = async (req, res, next) => {
	if (req.file !== undefined) {
		try {
			const buffer = await sharp(req.file.buffer).jpeg().toBuffer()
			req.body.avatar = buffer
			next()
		} catch (e) {
			return res.status(400).send({
				message: e.message
			})
		}
	} else {
		next()
	}
}
export default ImageProcessor
