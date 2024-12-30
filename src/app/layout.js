
    import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
           </head>
            <body className='body'>
                {children}
                <ToastContainer />
            </body>

        </html>
    );
}
