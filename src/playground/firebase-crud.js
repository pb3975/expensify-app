// Child Removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // Child Changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // Child Added - fires Once for all current data
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  
  
  
  //COnvert Fire base DB into an Array
  // database.ref('expenses')
  // .once('value').
  // then((snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   });
  //   console.log(expenses);
  // });
  
  
  // Convert Firebase Data to an array and subscribe to it
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   });
  //   console.log(expenses);
  // });
  
  
  
  // database.ref('expenses').on('value',(snapshot) => {
  //   console.log(snapshot.val());
  // });
  
  database.ref('expenses').push({
    description: '1st TEST',
    note: 'YOOOHOOOO',
    amount: '100',
    createdAt: 88
  });
  
  
  
  
  
  
  // database.ref('notes/-L5MXfiuJnOHcUoU0X2u').remove();
  
  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'A bunch of topics'
  // });
  
  
  //Fetching Data with Once - ONLY ONCE
  // database.ref('location')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   }).catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
  
  
  //Setting up a Subscription
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error With Data Fetching', e);
  // });
  
  
  // setTimeout(() => {
  //   database.ref('age').set(29);  
  // }, 3500);
  
  // setTimeout(() => {
  //   database.ref().off(onValueChange);  
  // }, 7000);
  
  // setTimeout(() => {
  //   database.ref('age').set(99);  
  // }, 10500);
  
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
  //   }, (e) => {
  //   console.log('Error With Data Fetching', e);
  // });
  
  // setTimeout(() => {
  //   database.ref('job/title').set('Scrub');  
  // }, 3500);
  
  // setTimeout(() => {
  //   database.ref('job/company').set('Freedom Partners');  
  // }, 5000);
  
  
  
  
  // database.ref().set({
  //     name: 'Chuck Polaris', 
  //     age: 26, 
  //     stressLevel: 6,
  //     job: {
  //       title: 'Software Developer',
  //       company: 'Google'
  //     },
  //     location: {
  //     city: 'DC', 
  //     country: 'USA'
  //     }
  // }).then(() => {
  //     console.log('Data is saved');
  // }).catch((e) => {
  //     console.log('this failed.', e);
  // });
  
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  
  // database.ref('isSingle').set(null);
  
  // database.ref('isSingle')
  //   .remove()
  //   .then(() => {
  //     console.log('removed');
  //   }).catch((e) => {
  //     console.log('there was an error');
  //   });
  