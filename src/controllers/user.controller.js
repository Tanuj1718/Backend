import {asyncHandler} from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) =>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: through username , email
    // check for images, check for avatar
    // upload them to cloudinary, check avatar
    // create user object - create entry in db
    // remove password and refresh tokenn field from response
    // check for user creation
    // if yes, return response, other send error

    const {fullName, email, username, password} = req.body
    console.log("email: ", email)
})

export {registerUser}