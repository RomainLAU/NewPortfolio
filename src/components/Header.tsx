import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [pages, setPages] = useState([
        {url: "/", name: "Romain Laurent"}
    ])

    return (
        <div>
            {pages.map(page => (
                <NavLink to={page.url}>
                    {page.name}
                </NavLink>
            ))}
        </div>
    )
}