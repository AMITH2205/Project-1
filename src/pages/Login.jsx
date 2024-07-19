// FirebaseUI
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// React stuff
import { useEffect } from 'react';

// Auth service
import auth from '../firebase/auth';

export default () => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) { 
                  return true;
                },
                uiShown: function() {
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInFlow: 'popup',
            signInSuccessUrl: '/home',
            signInOptions: [ 
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: false
                    }
                },
                {
                  provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                  requireDisplayName: true,
                  disableSignUp: {
                      status: false
                  }
              }
            ]
        });
    }, []);

    return (
        <>
          <div className="container-fluid d-flex flex-column min-vh-100">
            <div className="row flex-grow-1">
              <div className="col-sm-8 col-md-6 col-lg-4 text-center m-auto">
                <h2><b>Sports Edge</b></h2>
                <p>Building a Better Badminton Community</p>
                <div className="card p-5 m-2 border-0 shadow">
                  <b>Get Started with your Badminton Journey now!</b>
                  <div id="firebaseui-auth-container"></div>
                  <div id="loader" className="text-center">Loading form</div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}