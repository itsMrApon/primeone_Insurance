"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link" href="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/about">
                    About
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insurance
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/insurance">
                            All Insurance
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            01. Life Insurance
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            02. Home Insurance
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            03. Car Insurance
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/tax">
                    Tax
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/other">
                            All services
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            01. Morgage
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            02. Notary
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            03. Air Ticket
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    );
}
