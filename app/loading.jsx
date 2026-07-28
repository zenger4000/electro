export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-slate-500">
                    Electroloading
                </span>

                <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                </div>
            </div>
        </div>
    );
}