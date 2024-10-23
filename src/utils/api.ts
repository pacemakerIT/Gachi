export async function fetchData() {
    const res = await fetch('http://127.0.0.1:8000/gachi/test-supabase/');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}