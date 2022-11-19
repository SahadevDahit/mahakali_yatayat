import {
    NextResponse
} from "next/server"
import axios from 'axios'

export default async function Middleware(req, res) {


    if (req.nextUrl.pathname.startsWith('/app')) {
        if (req.cookies.get('token') !== undefined) {
            let tokens = req.cookies.get('token').value
            axios
                .get(`${process.env.NEXT_PUBLIC_URL}/user/verify`, {
                    headers: {
                        token: tokens
                    },
                })
                .then((response) => {
                    return NextResponse.next();
                })
                .catch((error) => {
                    return NextResponse.redirect(new URL('/', req.url))

                });
        } else {
            return NextResponse.redirect(new URL('/', req.url))
        }

    }
}