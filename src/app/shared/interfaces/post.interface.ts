export interface IPost extends IPostRequest{
    id:number
}

export interface IPostRequest {
    img: string
    title:string,
    message:string,
    posterBy:string,
}
