import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

const legacyPrefixes = ['/', '/register', '/login']
export async function middleware(request) {
    const aToken = request.cookies.get('aToken');
    const { pathname } = request.nextUrl
    if (aToken === undefined){
        if (!(pathname === '/login' || pathname === '/register' || pathname === '/'))
            return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
        const {payload} = await jwtVerify(aToken.value, new TextEncoder().encode(process.env.SECRET));
        console.log(payload);
        if (pathname === '/login' || pathname === '/register' || pathname === '/'){
                return NextResponse.redirect(new URL('/home', request.url));
        }
        NextResponse.next();
    } catch (e) {
        console.error(e);
        const {pathname} = request.nextUrl
        if (pathname === '/login' || pathname === '/register' || pathname === '/') {
            console.log('login')
        } else{
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}

export const config = {
    matcher: ['/home', '/crear', '/login','/register','/']
}