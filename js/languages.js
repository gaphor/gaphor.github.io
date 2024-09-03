
const chooser = document.getElementById('language-chooser-select');
let activeLang = 'en';
for (let i = 0; i < chooser.children.length; i++) {
    if (chooser.children[i].selected) {
        activeLang = chooser.children[i].value;
    }
}

chooser.onchange = function() {
    let lang = this.value;
    let pageUrl = document.location.pathname;

    if (new RegExp('^/' + activeLang + '/').test(pageUrl)) {
        pageUrl = pageUrl.substring(activeLang.length + 1);
    }

    if (lang == 'en') {
        lang = '';
    } else {
        lang = '/' + encodeURIComponent(lang);
    }

    document.location = lang + pageUrl;
}
