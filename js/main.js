const ul = $(`.aside ul`);

const main = $(`.main`);


videos.forEach ( (video, index) => {
    const li = $(`<li class=li${index}J>
                    <a href=https://www.youtube.com/embed/${video.id} target=iframe>
                        <img src=${video.thumbnail}>
                        <p>${video.title}</p>
                    </a>
                </li>`);
    ul.append(li);
});
