import { useTranslation } from 'react-i18next'

const MyContainer = () => {
  const { t } = useTranslation()
  
  return (
    <div data-testid="pg-container" className="p-4">
      {t('frontPage')}
    </div>
  )
}

export default MyContainer
