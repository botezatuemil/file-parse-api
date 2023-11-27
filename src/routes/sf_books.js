export const getSFBooks = (req, res) => {
    console.log("Fetching schema for SF books")
    try {
        const obj = {
            content: "SF boooks",
            categories: "SF"
        }
        return res.send(obj);
    } catch (error) {
        console.log(error)
    }
}