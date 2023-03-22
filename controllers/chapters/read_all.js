const controller = {
    read_all: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Deberian verse todos los caps"
        })
    }
}
export default controller