import prompt from "prompt";
prompt.start();

// Get two properties from the user: username and email
  //
  prompt.get(['username', 'password'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Enter your User Name:');
    console.log('  username: ' + result.username);
    console.log('Enter your password:');
    console.log('  Password: ' + result.password);
  });

