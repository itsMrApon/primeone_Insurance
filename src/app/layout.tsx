import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/fonts/fontawesome/fontawesome.min.css";
import "/public/assets/fonts/fontawesome/solid.min.css";
import "/public/assets/fonts/fontawesome/regular.min.css";
import "/public/assets/css/main.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGroteskHead = Schibsted_Grotesk({
    weight: "700", // Only bold for headings
    subsets: ["latin"],
    variable: "--tc-heading-font-family",
    display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--tc-body-font-family",
    display: "swap",
});

export const metadata: Metadata = {
    title: "primeone - insurance & tax",
    description: "Primeonenyc - insurance, TLC, DMV, tax, airticket, mortgage, notary and consultancy services Agency.",
};

export default function RootLayout({
    children, 
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${schibstedGroteskHead.variable} ${schibstedGrotesk.variable}`}>{children}</body>
        </html>
    );
}
