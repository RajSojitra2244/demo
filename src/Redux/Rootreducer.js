import {combineReducers} from 'redux'
import {Countryreducer, SignUPreducer, Statereducer,Loginreducer,PublicBlogReducer} from './Reducer'
import{ContactUsReducer}from './ContactUs/ContactUsReducer'
import {ForgotPasswordReducer}from './ForgotPassword/ForgotPasswordReducer'
import {CreateBlogReducer} from './Private/CraeteBlog/CreateBlogReducer'
import {PrivateBlogReducer}from './Private/CraeteBlog/GetBlogById/ShowBlogReducer'
import {DeleteBlogReducer}from './Private/CraeteBlog/DeleteBlog/DeleteBlogReducer'
import{PublicBlogreducer}from './Blog/BlogReducer'
import {ChangePasswordReducer} from './Private/CraeteBlog/ResetPassword/ResetPasswordReducer'
import {CommentReducer} from './Private/CraeteBlog/Comment/CommentReducer'
import {LikeReducer} from './Private/CraeteBlog/Like/LikeReducer'
import{DisLikeReducer}from './Private/CraeteBlog/DisLike/Dislikereducer'
import{UpdateProfileReducer}from './Private/CraeteBlog/Update/UpdateProfileReducer'
const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer,
   signup:SignUPreducer,
   login:Loginreducer,
   PublicBlogData:PublicBlogreducer,
   contactus:ContactUsReducer,
   forgotpassword:ForgotPasswordReducer,
   createblog:CreateBlogReducer,
   privateblog:PrivateBlogReducer,
   deletebolg:DeleteBlogReducer,
   changepassword:ChangePasswordReducer,
   comment:CommentReducer,
   like:LikeReducer,
   dislike:DisLikeReducer,
   updateprofile:UpdateProfileReducer
})


export default rootreducer
