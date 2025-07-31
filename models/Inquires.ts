import { Schema, Document, model, models } from 'mongoose';

export interface Inquires extends Document {
    name: string,
    gender?: string,
    year?: string,
    phoneFront: string,
    phoneMiddle: string,
    phoneLast: string,
    category: string,
    createdAt: Date;
}

const InquiresSchema = new Schema<Inquires>(
    {
        name: { type: String, required: true },
        gender: { type: String},
        year: { type: String},
        phoneFront: { type: String, required: true },
        phoneMiddle: { type: String, required: true },
        phoneLast: { type: String, required: true },
        category: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

const Inquires = models.Inquires || model<Inquires>('Inquires', InquiresSchema);
export default Inquires;