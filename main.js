const api = "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";
const inp = document.getElementById ('inp');
const images = document.querySelector ('.images');

const getImage = async () => {
    // Make a Request To OpenAI API
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };
    
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    // Parse The Response As Json
    const data = await res.json();

    const listImages = data.data;
    images.innerHTML = '';
    listImages.map (photo => {
        const container = document.createElement ('div');
        images.append (container)
        const img = document.createElement ('img');
        container.append (img);
        img.src = photo.url
    })
}