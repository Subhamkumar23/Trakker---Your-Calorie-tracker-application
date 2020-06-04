import React, { createContext, useState } from 'react';
import Firebase from '../config/Firebase'

export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isVerified, setIsVerified ] = useState(false);

    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          isVerified,
          login: async (email, password, msg) => {
            try {
              await Firebase.auth().signInWithEmailAndPassword(email, password)
              .then(userData => {
                if(userData.user.emailVerified) {
                  console.log('Email Verified')
                  setUser(userData.user)
                  setIsVerified(true);
                } else {
                  alert('Please verify your email by clicking the link sent on registered email')
                }
              });
              // console.log("Success")
            } catch (e) {
                msg = e.message
                alert(msg);
                // console.log(msg);
            }
          },
          register: async (email, password) => {
            try {
              await Firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(userData => userData.user.sendEmailVerification()
              .then(function() {
                alert('Verification Email sent');
                // if(user.emailVerified)
                //   setIsVerified(true);
              }));
            } catch (e) {
              // console.log(e.message);
              alert(e.message);
            }
          },
          logout: async () => {
            try {
              await Firebase.auth().signOut();
              setIsVerified(false);
            } catch (e) {
              console.error(e);
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
