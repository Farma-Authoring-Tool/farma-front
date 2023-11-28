'use client';
export default function ErrorUnauthorized() {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center ml-200">
                <h1 className="mb-4 text-6xl font-semibold text-farma">401</h1>
                <p className="mb-4 text-lg text-gray-600">Oops! Página não autorizada.</p>
                <div className="animate-bounce">
                    <svg className="mx-auto h-16 w-16 text-farma" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <p className="mt-4 text-gray-600">Volte para o <a href="/login" className="text-blue-500">login</a>.</p>
            </div>
        </div>
    );
}
