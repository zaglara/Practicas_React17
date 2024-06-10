/*const getImagePromesa = () => {
    const promesa = new Promise( (resolve, reject) => {
        resolve ('https://kdwjsbvndw.com')
    })

    return promesa
}*/
/*const getImagePromesa = () => {
    return new Promise( (resolve, reject) =>
        resolve ('https://kdwjsbvndw.com')
    )

}*/
//const getImagePromesa = () => new Promise( (resolve) => resolve ('https://kdwjsbvndw.com') )
//getImagePromesa().then(console.log)

/*const getImage = async() => {
    return 'https://kdwjsbvndw.com';
}

getImage().then(console.log)*/

const getImagen = async() => {

    try{
        const apiKey = 'MHShMKB9uJDhY7d7bEIteJV8TV71OF8S';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(error){
        console.error(error);
    }

    
}

getImagen();