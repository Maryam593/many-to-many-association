//hard code 
const userData = [{
    name : "maryam",
    userProfile : "Maryam593"
}]
const userController = {

    getAll: (req,res)=>{
        try {
            res.status(200).json({message: "Got All", data: userData})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    },
    getSingle: (req,res)=>{
        try {
            const id = req.params.id;
            const getSingle = userData.find((t) => t.id == id);
            if(!getSingle){
                console.log(userData);
                return res.status(404).json({message: "Not found"})
            }
            res.status(200).json({message: "Got single", data: userData })
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    },

}

export default userController;