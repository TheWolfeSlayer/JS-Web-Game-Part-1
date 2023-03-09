
//Adds Image to website
function newImg (imageFile, leftLocation, bottomLocation) {
    let newImage = document.createElement('img')
    newImage.src = imageFile
    newImage.style.position = 'fixed'
    newImage.style.left = leftLocation
    newImage.style.bottom = bottomLocation
    document.body.append(newImage)
    return newImage
} 

//Adds Item to website
function newItem(itemFile, leftLocation, bottomLocation) {
    let newItm = newImg(itemFile, leftLocation, bottomLocation) ;
    //Lets the item be removable
    newItm.addEventListener('dblclick', function(){
        newItm.remove() ;
    })
    document.body.append(newItm)
}

//All Images
newImg('assets/green-character.gif', '100px', '100px')
newImg('assets/pine-tree.png', '450px', '200px')
newImg('assets/tree.png', '200px', '300px')
newImg('assets/pillar.png', '350px', '100px')
newImg('assets/crate.png', '150px', '200px')
newImg('assets/well.png', '500px', '425px')

//All Items
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
