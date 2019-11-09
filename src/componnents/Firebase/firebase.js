import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBkClTwRs2eMHXxkNg_2OmRQVzZa9lvMkU",
    authDomain: "graduationwork-61e09.firebaseapp.com",
    databaseURL: "https://graduationwork-61e09.firebaseio.com",
    projectId: "graduationwork-61e09",
    storageBucket: "graduationwork-61e09.appspot.com",
    messagingSenderId: "166660273840",
    appId: "1:166660273840:web:734802bae031e57fed2d75",
};


class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;