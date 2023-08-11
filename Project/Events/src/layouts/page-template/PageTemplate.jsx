import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default PageTemplate;
