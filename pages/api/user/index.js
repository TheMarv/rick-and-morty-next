import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch {
        res
          .status(400)
          .json({ success: false, message: 'Error requesting data.' });
      }
      break;
    case 'POST':
      try {
        console.log(req.body);
        const newUser = await User.create(req.body);
        res.status(201).json({ success: true, data: newUser });
      } catch {
        res
          .status(400)
          .json({ success: false, message: 'Error requesting data.' });
      }
      break;
    default:
      res
        .status(403)
        .json({ success: false, message: 'Error: Method is not available.' });
  }
}
