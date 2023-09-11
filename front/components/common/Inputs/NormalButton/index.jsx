import PropTypes from 'prop-types';

import BootstrapButton from 'react-bootstrap/Button';
/**
 * Button: The Common Re-usable Button across website.
 * @return {JSX.Element} The JSX Code for Button
 */

export function NormalButton({ children, innerRef, className, ...restProps }) {
  return (
    <BootstrapButton className={`${className}`} {...restProps} ref={innerRef}>
      {children}
    </BootstrapButton>
  );
}

NormalButton.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  className: PropTypes.string,
};

NormalButton.defaultProps = {
  children: 'Submit',
  variant: 'primary',
  className: '',
};
