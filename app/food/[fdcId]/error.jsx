"use client";

import { useRouter } from "next/navigation";

export default function Error({ error }) {
    const router = useRouter();
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
                Something went wrong
            </h1>

            <p className="mt-3 max-w-md text-slate-600">
                {error.message || "We couldn't load this food right now."}
            </p>

            <button
                onClick={() => router.back()}
                className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
            >
                Go Back
            </button>
        </div>
    );
}