import shuffleArray from "./random";

let images = [];

export function saveItems(items) {
    console.log(items);
    Object.values(items).forEach((item, index) => {
        console.log(item);
        localStorage.setItem(index, item);
        images.push(item);
    });
}


export function getImages(number) {
    console.log(number);
    console.log(images);
    let newImages = images.slice(number);
    console.log(images);

    return shuffleArray(images).slice(0, number);
}

export function clear() {
    localStorage.clear();
}