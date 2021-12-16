import { useEffect, useState } from "react";
import helloService from "../services/helloService.js"

const Hello = () => {

    const [hello, setHello] = useState("tok tok walang api")

    useEffect(() => {
        helloService.getHello()
        .then(
        response => {
            setHello(response.data);
        }
        )
        .catch(
            err => {console.log("tok tok may mali")}
        )
    })

    return hello;
}

export default Hello;