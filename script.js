fetch("https://i3s6iw.podcaster.de/eisinnig.rss")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });