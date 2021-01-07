import React, { lazy, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user/user.action';
import { selectCurrentUser } from './Redux/user/user.selector';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage =  lazy(() => import('./pages/shop/shoppage.components'));
const SignInAndSignUpPage =  lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage =  lazy(() => import('./pages/checkout/checkout.component'));


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <GlobalStyle />
        <Header/>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback = { <Spinner /> }>
                <Route exact path = '/' component = {HomePage} />
                <Route path = '/shop' component = {ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (
                <SignInAndSignUpPage />) } />
              </Suspense> 
          </ErrorBoundary>
          </Switch>
      </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



