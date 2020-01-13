import Axios from 'axios'
import UseBaseContext from './UseBaseContext'

function UrlCall() {

    const { getData, setData } = UseBaseContext();

    // const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US';
    // const HEADER_MENU = '&sort_by=$custom.desc&include_adult=false&include_video=false&page=1'

    const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/$topic/daily/2015100100/2015103100";
    let url = BASE_URL;

    function getCall(url) {
        return new Promise((resolve, reject) => {
            Axios.get(url).then((promise) => {
                resolve(promise.data);
            }, (e) => {
                console.warn(e);
            });
        })
    };

    const getTopicData = (topic) => {
        if (!topic)
            return false;

        return new Promise((resolve, reject) => {
            url = BASE_URL.replace('$topic', topic);
            Axios.get(url).then((promise) => {
                resolve(promise.data);
            });
        })
    }

    /* the first call which the system would do */
    function defaultCall() {
        return new Promise((resolve, reject) => {
            getCall(url).then((data) => {
                if (data && data.results) {
                    resolve(data.results);
                }
            });
        })
    }

    return {
        defaultCall,
        getTopicData
    }
}

export default UrlCall;