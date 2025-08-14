import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Link } from 'react-router-dom';
import { getRouteAbout, getRouteCowerLetter } from '@/shared/const/router';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page data-testid="MainPage">
         <div style={{display:'flex',flexDirection:'column', gap:10}}>
          <h1>  {t('Главная страница')}</h1>
            <p>This website is designed and modyfied to show technologies and approaches i know and do to write clean, welltested and readable code</p>
            <p>Please Log In to see secured Routes <p style={{fontWeight:'bold'}}>name:admin password:123</p>  </p>
            <p>I did basic database to store articles, user info/settings, comments </p>
            <p>I use lazy loading and asynk reducers for brilliant optimization </p>
            <p>You can check my CV on <Link to={getRouteAbout()}>About Page</Link> </p>
            <p>Check My cower letter on <Link to={getRouteCowerLetter()}>Cover Letter</Link>  page</p>
            </div>
        </Page>
    );
};

export default MainPage;
