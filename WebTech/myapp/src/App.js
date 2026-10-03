import logo from './logo.svg';
import './App.css';

// import FuncComp from './component/FuncComp';
// import ClassComp from './component/ClassComp';
// import MyDetails from './tasks/MyDetailsComp';
// import FriendsDetails from './tasks/FriendDetailsCOmp';
// import GreetingComp from './component/GreetingComp';
// import StateComp from './component/stateComp';
// import MyCounter from './tasks/MyConter';

import ParentComp from "./component/ParentComp";
import ConditionalRen from "./component/ConditionalRenComp";
import MyImages from './component/MyImagesCom';
import MyListComp from './component/MyListComp';
import ToggleImgCom from './component/ToggleImgCom';
import UserComp from './component/UserComp';
import ErrorBoundry from './component/ErrorBoundry';
import UseStateHookComp from './component/Hooks/UseStateHookComp';
import UseEffectHookComp from './component/Hooks/UseEffectHookComp';
import MyFormComp from './component/MyFormComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Welcome you all in react Session.</h1>
      {/* <FuncComp></FuncComp> */}
      {/* <FuncComp fname="Pranit" lname="Vane" pin={3245}/>
      <ClassComp pname="Laptop" price={70000} company="ASUS"></ClassComp>

      <MyDetails name="Pranit Vane" contact={9340540593} gender="Male" address="Pune" />
      <FriendsDetails name="Avi Lokhande" contact={9022337655} gender="Male" address="Pune" /> */}

      {/* <GreetingComp /> */}

      {/* <StateComp /> */}

      
      {/* <MyCounter /> */}

     {/* <ParentComp></ParentComp> */}
     
     {/* <ConditionalRen /> */}

     {/* <MyImages/> */}

     {/* <MyListComp/> */}

     {/* <ToggleImgCom /> */}
     {/* <UserComp user="Avinash" />
     <UserComp user="Pratik" />
     <UserComp user="Aditya" /> */}
     {/* <UserComp user="Pranit" /> */}

     {/* <ErrorBoundry >  <UserComp user="Avinash" /> </ErrorBoundry>
     <ErrorBoundry >   <UserComp user="Pratik" /> </ErrorBoundry>
     <ErrorBoundry >  <UserComp user="Pranit" /> </ErrorBoundry>
     <ErrorBoundry > <UserComp user="Aditya" /> </ErrorBoundry> */}

      {/* <UseStateHookComp /> */}
      {/* <UseEffectHookComp /> */}
      {/* <MyFormComp/> */}

      



    </div>
  );
}

export default App;
