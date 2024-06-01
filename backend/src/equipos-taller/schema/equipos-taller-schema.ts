import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class EquiposTaller{
    @Prop({
        unique: true,
        trim: true,
        required: true
    })
    nombre: string;

    @Prop({
        required: true,
        trim: true,
    })
    noInventario: string;

    @Prop({
        required: true,
        trim: true,
    })
    estado: string;
}

export const EquiposTallerSchema = SchemaFactory.createForClass(EquiposTaller);