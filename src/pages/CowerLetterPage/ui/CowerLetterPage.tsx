import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const CowerLetterPage = () => {
    const { t } = useTranslation();
    return <Page data-testid="CowerLetterPage">{t('Сопроводительное письмо')}</Page>;
};

export default CowerLetterPage;
