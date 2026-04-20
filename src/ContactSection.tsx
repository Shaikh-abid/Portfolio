
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactSection() {
    useEffect(() => {
        // This initializes the Cal API so it loads smoothly
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <section className="w-full max-w-4xl mx-auto pt-2 px-4">
            {/* The Cal.com Embed */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                <Cal
                    calLink="https://cal.com/abid-shaikh-9eap9r/30min" /* ⚠️ REPLACE THIS WITH YOUR ACTUAL LINK */
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ layout: "month_view" }}
                />
            </div>
        </section>
    );
}