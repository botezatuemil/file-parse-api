import { parseFile } from "../utils/readFile.js";

export const getSFBooks = async(req, res) => {
    console.log("Fetching schema for SF books")
    try {
        const obj = await parseFile("../books/sf_books.json")
        console.log(obj)
        return res.send(obj);
    } catch (error) {
        console.log(error)
    }
}