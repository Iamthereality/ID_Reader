export default class ReaderAPI {
    static async sendImage(id, picture) {
        const payload = {
            picture: picture,
            id: id
        };
        const params = {
            method: 'POST',
            header: { 'Content-Type' : 'multipart/form-data' },
            body: JSON.stringify(payload)
        }
        const request  = await fetch('http://185.254.189.187', params);
        return await request.json();
    }
}