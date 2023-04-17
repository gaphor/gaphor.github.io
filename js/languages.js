
const chooser = document.getElementById('language-chooser-select');
let activeLang = 'en';
for (let i = 0; i < chooser.children.length; i++) {
    if (chooser.children[i].selected) {
        activeLang = chooser.children[i].value;
    }
}

chooser.onchange = function() {
    const lang = this.value;
    let pageUrl = document.location.pathname;

    if (new RegExp('^/' + activeLang + '/').test(pageUrl)) {
        pageUrl = pageUrl.substring(activeLang.length + 1);
    }

    document.location = '' + '/' + lang + pageUrl;
}
