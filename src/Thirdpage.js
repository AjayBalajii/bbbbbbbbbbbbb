import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Moa";
import Secondpage from "./Secondpage";
import Firstpage from "./Firstpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";



function Thirdpage() {

  
  const [geta,setgeta] = useState("");

  
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
            
     alert("completed");    

    //var getaaa=new web3.eth.Contract(abi,poda);
    
    //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});


      //var printgeta=await getaaa.methods.tokenURI(te).call();

      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Share</h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >

</form><br />
<p><b><h1>Pancake PRABH/BUSD</h1></b></p> 
<p>Deposit CAKE-LP PRABH/BUSD<br />
Earn eBNBshare</p>
<br />
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fourthpage");
                }}>
                Deposit
              </button>
<br></br>
<br></br>
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Moa");
                }}
              >
                Home Page
              </button>
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Firstpage");
                }}
              >
                Firstpage
              </button>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Secondpage");
                }}>
                Secondpage
              </button>
              

             
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fifthpage");
                }}
              >
                Fifthpage
              </button>





              <br></br>
<br></br>


              
</center>

<br></br>
<br></br>
                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/Firstpage">
              <Firstpage />
            </Route>

            <Route path="/Secondpage">
              <Secondpage />
            </Route>
            
            
            <Route path="/Fourthpage">
              <Fourthpage />
            </Route>
            <Route path="/Fifthpage">
              <Fifthpage />
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default Thirdpage;
