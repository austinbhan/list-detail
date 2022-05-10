
export function renderVegetable(vegetable) {
    const div = document.createElement('div');
    div.setAttribute('id', vegetable.name);

    const img = document.createElement('img');
    img.src = `./assets/${vegetable.name}.jpg`;
    img.classList.add('size');

    const p = document.createElement('p');
    p.textContent = `Say hi to ${vegetable.name}. They're ${vegetable.color} and cost ${vegetable.price}.`;

    div.append(img, p);

    return div;
}
