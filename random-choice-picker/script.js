const textarea = document.getElementById("choice");
const insert = document.getElementById("tags");
// textarea.value = "";
textarea.focus();

textarea.addEventListener("keyup", (event) => {
    createTags();
    if (event.key === "Enter") {
        selectRandom();
    }
});

createTags = () => {
    const choice_arr = textarea.value
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

    // console.log(choice_arr);
    tags = "";
    choice_arr.forEach((element) => {
        if (element != " ") tags += `<span class ='tag'>${element}</span>`;
    });
    insert.innerHTML = tags;
};

selectRandom = () => {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
};

pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
};

highlightTag = (tag) => {
    tag.classList.add("highlight");
};

unHighlightTag = (tag) => {
    tag.classList.remove("highlight");
};
