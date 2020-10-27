import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component }  from 'react';
import axios from 'axios';

const api=axios.create({
    baseURL:"http://localhost:8080"
})

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 handleClick(event){
    var self = this;
    var apiBaseUrl="http://localhost:8080/";
    var payload={
      "email":this.state.username,
        "password":this.state.password
    }
    console.log("inside click",this.state.username);
    // axios({
    //       method: 'post',
    //       url: "http://localhost:8080/api/login",
    //       data: payload,
    //       withCredentials: true,
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //         'Accept': 'application/json',
    //       }
    //     }).then(function(response){
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //           console.log(error);
    //     })

  var request = new Request("http://localhost:8080/api/login", {
  method: 'POST',
  headers: new Headers({'Content-Type': 'application/json'}),
  body: JSON.stringify(payload)
});
  fetch(request)
  .then(function(response){
    response.json()
      .catch(function(data){
        console.log(data)
      })
  })

        // (async () => {
        //     const rawResponse = await fetch('api/login', {
        //       method: 'POST',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({a: 1, b: 'Textual content'})
        //     }).then(function(response){

        //     }).then(function(error){
        //         console.log(error);
        //     })
        //     // const content = await rawResponse.json();
          
        //     // console.log(content);
        //   })();

    // api.post('/api/login')
    // .then(function(response){
    // })
    // .catch(function(error){
    // console.log(error);
    // })

    //     axios.post(apiBaseUrl+'api/login', payload)
    //     .then(function (response) {
    //     })
    //     .catch(function(error){
    //     console.log(error.response);
    //     })

    // axios.post('http://localhost:8090/api/login',payload)
    //   .then(function (response) {
    //     console.log(response);
    //   },headers:{
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;