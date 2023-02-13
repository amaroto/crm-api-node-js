import { connect, set } from "mongoose";

const DB_URI = `${process.env.DB_URI_MONGO}`

set('strictQuery', false);

const dbInit = async () => {
    await connect(DB_URI)
}

export default dbInit