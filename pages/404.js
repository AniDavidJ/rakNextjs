import { Style } from "@material-ui/icons";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const NotFound = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    })
    return (
        <div className="not-found">
            <h6>Oops ...</h6>
            <h5>This page not found </h5>
            <Link href="/"><a>Go back to home page</a></Link>
        </div>
    )
}

export default NotFound
