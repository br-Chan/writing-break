const readerBarBg = document.createElement('div');
readerBarBg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #dddddd;
    z-index: 9998;
`;
document.body.appendChild(readerBarBg)

const readerBar = document.createElement('div');
readerBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: #39e233;
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(readerBar);

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const scrollPercentage = Math.min(100, (scrollTop / scrollableHeight) * 100);
    
    readerBar.style.width = scrollPercentage + '%';
});