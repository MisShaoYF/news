function tplReplace (template, templateObject) {
    return template().replace(/\{\{(.*?)\}\}/g, (node, key) => {
        return templateObject[key.trim()];
    });
}
function scrollToTop(){
    setTimeOut(()=>{
        window.scrollTo(0,0)
    },0)
}
export {
    tplReplace,scrollToTop
}