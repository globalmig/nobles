import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquires from '@/models/Inquires';

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;

        const category = searchParams.get('category');
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const skip = (page - 1) * limit;

        const filter = category ? { category } : {};

        const [data, totalCount] = await Promise.all([
            Inquires.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
            Inquires.countDocuments(filter),
        ]);

        return NextResponse.json({ data, totalCount });
    } catch (error) {
        console.error('GET /api/inquire error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const { name, gender, year, phoneFront, phoneMiddle, phoneLast, category } = body;

        if (!name || !phoneFront || !phoneMiddle || !phoneLast || !category) {
            return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
        }

        const inquiry = new Inquires({
            name,
            gender,
            year,
            phoneFront,
            phoneMiddle,
            phoneLast,
            category,
        });

        await inquiry.save();
        return NextResponse.json({ data: inquiry });
    } catch (error) {
        console.error("API Error: ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
