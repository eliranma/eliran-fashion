import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions';
import  {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import Checkout from './pages/checkout/checkout.component';


class App extends React.Component {
  unsubscribeFromAuth = null;


  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if  (userAuth)  {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
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
    <div className="App">
      <Header />
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/checkout' component={Checkout} />
      <Route  exact path='/sign-in-up'
              render={()=>this.props.currentUser ?
              (<Redirect to='/' />):
              (<SignInUpPage />) } />
      </Switch>
    </div>
  );}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

});
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
