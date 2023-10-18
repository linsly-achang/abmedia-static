document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.news-tab li').forEach(tab => tab.addEventListener('click', () => {
        if(!tab.classList.contains('active')){
            document.querySelectorAll('.news-tab li').forEach(ele => ele.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll(`.bitget-news`).forEach(ctn => ctn.classList.remove('active'));
            document.querySelector(`.bitget-news[data-tab="${tab.getAttribute('data-for')}"]`).classList.add('active');
        }
    }));
});