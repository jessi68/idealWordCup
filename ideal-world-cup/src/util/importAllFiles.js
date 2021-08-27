export default function importAll(resources) {
    let images = {};
    resources.keys().map((item) => { 
        images[item.replace('./', '')] = resources(item).default; 
    });
    return images;
}
