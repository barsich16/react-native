export const getLatestNews = async () => {
    const request = await fetch('http://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0');
    return await request.json();
}