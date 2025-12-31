import './globals.css';
import Providers from './providers';



export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <div className="app-container">

                {children}
            </div>
        </Providers>
        </body>
        </html>
    );
}
