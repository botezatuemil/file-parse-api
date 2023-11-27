export const getNONSFBooks = (req, res) => {
    try {
        console.log("Fetching schema for NON SF books")
        return res.send(JSON.stringify("NONSF"));
    } catch (error) {
        console.log(error)
    }
}