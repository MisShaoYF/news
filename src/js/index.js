import './imports';
import services from '../services/index'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import {NEWS_TYPE} from '../data/index';
// async function getNewsList(){
//     const data = await services.getNewsList('top',10);
//     console.log('data',data);
// }
// getNewsList();
;((doc)=>{
    const config = {
        type: 'top',
        count: 10,
    }

    const oApp = doc.querySelector('#app');
    function setType(type){
        console.log('setType');
    }
    function bindEvent(){
        NavBar.bindEvent(setType);
    }
    function init(){
        render();
        bindEvent();
    }
    function render(){
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻头条1',
            showLeftIcon: false,
            showRightIcon: true
        });
        const navBarTpl = NavBar.tpl(NEWS_TYPE);
        oApp.innerHTML+=headerTpl + navBarTpl;
    }
    init();
})(document);