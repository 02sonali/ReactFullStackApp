import axios from 'axios';
class ImageService {

    async getImages() {
        const imageUrl = `src/mock-api/ImageList.json`;
        return fetch(imageUrl, 
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => {
            return response.json();
        });
    }

    async addImage(reqObj) {
        axios.post('/image/add', {image:reqObj})
            .then(response => response.json())
            .then(data => console.log(data));
    }
}

export default ImageService;