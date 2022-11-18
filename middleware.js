import {
    NextResponse
} from "next/server"
import axios from 'axios'

export default async function Middleware(req, res) {


    if (req.nextUrl.pathname.startsWith('/app')) {


    }
}