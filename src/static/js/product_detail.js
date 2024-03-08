const more_posts = document.getElementById('more_posts');
const btn_show_posts = document.getElementById('btn_show_posts');
const btn_hide_posts = document.getElementById('btn_hide_posts');
btn_show_posts.addEventListener('click', () => {
    more_posts.classList.toggle('hidden');
    btn_show_posts.classList.toggle('hidden');
    btn_hide_posts.classList.toggle('hidden');
});
btn_hide_posts.addEventListener('click', () => {
    more_posts.classList.toggle('hidden');
    btn_show_posts.classList.toggle('hidden');
    btn_hide_posts.classList.toggle('hidden');
});