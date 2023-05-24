function getcolor(imageElem,ratio) {
    const convas = document.createElement('convas');

    let width = convas.width = imageEle.width;
    let height = convas.height = imageElem.height;

    const context = convas.getContext('2d');
    context.drawImage(imageElem,0,0);

    let date, length;
    let i = -4, count = 0

    try{
        data = context.getImageData(0,0,width,height)
        length = data.data.length
    } catch (err) {
        console.error(err)
        return{
            R:0,
            G:0,
            B:0
        }
    }
    let R,G,B
    R = G = B = 0

    while((i += ratio*4) < length) { 
        ++count

        R += data.data[i]
        G += data.data[i + 1]
        B += data.data[i + 2]
    }   
    R = ~~(R/count)
    G = ~~(G/count)
    B = ~~(B/count)
    
    return{
        R,
        G,
        B
    }
    const image = document.querySelector('img')
    image.onload = () {
        const {R, G, B} = getAverageColor(image, 4)

        document.body.style.background = 'rgb(${R}, ${g}, ${B})'
    }
}