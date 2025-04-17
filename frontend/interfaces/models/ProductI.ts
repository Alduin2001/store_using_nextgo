
export interface ProductModel{
    id:number,
    name:string,
    description:string
    price:number
    count:number
    category:{
        id:number
        name:string
    }
    images:{
        id:number
        image:string
    }[]

}