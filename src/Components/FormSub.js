import firestore from '@react-native-firebase/firestore';

const getTime = () => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    return hours + ':' + min + '-' + date + '/' + month + '/' + year
}
const addUser = async (uid, name, email) => {
    firestore()
        .collection('users')
        .doc(uid)
        .set({
            uid: uid,
            name: name,
            email: email,
            createAt: getTime()
        })
}
export { getTime, addUser }