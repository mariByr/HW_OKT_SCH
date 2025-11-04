
btn.addEventListener('click', () => {
    const url = new URL('user-details.html', window.location.origin);
    url.searchParams.set('id', user.id);
    window.location.href = url.href;
});

//друга сторінка ?
