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
                    Services
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/services">
                            All Services
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
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            04. Business Insurance
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            05. Education Insurance
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            06. Emergency Insurance
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/portfolio">
                    Portfolio
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            News Details
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
