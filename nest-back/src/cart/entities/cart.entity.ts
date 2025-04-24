import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type CartDocument = HydratedDocument<Cart>

@Schema({
    collection:'cart'
})
export class Cart {
    @Prop({unique:true,type:Number})
    userId:number
    @Prop({index:true,type:[{productId:{type:Number,required:true},count:{type:Number,required:true}}],default:[]})
    items:Array<{
        productId:number,
        count:number
    }>
}

export const CartSchema = SchemaFactory.createForClass(Cart);


