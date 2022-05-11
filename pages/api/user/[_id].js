import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'PUT':
      try {
        const { _id } = req.query;
        await User.updateOne({ _id }, { $set: req.body });
        res.status(200).json({ success: true });
      } catch {
        res
          .status(400)
          .json({ success: false, message: 'Error processing data.' });
      }
      break;
    case 'DELETE':
      try {
        const { _id } = req.query;
        await User.deleteOne({ _id });
        res.status(200).json({ success: true });
      } catch {
        res
          .status(400)
          .json({ success: false, message: 'Error processing data.' });
      }
      break;
    default:
      res
        .status(403)
        .json({ success: false, message: 'Error: Method not allowed.' });
      break;
  }
}
