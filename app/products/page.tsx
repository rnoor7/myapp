import Link from "next/link"
import Nav from "../../component/nav"

Nav
export default function Products() {
    return (
        <div>
            <Nav/>
            <h3>products page</h3>
            <Link href="/products/pr1">product1</Link>
        </div>
    )
}