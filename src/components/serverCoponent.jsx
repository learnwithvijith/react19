export default async function ServerComponent() {
    // Simulate fetching data on the server side
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => res.json())
        .catch((err) => {
            console.error('Error fetching data:', err);
            return { title: 'Failed to fetch data' };
        });

    return (
        <div>
            <h2>Server-Side Rendered Data:</h2>
            <p>{data.title}</p>
        </div>
    );
}
