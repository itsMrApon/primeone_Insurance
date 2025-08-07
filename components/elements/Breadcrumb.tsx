import Link from "next/link";

export default function Breadcrumb({ page }: any) {
    return (
        <div className="d-flex align-items-center gap-2 d-inline-flex mt-3">
            <Link href="/">
                <span className="text-capitalize text-white fs-24 fw-regular">home</span>
            </Link>
            <i className="fa-solid fa-arrow-right-long text-primary fs-7"></i>
            <span>
                <span className="text-capitalize text-white fs-24 fw-regular">{page}</span>
            </span>
        </div>
    );
}
