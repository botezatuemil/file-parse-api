import { parseFile } from "../utils/readFile.js";

export const getNONSFBooks = async(req, res) => {
    try {
        console.log("Fetching schema for NON SF books")
        const obj = await parseFile("../books/non_sf_books.json")
        return res.send(obj);
    } catch (error) {
        console.log(error)
    }
}