import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ NOW IT WORKS

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      if (user) {
         // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
         //we will dispatch the action of add user means we will add all these things to our store .
        dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

  }, []);

  return <Outlet />; // renders SignIn / Browse
};

export default Body;
