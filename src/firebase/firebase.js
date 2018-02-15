import * as firebase from 'firebase';
import moment from 'moment';


//CONFIG HERE



//
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };