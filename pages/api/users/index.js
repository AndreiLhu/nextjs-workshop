import database from "../../../database.json";

export default function HandlerUser(req, res) {
  res.status(200).json(database);
}
