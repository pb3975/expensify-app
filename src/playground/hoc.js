// HOC Higher Order Component (HOC) a Component that rendeers one or more other component(s)
// Re-use code
// Render hijacking
// Prop Manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> The info is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p> This is Private Info Please Do Not Share</p> }
      <WrappedComponent {...props}/>    
    </div>
  );  
};



const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
      <WrappedComponent {...props} /> 
      ) : (
        <p> The User has not been authenticated. Please Login to continue.</p>
       )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are no details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are no details" />, document.getElementById('app'));