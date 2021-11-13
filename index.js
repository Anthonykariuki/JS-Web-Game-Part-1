function newImage(imageSrc, imageLeft, imageBottom){
    let newImg = document.createElement('img')
    newImg.src = imageSrc
    newImg.style.position = 'fixed'
    newImg.style.left = imageLeft
    newImg.style.bottom = imageBottom
    document.body.append(newImg)
    return newImg;
}

function newItem(imageSrc, imageLeft, imageBottom){
    let newItem = newImage(imageSrc, imageLeft, imageBottom)
    
    newItem.addEventListener('dblclick', () => {newItem.remove()})
}

let greenCharacter = newImage('assets/green-character.gif', '100px', '100px');
let pineTree = newImage('assets/pine-tree.png', '450px', '200px');
let tree = newImage('assets/tree.png', '200px', '300px');
let pillar = newImage('assets/pillar.png', '350px', '100px');
let crate = newImage('assets/crate.png', '150px', '200px');
let well = newImage('assets/well.png', '500px', '425px');

let sword = newItem('assets/sword.png', '500px', '405px');
let shield = newItem('assets/sheild.png', '165px', '185px');
let staff = newItem('assets/staff.png', '600px', '100px');
