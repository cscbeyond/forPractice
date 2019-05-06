import Axios from 'axios';
import myLoading from './Loading/Loading.js'
// let baseUrl = 'http://localhost:2010';
let baseUrl = '';
function $post(url, data) {
    return new Promise(function (resolve, reject) {
        // console.log(myLoading);
        // myLoading.show();
        Axios.post(baseUrl + url, data).then(res => {
            // if(myLoading){
            //     myLoading.hide();
            // }
            resolve(res);
        }).catch(err => {
            // if(myLoading){
            //     myLoading.hide();
            // }
            reject(err);
        })
    });
};
export default $post;