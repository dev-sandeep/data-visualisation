import Axios from 'axios'
<<<<<<< HEAD
// import UseAppContext from './UseAppContext'

function UrlCall() {

    const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/$topic/daily/2015100100/2015103100";
=======
import UseAppContext from './UseAppContext'

function UrlCall() {

    // const { setData } = UseAppContext();

    // const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US';
    // const HEADER_MENU = '&sort_by=$custom.desc&include_adult=false&include_video=false&page=1'

    // const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/$topic/daily/2015100100/2015103100";
    const BASE_URL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/Barack_Obama/monthly/2016010100/2016123100";
>>>>>>> initial plot
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

<<<<<<< HEAD
    const setTopicData = (topic) => {
=======
    const getTopicData = (topic) => {
>>>>>>> initial plot
        if (!topic)
            return false;

        return new Promise((resolve, reject) => {
<<<<<<< HEAD
            url = BASE_URL.replace('$topic', topic);
=======
            url = 'http://127.0.0.1:8081/wiki?topic=' + topic;
            Axios.get(url).then((promise) => {
                resolve(promise.data);
                // setData(promise.data);
            });
        })
    }

    const getGoogleTrendsCall = (topic) => {
        if (!topic)
            return false;

        return new Promise((resolve, reject) => {
            url = 'http://127.0.0.1:8081/trends?topic=' + topic;
            Axios.get(url).then((promise) => {
                resolve(promise.data);
                // setData(promise.data);
            });
        })
    }

    const getNews = (topic) => {
        return new Promise((resolve, reject) => {
            url = 'https://newsapi.org/v2/everything?q=' + topic + '&sortBy=publishedAt&apiKey=eaaf945f557e421e9f63d014dc10150a';
>>>>>>> initial plot
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
<<<<<<< HEAD
        setTopicData
=======
        getTopicData,
        getGoogleTrendsCall,
        getNews
>>>>>>> initial plot
    }
}

export default UrlCall;