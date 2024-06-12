import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

function HeaderAndFooterOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderAndFooterOnly;
