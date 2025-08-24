import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { getRouteAbout, getRouteCowerLetter } from '@/shared/const/router';

const MainPage = () => {
    const { t } = useTranslation();
    return (
       <Page data-testid="MainPage">
         <div style={{display:'flex',flexDirection:'column', gap:10}}>
          <h1>{t('Главная страница')}</h1>
            <p>{t('This website is designed and modyfied to show technologies and approaches i know and do to write clean, welltested and readable code')}</p>
            <p>{t('Please Log In to see secured Routes')} <p style={{fontWeight:'bold'}}>{t('name:admin password:123')}</p></p>
            <p>{t('I did basic database to store articles, user info/settings, comments')}</p>
            <p>{t('I use lazy loading and asynk reducers for brilliant optimization')}</p>
            <p>{t('You can check my CV on')} <Link to={getRouteAbout()}>{t('About Page')}</Link></p>
            <p>{t('Check My cower letter on')} <Link to={getRouteCowerLetter()}>{t('Cover Letter')}</Link> {t('page')}</p>
         </div>
        </Page>
    );
};

export default MainPage;
