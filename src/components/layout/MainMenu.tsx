"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getServicesByType } from "@/util/api";
import { Service } from "@/types/service";

export default function MainMenu() {
    const [insuranceCategories, setInsuranceCategories] = useState<{[key: string]: Service[]}>({});
    const [taxCategories, setTaxCategories] = useState<{[key: string]: Service[]}>({});
    const [otherCategories, setOtherCategories] = useState<{[key: string]: Service[]}>({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Fetch Insurance categories
                const insuranceResponse = await getServicesByType("insurance");
                if (insuranceResponse.success && insuranceResponse.data?.services_by_category) {
                    setInsuranceCategories(insuranceResponse.data.services_by_category);
                }

                // Fetch Tax categories
                const taxResponse = await getServicesByType("tax");
                if (taxResponse.success && taxResponse.data?.services_by_category) {
                    setTaxCategories(taxResponse.data.services_by_category);
                }

                // Fetch Other categories
                const otherResponse = await getServicesByType("other");
                if (otherResponse.success && otherResponse.data?.services_by_category) {
                    setOtherCategories(otherResponse.data.services_by_category);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link" href="/">
                    Home
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="/about">
                    About
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/portfolio-details">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="/insurance" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insurance
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/insurance">
                            All Insurance
                        </Link>
                    </li>
                    {Object.keys(insuranceCategories).map((categoryName, index) => (
                        <li key={categoryName} className="dropdown submenu menu-item-has-children">
                            <Link className="dropdown-item text-capitalize" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {String(index + 1).padStart(2, '0')}. {categoryName}
                            </Link>
                            <ul className="dropdown-menu">
                                {insuranceCategories[categoryName]?.map((service) => (
                                    <li key={service.id}>
                                        <Link className="dropdown-item" href={`/service-details/${service.id}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="/tax" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tax
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/tax">
                            All Tax Services
                        </Link>
                    </li>
                    {Object.keys(taxCategories).map((categoryName, index) => (
                        <li key={categoryName} className="dropdown submenu menu-item-has-children">
                            <Link className="dropdown-item text-capitalize" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {String(index + 1).padStart(2, '0')}. {categoryName}
                            </Link>
                            <ul className="dropdown-menu">
                                {taxCategories[categoryName]?.map((service) => (
                                    <li key={service.id}>
                                        <Link className="dropdown-item" href={`/service-details/${service.id}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link" href="/other" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/other">
                            All services
                        </Link>
                    </li>
                    {Object.keys(otherCategories).map((categoryName, index) => (
                        <li key={categoryName} className="dropdown submenu menu-item-has-children">
                            <Link className="dropdown-item text-capitalize" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {String(index + 1).padStart(2, '0')}. {categoryName}
                            </Link>
                            <ul className="dropdown-menu ">
                                {otherCategories[categoryName]?.map((service) => (
                                    <li key={service.id}>
                                        <Link className="dropdown-item text-capitalize" href={`/service-details/${service.id}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
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
