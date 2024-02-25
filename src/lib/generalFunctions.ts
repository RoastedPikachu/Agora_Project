export const handleImageLoad = (event:any, imageReceiver: (imagePath: string) => void) => {
    imageReceiver(URL.createObjectURL(event.target.files[0]));
}