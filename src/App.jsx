import ServerComponent from "./components/serverCoponent";
import ClientComponent from "./components/clientComponent";

export default function App() {
    return (
        <div>
            <h1>React Server Components Demo</h1>
            {/* Server Component */}
            <ServerComponent />
            {/* Client Component */}
            <ClientComponent />
        </div>
    );
}