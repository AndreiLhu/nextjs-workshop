import database from "/database.json";

export default function HandlerUser(req, res) {
  const id = req.query.id;
  const [user] = database.filter((obj) => obj.user_id === Number(id));
  res.status(200).json(user.posts);
}
