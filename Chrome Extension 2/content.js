const replaceHTML = (siteName) => {
    return `<div><p class="word">WORK > ` + siteName + `</p></div>`;
}

const replaceCSS = () => {
    return `<style>.word {
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        color: #3b3b3b;
        margin-top: 300px;
      }</style>`;
}

if(window.location.hostname == "www.youtube.com"){
    document.body.innerHTML = replaceHTML("YouTube");
    document.head.innerHTML = replaceCSS();
}
else if(window.location.hostname == "www.netflix.com"){
    document.body.innerHTML = replaceHTML("Netflix");
    document.head.innerHTML = replaceCSS();
}
