import Axios from 'axios'
// import UseAppContext from './UseAppContext'

function UrlCall() {

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

    const setTopicData = (topic) => {
        if (!topic)
            return false;

        return new Promise((resolve, reject) => {
            url = BASE_URL.replace('$topic', topic);
            Axios.get(url).then((promise) => {
                resolve(promise.data);
                // setData(promise.data);
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
        setTopicData
    }
}

export default UrlCall;