import {FormattedMessage , useIntl} from 'react-intl'
// import en_US from './en-US';
// import zh_CN from './zh-CN';

// export const localeConfig = {
//   zh_CN: zh_CN,
//   en_US: en_US,
// };

const LocaleFormatter = ({ ...props }) => {
  const notChildProps = { ...props, children: undefined };
  return <FormattedMessage {...notChildProps} id={props.id} />;
};

const useLocale = () => {
  const { formatMessage: _formatMessage, ...rest } = useIntl();
  const formatMessage = (descriptor) => _formatMessage(descriptor);

  return {
    ...rest,
    formatMessage,
  };
};

export { LocaleFormatter, useLocale };
