import Link  from "next/link"


const Nav=()=>{
    return(
        <div>
            <ul>
                <li><Link href="/home">home</Link></li>
                <li><Link href="/products">products</Link></li>
                <li>about</li>
            </ul>
        </div>
    )
}
export default Nav