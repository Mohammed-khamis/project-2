const ul = $(`.aside ul`);

const videoTitle = $(`.main p`);

const iframe = $(`.main iframe`);

videoTitle.text(`${videos[0].title}`);

videos.forEach ((video, index) => {
    const li = $(`<li class=li${index}J>
                    <a href=https://www.youtube.com/embed/${video.id} target=iframe>
                        <img src=${video.thumbnail}>
                        <p>${video.title}</p>
                    </a>
                </li>`);
    ul.append(li);
    li.click( () => {
        videoTitle.text(`${video.title}`);
    })
});

